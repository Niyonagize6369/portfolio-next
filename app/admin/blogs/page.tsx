import React from "react";
import Adminheader from "@/components/Adminheader";
import Admincards from "@/components/Admincards";

function Page() {
  return (
    <>
      <div className="flex w-full flex-row align-items-center bg-gray-500">
        <Adminheader />
        <div className="bg-gray-700 min-h-screen text-white flex flex-col items-center pt-28 gap-5 w-1/2">
          <div className="text-center">
            <p className="text-48px">Web journal</p>
            <p className="text-18px">Manage My Web journal by editing, </p>
          </div>
          <div className="flex flex-col gap-8 w-full px-8">
            <Admincards />
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
