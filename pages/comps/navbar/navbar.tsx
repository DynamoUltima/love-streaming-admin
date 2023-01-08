import { BellIcon,PowerIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import journalist from "/public/journalist.jpeg"
import LeLogo from "/public/love-logo.png"

const Navbar = () => {
    let tablink = [ { name: 'Message' }, { name: 'Music Videos' }]

    const router = useRouter();
    return (
        <>
            <div className="flexer spacer header-font mb-14">
                <div>
                    <Image className="logo" alt="profileImage"  src={LeLogo} />
                </div>

                {/* Search */}
                <div className="flex flex-row w-96 bg-mattblack items-center rounded-md px-4 hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>

                    <input type="text" placeholder="Search" className="ml-6  bg-mattblack p-2 text-gray-200 focus:outline-none" />

                </div>


                {/* Tab */}
                <div className="flex flex-row space-x-4 mr-[150px] ml-[auto]">
                    {tablink.map(tab => (

                        <ul key={tab.name}>
                            <Link href={"/"}>
                                <div className="flex flex-col items-center">
                                    <Link href="" className={router.pathname === "/dashboardPage" ? "tabCardSelected " : "tabCard   "}>
                                        <li className="text-gray-500">{tab.name}</li>

                                    </Link>
                                    <div className={"w-2 h-2 mt-[2px]  bg-white rounded-full"} >

                                    </div>
                                </div>



                            </Link>


                        </ul>
                    ))}
                </div>


                <div className=" flex flex-row items-center space-x-4">
                    <div className="flexer">
                        <PowerIcon className="w-6 h-6 text-white mr-[5px]" />
                        <div className="header-font mr-[15px]">Logout</div>

                    </div>


                    <div className="relative w-[50px] h-[50px]  bg-white rounded-full overflow-clip ">
                        <Image alt="profileImage" fill  src={journalist} />


                    </div>

                </div>

            </div>
            <div className=" md:hidden   h-16">

                <div className=" flex flex-row justify-between items-center p-4">
                    <div className="text-gray-200">Good Evening</div>
                    <PowerIcon className="w-6 h-6 text-white" />


                </div>

            </div>
        </>

    );
}

export default Navbar;
