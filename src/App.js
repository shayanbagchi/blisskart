import React, { useState, useEffect } from "react";
import { auth, fetchUserData, fetchProducts } from "./utils/firebase.util";
import { Route, Routes, useParams, useLocation } from "react-router-dom";
import Home from "./components/Home/home.component";
import ProductList from "./components/Product-List/product-list.component";
import Product from "./components/Product/product.component";
import ProductUpload from "./components/admin/productUpload.admin";
import User from "./components/Account/user.component";
import Wishlist from "./components/Wishlist/wishlist.component";

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
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);

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

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      console.log("Unsubscribe: " + user);
    });

    return () => {
      unsubscribe();
    };
  }, [user]);

  useEffect(() => {
    if (user) {
      fetchUserData(user.uid)
        .then((userData) => {
          setUserData(userData);
          console.log("App: " + userData.displayName);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [user]);

  // Scroll to the top whenever the location changes
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const bestsellers = filterProductsByCategory(products, "Bestseller");

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            products={bestsellers}
            userData={userData}
            setUserData={setUserData}
          />
        }
      />
      <Route
        path="/wishlist"
        element={
          <Wishlist
            userData={userData}
            setUserData={setUserData}
            products={products}
          />
        }
      />
      <Route path="/user" element={<User />} />
      <Route
        path="/:categoryName"
        element={
          <CategoryProducts
            userData={userData}
            setUserData={setUserData}
            products={products}
          />
        }
      />
      <Route
        path="/:productId/:productTitle"
        element={
          <ProductDetails
            userData={userData}
            setUserData={setUserData}
            products={products}
            bestsellers={bestsellers}
          />
        }
      />
      <Route path="/admin" element={<ProductUpload />} />
    </Routes>
  );
}

function CategoryProducts({ userData, setUserData, products }) {
  const { categoryName } = useParams();
  const category = categoryMapping[categoryName];
  const filteredProducts = filterProductsByCategory(products, category);

  return (
    <ProductList
      category={category}
      products={filteredProducts}
      userData={userData}
      setUserData={setUserData}
    />
  );
}

// Utility function to filter products by category
function filterProductsByCategory(products, category) {
  return products.filter((product) => product.categories.includes(category));
}

function ProductDetails({ userData, setUserData, products, bestsellers }) {
  const { productId } = useParams();

  // Find the product with the matching title and category
  const product = products.find((product) => product.id === productId);

  if (!product) {
    // Handle case when product is not found
    return <div>Product not found</div>;
  }

  return (
    <Product
      product={product}
      bestsellers={bestsellers}
      userData={userData}
      setUserData={setUserData}
    />
  );
}

export default App;
