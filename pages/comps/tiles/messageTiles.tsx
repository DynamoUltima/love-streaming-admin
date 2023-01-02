import Image from "next/image";
import { Item } from "../modals/addMessageModal";
import RisingClouds from "/public/rising-clouds.jpg"


interface messageData {
    title?:string,
    publishedAt?:Date,
    thumbnail?:string,
    click:any
}

const MessageTiles = ({click,title,thumbnail}:messageData) => {

    // const clicked=()=>{

    //     onClick;

    // }


    return (
        <div onClick={click} className="flex flex-row  justify-between space-x-2 ">
            <div className="relative overflow-clip square h-16  whitespace-nowrap rounded-md">
                <Image className="" alt='Mesage image' fill src={`${thumbnail}`} />
            </div>
            <div className="flex flex-col justify-between">
                <div className="text-sm text-gray-400  font-extrabold">{title?.replace(/^a-zA-Z0-9 ]/g, '')} </div>
                <div className="text-xs text-gray-500"> 1hr 23 mins</div>
            </div>

            <div className="text-sm text-gray-500 whitespace-nowrap">a min ago</div>
        </div>

    );
}

export default MessageTiles;