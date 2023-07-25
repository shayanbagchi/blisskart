import React, { useState, useEffect } from "react";
import { fetchProducts } from "../utils/firebase.util";

import Navbar from './navbar.component'
import SearchHero from './search.component'
import Catagories from './catagories.component'
import BestSeller from './bestseller.component'
import MBestSeller from './m.bestseller.component'
import Footer from './footer.component'

const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchProductsData = async () => {
    try {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
      console.log("Products fetched successfully");
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProductsData();
  }, []);

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