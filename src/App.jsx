import { useState } from "react";
import "./App.css";
import { ProductForm, ProductList } from "./components";
function App() {
  const [products, setProducts] = useState([
    {
      id: Date.now(),
      name: "Lentejas",
      description: "lentejas ",
      discount: 5,
      price: 5000,
      priceDiscount: 5000,
      stock: 5000,
    },
    {
      id: Date.now(),
      name: "Arroz",
      description: "arroz Salvador",
      discount: 5,
      priceDiscount: 5000,
      price: 2000,
      stock: 2000,
    },
    {
      id: Date.now(),
      name: "Fideos",
      description: "fideos Lucheti",
      discount: 5,
      priceDiscount: 5000,
      price: 3000,
      stock: 3000,
    },
  ]);
  return (
    <>
      <ProductForm products={products} setProducts={setProducts} ></ProductForm>
      <ProductList products={products}></ProductList>
    </>
  );
}

export default App;
