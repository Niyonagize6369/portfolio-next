import React from "react";
import Adminheader from "@/components/Adminheader";

function Page() {
  return (
    <>
      <div className="flex w-full flex-row align-items-center bg-gray-800">
        <Adminheader />
        <div className="bg-gray min-h-screen text-white flex flex-col items-center pt-28 gap-8 w-full">
          <div className="text-center">
            <h2 className="text-48px">
              Welcome <span className="text-green">Rachel</span>
            </h2>
            <p className="text-18px">Enjoy your Web journal</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full px-4">
            <div className="flex flex-col justify-center items-center border-2 p-8 rounded-3xl">
              <h2 className="text-24px">Users</h2>
              <p className="text-18px font-bold">20</p>
            </div>
            <div className="flex flex-col justify-center items-center border-2 p-8 rounded-3xl">
              <h2 className="text-24px">posts</h2>
              <p className="text-18px font-bold">20</p>
            </div>
            <div className="flex flex-col justify-center items-center border-2 p-8 rounded-3xl">
              <h2 className="text-24px">Blogs</h2>
              <p className="text-18px font-bold">2</p>
            </div>
            <div className="flex flex-col justify-center items-center border-2 p-8 rounded-3xl">
              <h2 className="text-24px">Dailry Work</h2>
              <p className="text-18px font-bold">0.5%</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
