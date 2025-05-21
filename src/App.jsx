
import { useState } from "react";
import "./App.css";
import { ProductForm, ProductList } from "./components";
import SearchBar from "./components/searchBar/SearchBar"; 

function App() {
  const [products, setProducts] = useState([
    {
      id: Date.now() + 1,
      name: "Lentejas",
      description: "lentejas ",
      discount: 5,
      price: 5000,
      priceDiscount: 5000,
      stock: 5000,
    },
    {
      id: Date.now() + 2,
      name: "Arroz",
      description: "arroz Salvador",
      discount: 5,
      priceDiscount: 5000,
      price: 2000,
      stock: 2000,
    },
    {
      id: Date.now() + 3,
      name: "Fideos",
      description: "fideos Lucheti",
      discount: 5,
      priceDiscount: 5000,
      price: 3000,
      stock: 3000,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState(""); //  MOVER

  const filteredProducts = products.filter((product) => { //MOVER
    const lowerSearch = searchTerm.toLowerCase();
    return (
      product.description.toLowerCase().includes(lowerSearch) || 
      product.id.toString().includes(lowerSearch)
    );
  });

  return (
    <>
      <ProductForm products={products} setProducts={setProducts} />
      <SearchBar onSearch={setSearchTerm} />
      <ProductList products={filteredProducts} setProducts={setProducts} />
    </>
  );
}

export default App;