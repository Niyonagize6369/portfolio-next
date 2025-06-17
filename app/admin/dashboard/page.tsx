"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const api = process.env.NEXT_PUBLIC_BACKEND_URL;

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editId, setEditId] = useState<string | null>(null);
  const router = useRouter();

  const fetchData = async () => {
    const token = localStorage.getItem("token");
    const usersRes = await fetch(`${api}/admin/users`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const postsRes = await fetch(`${api}/admin/posts`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const usersData = await usersRes.json();
    const postsData = await postsRes.json();

    setUsers(usersData.data);
    setPosts(postsData.data);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return router.push("/login");
    fetchData();
  }, []);

  const handleCreateOrUpdate = async () => {
    const token = localStorage.getItem("token");
    const method = editId ? "PUT" : "POST";
    const url = editId ? `${api}/admin/posts/${editId}` : `${api}/admin/posts`;

    await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, content }),
    });
    setTitle("");
    setContent("");
    setEditId(null);
    fetchData();
  };

  const handleEdit = (post: any) => {
    setTitle(post.title);
    setContent(post.content);
    setEditId(post.id);
  };

  const handleDelete = async (id: string) => {
    const token = localStorage.getItem("token");
    await fetch(`${api}/admin/posts/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchData();
  };

  return (
    <div className="p-6 text-white bg-gray-800 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-2 gap-6 mb-10">
        <Card title="Total Users" count={users.length} />
        <Card title="Total Posts" count={posts.length} />
        <Card
          title="Total Comments"
          count={posts.reduce((acc, p) => acc + p.comments.length, 0)}
        />
        <Card
          title="Total Likes"
          count={posts.reduce((acc, p) => acc + p.likes, 0)}
        />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl mb-4">Create / Edit Blog</h2>
        <input
          className="w-full p-2 mb-2 text-black"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full p-2 mb-2 text-black"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleCreateOrUpdate}
        >
          {editId ? "Update Blog" : "Create Blog"}
        </button>
      </div>

      <div>
        <h2 className="text-2xl mb-4">All Blogs</h2>
        {posts.map((post: any) => (
          <div key={post.id} className="bg-gray-700 p-4 mb-4 rounded">
            <h3 className="text-xl font-bold">{post.title}</h3>
            <p>{post.content}</p>
            <div className="mt-2 flex gap-4">
              <button
                className="bg-yellow-500 px-2 py-1 rounded"
                onClick={() => handleEdit(post)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 px-2 py-1 rounded"
                onClick={() => handleDelete(post.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Card = ({ title, count }: { title: string; count: number }) => (
  <div className="bg-gray-700 p-6 rounded-xl shadow-md">
    <p className="text-lg">{title}</p>
    <p className="text-2xl font-bold">{count}</p>
  </div>
);

export default AdminDashboard;
