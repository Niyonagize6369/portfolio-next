import React from "react";
import Image from "next/image";
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
    <div className="flex justify-center items-center">
      <div className="flex flex-col bg-white rounded-2xl shadow-lg w-full sm:w-60 m-4 overflow-hidden transition-transform duration-300 hover:scale-105">
        <Image
          src={image || `/assets/blog${index}.jpg`}
          alt={title}
          width={300}
          height={200}
          className="w-full h-40 object-cover"
        />

        <div className="p-4 flex flex-col justify-between h-full">
          <h2 className="text-center text-lg font-semibold text-gray-800 mb-2">
            {title || "Title"}
          </h2>

          <p className="text-sm text-gray-600 mb-4">
            {content ||
              "Lorem Ipsum dolor sit amet, consectetur adipiscing elit."}
          </p>

          <div className="flex justify-between items-center">
            {/* <p className="text-sm text-gray-700 font-medium">{likes} Likes</p> */}
            {/* <button className="px-4 py-1 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700 transition-colors">
              Read More
            </button> */}
          </div>

          <div className="flex justify-end mt-3">
            <Link href={`/details/${index}`}>
              <button className="px-4 py-1 border border-blue-600 text-blue-600 text-sm rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                View More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
