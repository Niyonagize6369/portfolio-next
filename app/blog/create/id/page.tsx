"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";

type PageProps = {
  params: { id: string };
};

const CreatePostPage: React.FC<PageProps> = ({ params }) => {
  const router = useRouter();
  const searchQuery = useSearchParams();
  const mode = searchQuery.get('mode');
  
  const [Editing, setEditing] = useState(mode === 'edit');
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [post, setPost] = useState<any>(null);

  const id = params.id;

  useEffect(() => {
    if (id) {
      fetchPost();
    }
  }, [id]);

  useEffect(() => {
    setEditing(mode === 'edit');
  }, [mode]);

  const fetchPost = async () => {
    const response = await axios.get(`http://localhost:5000/api/v1/blog/get/${id}`);
    setPost(response.data);
    setTitle(response.data.title);
    setContent(response.data.content);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.post(`http://localhost:5000/api/v1/blog/create/${id}`, { title, content });
    setEditing(false);
    fetchPost();
  };
router.push("/post");
  const handleDelete = async () => {
    await axios.delete(`http://localhost:5000/api/v1/blog/create/${id}`);
    router.push('/');
  };

  return (
    <div className="py-20">
      <h1 className="text-3xl text-center">{Editing ? 'Edit Post' : 'Read post'}</h1>
      {post ? (
        <div className="flex flex-col items-center">
          {Editing ? (
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mt-6 border p-6">
              <input
                type="text"
                placeholder="Title"
                value={title}
                className="p-2 border border-slate-500"
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                value={content}
                className="border border-slate-500"
                onChange={(e) => setContent(e.target.value)}
              />
              <button className="w-full bg-green-300">Save</button>
            </form>
          ) : (
            <div className="mt-5">
              <h1 className="text-2xl font-bold">{post.title}</h1>
              <p>{post.content}</p>
            </div>
          )}
        </div>
      ) : null}

      <div className="flex space-x-4 mt-5">
        <button onClick={() => router.push('/')} className="w-full bg-green-400 py-1.5">Home</button>
        <button onClick={() => setEditing(!Editing)} className="w-full bg-blue-300 px-3 py-1.5">Edit</button>
        <button className="w-full bg-red-300 py-1.5" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default CreatePostPage;
