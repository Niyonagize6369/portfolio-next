"use client"
import axios from 'axios'
import React from 'react'
import { useState } from 'react' 
import { useRouter } from 'next/navigation'
const Create = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const router = useRouter();

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/api/v1/blog/create",{title,content});
        router.push('/');
    }
  return (
    <div>
        <h1 className="text-4xl font-bold text-center mt-10">Create a New Post</h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                Title
            </label>
            <input
                type="text"
                id="title"
                name="title"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                onChange={(e) => setTitle(e.target.value)}
            />
            </div>
            <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
                Content
            </label>
            <textarea
                id="content"
                name="content"
                rows={5}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                onChange={(e) => setContent(e.target.value)}

            ></textarea>
            </div>
            <div className="flex items-center justify-between">
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Create Post
            </button>
            </div>
        </form>
    </div>
  )
}

export default Create
