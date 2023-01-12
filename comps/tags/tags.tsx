import {XMarkIcon,XCircleIcon } from "@heroicons/react/24/solid";

const Tags = ({name,removeTags,index}:{name:String,removeTags:(index:any) => void,index?:any},) => {
    return (
        <button
            className="px-4 py-1  mr-1 my-1 text-base rounded-full active:bg-black active:border  active:text-gray-50
                       bg-black border border-black text-gray-50 flex flex-row"
        >
           <div>{name}</div>
           <div onClick={()=>removeTags(index)}> <XCircleIcon className="w-6 h-6"/> </div>
        </button>

    );
}

export default Tags;