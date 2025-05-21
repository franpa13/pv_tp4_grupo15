import { useState } from "react";
import "./productItem.css";
import Modal from "../ui/modal/Modal.jsx";
import { Input, Snackbar, Button } from "../ui/index.js";

export const ProductItem = ({ product, onDeleteProduct, onUpdateProduct }) => {
  const { id, name, description, price, priceDiscount, stock, discount } = product;

  const [openModal, setOpenModal] = useState(false);
  const [productToEdit, setProductToEdit] = useState(product);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleDelete = () => {
    if (window.confirm(`¿Estás seguro de que deseas eliminar el producto "${name}"?`)) {
      onDeleteProduct(id);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedProd = {
      ...productToEdit,
      [name]: value,
    };

    const newPrice = parseFloat(updatedProd.price) || 0;
    const newDiscount = parseFloat(updatedProd.discount) || 0;
    const priceDiscount = newPrice - (newPrice * newDiscount) / 100;

    setProductToEdit({
      ...updatedProd,
      priceDiscount: priceDiscount.toFixed(2),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateProduct(productToEdit);
    setOpenModal(false);
    setOpenSnackbar(true);
  };

  return (
    <>
      <tr>
        <td>#{id.toString().slice(-4)}</td>
        <td>{name}</td>
        <td>{description}</td>
        <td>${price}</td>
        <td>{discount}</td>
        <td>${priceDiscount}</td>
        <td>{stock}</td>
        <td>
          <div className="actions-container">
            <Button variant="danger" size="small" onClick={handleDelete}>Eliminar</Button>
            <Button variant="primary" onClick={() => setOpenModal(true)} size="small">Editar</Button>
          </div>
        </td>
      </tr>

      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <span className="prod-edit">Editar <span>{product?.name}</span></span>
        <form onSubmit={handleSubmit} className="form-edit">
          <Input onChange={handleChange} value={productToEdit?.name} label="Nombre :" name="name" />
          <Input onChange={handleChange} value={productToEdit?.description} label="Descripcion :" name="description" />
          <Input onChange={handleChange} type="number" value={productToEdit?.price} label="Precio :" name="price" />
          <Input onChange={handleChange} type="number" value={productToEdit?.discount} label="Descuento (%):" name="discount" />
          <Input onChange={handleChange} type="number" value={productToEdit?.stock} label="Stock:" name="stock" />
          <Button type="submit" variant="submit">Guardar Cambios</Button>
        </form>
      </Modal>

      <Snackbar
        message="Producto editado con éxito ✅!"
        duration={2500}
        variant="edit"
        visible={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
      />
    </>
  );
};
