"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Admincards() {
  const [data, setData] = useState([]);

  const [form, setForm] = useState({ id: null, title: "", content: "" });
  const [isEditing, setIsEditing] = useState(false);

  const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const Data = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/get`
        );
        const response = await Data.json();

        const posts = response.data.post;
        setData(posts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Handle form input changes
  const handleChange = (e: any) => {
    console.log("Form change:", e.target.name, e.target.value);
    // Update the form state with the new input value
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add or update
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { title, content } = form;

    console.log(`${apiUrl}/blog/create`);
    const response = await axios.post(
      `${apiUrl}/blog/create`,
      { title, content },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Response from server:", response.data);
    setForm({ id: null, title: "", content: "" });
  };

  // Edit button
  const handleEdit = async (item: any) => {
    const { title, content } = form;
    try {
      setForm(item);
      setIsEditing(true);
      await axios.put(
        `${apiUrl}/blog/update/${item.id}`,
        { title, content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.error("Error fetching blog for edit:", error);
    }
  };

  // Delete button
  const handleDelete = async (id: number) => {
    try {
      alert("Are sure to delete this blog?");
      await axios.delete(`${apiUrl}/blog/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(data.filter((item: any) => item.id !== id));
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">
        {isEditing ? "Edit Blog" : "Add Blog"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="content"
          placeholder="content"
          value={form.content}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {isEditing ? "Update" : "Add"}
        </button>
      </form>

      <h3 className="text-xl font-semibold mt-8 mb-4">Blogs List</h3>
      <ul className="space-y-3">
        {data.map((item: any) => (
          <li
            key={item.id}
            className="border p-3 rounded flex justify-between items-center"
          >
            <div>
              <div className="font-semibold">{item.title}</div>
              <div className="text-gray-500">{item.content}</div>
            </div>
            <div className="space-x-2 gap-3">
              <button
                onClick={() => handleEdit(item)}
                className="bg-yellow-400 text-white mt-3 px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
