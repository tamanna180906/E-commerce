import React from 'react'
import Container from './Container'
import { TiMail } from 'react-icons/ti'
import { LuPhoneCall } from 'react-icons/lu'
import { IoChevronDownOutline } from 'react-icons/io5'
import { FaChartBar, FaRegUser } from 'react-icons/fa'
import { CiHeart } from 'react-icons/ci'
import { BsCart } from 'react-icons/bs'
import { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'

function Header() {
  let [show, setShow] = useState(false)

  return (
    <div className='py-3 bg-[#7E33E0]'>
      <Container>
        <div className='flex lg:justify-between gap-5 items-center'>
          <div className='lg:w-[16%] flex justify-between items-center text-[#F1F1F1]'>
            <TiMail />
            <p className='font-lt text-[16px]'>mhhasanul@gmail.com</p>
          </div>
          <div className='lg:w-[30%] mx-auto flex items-center text-[#F1F1F1]'>
            <LuPhoneCall />
            <p className='font-lt text-[16px] pl-3'>(12345)67890</p>
          </div>
          <div className='lg:w-[30%] w-full'>
            <ul className={`lg:flex lg:bg-transparent lg:static lg:opacity-100 transition-all justify-between items-center 
            duration-300 ease-in-out z-50
             ${show
                ? "opacity-100 bg-purple-300 top-[45px]"
                : "opacity-0  top-[-200px]"}
                 absolute left-0 w-full py-4 lg:py-0
              `}>
              <li className='flex justify-center lg:justify-between items-center text-[#F1F1F1]'>
                <p className='font-lt text-[16px]'>English</p>
                <IoChevronDownOutline />
              </li>
              <li className='flex  justify-center lg:justify-between items-center text-[#F1F1F1]'>
                <p className='font-lt text-[16px]'>USD</p>
                <IoChevronDownOutline />
              </li>
              <li className='flex justify-center lg:justify-between items-center text-[#F1F1F1]'>
                <p className='font-lt text-[16px]'>Login</p>
                <FaRegUser />
              </li>
              <li className='flex justify-center lg:justify-between items-center text-[#F1F1F1]'>
                <p className='font-lt text-[16px]'>Wishlist</p>
                <CiHeart />
              </li>
              <li className='items-center flex justify-center text-[#F1F1F1]'>
                <BsCart />
              </li>
            </ul>
          </div>
          <div className='lg:hidden z-50 text-[#F1F1F1]' onClick={() => setShow(!show)}>
            {show ? <RxCross2 /> : <FaChartBar />}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header