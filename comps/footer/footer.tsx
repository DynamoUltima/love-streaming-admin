import Image from "next/image"

import facebook from "./facebook.png"
import twitter from "/public/twitter.png"
import instagram from "/public/instagram.png"
import headset from "/public/headset.png"

export const Footer = () => {

  return (
    <>
      <div className="flex justify-between w-full pt-4">
        <div className="flex  space-x-4">
          <a href="" className="">
            <Image className="w-[18px]" alt="facebook-icon" width={18} height={18} src={"/facebook.png"} />
          </a>
          <a href="">
            <Image className="w-[18px] h-[18px]" width={18} height={18} alt="twitter-icon" src={"/twitter.png"} />
          </a>
          <a href="">
            <Image className="w-[18px] h-[18px]" width={18} height={18} alt="instagram-icon" src={"/instagram.png"} />
          </a>
        </div>

        <div className="flex  space-x-4  items-baseline">
          <Image className="w-[18px] h-[18px]" width={18} height={18} alt="headset-icon" src={"/headset.png"} />
          <div>Contact Support</div>
        </div>

      </div>
    </>
  )

}
