import React from "react";
import Image from "next/image";
// import { GoHeart } from "react-icons/go";
// import { GoComment } from "react-icons/go";
// import { IoIosShareAlt } from "react-icons/io";
import Link from "next/link";
import Blog1 from "@/public/assets/blog1.jpg";
import Blog2 from "@/public/assets/blog2.jpg";
import Blog3 from "@/public/assets/blog3.jpg";

const Rachel: Record<string, string> = {
  "women Ethnic": Blog1.src,
  "women western": Blog2.src,
  goggles: Blog3.src,
};

type Blog = {
  title: string;
  content?: string;
  likes: number;
  image: string;
  index?: number;
};

const Blogs: React.FC<Blog> = ({ title, content, likes, image, index }) => {
  return (
    <div className="flex">
      <div
        className="flex flex-col bg-white rounded-xl shadow-md
      w-full m-6 over-flow-hidden sm:w-52  "
      >
        <Image
          src={image || `/assets/blog${index}.jpg`}
          alt={title}
          width={150}
          height={50}
          className="h-20 m-6"
        />
        <h2 className="text-center px-2 pb-5">{title || "Title"}</h2>
        <p className="text-lg">{content || "Lorem Ipsum"}</p>
        <div className="flex justify-end  text-xl items-center">
          <p className="text-lg cursor-pointer bg-gray-600 text-white hover:bg-blue-500 rounded-xl p-1">
            Read More
          </p>
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
