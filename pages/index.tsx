import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from './layout'
import { PlusIcon } from "@heroicons/react/24/solid";
import MessageCard from "./comps/cards/messageCard";
import AddCard from "./comps/cards/addCard";
import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import AddMessageModal from './comps/modals/addMessageModal';




export default function Home() {
  const [click, setClick] = useState(false);
  let [isOpen, setIsOpen] = useState(true)

  const handleTap = async (e: any) => {
    e.preventDefault()
    setClick(true)
    console.log(click);
    // setClick(false)


  }

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
    <div className=' m-auto w-screen h-screen overscroll-contain bg-grayblack'>
      <Layout>
        <div className="flex flex-col space-y-4 h-5/6  ">
          <div className='text-white  flex flex-row justify-between pt-5'>
            <div className='text-lg'>Messages</div>
            <button onClick={openModal} type="button" className={`bg-blue-500 text-xs w-32 h-10 hover:bg-blue-400 text-white rounded-md p-2 flex flex-row justify-center items-center space-x-2 shadow-xl focus:outline-none  focus:ring-offset-2 focus:ring-2 `}>
              <PlusIcon className="w-6 h-6 text-white" />
              <div className="">Add New</div>
            </button>
          </div>

          <AddMessageModal isOpen={isOpen} closeModal={closeModal} />






          <div className="overflow-auto h-full  pb-10">
            <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-9 gap-y-6">
              <MessageCard />
              <MessageCard />
              <MessageCard />
              <MessageCard />
              <MessageCard />
              <MessageCard />
              <MessageCard />
              <MessageCard />
              <MessageCard />
              <MessageCard />
              <MessageCard />
              <MessageCard />
              <MessageCard />
              <MessageCard />
              <MessageCard />
              <MessageCard />
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
