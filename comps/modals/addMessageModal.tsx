import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";

import { Fragment, useEffect, useState } from "react";
import SearchBar from "../search/searchbar";
import MessageTiles from "../tiles/messageTiles";
import UploadMessageModal from "./uploadMessageModal";
import { dehydrate, DehydratedState, QueryClient, useQuery, } from '@tanstack/react-query';
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { Data } from "../../interfaces/interface";



interface Modal {
    isOpen: boolean,
    closeModal: () => void,
    initData:Data

}

// interface snippet {

// }







const fetchYoutube = async () => {
    const res = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
        params: {
            key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
            channelId: process.env.NEXT_PUBLIC_CHANNEL_ID,
            part: "snippet,id",
            order: "date",
            maxResults: "50",
            // pageToken: ""
        }
    }) ;

    const videoData = await res.data ;

    return videoData;
}



const AddMessageModal = ({ isOpen, closeModal, initData}:Modal) => {
    

    console.log("init Data")
    console.log(initData);



   const { data, isError, isLoading, error, isSuccess,  } = useQuery<Data>(["youtubeData"], fetchYoutube,{keepPreviousData:true,});




    console.log("use Query Info");
    console.log(data);





    // console.log('print')
    // console.log(isOpen)



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

                                    <SearchBar />
                                    {isLoading && (<div className="text-white">Loading</div>)}
                                    {isError && (<div className="text-white">{`${error}`}</div>)}


                                    {isSuccess && (<div className="max-h-64 overflow-auto space-y-4">
                                        {
                                            data?.items.map((video) => (
                                                <div key={video.etag}>
                                                    <MessageTiles
                                                        item={video}
                                                    />
                                                </div>

                                            ))
                                        })


                                    </div>)}
                                    <div className="mt-4 flex flex-row  justify-between">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center  items-center rounded-md border border-transparent space-x-2 px-4 py-1 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        // onClick={closeModal}
                                        >
                                            <ArrowLeftIcon className="w-6 h-6" />
                                            <div> Previous</div>
                                        </button>

                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent space-x-2 px-4 py-1 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        // onClick={closeModal}
                                        >
                                            <div> Next</div>
                                            <ArrowRightIcon className="w-6 h-6" />

                                        </button>
                                    </div>


                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-500  px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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



export default AddMessageModal;

// export const getServerSideProps: GetServerSideProps = async (): Promise<{ props: { dehydratedState: DehydratedState } }> => {

//     const queryClient = new QueryClient()

//     await queryClient.prefetchQuery<Data>(["youtubeData"], fetchYoutube,);

//     // const data = await queryClient.prefetchQuery<Data>(["youtubeData"], fetchYoutube,);



//     // queryClient.fetchQuery<Data>(["youtubeData"], fetchYoutube,);

//     return {
//         props: {
//             dehydratedState: dehydrate(queryClient),
//         }
//     }

// }

// export async function getStaticProps() {

//     const queryClient = new QueryClient()

//     await queryClient.prefetchQuery<Data>(["youtubeData"], fetchYoutube,);

//     const fetchYoutuber = async () => {
//         const res = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
//             params: {
//                 key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY_PERSONAL,
//                 channelId: process.env.NEXT_PUBLIC_CHANNEL_ID_PERSONAL,
//                 part: "snippet,id",
//                 order: "date",
//                 maxResults: "50",
//                 pageToken: ""
//             }
//         }) ;
    
//         const videoData = await res.data as Data ;
    
//         return videoData;
//     }

//     const data =await fetchYoutuber()

//     return {
//         props: {
//             // dehydratedState: dehydrate(queryClient)
//             initialData: data
//         }
//     }

//  }
// export const getStaticPaths: GetStaticPaths = async () => {
//     return {
//       paths: [],
//       fallback: "blocking"
//     };
//   };