"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Link from "next/link";
import axios from "axios";
// import Blogs from "@/components/Blogs";
import Admincards from "@/components/Admincards";

type Post = {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  category: string;
  likes?: number;
  isPublished?: boolean;
};

function Page() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { label: "All", value: "all" },
    { label: "Gospel", value: "0" },
    { label: "Sport", value: "1" },
    { label: "African news", value: "2" },
    { label: "Other", value: "3" },
  ];

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/v1/post/");
      const fetchedPosts = response.data.data.posts;
      const publishedPosts = fetchedPosts.filter(
        (post: Post) => post.isPublished
      );
      setPosts(publishedPosts);
      setFilteredPosts(publishedPosts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "all") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(
        posts.filter((post) => String(post.category) === category)
      );
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
      <div>
        <div className="bg-gray-700 flex flex-col justify-center items-center text-white min-h-96 gap-8">
          <h2 className="text-48px text-center">New Blog</h2>
          {/* <Link href={"/"}>
            <button className="p-3 text-xl text-white cursor-pointer underline">
              Go Back to Home
            </button>
          </Link> */}
        </div>

        <div className="flex justify-center mt-6">
          <select
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="p-2 border border-gray-700 rounded"
          >
            {categories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>

        {loading ? (
          <p className="text-center py-8">Loading posts...</p>
        ) : (
          <div className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8 px-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <Admincards key={post.id} {...post} />
              ))
            ) : (
              <p className="text-center col-span-full text-gray-500">
                No available Blog.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Page;
