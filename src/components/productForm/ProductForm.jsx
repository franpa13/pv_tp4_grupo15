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
        <input type="text" name="descripcion" value={producto.descripcion} onChange={handleChange} placeholder="Descripción" required />
        <input type="number" name="precioUnitario" value={producto.precioUnitario} onChange={handleChange} placeholder="Precio Unitario" required />
        <input type="number" name="descuento" value={producto.descuento} onChange={handleChange} placeholder="Descuento %" required />
        <input type="number" name="stock" value={producto.stock} onChange={handleChange} placeholder="Stock" required />
        <p>Precio con descuento: ${producto.precioConDescuento.toFixed(2)}</p>
        <button type="submit">{isEditing ? "Actualizar Producto" : "Agregar Producto"}</button>
      </form>
    );
};

export default ProductForm;
