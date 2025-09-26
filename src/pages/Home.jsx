import React from 'react'
import Header from '../compnents/Header'
import Navber from '../compnents/Navber'
import Featured from '../compnents/Featured'
import Leatest from '../compnents/Leatest'
import Trending from '../compnents/Trending'
import What from '../compnents/What'

function Home() {
  return (
    <>
      <Header />
      <Navber />
      <Featured />
      <Leatest />
      <What />
      <Trending />
    </>
  )
}

export default Home