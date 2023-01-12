import Image from "next/image";
import { PlusIcon } from "@heroicons/react/24/solid";


const AddCard = () => {
    return (
        <>
            <div className='flex flex-col w-44 space-y-2'>
                {/* Image */}
                <div className='relative h-32 w-44 bg-neutral-700 rounded-lg overflow-clip flex items-center justify-center shadow-lg'>
                 
                    <PlusIcon className="w-8 h-8 text-white" />
                </div>
                {/* Text */}
                <div className='flex flex-col space-y-1'>
                    {/* <div className='text-gray-50 text-sm  truncate '>The Blessing of God upon your live</div>
                    <div className='text-gray-400 text-xs'>2 days ago</div> */}
                </div>

            </div>
        </>
    );
}

export default AddCard;