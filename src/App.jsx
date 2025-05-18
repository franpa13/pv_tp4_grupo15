import { useState } from "react";
import "./App.css";
import { ProductForm, ProductList } from "./components";
function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Lentejas",
      description: "lentejas ",
      price: 5000,
      stock: 5000,
    },
    {
      id: 2,
      name: "Arroz",
      description: "arroz Salvador",
      price: 2000,
      stock: 2000,
    },
    {
      id: 3,
      name: "Fideos",
      description: "fideos Lucheti",
      price: 3000,
      stock: 3000,
    },
  ]);
  return (
    <>
      <ProductForm></ProductForm>
      <ProductList></ProductList>
    </>
  );
}

export default App;
