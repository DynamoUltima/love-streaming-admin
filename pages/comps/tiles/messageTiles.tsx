import Image from "next/image";
import RisingClouds from "/public/rising-clouds.jpg"

const MessageTiles = ({onClick}:any) => {


    return (
        <div onClick={onClick} className="flex flex-row  justify-between space-x-2 ">
            <div className="relative overflow-clip square h-16  rounded-md">
                <Image alt='Mesage image' fill src={RisingClouds} />
            </div>
            <div className="flex flex-col justify-between">
                <div className="text-sm text-gray-400  font-extrabold">How to hear the word of God and do his will </div>
                <div className="text-xs text-gray-500"> 1hr 23 mins</div>
            </div>

            <div className="text-sm text-gray-500 whitespace-nowrap">a min ago</div>
        </div>

    );
}

export default MessageTiles;