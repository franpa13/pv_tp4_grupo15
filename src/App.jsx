import { useState } from "react";
import "./App.css";
import { ProductForm, ProductList } from "./components";
function App() {
  const [products, setProducts] = useState([]);
  return (
    <>
      <ProductForm products={products} setProducts={setProducts} ></ProductForm>
      <ProductList products={products} setProducts={setProducts}></ProductList>
    </>
  );
}

export default App;
