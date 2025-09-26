import React from 'react'
import Container from './Container'
import tre1 from "../assets/tre1.png"
import tre2 from "../assets/tre2.png"
import tre3 from "../assets/tre3.png"
import tre4 from "../assets/tre4.png"

function Trending() {
  return (
    <div className='lg:py-[50px] py-0'>
      <Container>
        <div className=''>
          <h2 className='font-js text-[42px] font-bold text-[#151875] text-center '>Trending Products</h2>
        </div>
        <div className='flex flex-wrap justify-between items-center mt-7'>
          <div className='py-[11px] lg:w-[23%] w-[45%] bg-[#FFFFFF] shadow-2xl shadow-[#31208A0D]'>
            <div className='h-[244px] flex justify-center items-center'>
              <img src={tre1}></img>
            </div>
            <div className='py-[10px] text-center'>
              <h2 className='font-lt text-[16px] text-[#151875] font-bold'>Cantilever chair</h2>
              <div className='flex justify-center items-center gap-1.5'>
                <p className='font-js text-[14px] text-[#151875] '>$26.00 </p>
                <div className=' relative'>
                  <p className='font-js text-[14px] text-[#1518754D]'>$42.00</p>
                  <div className='h-[1px] w-[45px] bg-[#1518754D] top-2.5 absolute'></div>
                </div>
              </div>
            </div>
          </div>
          <div className='py-[11px] lg:w-[23%] w-[45%] bg-[#FFFFFF] shadow-2xl shadow-[#31208A0D]'>
            <div className='h-[244px] flex justify-center items-center'>
              <img src={tre2}></img>
            </div>
            <div className='py-[10px] text-center'>
              <h2 className='font-lt text-[16px] text-[#151875] font-bold'>Cantilever chair</h2>
              <div className='flex justify-center items-center gap-1.5'>
                <p className='font-js text-[14px] text-[#151875] '>$26.00 </p>
                <div className=' relative'>
                  <p className='font-js text-[14px] text-[#1518754D]'>$42.00</p>
                  <div className='h-[1px] w-[45px] bg-[#1518754D] top-2.5 absolute'></div>
                </div>
              </div>
            </div>
          </div>
          <div className='py-[11px] lg:w-[23%] mt-5 w-[45%] bg-[#FFFFFF] shadow-2xl shadow-[#31208A0D]'>
            <div className='h-[244px] flex justify-center items-center'>
              <img src={tre3}></img>
            </div>
            <div className='py-[10px] text-center'>
              <h2 className='font-lt text-[16px] text-[#151875] font-bold'>Cantilever chair</h2>
              <div className='flex justify-center items-center gap-1.5'>
                <p className='font-js text-[14px] text-[#151875] '>$26.00 </p>
                <div className=' relative'>
                  <p className='font-js text-[14px] text-[#1518754D]'>$42.00</p>
                  <div className='h-[1px] w-[45px] bg-[#1518754D] top-2.5 absolute'></div>
                </div>
              </div>
            </div>
          </div>
          <div className='py-[11px] lg:w-[23%] mt-5 w-[45%] bg-[#FFFFFF] shadow-2xl shadow-[#31208A0D]'>
            <div className='h-[244px] w-full flex justify-center items-center'>
              <img src={tre4}></img>
            </div>
            <div className='py-[10px] text-center'>
              <h2 className='font-lt text-[16px] text-[#151875] font-bold'>Cantilever chair</h2>
              <div className='flex justify-center items-center gap-1.5'>
                <p className='font-js text-[14px] text-[#151875] '>$26.00 </p>
                <div className=' relative'>
                  <p className='font-js text-[14px] text-[#1518754D]'>$42.00</p>
                  <div className='h-[1px] w-[45px] bg-[#1518754D] top-2.5 absolute'></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Container>
    </div>
  )
}

export default Trending