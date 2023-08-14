import React, { useState, useEffect } from "react";
import { fetchProducts } from "./utils/firebase.util";
import { Route, Routes, useParams, useLocation } from "react-router-dom";
import Home from "./components/Home/home.component";
import ProductList from "./components/Product-List/product-list.component";
import Product from "./components/Product/product.component";
import ProductUpload from "./components/admin/productUpload.admin";
import User from "./components/Account/user.component";

// Mapping object for URL parameters and category names
const categoryMapping = {
  Bestseller: "Bestseller",
  Home_And_Living_Decor: "Home & Living Décor",
  Personalized: "Personalized",
  Electronics: "Electronics",
  Fashion: "Fashion",
  Figurines_And_Accessories: "Figurines & Accessories",
  Posters_And_Prints: "Posters & Prints",
};

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
        console.log("Products fetched successfully");
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProductsData();
  }, []);

  // Scroll to the top whenever the location changes
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const bestsellers = filterProductsByCategory(products, 'Bestseller');

  return (
    <Routes>
      <Route path="/" element={<Home products={bestsellers} />} />
      <Route path="/user" element={<User/>}/>
      <Route path="/:categoryName" element={<CategoryProducts products={products} />} />
      <Route path="/:productId/:productTitle" element={<ProductDetails products={products} bestsellers={bestsellers}/>} />
      <Route path="/admin" element={<ProductUpload />} />
    </Routes>
  );
}

function CategoryProducts({ products }) {
  const { categoryName } = useParams();
  const category = categoryMapping[categoryName];
  const filteredProducts = filterProductsByCategory(products, category);

  return <ProductList category={category} products={filteredProducts} />;
}

// Utility function to filter products by category
function filterProductsByCategory(products, category) {
  return products.filter((product) => product.categories.includes(category));
}

function ProductDetails({ products, bestsellers }) {
  const { productId } = useParams();

  // Find the product with the matching title and category
  const product = products.find(
    (product) =>
      product.id === productId
  );

  if (!product) {
    // Handle case when product is not found
    return <div>Product not found</div>;
  }

  return <Product product={product} bestsellers={bestsellers} />;
}

export default App;
