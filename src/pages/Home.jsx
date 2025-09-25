import React from 'react'
import Header from '../compnents/Header'
import Navber from '../compnents/Navber'
import Featured from '../compnents/Featured'
import Leatest from '../compnents/Leatest'
import Trending from '../compnents/Trending'

function Home() {
  return (
    <>
      <Header />
      <Navber />
      <Featured/>
      <Leatest/>
      <Trending/>
    </>
  )
}

export default Home