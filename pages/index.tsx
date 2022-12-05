import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from './layout'
import { PlusIcon } from "@heroicons/react/24/solid";
import RecentCard from "./comps/cards/recentCard";
import AddCard from "./comps/cards/addCard";

export default function Home() {
  return (
    <div className='relaive m-auto !w-screen !h-screen  bg-grayblack'>
      <Layout>
      <div className="flex flex-col space-y-4 h-full ">
        <div className='text-white  flex flex-row justify-between pt-5'>
          <div className='text-lg'>Messages</div>
          <button className='bg-blue-500 text-xs w-32 h-10 hover:bg-blue-400 text-white rounded-md p-2 flex flex-row justify-center items-center space-x-2 shadow-xl'>
            <PlusIcon className="w-6 h-6 text-white" />
            <div className="">Add New</div>
          </button>
        </div>

        <div className="overflow-auto  pb-10">
           <div className="grid grid-cols-6 gap-9 gap-y-6">
           <RecentCard />
           <RecentCard />
           <RecentCard />
           <RecentCard />
           <RecentCard />
           <RecentCard />
           <RecentCard />
           <RecentCard />
           <RecentCard />
           <RecentCard />
           <RecentCard />
           <RecentCard />
           <AddCard />

           </div>
        </div>
      </div>


      </Layout>
    </div>
  )
}
