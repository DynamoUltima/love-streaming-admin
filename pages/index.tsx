import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from './layout'
import { PlusIcon } from "@heroicons/react/24/solid";
import MessageCard from "../comps/cards/messageCard";
import AddCard from "../comps/cards/addCard";
import { useState } from 'react';

import AddMessageModal from '../comps/modals/addMessageModal';
import { Button } from "@material-tailwind/react";
import { DehydratedState, QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { Data } from '../interfaces/interface';







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



const messages = [
  {
      "kind": "youtube#searchResult",
      "etag": "2PokmHcjdd5JoOvcpTcd1W4Kw2g",
      "id": {
          "kind": "youtube#video",
          "videoId": "TzibvFwhlFY"
      },
      "snippet": {
          "publishedAt": "2021-09-23T19:00:08Z",
          "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
          "title": "GOD WANTS YOU TO PROSPER PART 2B BY PASTOR OTI",
          "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/TzibvFwhlFY/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/TzibvFwhlFY/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/TzibvFwhlFY/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Bishop Isaac Oti-Boateng",
          "liveBroadcastContent": "none",
          "publishTime": "2021-09-23T19:00:08Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "A2YGAijNJDOZR_8IKcBssA5lK0A",
      "id": {
          "kind": "youtube#video",
          "videoId": "LEjFzTaMPXU"
      },
      "snippet": {
          "publishedAt": "2021-09-20T19:00:05Z",
          "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
          "title": "GOD WANTS YOU TO PROSPER PART 2A BY PASTOR OTI",
          "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/LEjFzTaMPXU/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/LEjFzTaMPXU/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/LEjFzTaMPXU/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Bishop Isaac Oti-Boateng",
          "liveBroadcastContent": "none",
          "publishTime": "2021-09-20T19:00:05Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "PJyMhzOqJQPAjZYI5B5XF36GSOg",
      "id": {
          "kind": "youtube#video",
          "videoId": "E4VtuRJ75E0"
      },
      "snippet": {
          "publishedAt": "2021-09-16T19:00:10Z",
          "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
          "title": "GOD WANTS YOU TO PROSPER PART 1B BY PASTOR OTI",
          "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/E4VtuRJ75E0/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/E4VtuRJ75E0/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/E4VtuRJ75E0/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Bishop Isaac Oti-Boateng",
          "liveBroadcastContent": "none",
          "publishTime": "2021-09-16T19:00:10Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "ch6hnfgrLEtZ1vJLUclyK0G8LOg",
      "id": {
          "kind": "youtube#video",
          "videoId": "fphWzkJGX6Y"
      },
      "snippet": {
          "publishedAt": "2021-09-13T19:00:11Z",
          "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
          "title": "GOD WANTS YOU TO PROSPER PART 1A BY PASTOR OTI",
          "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/fphWzkJGX6Y/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/fphWzkJGX6Y/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/fphWzkJGX6Y/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Bishop Isaac Oti-Boateng",
          "liveBroadcastContent": "none",
          "publishTime": "2021-09-13T19:00:11Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "uyeBucyybM72QCJ5t66JVBRfxa4",
      "id": {
          "kind": "youtube#video",
          "videoId": "bNqGLSo8Q1Q"
      },
      "snippet": {
          "publishedAt": "2021-08-05T19:00:09Z",
          "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
          "title": "YOU HAVE FAITH B BY PASTOR OTI",
          "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/bNqGLSo8Q1Q/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/bNqGLSo8Q1Q/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/bNqGLSo8Q1Q/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Bishop Isaac Oti-Boateng",
          "liveBroadcastContent": "none",
          "publishTime": "2021-08-05T19:00:09Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "dGK-x7CLPgYiYCSkcnU8mjGlKMA",
      "id": {
          "kind": "youtube#video",
          "videoId": "oiVDNCvXnbs"
      },
      "snippet": {
          "publishedAt": "2021-08-02T09:32:53Z",
          "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
          "title": "The Blessings - Pastor Oti - Annual Seed Sowing 2021",
          "description": "' ... Believe in the Lord your God, so shall ye be established; believe his prophets, so shall ye prosper.' - 2 Chronicles 20:20 KJV ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/oiVDNCvXnbs/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/oiVDNCvXnbs/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/oiVDNCvXnbs/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Bishop Isaac Oti-Boateng",
          "liveBroadcastContent": "none",
          "publishTime": "2021-08-02T09:32:53Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "H9cxrUX2MTFdzjANQwz6mXVix_g",
      "id": {
          "kind": "youtube#video",
          "videoId": "oArnTcVxkMQ"
      },
      "snippet": {
          "publishedAt": "2021-07-30T19:00:11Z",
          "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
          "title": "SEED SOWING CONFERENCE (TALK SHOW)",
          "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/oArnTcVxkMQ/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/oArnTcVxkMQ/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/oArnTcVxkMQ/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Bishop Isaac Oti-Boateng",
          "liveBroadcastContent": "none",
          "publishTime": "2021-07-30T19:00:11Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "Gb1lJPklhy40CTKRu7Q2EHdQZf4",
      "id": {
          "kind": "youtube#video",
          "videoId": "Jgoj_X56UQA"
      },
      "snippet": {
          "publishedAt": "2021-07-13T19:00:10Z",
          "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
          "title": "YOU HAVE FAITH A BY PASTOR OTI",
          "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/Jgoj_X56UQA/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/Jgoj_X56UQA/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/Jgoj_X56UQA/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Bishop Isaac Oti-Boateng",
          "liveBroadcastContent": "none",
          "publishTime": "2021-07-13T19:00:10Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "qCHjjzuGHGY-Zc3WghJiyyozvjA",
      "id": {
          "kind": "youtube#video",
          "videoId": "2gqW-TlQHMQ"
      },
      "snippet": {
          "publishedAt": "2021-07-08T19:00:03Z",
          "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
          "title": "GROWING IN LOVE B BY PASTOR OTI",
          "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/2gqW-TlQHMQ/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/2gqW-TlQHMQ/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/2gqW-TlQHMQ/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Bishop Isaac Oti-Boateng",
          "liveBroadcastContent": "none",
          "publishTime": "2021-07-08T19:00:03Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "JGbILVi5_XQybVNbiUUGme4nzmE",
      "id": {
          "kind": "youtube#video",
          "videoId": "Q-ApiPRRhac"
      },
      "snippet": {
          "publishedAt": "2021-07-05T19:00:15Z",
          "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
          "title": "GROWING IN LOVE A BY PASTOR OTI",
          "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/Q-ApiPRRhac/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/Q-ApiPRRhac/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/Q-ApiPRRhac/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Bishop Isaac Oti-Boateng",
          "liveBroadcastContent": "none",
          "publishTime": "2021-07-05T19:00:15Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "g7-FuvTC80VN1UuMhfZv5AaXDTE",
      "id": {
          "kind": "youtube#video",
          "videoId": "PfBpMF3B41k"
      },
      "snippet": {
          "publishedAt": "2021-07-01T19:00:07Z",
          "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
          "title": "THE GRACE OF GOD BY PASTOR OTI",
          "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/PfBpMF3B41k/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/PfBpMF3B41k/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/PfBpMF3B41k/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Bishop Isaac Oti-Boateng",
          "liveBroadcastContent": "none",
          "publishTime": "2021-07-01T19:00:07Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "WIVf1R3nkQSRFSL8r4oU-b5fZkc",
      "id": {
          "kind": "youtube#video",
          "videoId": "1FTZMB6tTqU"
      },
      "snippet": {
          "publishedAt": "2021-06-28T19:00:00Z",
          "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
          "title": "CHOOSING YOUR LIFE PARTNER PART 2B BY PASTOR OTI",
          "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/1FTZMB6tTqU/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/1FTZMB6tTqU/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/1FTZMB6tTqU/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Bishop Isaac Oti-Boateng",
          "liveBroadcastContent": "none",
          "publishTime": "2021-06-28T19:00:00Z"
      }
  }
]

export default function Home() {
  const [click, setClick] = useState(false);
  let [isOpen, setIsOpen] = useState(true)

  const handleTap = async (e: any) => {
    e.preventDefault()
    setClick(true)
    console.log(click);
    // setClick(false)


  }

  const { data, isError, isLoading, error, isSuccess, } = useQuery<Data>(["youtubeData"], fetchYoutube,{keepPreviousData:true});

  // console.log('printing data from index');
  // console.log(data)

  const toggle = () => { }

  // useEffect(()=>{
  //   setClick(false)
  // })

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }




  return (
    <div className=' m-auto w-screen h-screen overscroll-contain bg-grayblack padder'>
      <Layout>
        <div className="flex flex-col space-y-4 h-5/6  ">
          <div className='flexer spacer mb-8'>
            <div className='flex items-baseline'>
              <div className='text-[22px]'>Messages</div>
              <div className='text-[12px] opacity-[.5] ml-[10px]'>17 total</div>
            </div>
            <Button onClick={openModal} type="button" className={`!bg-blue-500 text-xs w-48  !h-16   !hover:bg-blue-400 !text-white !rounded-xl !p-2 !flex !flex-row !justify-center items-center space-x-2 shadow-xl focus:outline-none  focus:ring-offset-2 focus:ring-2 `}>
              <PlusIcon className="w-6 h-6 text-white" />
              <div className="capitalize font-[Montserrat] text-xs text-white text-[15px]">Add New</div>
            </Button>
          </div>

        <AddMessageModal isOpen={isOpen} closeModal={closeModal}  initData ={data!} />







          <div className="overflow-auto h-full pb-10">
            <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-4 gap-12 gap-y-12">
              {messages.map(item => <MessageCard
                key={item.snippet.title}
                image={item.snippet.thumbnails.high.url}
                name={item.snippet.title}
                url={item.id.videoId}
                />)}

              <div onClick={openModal} className="">
                <AddCard  />
              </div>


            </div>
          </div>
        </div>


      </Layout>
    </div>
  )
}


export const getServerSideProps: GetServerSideProps = async (): Promise<{ props: { dehydratedState: DehydratedState } }> => {

  const queryClient = new QueryClient()

  await queryClient.prefetchQuery<Data>(["youtubeData"], fetchYoutube,);

  // const data = await queryClient.prefetchQuery<Data>(["youtubeData"], fetchYoutube,);



  // queryClient.fetchQuery<Data>(["youtubeData"], fetchYoutube,);

  return {
      props: {
          dehydratedState: dehydrate(queryClient),
      }
  }

}
