import React from 'react'
import Container from './Container'
import what1 from "../assets/what1.png"
import what2 from "../assets/what2.png"
import what3 from "../assets/what3.png"
import what4 from "../assets/what4.png"
import what5 from "../assets/what5.png"


function What() {
    return (
        <>
        <div className='lg:py-[100px] py-[50px]'>
            <Container>
                <h2 className='font-js text-[42px] font-bold text-[#151875] text-center '>What Shopex Offer!</h2>
                <div className='lg:mt-[30px] flex flex-wrap justify-between items-center'>
                    <div className='bg-[#FFFFFF] shadow-2xl shadow-[#31208A0D] lg:w-[23%] w-[48%] py-[50px] text-center'>
                        <div className='flex justify-center'>
                            <img src={what1}></img>
                        </div>
                        <h2 className='font-js text-[22px] text-[#151875] pt-[20px]'>24/7 Support</h2>
                        <p className='font-lt text-[16px] text-[#1A0B5B4D] pt-[15px]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                      <div className='bg-[#FFFFFF] shadow-2xl shadow-[#31208A0D] lg:w-[23%] w-[48%] py-[50px] text-center'>
                        <div className='flex justify-center'>
                            <img src={what2}></img>
                        </div>
                        <h2 className='font-js text-[22px] text-[#151875] pt-[20px]'>24/7 Support</h2>
                        <p className='font-lt text-[16px] text-[#1A0B5B4D] pt-[15px]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                      <div className='bg-[#FFFFFF] shadow-2xl shadow-[#31208A0D] lg:w-[23%] w-[48%] mt-[20px] py-[50px] text-center'>
                        <div className='flex justify-center'>
                            <img src={what3}></img>
                        </div>
                        <h2 className='font-js text-[22px] text-[#151875] pt-[20px]'>24/7 Support</h2>
                        <p className='font-lt text-[16px] text-[#1A0B5B4D] pt-[15px]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                      <div className='bg-[#FFFFFF] shadow-2xl shadow-[#31208A0D] lg:w-[23%] w-[48%] mt-[20px] py-[50px] text-center'>
                        <div className='flex justify-center'>
                            <img src={what4}></img>
                        </div>
                        <h2 className='font-js text-[22px] text-[#151875] pt-[20px]'>24/7 Support</h2>
                        <p className='font-lt text-[16px] text-[#1A0B5B4D] pt-[15px]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                </div>
            </Container>
        </div>
        <div className='bg-[#F1F0FF]'>
            <Container>
                <div className='flex justify-center items-center'>
                    <img src={what5}></img>
                </div>
            </Container>
        </div>
        </>
    )
}

export default What