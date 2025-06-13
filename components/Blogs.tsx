import React from 'react';
import Image from "next/image";
// import { GoHeart } from "react-icons/go";
// import { GoComment } from "react-icons/go";
// import { IoIosShareAlt } from "react-icons/io";
import Link from 'next/link';


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

type Blog = {
    title?: string;
    description1?: string;
    likes?: number;
}


const Blogs:React.FC<Blog> = ({ title, description1 , likes}) => {
    return (
<div className="w-fit flex-col space-y-6 container items-center border-b rounded-xl p-2">
            {BlogData.map((data) => (
                <div key={data.id} className="flex flex-col items-center">
                    <Image src={data.image} alt={data.title} width={250} height={200} className="bg-gray-600"/>
                    <h2 className="text-2xl">{data.title || "Title"}</h2>
                    <p className="text-xl">{data.description || "Lorem Ipsum"}</p>
                    <div className="flex justify-end gap-x-2 text-2xl items-center">
                       <p className="text-lg cursor-pointer bg-gray-600 text-white hover:bg-blue-500 rounded-2xl border">Read More</p>
                        {/* <GoComment className="cursor-pointer"/> */}
                        {/* <IoIosShareAlt className="cursor-pointer"/> */}
                    </div>
                    <div className="flex justify-end">
                        <Link href={"details"}>
                            {/* <button className="p-3 border bg-black text-white cursor-pointer rounded-2xl">View More</button> */}
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Blogs;