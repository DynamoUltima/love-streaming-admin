import Image from "next/image";
import { useState } from "react";
import { Item } from "../../interface";

import UploadMessageModal from "../modals/uploadMessageModal";
import RisingClouds from "/public/rising-clouds.jpg"


interface messageData {
    item: Item
}

const MessageTiles = ({  item }: messageData) => {


    // console.log('video item')
    // console.log(item)

    let [isOpened, setIsOpened] = useState(false)

    function exitModal() {
        setIsOpened(false)
    }

    function openModal() {
        setIsOpened(true)
    }

    const openNewModal = () => {
        // console.log("open moal")



        // console.log(item);
        // closeModal()
        // setItem(item)
        setIsOpened(true)
    }


    // const clicked=()=>{

    //     onClick;

    // }



    return (

        <>
            
            <div onClick={openNewModal} className="flex flex-row  justify-between space-x-2 ">

                <div className="relative overflow-clip square h-16  whitespace-nowrap rounded-md">
                    <Image className="" alt='Mesage image' fill src={`${item.snippet.thumbnails.default.url??""}`} />
                </div>
                <div className="flex flex-col justify-between">
                    <div className="text-sm text-gray-400  font-extrabold">{item.snippet.title.replace(/^a-zA-Z0-9 ]/g, '')??""} </div>
                    <div className="text-xs text-gray-500"> 1hr 23 mins</div>
                </div>

                <div className="text-sm text-gray-500 whitespace-nowrap">a min ago</div>

            </div>

            <UploadMessageModal
                isOpen={isOpened}
                closeModal={exitModal}
                item={item}
            />
        </>



    );
}

export default MessageTiles;