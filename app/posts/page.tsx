"use client";

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

// Type definition for a single post object
type Post = {
    id: number;
    title: string;
    content: string;
};

// Type definition for the pagination data returned by your API
type PaginationInfo = {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
};

function Page() {
    // State for the posts on the current page
    const [posts, setPosts] = useState<Post[]>([]);
    
    // State for loading and error UI
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    // --- NEW: State to manage pagination ---
    // const [currentPage, setCurrentPage] = useState(1);
    // const [paginationInfo, setPaginationInfo] = useState<PaginationInfo | null>(null);

    // This effect will now re-run whenever `currentPage` changes
    useEffect(() => {
        const fetchRecords = async () => {
            setLoading(true); // Show loading spinner for each page change
            setError(null);

            try {
                // The URL now includes the current page number as a query parameter
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
    }, []); // The dependency array ensures this runs on mount AND when currentPage changes

    // Render loading state
    if (loading) {
        return <div>Loading posts...</div>;
    }

    // Render error state
    if (error) {
        return <div style={{ color: 'red' }}>Error: {error}</div>;
    }

    // Render the main content
    return (
        <div>
            <div>
                <h1>Blog Posts</h1>
                <Link href='/posts/create'>Create New Post</Link>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post) => (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.content}</td>
                                <td>
                                    <button>Delete</button>
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

