import { useState } from "react";
import "./App.css";
import { ProductForm, ProductList } from "./components";
import SearchBar from "./components/searchBar/SearchBar";
import { deleteProduct, updateProduct } from "./components/services/productoService";
import { searchProduct } from "./components/services/productoService";
function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDeleteProduct = (idToDelete) => {
    setProducts((prevProducts) => deleteProduct(prevProducts, idToDelete));
  };

  const handleUpdateProduct = (updatedProduct) => {
    setProducts((prevProducts) => updateProduct(prevProducts, updatedProduct));
  };

  const visibleProducts = searchProduct(products,searchTerm)

  return (
    <>
      <ProductForm products={products} setProducts={setProducts} />
      <SearchBar search={searchTerm} onSearch={setSearchTerm} />
      <ProductList
        products={visibleProducts}
        onDeleteProduct={handleDeleteProduct}
        onUpdateProduct={handleUpdateProduct}
      />
    </>
  );
}

export default App;
