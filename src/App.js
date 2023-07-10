import Home from "./components/home.component";
import { Route, Routes } from "react-router-dom";
import ProductList from "./components/product-list.component";
import Product from "./components/product.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/product-list" element={<ProductList/>}></Route>
      <Route path="/product" element={<Product/>}></Route>
    </Routes>
  );
}

export default App;
