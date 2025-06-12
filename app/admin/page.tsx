import React from 'react'; 

function Page() {
    return (
        <div className="bg-gray-600 min-h-screen flex flex-col lg:flex-row text-white justify-center items-center  text-24px px-20">
            {/* <p className="text-48px text-center w-1/2">Hello there! Welcome to the Admin Management System</p> */}
            <div className=" w-1/2">
                <div className="flex flex-col items-center justify-center">
                    <form className="items-center">
                        <label htmlFor="fname" className="text-[16px] text-black">First name</label><br/>
                        <input type="text" id="fname" name="fname"
                               className="bg-grey text-white text-[18px] w-90 border border-black rounded-3xl"/><br/>

                        <label htmlFor="lname" className="text-[16px] text-black">Last name</label><br/>
                        <input type="text" id="lname" name="lname"
                               className="bg-grey text-white  text-[18px] w-90 border border-black rounded-3xl"/><br/>

                        <label htmlFor="lname" className="text-[16px] text-black">Email</label><br/>
                        <input type="email" id="lname" name="lname"
                               className="bg-grey text-white  text-[18px] w-90 border border-black rounded-3xl"/><br/>

                        <label htmlFor="lname" className="text-[16px] text-black">Password</label><br/>
                        <input type="text" id="lname" name="lname"
                               className="bg-grey text-white  text-[18px] w-90 border border-black rounded-3xl"/><br/>

                        <label htmlFor="lname" className="text-[16px] text-black">Confirm Password</label><br/>
                        <input type="text" id="lname" name="lname"
                               className="bg-grey text-white  text-[18px] w-90 border border-black rounded-3xl"/><br/>

                        <input type="checkbox" id="true" name="conditions" value="Yes"/>
                        <label htmlFor="conditions" className="text-[14px] items-center w-inherit "
                        >Agree terms and Conditions.</label>

                        {/* <button className="bg-gray- w-1/2 my-8 text-white border
                         border-white px-6 py-2 rounded-xl 
                        text-[18px] font-bold hover:bg-green
                         hover:text-white hover:border-green cursor-pointer
                          transition-colors duration-300">
                            <input type="submit" value="Register" />
                        </button> */}
                        <div className="flex items-center  gap-6 mt-6 justify-center">

                            <button
                        className="bg-gray-400 w-44 text-white px-6 py-2 
                        rounded-3xl text-[18px] font-bold
                         hover:bg-gray-600 hover:text-white cursor-pointer
                          transition-colors duration-600">
                        Register
                    </button>
                    <button
                        className="bg-white w-44 text-black px-6 py-2 border
                         border-gray-400 mr-4
                        rounded-3xl text-[18px] font-bold hover:bg-gray
                         hover:text-gyay-600 hover:border  cursor-pointer 
                         transition-colors duration-700 ">
                        Login
                    </button>
                    
                </div>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Page;