import React from 'react'
import Container from './Container'
import tre1 from "../assets/tre1.png"

function Trending() {
  return (
    <div>
      <Container>
        <div className='py-[100px]'>
          <h2 className='font-js text-[42px] font-bold text-[#151875] text-center '>Trending Products</h2>
        </div>
        <div className=''>
          <div className='py-[11px] w-[23%] bg-amber-300'>
            <div className='h-[244px] flex justify-center items-center'>
              <img src={tre1}></img>
            </div>
          </div>
        </div>

      </Container>
    </div>
  )
}

export default Trending