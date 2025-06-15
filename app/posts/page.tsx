"use client";

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { title } from 'process';
import { Content } from 'next/font/google';


type Post = {
    id: number;
    title: string;
    content: string;
};


// type PaginationInfo = {
//     currentPage: number;
//     totalPages: number;
//     totalItems: number;
//     itemsPerPage: number;
//     hasNextPage: boolean;
//     hasPreviousPage: boolean;
// };

function Page() {
    const [posts, setPosts] = useState<Post[]>([]);
    
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        const fetchRecords = async () => {
            setLoading(true); 
            setError(null);

            try {
               
                const response = await axios.get(`http://localhost:5000/api/v1/blog/get`);
                
                console.log("API Response for Page " + ":", response.data);

                const postsData = response.data.data.post;
               

                if (Array(postsData)) {
                    setPosts(postsData);
                } else {
                    throw new Error("Data received from API is not in the expected format.");
                }

            } catch (err: any) {
                console.error("Failed to fetch posts:", err);
                setError(err.message || "An error occurred while fetching data.");
            } finally {
                setLoading(false);
            }
        };

        fetchRecords();
    }, []); 

    const handleDelete = async(id:number) => {
      await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/delete/${id}`)
      const filterData = posts.filter(post =>post.id !== id)
      setPosts(filterData)
    }
   
    if (loading) {
        return <div>Loading posts...</div>;
    }

    
    if (error) {
        return <div style={{ color: 'red' }}>Error: {error}</div>;
    }

    
    return (
        <div className='min-h-screen bg-blue-200 '>
            <div className='max-w-6xl mx-auto p-6'>
                <h1 className='font-bold text-3xl flex justify-center'>Blog Posts</h1>
                <Link href='/posts/create' className='px-4 border rounded-3xl
                 p-1 gap-1 bg-blue-400 hover hover:bg-white
                 text-xl font-bold'>Create New Post</Link>
                <table className='divide-y divide-gyay-200 w-full mt-6'>
                    <thead className='bg-blue-100   border  text-black font-bold '>
                        <tr className='bg-gray-50'>
                            <th scope='col' className='px-6 py-3 text-start font-medium
                            text-gray-500 border  uppercase'>Id</th>
                            <th scope='col'  className='px-6 py-3 text-start font-medium
                            text-gray-500 border  uppercase'>Title</th>
                            <th scope='col'  className='px-6 py-3 text-start font-medium
                            text-gray-500 border  uppercase'>Content</th>
                            <th scope='col'  className='px-6 py-3 text-start   font-medium
                            text-gray-500 border  uppercase'>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white divide-y divide-gray-200'>
                        {posts.map((post) => (
                            <tr key={post.id}>
                                <td className='px-6 py-3 text-gray-800'>{post.id}</td>
                                <td className='px-6 py-3 text-gray-800'>{post.title}</td>
                                <td className='px-6 py-3 text-gray-800'>{post.content}</td>
                                <td className='space-x-4 px-6 py-3 text-end'>
                                    <Link href={`/posts/${post.id}?mode=read`}><button className='text-blue-600 font-bold border rounded-2xl hover:bg-gray-400 hover:text-white gap-2 px-4 py-2'>Read</button></Link>
                                     <Link href={`/posts/${post.id}?mode=edit`}><button className='text-blue-600 font-bold border rounded-2xl hover:bg-gray-400 hover:text-white gap-2 px-4 py-2'>Edit</button></Link>
                                    <button className='text-red-600 font-bold border rounded-2xl hover:bg-gray-400 hover:text-white gap-2 px-4 py-2
                                    onClick={() => handleDelete (post.id)}'>Delete</button>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
}

export default Page;

