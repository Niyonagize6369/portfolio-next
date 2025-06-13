"use client"; // if you're using App Router

import { useState } from "react";

export default function Admincards() {
  const [data, setData] = useState([
    { id: 1, title: "",description: "" },
    { id: 2, title: "", description: "" },
  ]);

  const [form, setForm] = useState({ id: null, title: "", description: "" });
  const [isEditing, setIsEditing] = useState(false);

  // Handle form input changes
  const handleChange = (e:any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add or update
  const handleSubmit = (e:any) => {
    e.preventDefault();

    if (isEditing) {
      // Edit existing item
      setData(
        data.map((item) =>
          item.id === form.id ? { ...item, title: form.title, description: form.description } : item
        )
      );
      setIsEditing(false);
    } else {
      // Add new item
      const newItem = {
        id: data.length > 0 ? data[data.length - 1].id + 1 : 1,
        title: form.title,
        description  : form.description,
      };
      setData([...data, newItem]);
    }

    setForm({ id: null, title: "",description: "" });
  };

  // Edit button
  const handleEdit = (item:any) => {
    setForm(item);
    setIsEditing(true);
  };

  // Delete button
  const handleDelete = (id:number) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">{isEditing ? "Edit Blog" : "Add Blog"}</h2>

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
          name="description"
          placeholder="description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {isEditing ? "Update" : "Add"}
        </button>
      </form>

      <h3 className="text-xl font-semibold mt-8 mb-4">Blogs List</h3>
      <ul className="space-y-3">
        {data.map((item) => (
          <li key={item.id} className="border p-3 rounded flex justify-between items-center">
            <div>
              <div className="font-semibold">{item.title}</div>
              <div className="text-gray-500">{item.description}</div>
            </div>
            <div className="space-x-2 gap-3">
              <button onClick={() => handleEdit(item)} className="bg-yellow-400 text-white mt-3 px-3 py-1 rounded">
                Edit
              </button>
              <button onClick={() => handleDelete(item.id)} className="bg-red-500 text-white px-3 py-1 rounded">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
