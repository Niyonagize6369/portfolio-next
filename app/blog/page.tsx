import React from 'react';

import Blogcards from "@/components/Blogs";
import Header from '@/components/Header';

 async function Page() {
const Data = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/get`);
  const response = await Data.json();

  const posts = response.data.post;
    return (
        <div>

            <Header/>
            <div>
                <div className="bg-gray-500 flex flex-col justify-center items-center text-white min-h-50 ">
                     <h1 className="text-4xl md:text-5xl font-extrabold mt-6">My Amazing Blog</h1>
                     {/* <p className="text-gray-500 text-sm">Published on June 12, 2025 • 5 min read</p> */}

                </div>
                <div className="flex flex-col md:flex-row justify-center items-center min-h-96 gap-8">
                    {posts.map((blog:any, index:number) => (
                        <Blogcards  key={index} {... blog} index={index + 1} />
                    ))}

                </div>
            </div>
        </div>
    );
}

export default Page;