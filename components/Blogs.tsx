import React from 'react';
import Image from "next/image";
// import { GoHeart } from "react-icons/go";
// import { GoComment } from "react-icons/go";
// import { IoIosShareAlt } from "react-icons/io";
import Link from 'next/link';
import Blog1 from "@/public/assets/blog1.jpg";
import Blog2 from "@/public/assets/blog2.jpg";
import Blog3 from "@/public/assets/blog3.jpg";

const Rachel: Record<string, string> = {
  "women Ethnic": Blog1.src,
  "women western": Blog2.src,
  "goggles": Blog3.src,
}


type Blog = {
    title: string;
    content?: string;
    likes: number;
    image: string
    index?: number;
}


const Blogs:React.FC<Blog> = ({ title, content , likes,image,index}) => {
    return (
<div className="w-fit flex flex-col space-y-6 container items-center border-b rounded-xl p-2">
                <div className="flex flex-col items-center prose prose-lg prose-blue">
                    <Image src={image||`/assets/blog${index}.jpg`} alt={title} width={250} height={200} className="bg-gray-600"/>
                    <h2 className="text-2xl">{title || "Title"}</h2>
                    <p className="text-xl">{content || "Lorem Ipsum"}</p>
                    <div className="flex justify-end gap-x-2 text-2xl items-center">
                       <p className="text-lg cursor-pointer bg-gray-600 text-white hover:bg-blue-500 rounded-2xl p-3 border">Read More</p>
                        {/* <GoComment className="cursor-pointer"/> */}
                        {/* <IoIosShareAlt className="cursor-pointer"/> */}
                    </div>
                    <div className="flex justify-end">
                        <Link href={"details"}>
                            {/* <button className="p-3 border bg-black text-white cursor-pointer rounded-2xl">View More</button> */}
                        </Link>
                    </div>
                </div>
        </div>
    );
};

export default Blogs;