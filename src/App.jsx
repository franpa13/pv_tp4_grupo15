
import { useState } from 'react'
import './App.css'
import { ProductForm, ProductList } from './components'
function App() {
  const [products, setProducts] = useState([])
  return (
    <>
      <ProductForm></ProductForm>
      <ProductList></ProductList>
    </>
  )
}

export default App
