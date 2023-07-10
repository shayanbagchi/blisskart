import React from 'react'
import Navbar from './navbar.component'
import SearchHero from './search.component'
import Catagories from './catagories.component'
import BestSeller from './bestseller.component'
import MBestSeller from './m.bestseller.component'
import Footer from './footer.component'

function Home() {
  return (
    <div className="flex flex-col font-poppins">
        <Navbar/>
        <SearchHero/>
        <Catagories/>
        <MBestSeller/>
        <BestSeller/>
        <Footer/>
    </div>
  )
}

export default Home