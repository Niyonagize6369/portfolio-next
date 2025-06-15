// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import axios from "axios";
// import Image from "next/image";
// import Link from "next/link";

// type Blog = {
//   id: number;
//   title: string;
//   content: string;
//   likes: number;
//   image: string;
// };

// const BlogDetails = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const [blog, setBlog] = useState<Blog | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string>("");

//   useEffect(() => {
//     if (!id) return; // wait for router to get id
//     const fetchBlog = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/v1/blog/${id}`);
//         setBlog(res.data);
//       } catch (err: any) {
//         setError("Blog not found or server error");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchBlog();
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <p className="text-xl">Loading...</p>
//       </div>
//     );
//   }

//   if (error || !blog) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <p className="text-xl font-semibold text-red-500">{error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <Link href="/" className="text-blue-600 underline mb-6 block">
//         ← Back to Blogs
//       </Link>

//       <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//         <Image
//           src={blog.image}
//           alt={blog.title}
//           width={800}
//           height={400}
//           className="w-full h-80 object-cover"
//         />
//         <div className="p-6">
//           <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
//           <p className="text-gray-700 text-lg mb-6">{blog.content}</p>
//           <p className="text-gray-500 text-sm">{blog.likes} Likes</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogDetails;
