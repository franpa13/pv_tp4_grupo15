
import { useEffect, useState } from "react";
import "./App.css";
import { ProductForm, ProductList } from "./components";
import SearchBar from "./components/searchBar/SearchBar";

function App() {
  const [products, setProducts] = useState([

  ]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); //  MOVER


  useEffect(() => {
    const filtered = products.filter((prod) =>
      prod.id.toString().includes(searchTerm) ||
      prod.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);



  return (
    <>
      <ProductForm products={products} setProducts={setProducts} />
      <SearchBar search={searchTerm} onSearch={setSearchTerm} />
      <ProductList products={filteredProducts} setProducts={setProducts} />
    </>
  );
}

export default App;