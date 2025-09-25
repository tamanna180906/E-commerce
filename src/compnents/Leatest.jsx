import React, { useState } from 'react'
import Container from './Container'
import lea1 from "../assets/lea1.png"
import lea2 from "../assets/lea2.png"
import lea3 from "../assets/lea3.png"
import lea4 from "../assets/lea4.png"
import lea5 from "../assets/lea5.png"
import lea6 from "../assets/lea6.png"
import sale from "../assets/sale.png"
import { SiTruenas } from 'react-icons/si'
import { FiShoppingCart } from 'react-icons/fi'
import { FaRegHeart } from 'react-icons/fa'
import { LuSearchX } from 'react-icons/lu'

function Leatest() {
    let [one, setOne] = useState(true)
    let [two, setTwo] = useState(false)
    let [three, setThree] = useState(false)
    let [four, setFour] = useState(false)


    let newArrival = () => {
        setOne(true);
        setTwo(false);
        setThree(false);
        setFour(false);

    }

    let bestSeller = () => {
        setOne(false);
        setTwo(true);
        setThree(false);
        setFour(false);
    }

    let featured = () => {
        setOne(false);
        setTwo(false);
        setThree(true);
        setFour(false);
    }

    let specialOffer = () => {
        setOne(false);
        setTwo(false);
        setThree(false);
        setFour(true);
    }

    return (
        <div className='py-[50px]'>
            <Container>
                <h2 className='text-center text-[#1A0B5B] text-[42px] font-js font-bold'>Leatest Products</h2>
                <div className=' py-[30px]'>
                    <ul className='w-6/12 mx-auto flex justify-between'>
                        <li onClick={newArrival} className={`text-[#151875] text-[18px] font-lt ${one && "text-[#FB2E86] border-b-2 border-[#FB2E86]"} `}>New Arrival</li>
                        <li onClick={bestSeller} className={`text-[#151875] text-[18px] font-lt ${two && "text-[#FB2E86] border-b-2 border-[#FB2E86]"} `}>Best Seller</li>
                        <li onClick={featured} className={`text-[#151875] text-[18px] font-lt ${three && "text-[#FB2E86] border-b-2 border-[#FB2E86]"} `}>Featured</li>
                        <li onClick={specialOffer} className={`text-[#151875] text-[18px] font-lt ${four && "text-[#FB2E86] border-b-2 border-[#FB2E86]"} `}>Special Offer</li>
                    </ul>
                    <div className='py-[60px]'>
                        <div className='flex flex-wrap justify-between items-center'>
                            <div className='w-[32%] group relative'>
                                <div className=' h-[270px] bg-[#F7F7F7] group-hover:bg-transparent duration-300 ease-in-out'>
                                    <img src={lea1} className='mx-auto pt-5'></img>
                                </div>
                                <div className='flex justify-between items-center py-[5px]'>
                                    <h2 className='font-js text-[#151875] text-[16px] border-b-2 border-[#EEEFFB] '>Comfort Handy Craft</h2>
                                    <div className='flex justify-between items-center gap-5'>
                                        <p className='font-js text-[#151875] text-[14px]'>$42.00</p>
                                        <p className='font-js text-[#FB2448] text-[14px]'>$65.00</p>
                                    </div>
                                    <div className='bottom-[70px] left-2 absolute opacity-0 group-hover:opacity-100 duration-300 ease-in-out'>
                                        <div className='h-[25px] w-[25px] my-2 rounded-full text-[#1389FF] hover:text-[#2F1AC4] hover:bg-[#EEEFFB] relative duration-300 ease-in-out'>
                                            <FiShoppingCart className='top-[6px] left-[2px] absolute' />
                                        </div>
                                        <div className='h-[25px] w-[25px] my-2  rounded-full text-[#1389FF] hover:text-[#2F1AC4] hover:bg-[#EEEFFB] relative duration-300 ease-in-out'>
                                            <FaRegHeart className='top-[6px] left-[4px] absolute' />
                                        </div>
                                        <div className='h-[25px] w-[25px] my-2  rounded-full text-[#1389FF] hover:text-[#2F1AC4] hover:bg-[#EEEFFB] relative duration-300 ease-in-out'>
                                            <LuSearchX className='top-[6px] left-[4px] absolute' />
                                        </div>
                                    </div>
                                    <div className='top-5 left-2 absolute opacity-0 group-hover:opacity-100 duration-300 ease-in-out'>
                                        <img src={sale}></img>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[32%] group relative'>
                                <div className=' h-[270px] bg-[#F7F7F7] group-hover:bg-transparent duration-300 ease-in-out'>
                                    <img src={lea2} className='mx-auto bg-transparent pt-5'></img>
                                </div>
                                <div className='flex justify-between items-center py-[5px]'>
                                    <h2 className='font-js text-[#151875] text-[16px] border-b-2 border-[#EEEFFB] '>Comfort Handy Craft</h2>
                                    <div className='flex justify-between items-center gap-5'>
                                        <p className='font-js text-[#151875] text-[14px]'>$42.00</p>
                                        <p className='font-js text-[#FB2448] text-[14px]'>$65.00</p>
                                    </div>
                                    <div className='bottom-[70px] left-2 absolute opacity-0 group-hover:opacity-100 duration-300 ease-in-out'>
                                        <div className='h-[25px] w-[25px] my-2 rounded-full text-[#1389FF] hover:text-[#2F1AC4] hover:bg-[#EEEFFB] relative duration-300 ease-in-out'>
                                            <FiShoppingCart className='top-[6px] left-[2px] absolute' />
                                        </div>
                                        <div className='h-[25px] w-[25px] my-2  rounded-full text-[#1389FF] hover:text-[#2F1AC4] hover:bg-[#EEEFFB] relative duration-300 ease-in-out'>
                                            <FaRegHeart className='top-[6px] left-[4px] absolute' />
                                        </div>
                                        <div className='h-[25px] w-[25px] my-2  rounded-full text-[#1389FF] hover:text-[#2F1AC4] hover:bg-[#EEEFFB] relative duration-300 ease-in-out'>
                                            <LuSearchX className='top-[6px] left-[4px] absolute' />
                                        </div>
                                    </div>
                                    <div className='top-5 left-2 absolute opacity-0 group-hover:opacity-100 duration-300 ease-in-out'>
                                        <img src={sale}></img>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[32%] group relative'>
                                <div className=' h-[270px] bg-[#F7F7F7] group-hover:bg-transparent duration-300 ease-in-out'>
                                    <img src={lea3} className='mx-auto bg-transparent pt-5'></img>
                                </div>
                                <div className='flex justify-between items-center py-[5px]'>
                                    <h2 className='font-js text-[#151875] text-[16px] border-b-2 border-[#EEEFFB] '>Comfort Handy Craft</h2>
                                    <div className='flex justify-between items-center gap-5'>
                                        <p className='font-js text-[#151875] text-[14px]'>$42.00</p>
                                        <p className='font-js text-[#FB2448] text-[14px]'>$65.00</p>
                                    </div>
                                    <div className='bottom-[70px] left-2 absolute opacity-0 group-hover:opacity-100 duration-300 ease-in-out'>
                                        <div className='h-[25px] w-[25px] my-2 rounded-full text-[#1389FF] hover:text-[#2F1AC4] hover:bg-[#EEEFFB] relative duration-300 ease-in-out'>
                                            <FiShoppingCart className='top-[6px] left-[2px] absolute' />
                                        </div>
                                        <div className='h-[25px] w-[25px] my-2  rounded-full text-[#1389FF] hover:text-[#2F1AC4] hover:bg-[#EEEFFB] relative duration-300 ease-in-out'>
                                            <FaRegHeart className='top-[6px] left-[4px] absolute' />
                                        </div>
                                        <div className='h-[25px] w-[25px] my-2  rounded-full text-[#1389FF] hover:text-[#2F1AC4] hover:bg-[#EEEFFB] relative duration-300 ease-in-out'>
                                            <LuSearchX className='top-[6px] left-[4px] absolute' />
                                        </div>
                                    </div>
                                    <div className='top-5 left-2 absolute opacity-0 group-hover:opacity-100 duration-300 ease-in-out'>
                                        <img src={sale}></img>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[32%] pt-10 group relative'>
                                <div className=' h-[270px] bg-[#F7F7F7] group-hover:bg-transparent duration-300 ease-in-out'>
                                    <img src={lea4} className='mx-auto bg-transparent pt-5'></img>
                                </div>
                                <div className='flex justify-between items-center py-[5px]'>
                                    <h2 className='font-js text-[#151875] text-[16px] border-b-2 border-[#EEEFFB] '>Comfort Handy Craft</h2>
                                    <div className='flex justify-between items-center gap-5'>
                                        <p className='font-js text-[#151875] text-[14px]'>$42.00</p>
                                        <p className='font-js text-[#FB2448] text-[14px]'>$65.00</p>
                                    </div>
                                    <div className='bottom-[70px] left-2 absolute opacity-0 group-hover:opacity-100 duration-300 ease-in-out'>
                                        <div className='h-[25px] w-[25px] my-2 rounded-full text-[#1389FF] hover:text-[#2F1AC4] hover:bg-[#EEEFFB] relative duration-300 ease-in-out'>
                                            <FiShoppingCart className='top-[6px] left-[2px] absolute' />
                                        </div>
                                        <div className='h-[25px] w-[25px] my-2  rounded-full text-[#1389FF] hover:text-[#2F1AC4] hover:bg-[#EEEFFB] relative duration-300 ease-in-out'>
                                            <FaRegHeart className='top-[6px] left-[4px] absolute' />
                                        </div>
                                        <div className='h-[25px] w-[25px] my-2  rounded-full text-[#1389FF] hover:text-[#2F1AC4] hover:bg-[#EEEFFB] relative duration-300 ease-in-out'>
                                            <LuSearchX className='top-[6px] left-[4px] absolute' />
                                        </div>
                                    </div>
                                    <div className='top-10 left-2 absolute opacity-0 group-hover:opacity-100 duration-300 ease-in-out'>
                                        <img src={sale}></img>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[32%] pt-10 group relative'>
                                <div className=' h-[270px] bg-[#F7F7F7] group-hover:bg-transparent duration-300 ease-in-out'>
                                    <img src={lea5} className='mx-auto bg-transparent pt-5'></img>
                                </div>
                                <div className='flex justify-between items-center py-[5px]'>
                                    <h2 className='font-js text-[#151875] text-[16px] border-b-2 border-[#EEEFFB] '>Comfort Handy Craft</h2>
                                    <div className='flex justify-between items-center gap-5'>
                                        <p className='font-js text-[#151875] text-[14px]'>$42.00</p>
                                        <p className='font-js text-[#FB2448] text-[14px]'>$65.00</p>
                                    </div>
                                    <div className='bottom-[70px] left-2 absolute opacity-0 group-hover:opacity-100 duration-300 ease-in-out'>
                                        <div className='h-[25px] w-[25px] my-2 rounded-full text-[#1389FF] hover:text-[#2F1AC4] hover:bg-[#EEEFFB] relative duration-300 ease-in-out'>
                                            <FiShoppingCart className='top-[6px] left-[2px] absolute' />
                                        </div>
                                        <div className='h-[25px] w-[25px] my-2  rounded-full text-[#1389FF] hover:text-[#2F1AC4] hover:bg-[#EEEFFB] relative duration-300 ease-in-out'>
                                            <FaRegHeart className='top-[6px] left-[4px] absolute' />
                                        </div>
                                        <div className='h-[25px] w-[25px] my-2  rounded-full text-[#1389FF] hover:text-[#2F1AC4] hover:bg-[#EEEFFB] relative duration-300 ease-in-out'>
                                            <LuSearchX className='top-[6px] left-[4px] absolute' />
                                        </div>
                                    </div>
                                    <div className='top-10 left-2 absolute opacity-0 group-hover:opacity-100 duration-300 ease-in-out '>
                                        <img src={sale}></img>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[32%] pt-10 group relative'>
                                <div className=' h-[270px] bg-[#F7F7F7] group-hover:bg-transparent duration-300 ease-in-out'>
                                    <img src={lea6} className='mx-auto bg-transparent pt-5'></img>
                                </div>
                                <div className='flex justify-between items-center py-[5px]'>
                                    <h2 className='font-js text-[#151875] text-[16px] border-b-2 border-[#EEEFFB] '>Comfort Handy Craft</h2>
                                    <div className='flex justify-between items-center gap-5'>
                                        <p className='font-js text-[#151875] text-[14px]'>$42.00</p>
                                        <p className='font-js text-[#FB2448] text-[14px]'>$65.00</p>
                                    </div>
                                    <div className='bottom-[70px] left-2 absolute opacity-0 group-hover:opacity-100 duration-300 ease-in-out'>
                                        <div className='h-[25px] w-[25px] my-2 rounded-full text-[#1389FF] hover:text-[#2F1AC4] hover:bg-[#EEEFFB] relative duration-300 ease-in-out'>
                                            <FiShoppingCart className='top-[6px] left-[2px] absolute' />
                                        </div>
                                        <div className='h-[25px] w-[25px] my-2  rounded-full text-[#1389FF] hover:text-[#2F1AC4] hover:bg-[#EEEFFB] relative duration-300 ease-in-out'>
                                            <FaRegHeart className='top-[6px] left-[4px] absolute' />
                                        </div>
                                        <div className='h-[25px] w-[25px] my-2  rounded-full text-[#1389FF] hover:text-[#2F1AC4] hover:bg-[#EEEFFB] relative duration-300 ease-in-out'>
                                            <LuSearchX className='top-[6px] left-[4px] absolute' />
                                        </div>
                                    </div>
                                    <div className='top-10 left-2 absolute opacity-0 group-hover:opacity-100 duration-300 ease-in-out'>
                                        <img src={sale}></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {two && <div className=''>Seller</div>}
                        {three && <div className=''>Featured</div>}
                        {four && <div className=''>Offer</div>}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Leatest