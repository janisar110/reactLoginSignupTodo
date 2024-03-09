import React from 'react'
import Todoapp from '../../components/Todoapp'
import CMNavbar from '../../components/CMNavbar'
import CMFooter from '../../components/CMFooter'
import Hero from '../../components/Hero'
import Products from '../Products/Index'
const Home = () => {
  return (
    <div>
      <CMNavbar/>
      {/* <Hero/> */}
      <Products/>
      <CMFooter/>
    </div>
  )
}

export default Home
