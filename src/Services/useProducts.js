import { useState, useCallback } from "react";
import { addProduct, updateProduct, deleteProduct, searchProduct } from "../services/productService";

export const useProducts = () => {
    const [products, setProducts] = useState([]);  // Estado inicial vacío

    const handleAddProduct = useCallback((newProduct) => {
        setProducts(prevProducts => addProduct(prevProducts, newProduct));
    }, []);

    const handleUpdateProduct = useCallback((updatedProduct) => {
        setProducts(prevProducts => updateProduct(prevProducts, updatedProduct));
    }, []);

    const handleDeleteProduct = useCallback((productId) => {
        setProducts(prevProducts => deleteProduct(prevProducts, productId));
    }, []);

    const handleSearchProduct = useCallback((query) => {
        return searchProduct(products, query);
    }, [products]);

    return { products, handleAddProduct, handleUpdateProduct, handleDeleteProduct, handleSearchProduct };
};
