import React from 'react'
import Container from './Container'
import nav from "../assets/nav.png"
import { IoChevronDownOutline } from 'react-icons/io5'
import { FiSearch } from 'react-icons/fi'
import { LuSearch } from 'react-icons/lu'
import { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { FaChartBar } from 'react-icons/fa'
import { FaBarsStaggered } from 'react-icons/fa6'

function Navber() {

    let [show, setShow] = useState(false)


    return (
        <div className='py-5 bg-amber-50'>
            <Container>
                <div className='flex lg:justify-between gap-16 items-center'>
                    <div className='lg:w-[20%] relative'>
                        <img src={nav}></img>
                    </div>
                    <div className='lg:w-[45%]'>
                        <ul className={`lg:flex justify-between items-center lg:bg-transparent lg:static transition-all
                         duration-300 ease-in-out z-50
                        ${show==true?'bg-[#D9D9D9] top-[120px]'
                            :'top-[-220px]'}
                        w-full absolute left-0 py-4 lg:py-0 
                            `}>
                            <li className='flex lg:justify-between justify-center items-center hover:text-[#FB2E86] duration-300 ease-in-out relative group'>
                                <p className='font-lt text-[16px] text-[#0D0E43] hover:text-[#FB2E86]'>Home</p>
                                <h2 className='opacity-0 group-hover:opacity-100'><IoChevronDownOutline /></h2>
                            </li>
                            <li className='flex lg:justify-between justify-center items-center hover:text-[#FB2E86] duration-300 ease-in-out relative group'>
                                <p className='font-lt text-[16px] hover:text-[#FB2E86] text-[#0D0E43]'>Pages</p>
                                <h2 className='opacity-0 group-hover:opacity-100'><IoChevronDownOutline /></h2>
                            </li>
                            <li className='flex lg:justify-between justify-center items-center hover:text-[#FB2E86] duration-300 ease-in-out relative group'>
                                <p className='font-lt text-[16px] text-[#0D0E43] hover:text-[#FB2E86]'>Products</p>
                                <h2 className='opacity-0 group-hover:opacity-100'><IoChevronDownOutline /></h2>
                            </li>
                            <li className='flex lg:justify-between justify-center items-center hover:text-[#FB2E86] duration-300 ease-in-out relative group'>
                                <p className='font-lt text-[16px] text-[#0D0E43] hover:text-[#FB2E86]'>Blog </p>
                                <h2 className='opacity-0 group-hover:opacity-100'><IoChevronDownOutline /></h2>
                            </li>
                            <li className='flex lg:justify-between justify-center items-center hover:text-[#FB2E86] duration-300 ease-in-out relative group'>
                                <p className='font-lt text-[16px] text-[#0D0E43] hover:text-[#FB2E86]'>Shop</p>
                                <h2 className='opacity-0 group-hover:opacity-100'><IoChevronDownOutline /></h2>
                            </li>
                            <li className='flex lg:justify-between justify-center items-center hover:text-[#FB2E86] duration-300 ease-in-out relative group'>
                                <p className='font-lt text-[16px] text-[#0D0E43] hover:text-[#FB2E86]'>Contact</p>
                                <h2 className='opacity-0 group-hover:opacity-100'><IoChevronDownOutline /></h2>
                            </li>
                        </ul>
                    </div>
                    <div className='lg:hidden text-[#0D0E43]' onClick={() => setShow(!show)}>
                        {show ? <RxCross2 /> : <FaBarsStaggered />}
                    </div>
                    <div className='lg:w-[25%] ms-auto flex relative'>
                        <input type='text' className='w-[250px] py-1.5 bg-[#D9D9D9]'></input>
                        <input type='text' className='w-[50px] py-1.5 bg-[#FB2E86]'></input>
                        <LuSearch className='right-[20px] top-[10px] absolute' />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navber
