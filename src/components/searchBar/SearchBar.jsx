import { useState } from "react";
import { searchProduct } from '../services/productoService.js'
import  ProductList  from "../components/ProductList/ProductList,jsx";



export const SearchBar = ({products}) => {
    
    const [query, setQuery] = useState('');
    const [sProducts, setSproducts] = useState([]);

    const handleSearchChange = (e) => {
        setQuery(e.target.value);
        setQuery(""); 
    }

    const handleSearch = (e) => {
        e.preventDefault();
        
    }

    return (
        <div>
            <h2>Buscar productos</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <input 
                    type="text" 
                    value={query} 
                    onChange={handleSearchChange} 
                    placeholder="Buscar por ID o descripción..." 
                    required 
                />
                <button onClick={handleSearch}>Buscar</button>
            </form>
                <ProductList sproduct={sProducts} setSproducts={setSproducts}  />
        </div>
    );
}
