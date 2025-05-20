import { useState } from "react";
import { searchProduct } from '../services/productoService.js'
import  ProductList  from "../ProductList/ProductList.jsx";



export const SearchBar = ({products}) => {
    
    const [query, setQuery] = useState('');
    const [sProducts, setSproducts] = useState([]);

    const handleSearchChange = (e) => {
        setQuery(e.target.value);
    }

    const handleSearch = (e) => {
        e.preventDefault(); 
        if (!products) { 
            setSproducts([]);
            return;
        }
        const results = searchProduct(products, query); 
        setSproducts(results); 
    }

    return (
        <div>
            <h2>Buscar productos</h2>
            <form onSubmit={handleSearch}>
                <input 
                    type="text" 
                    value={query} 
                    onChange={handleSearchChange} 
                    placeholder="Buscar por ID o descripción..." 
                    required 
                />
                <button type='submit'>Buscar</button>
            </form>
            <ul> {sProducts.map((product) => ( 
                <li key={product.id}> <strong>{product.descripcion}</strong> - Precio: ${product.precioConDescuento} </li> ))} 
            </ul>
        </div>
    );
}
