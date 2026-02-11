import React from 'react'
import Container from './Container'
import tre1 from "../assets/tre1.png"
import tre2 from "../assets/tre2.png"
import tre3 from "../assets/tre3.png"
import tre4 from "../assets/tre4.png"
import tre5 from "../assets/tre5.png"
import tre6 from "../assets/tre6.png"

function Trending() {
  return (
    <div className='py-[50px]'>
      <Container>
        <div className=''>
          <h2 className='font-js text-[42px] font-bold text-[#151875] text-center'>Trending Products</h2>
        </div>
        <div className='flex flex-wrap justify-between items-center mt-7'>
          <div className='py-[11px] lg:w-[23%] w-[48%] bg-[#FFFFFF] shadow-2xl shadow-[#31208A0D]'>
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
          <div className='py-[11px] lg:w-[23%] w-[48%] bg-[#FFFFFF] shadow-2xl shadow-[#31208A0D]'>
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
          <div className='py-[11px] lg:w-[23%] mt-5 lg:mt-0 w-[48%] bg-[#FFFFFF] shadow-2xl shadow-[#31208A0D]'>
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
          <div className='py-[11px] lg:w-[23%] mt-5 lg:mt-0 w-[48%] bg-[#FFFFFF] shadow-2xl shadow-[#31208A0D]'>
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
        <div className='flex justify-between py-[40px]'>
          <div className='w-[35%] bg-[#FFF6FB] p-[20px] '>
            <h2 className='font-js font-bold text-[#151875] text-[20px]'>23% off in all products</h2>
            <div className='flex justify-between'>
              <div className='w-[18%]'>
              <p className='font-js text-[#FB2E86] text-[14px] border-b border-[#FB2E86]'>Shop Now</p>
              </div>
              <img className='w-[60%]' src={tre5}></img>
            </div>
          </div>
          <div className='w-[35%] bg-[#EEEFFB] p-[20px] '>
            <h2 className='font-js font-bold text-[#151875] text-[20px]' >23% off in all products</h2>
            <p className='font-js w-[27%] text-[#FB2E86] text-[14px] border-b border-[#FB2E86]'>View Collection</p>
            <img src={tre6} className='ms-auto pt-[20px]'></img>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Trending