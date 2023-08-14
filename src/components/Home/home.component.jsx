import React from "react";
import Navbar from '../Navigation/navbar.component'
import SearchHero from '../Home/search.component'
import Catagories from '../Home/catagories.component'
import BestSeller from '../Home/bestseller.component'
import MBestSeller from '../Home/m.bestseller.component'
import Footer from '../Footer/footer.component'

const Home = ({products}) => {
  return (
    <div className="flex flex-col font-poppins">
        <Navbar/>
        <SearchHero/>
        <Catagories/>
        <MBestSeller products={products}/>
        <BestSeller products={products}/>
        <Footer/>
    </div>
  )
}

export default Home