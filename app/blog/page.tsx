import React from 'react';

import Blogcards from "@/components/Blogs";
import Header from '@/components/Header';

const BlogData = [
  {
    id: 1,
    image:"/assets/blog1.jpg",
    title: "women Ethnic",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    likes: 100,
  },
  {
    id: 2,
    image:"/assets/blog2.jpg",
    title: "women western",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    likes: 300,
  },
  {
    id: 3,
    image: "/assets/blog3.jpg",
    title: "goggles",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    likes: 500,
  },
   {
    id: 4,
    image: "/assets/blog4.jpg",
    title: "goggles",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    likes: 1000,
  },
//    {
//     id: 3,
//     image: "/assets/blog3.jpg",
//     title: "goggles",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     likes: 5,
//   },
//    {
//     id: 3,
//     image: "/assets/blog3.jpg",
//     title: "goggles",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     likes: 5,
//   },
//    {
//     id: 3,
//     image: "/assets/blog3.jpg",
//     title: "goggles",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     likes: 5,
//   },
//    {
//     id: 3,
//     image: "/assets/blog3.jpg",
//     title: "goggles",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     likes: 5,
//   },
//    {
//     id: 3,
//     image: "/assets/blog3.jpg",
//     title: "goggles",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     likes: 5,
//   },
];


function Page() {
    return (
        <div>

            <Header/>
            <div>
                <div className="bg-gray-500 flex flex-col justify-center items-center text-white min-h-50 ">
                     <h1 className="text-4xl md:text-5xl font-extrabold mt-6">My Amazing Blog</h1>
                     {/* <p className="text-gray-500 text-sm">Published on June 12, 2025 • 5 min read</p> */}

                </div>
                <div className="flex flex-col md:flex-row justify-center items-center min-h-96 gap-8">
                    {BlogData.map((blog, index) => (
                        <Blogcards  key={index} {... blog} />
                    ))}

                </div>
            </div>
        </div>
    );
}

export default Page;