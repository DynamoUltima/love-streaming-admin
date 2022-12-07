import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useForm} from "react-hook-form";

interface Modal {
    isOpen: boolean,
    closeModal: () => void
}

const UploadMessageModal = ({ isOpen, closeModal }: Modal) => {

    const {register,handleSubmit,formState:{errors}} = useForm();
    const myFun=(d:any)=>{
        alert('button is clicked')
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
                                        className="text-lg font-medium leading-6 text-gray-50 py-4"
                                    >
                                        Add Message
                                    </Dialog.Title>
                                    {/* Search */}

                                    {/* <SearchBar /> */}

                                    <div className="max-h-64 overflow-auto space-y-4">
                    

                                        <form onSubmit={handleSubmit(myFun)} className="w-full max-w-sm">
                                            <div className="md:flex md:items-center mb-6">
                                                <div className="md:w-1/3 form-group">
                                                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="email">
                                                        Email
                                                    </label>
                                                </div>
                                                <div className="md:w-2/3">
                                                    <input {...register('email',{required:true})} className=" form-control bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text"  />
                                                    {errors.email&& errors.email.type =="required" && <p className="text-red-500">please enter email</p>}
                                                </div>
                                            </div>

                                            <div className="md:flex md:items-center mb-6 form-group">
                                                <div className="md:w-1/3">
                                                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="fullname">
                                                        fullname
                                                    </label>
                                                </div>
                                                <div className="md:w-2/3">
                                                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************" />
                                                </div>
                                            </div>

                                            <div className="md:flex md:items-center mb-6">
                                                <div className="md:w-1/3"></div>
                                                <label className="md:w-2/3 block text-gray-500 font-bold">
                                                    <input className="mr-2 leading-tight" type="checkbox" />
                                                    <span className="text-sm">
                                                        Send me your newsletter!
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="md:flex md:items-center form-group">
                                                <div className="md:w-1/3"></div>
                                                <div className="md:w-2/3">
                                                    <button className="shadow form-control bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                                        Sign Up
                                                    </button>
                                                </div>
                                            </div>
                                        </form>


                                    </div>



                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Got it, thanks!
                                        </button>
                                    </div>

                                   
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