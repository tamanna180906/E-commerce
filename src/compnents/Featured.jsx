
import React from 'react'
import Container from './Container'
import Slider from 'react-slick';
import fea1 from "../assets/fea1.png"
import fea2 from "../assets/fea2.png"
import fea3 from "../assets/fea3.png"
import fea4 from "../assets/fea4.png"
import ban from "../assets/ban.png"
import { FiShoppingCart } from 'react-icons/fi';
import { FaRegHeart } from 'react-icons/fa';
import { LuSearchX } from 'react-icons/lu';

function Featured() {

    return (
        <div className=''>
            <div>
                <img src={ban}></img>
            </div>
            <Container>
                <div className='lg:py-[100px] py-[30px]'>
                <h2 className='text-center text-[#1A0B5B] lg:text-[42px] text-[30px] font-lt font-bold'>Featured Products</h2>
                <div className='pt-[50px] flex flex-wrap justify-between'>
                    <div className='lg:w-[23%] w-[48%] group relative bg-[#F6F7FB]'>
                        <div className='h-[275px] pt-[50px]'>
                        <img src={fea1} className='mx-auto'></img>
                        </div>
                        <div className='w-full text-center py-[10px] bg-[#FFFFFF] group-hover:bg-[#2F1AC4] absolute duration-300 ease-in-out'>
                            <h2 className='text-[#FB2E86] text-[18px] font-lt font-bold group-hover:text-[#FFFFFF] duration-300 ease-in-out'>Cantilever chair</h2>
                            <p className='text-[#151875] text-[14px] font-lt group-hover:text-[#FFFFFF]  duration-300 ease-in-out'>Code - Y523201</p>
                            <p className='text-[#151875] text-[14px] font-lt group-hover:text-[#FFFFFF]  duration-300 ease-in-out'>$42.00</p>
                        </div>
                        <div className='top-2 left-2 absolute opacity-0 group-hover:opacity-100 flex gap-2'>
                            <div className='h-[25px] w-[25px] rounded-full text-[#1389FF] hover:text-[#2F1AC4] hover:bg-[#EEEFFB] relative duration-300 ease-in-out'>
                                <FiShoppingCart className='top-[6px] left-[2px] absolute'/>
                            </div>
                                <div className='h-[25px] w-[25px] rounded-full text-[#1389FF] hover:text-[#2F1AC4] hover:bg-[#EEEFFB] relative duration-300 ease-in-out'>
                                <FaRegHeart className='top-[6px] left-[4px] absolute'/>
                            </div>
                                <div className='h-[25px] w-[25px] rounded-full text-[#1389FF] hover:text-[#2F1AC4] hover:bg-[#EEEFFB] relative duration-300 ease-in-out'>
                                <LuSearchX className='top-[6px] left-[4px] absolute'/>
                            </div>
                        </div>
                        <div className='bottom-2 left-[70px] absolute opacity-0 group-hover:opacity-100'>
                            <button className='py-2 px-5 bg-[#08D15F] text-[#FFFFFF] rounded-1xl duration-300 ease-in-out'>View Details</button>
                        </div>
                    </div>
                     <div className='lg:w-[23%] w-[48%] group relative shadow shadow-[#0000001A] bg-[#F6F7FB]'>
                        <div className='h-[275px] pt-[50px]'>
                        <img src={fea2} className='mx-auto'></img>
                        </div>
                        <div className='w-full text-center py-[10px] bg-[#FFFFFF] group-hover:bg-[#2F1AC4] absolute duration-300 ease-in-out'>
                            <h2 className='text-[#FB2E86] text-[18px] font-lt font-bold group-hover:text-[#FFFFFF] duration-300 ease-in-out'>Cantilever chair</h2>
                            <p className='text-[#151875] text-[14px] font-lt group-hover:text-[#FFFFFF]  duration-300 ease-in-out'>Code - Y523201</p>
                            <p className='text-[#151875] text-[14px] font-lt group-hover:text-[#FFFFFF]  duration-300 ease-in-out'>$42.00</p>
                        </div>
                        <div className='top-2 left-2 absolute opacity-0 group-hover:opacity-100 flex gap-2'>
                            <div className='h-[25px] w-[25px] rounded-full text-[#1389FF] hover:text-[#2F1AC4] hover:bg-[#EEEFFB] relative duration-300 ease-in-out'>
                                <FiShoppingCart className='top-[6px] left-[2px] absolute'/>
                            </div>
                                <div className='h-[25px] w-[25px] rounded-full text-[#1389FF] hover:text-[#2F1AC4] hover:bg-[#EEEFFB] relative duration-300 ease-in-out'>
                                <FaRegHeart className='top-[6px] left-[4px] absolute'/>
                            </div>
                                <div className='h-[25px] w-[25px] rounded-full text-[#1389FF] hover:text-[#2F1AC4] hover:bg-[#EEEFFB] relative duration-300 ease-in-out'>
                                <LuSearchX className='top-[6px] left-[4px] absolute'/>
                            </div>
                        </div>
                        <div className='bottom-2 left-[70px] absolute opacity-0 group-hover:opacity-100'>
                            <button className='py-2 px-5 bg-[#08D15F] text-[#FFFFFF] rounded-1xl duration-300 ease-in-out'>View Details</button>
                        </div>
                    </div>
                     <div className='lg:w-[23%] w-[48%] mt-[100px] lg:mt-0 group relative bg-[#F6F7FB]'>
                        <div className='h-[275px] pt-[50px]'>
                        <img src={fea3} className='mx-auto'></img>
                        </div>
                        <div className='w-full text-center py-[10px] bg-[#FFFFFF] group-hover:bg-[#2F1AC4] absolute duration-300 ease-in-out'>
                            <h2 className='text-[#FB2E86] text-[18px] font-lt font-bold group-hover:text-[#FFFFFF] duration-300 ease-in-out'>Cantilever chair</h2>
                            <p className='text-[#151875] text-[14px] font-lt group-hover:text-[#FFFFFF]  duration-300 ease-in-out'>Code - Y523201</p>
                            <p className='text-[#151875] text-[14px] font-lt group-hover:text-[#FFFFFF]  duration-300 ease-in-out'>$42.00</p>
                        </div>
                        <div className='top-2 left-2 absolute opacity-0 group-hover:opacity-100 flex gap-2'>
                            <div className='h-[25px] w-[25px] rounded-full text-[#1389FF] hover:text-[#2F1AC4] hover:bg-[#EEEFFB] relative duration-300 ease-in-out'>
                                <FiShoppingCart className='top-[6px] left-[2px] absolute'/>
                            </div>
                                <div className='h-[25px] w-[25px] rounded-full text-[#1389FF] hover:text-[#2F1AC4] hover:bg-[#EEEFFB] relative duration-300 ease-in-out'>
                                <FaRegHeart className='top-[6px] left-[4px] absolute'/>
                            </div>
                                <div className='h-[25px] w-[25px] rounded-full text-[#1389FF] hover:text-[#2F1AC4] hover:bg-[#EEEFFB] relative duration-300 ease-in-out'>
                                <LuSearchX className='top-[6px] left-[4px] absolute'/>
                            </div>
                        </div>
                        <div className='bottom-2 left-[70px] absolute opacity-0 group-hover:opacity-100'>
                            <button className='py-2 px-5 bg-[#08D15F] text-[#FFFFFF] rounded-1xl duration-300 ease-in-out'>View Details</button>
                        </div>
                    </div>
                     <div className='lg:w-[23%] w-[48%] mt-[100px] lg:mt-0   group relative bg-[#F6F7FB]'>
                        <div className='h-[275px] pt-[50px]'>
                        <img src={fea4} className='mx-auto'></img>
                        </div>
                        <div className='w-full text-center py-[10px] bg-[#FFFFFF] group-hover:bg-[#2F1AC4] absolute duration-300 ease-in-out'>
                            <h2 className='text-[#FB2E86] text-[18px] font-lt font-bold group-hover:text-[#FFFFFF] duration-300 ease-in-out'>Cantilever chair</h2>
                            <p className='text-[#151875] text-[14px] font-lt group-hover:text-[#FFFFFF]  duration-300 ease-in-out'>Code - Y523201</p>
                            <p className='text-[#151875] text-[14px] font-lt group-hover:text-[#FFFFFF]  duration-300 ease-in-out'>$42.00</p>
                        </div>
                        <div className='top-2 left-2 absolute opacity-0 group-hover:opacity-100 flex gap-2'>
                            <div className='h-[25px] w-[25px] rounded-full text-[#1389FF] hover:text-[#2F1AC4] hover:bg-[#EEEFFB] relative duration-300 ease-in-out'>
                                <FiShoppingCart className='top-[6px] left-[2px] absolute'/>
                            </div>
                                <div className='h-[25px] w-[25px] rounded-full text-[#1389FF] hover:text-[#2F1AC4] hover:bg-[#EEEFFB] relative duration-300 ease-in-out'>
                                <FaRegHeart className='top-[6px] left-[4px] absolute'/>
                            </div>
                                <div className='h-[25px] w-[25px] rounded-full text-[#1389FF] hover:text-[#2F1AC4] hover:bg-[#EEEFFB] relative duration-300 ease-in-out'>
                                <LuSearchX className='top-[6px] left-[4px] absolute'/>
                            </div>
                        </div>
                        <div className='bottom-2 left-[70px] absolute opacity-0 group-hover:opacity-100'>
                            <button className='py-2 px-5 bg-[#08D15F] text-[#FFFFFF] rounded-1xl duration-300 ease-in-out'>View Details</button>
                        </div>
                    </div>
                </div>
                </div>
            </Container>
        </div>
    )
}

export default Featured