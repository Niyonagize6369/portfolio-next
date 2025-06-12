import React from 'react';
import personalInfo from "../data/personalInfo.json";
import { BsTwitter, BsWhatsapp, BsLinkedin, BsGithub } from "react-icons/bs";
// import "../styles/Hero.css";
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="pt-24">
      <div className="flex justify-around items-center p-10 space-x-10
      lg:flex-row sm:flex-col ssm:space-y-10 text-white">

        <div className=' lg:w-1/2 text-black ssm:w-fit'>
           <h1 className='text-2xl mb-5 text-slate-900 '>{personalInfo.name}</h1>
        <h2 className='text-slate-900 font-sans '> {personalInfo.about}</h2>
        <p className="mt-10">{personalInfo.info}</p>
        </div>
       
        <div className="w-1/4 items-center sm:w-fit"> 
      <Image src={'/assets/profile.jpg'} alt="profile" 
     className=" rounded-full w-full border-8
      border-white" width={400} height={200}/>
     </div>
     <div className="w-1/ ssn:w-fit">
          <p className="text-4xl text-black mb-4">About me</p>
          <p className="text-slate-900">
            let's build quality in programing and design with our services
          </p>
          <button className="relative my-4">
            <a
              href="#About Me"
              className="bg-gradient-to-r from-green-400 to-blue-500
              text-white hidden md:inline transform transition-transform duration-300
              hover:scale-105 px-8 py-2 rounded-full"
            >
              Show more...
            </a>
          </button>

          <div className="flex mt-5 space-x-4 text-black cursor-pointer">
            <a href="https://github.com/Niyonagize6369" target="_blank">
              <BsGithub
                size={40}
                className="border-4 hover:border-indigo-900 rounded-full"
              />
            </a>
            <a href="https://x.com/NiyonagizeR" target="_blank">
              <BsTwitter
                size={40}
                className="border-4 hover:border-indigo-900 rounded-full"
              />
            </a>
            <a
              href="https://wa.me/+250783350275"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsWhatsapp
                size={40}
                className="border-4 hover:border-indigo-900 rounded-full"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/rachel-niyonagize-44b70031b/"
              target="_blank"
            >
              <BsLinkedin
                size={40}
                className="border-4 hover:border-indigo-900 rounded-full"
              />
            </a>
          </div>
        </div>
      </div>
     
    </section>
  );
};

export default Hero;