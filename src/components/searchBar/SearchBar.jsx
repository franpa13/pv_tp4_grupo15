import { useState } from "react";
import { searchProduct } from '../services/productoService.js';



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
            {sProducts.length > 0 && (
                <div>
                    <h3>Resultados de la búsqueda:</h3>
                    <ul>
                        {sProducts.map(product => (
                            <li key={product.id}>
                                ID: {product.id} - Nombre: {product.name} - Descripción: {product.description} - Descuento: {product.discount} - Precio: {product.price} - Stock: {product.stock}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {sProducts.length === 0 && query !== '' && <p>No se encontraron productos para "{query}".</p>}
        </div>
    );
}
