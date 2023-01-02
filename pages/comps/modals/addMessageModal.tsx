import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";

import { Fragment, useEffect, useState } from "react";
import SearchBar from "../search/searchbar";
import MessageTiles from "../tiles/messageTiles";
import UploadMessageModal from "./uploadMessageModal";


interface Modal {
    isOpen: boolean,
    closeModal: () => void
}

// interface snippet {

// }

export interface Data {
    kind: string;
    etag: string;
    nextPageToken: string;
    prevPageToken: string;
    regionCode: string;
    pageInfo: PageInfo;
    items: Item[];
}

export interface PageInfo {
    totalResults: number;
    resultsPerPage: number;
}

export interface Item {
    kind: string;
    etag: string;
    id: ID;
    snippet: Snippet;
}

export interface ID {
    kind: string;
    videoId: string;
}

export interface Snippet {
    publishedAt: Date;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: Date;
}

export interface Thumbnails {
    default: Default;
    medium: Default;
    high: Default;
}

export interface Default {
    url: string;
    width: number;
    height: number;
}




const AddMessageModal = ({ isOpen, closeModal }: Modal) => {

    const [youtubeData, setYoutubeData] = useState<Data>();
    const [pageNextToken, setNextPageToken] = useState("");
    const [pagePrevToken, setPrevPageToken] = useState("");
    const [item, setItem] = useState<Item>();
    // const [youtubeDataVideos, setYoutubeDataVideos] = useState({})

    console.log('print')
    console.log(isOpen)
    const videos: Item[] = youtubeData?.items ?? [];
    // videos?.description

    // console.log(videos[2]?.snippet.title)


    
    // console.log(youtubeDataVideos)

    let [isOpened, setIsOpened] = useState(true)

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
    

    console.log("add message");
    console.log(item)


    useEffect(() => {

        // const fetchYoutubeVideos = async () => {
        //     const res = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY_PERSONAL}&channelId=${process.env.NEXT_PUBLIC_CHANNEL_ID_PERSONAL}&part=snippet,id&order=date&maxResults=50`);
        //     const videos = await res.json();

        //     setYoutubeData(videos);

        //     return videos;
        // }

        const fetchYoutube = async () => {
            const res = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
                params: {
                    key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY_PERSONAL,
                    channelId: process.env.NEXT_PUBLIC_CHANNEL_ID_PERSONAL,
                    part: "snippet,id",
                    order: "date",
                    maxResults: "50",
                    pageToken: ""
                }
            });
            const videoData = await res.data;
            // const videos = videoData.items

            setYoutubeData(videoData);
            //  setYoutubeDataVideos(videos)

            return videoData;
        }

        // fetchYoutubeVideos();

        fetchYoutube()

    }, [])


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

                                    <div className="max-h-64 overflow-auto space-y-4">
                                        {
                                            videos.map((video) => (
                                                <div key={video.etag}>
                                                    <MessageTiles click={openNewModal} title={video.snippet.title} thumbnail={video.snippet.thumbnails.default.url} />
                                                </div>

                                            ))
                                        }
                                       

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
                        <UploadMessageModal
                         isOpen={isOpened}
                         closeModal={exitModal} 
                          item ={item! ??""}
                         />
                    </div>
                </Dialog>
            </Transition>
        </>
    );



}



export default AddMessageModal;