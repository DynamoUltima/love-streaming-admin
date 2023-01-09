import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ReactPlayer from "react-player";
import Player from "../player/player";
import Tags from "../tags/tags";
import { Item, Snippet } from "./addMessageModal";

interface Modal {
    isOpen: boolean,
    closeModal: () => void,
    item: Item,
}



const UploadMessageModal = ({ isOpen, closeModal, item }: Modal) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

  

    const [tagName, setTagName] = useState(['Faith', 'Love']);


    // console.log("item revamped")
    // console.log(item.id.videoId)

   



    const addTags = (e: any) => {
        if (e.code == "Space") {
            setTagName([...tagName, e.target.value]);
            e.target.value = "";
        }
       


    }

    const removeTags = (indexToRemve: any) => {
        setTagName(tagName.filter((_, index) => index != indexToRemve))
    }
    const myFun = (d: any) => {
        alert(d.title + "from" + d.description)
    }

    return (
        <>
            <Transition appear show={isOpen ?? false} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-grayblack p-6 text-left align-middle shadow-xl transition-all space-y-4">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg  leading-6 text-gray-400 py-4 font-extrabold flex flex-row items-center justify-center"
                                    >
                                        Add Message
                                    </Dialog.Title>
                                    {/* Search */}

                                    {/* <SearchBar /> */}

                                    <div className=" overflow-auto space-y-4">


                                        <form onSubmit={handleSubmit(myFun)} className="w-full max-w-sm">
                                            <div className="md:flex md:items-center mb-6">

                                                <div className="w-full space-y-1">
                                                    <label className="text-gray-500" htmlFor="title">Title</label>
                                                    <input {...register('title', { required: true })} className=" form-control  bg-mattblack p-2 text-gray-200 focus:outline-none rounded w-full py-2 px-4 leading-tight " placeholder="Title" id="title" type="text" />
                                                    {errors.title && errors.title.type == "required" && <p className="text-red-400 text-sm">Please enter a title</p>}
                                                </div>
                                            </div>




                                            <div className="md:flex md:items-center mb-6">

                                                <div className="w-full space-y-1">
                                                    <label className="text-gray-500" htmlFor="tags">Tags</label>
                                                    <div className="form-control  bg-mattblack p-2 text-gray-200 focus:outline-none rounded w-full py-2 px-4 leading-tight">

                                                        <ul className="flex flex-wrap">
                                                            {tagName.map((tagName, index) => (
                                                                <li key={index}>
                                                                    <Tags
                                                                        name={tagName}
                                                                        removeTags={removeTags}
                                                                        index={index}
                                                                    />

                                                                </li>
                                                            ))}
                                                        </ul>

                                                        <input className=" bg-mattblack focus:outline-none w-full" placeholder="Press Space to add Tags" type={'text'} onKeyUp={addTags} />
                                                        {/* {errors.title && errors.title.type == "required" && <p className="text-red-400 text-sm">Please enter a title</p>} */}
                                                    </div>
                                                </div>
                                            </div>



                                            <div className="md:flex md:items-center mb-6 form-group">

                                                <div className=" w-full space-y-1">
                                                    <label className="text-gray-500" htmlFor="description">
                                                        Description
                                                    </label>
                                                    <textarea {...register('description', { required: true, minLength: 3 })} className="form-control  bg-mattblack p-2 text-gray-300 focus:outline-none rounded w-full py-2 px-4 leading-tight" placeholder="Description" id="description" rows={3} />
                                                    {errors.description && errors.description.type == "required" && <p className="text-red-400  text-sm">please enter message description</p>}
                                                    {errors.description && errors.description.type == "minLength" && <p className="text-red-400  text-sm">please enter  a minimum of 3 letters</p>}

                                                </div>
                                            </div>
                                          

                                            <Player videoId={item} />
                                            



                                            <div className="mt-4 flex flex-row space-x-2">
                                                <button
                                                    type="button"
                                                    className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                    onClick={closeModal}
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                // onClick={closeModal}
                                                >
                                                    Save
                                                </button>
                                            </div>


                                            {/* <div className="md:flex md:items-center form-group">
                                                <div className="md:w-1/3"></div>
                                                <div className="md:w-2/3">
                                                    <button className="shadow form-control bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                                        Sign Up
                                                    </button>
                                                </div>
                                            </div> */}
                                        </form>

                                    

                                    </div>


                                    {/* <div className="text-white">8888</div>
                                    <div className=" bg-blue-800 text-white">{item.id.videoId}</div> */}






                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>

    );
}

export default UploadMessageModal;