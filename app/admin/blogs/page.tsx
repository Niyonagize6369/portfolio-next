import React from 'react';
import Adminheader from "@/components/Adminheader";
import Admincards from "@/components/Admincards";


function Page() {
    return (
        <>
            <div className="flex w-full flex-row align-items-center bg-gray-500">
                <Adminheader/>
                <div className="bg-gray min-h-screen text-white flex flex-col items-center pt-28 gap-8 w-full">
                    <div className="text-center">
                        <p className="text-48px">Blogs</p>
                        <p className="text-18px">Manage your blogs by editing,  </p>
                    </div>
                    <div className="flex flex-col gap-8 w-full px-8">
                        <Admincards/>
                        <Admincards/>
                    </div>
                </div>
            </div>

        </>

    );
}

export default Page;