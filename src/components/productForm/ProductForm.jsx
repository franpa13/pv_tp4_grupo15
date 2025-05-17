import { useState } from "react";

const ProductForm = ({ addProduct, updateProduct, isEditing, productToEdit }) => {
    const [producto, setProducto] = useState(productToEdit || { descripcion: "", precio: 0, descuento: 0 });

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isEditing) {
            updateProduct(producto); // Si está editando, actualiza el producto
        } else {
            addProduct({ ...producto, id: Date.now() }); // Si es nuevo, lo agrega
        }
        setProducto({ descripcion: "", precio: 0, descuento: 0 }); // Limpia el formulario
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={producto.descripcion} onChange={(e) => setProducto({ ...producto, descripcion: e.target.value })} placeholder="Descripción" required />
            <input type="number" value={producto.precio} onChange={(e) => setProducto({ ...producto, precio: e.target.value })} placeholder="Precio" required />
            <input type="number" value={producto.descuento} onChange={(e) => setProducto({ ...producto, descuento: e.target.value })} placeholder="Descuento %" required />
            <button type="submit">{isEditing ? "Actualizar Producto" : "Agregar Producto"}</button>
        </form>
    );
};

export default ProductForm;
