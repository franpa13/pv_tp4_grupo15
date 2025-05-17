
import { useState } from 'react'
import './App.css'
import  ProductForm from './components/productForm/ProductForm.jsx'
import { useProducts } from './Services/useProducts.js';





function App() {
  const { products, handleAddProduct, handleUpdateProduct } = useProducts();
  const [isEditing, setIsEditing] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);

  const startEditing = (product) => {
      setProductToEdit(product);
      setIsEditing(true);
  };

  return (
    <>
      <h1>Gestión de Productos</h1>
            <ProductForm addProduct={handleAddProduct} updateProduct={handleUpdateProduct} isEditing={isEditing} productToEdit={productToEdit} />
            
    </>
  )
}

export default App
