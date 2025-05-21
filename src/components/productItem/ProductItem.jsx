//import { Button } from "../ui/button/Button";
import { deleteProduct, updateProduct } from "../services/productoService.js";
import "./productItem.css";
import Modal from "../ui/modal/Modal.jsx";
import { useState } from "react";
import { Input, Snackbar, Button } from "../ui/index.js";

export const ProductItem = ({ product, products, setProducts }) => {
  const { id, name, description, price, priceDiscount, stock, discount } = product
  const [openModal, setOpenModal] = useState(false)
  const [productToEdit, setProductToEdit] = useState(product)
  const [openSnackbar, setOpenSnackbar] = useState(false)
  // const [openDelete, setOpenDelete] = useState(false)


  const handleDelete = () => {
    if (window.confirm(`¿Estás seguro de que deseas eliminar el producto "${name}"?`)) {
      // setOpenDelete(true)
      const updatedProducts = deleteProduct(products, id);
      setProducts(updatedProducts);
    }
  };

  const editProd = () => {
    setOpenModal(true)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    const updatedProd = {
      ...productToEdit,
      [name]: value
    }
    const price = parseFloat(updatedProd.price) || 0;
    const discount = parseFloat(updatedProd.discount) || 0;
    const priceDiscount = price - (price * discount / 100);

    setProductToEdit({ ...updatedProd, priceDiscount: priceDiscount.toFixed(2) })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const productsUpdated = updateProduct(products, productToEdit)
    setProducts(productsUpdated)
    setOpenModal(false)
    setOpenSnackbar(true)

  }

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
            <Button variant="primary" onClick={editProd} size="small">Editar</Button>
          </div>
        </td>
      </tr>
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <span className="prod-edit"> Editar
          <span >
            {product?.name}
          </span>
        </span>
        <form onSubmit={handleSubmit} className="form-edit" action="">

          <Input onChange={handleChange} value={productToEdit?.name} label="Nombre :" placeholder={productToEdit?.name} name="name"  ></Input>
          <Input onChange={handleChange} value={productToEdit?.description} label="Descripcion :" placeholder={productToEdit?.description} name="description"  ></Input>
          <Input onChange={handleChange} type="number" value={productToEdit?.price} label="Precio :" placeholder={productToEdit?.price} name="price"  ></Input>
          <Input onChange={handleChange} type="number" value={productToEdit?.discount} label="Descuento (%):" placeholder={productToEdit?.discount} name="discount"  ></Input>
          <Input onChange={handleChange} type="number" value={productToEdit?.stock} label="Stock:" placeholder={productToEdit?.priceDiscount} name="stock"  ></Input>
          <Button type="submit" variant="submit" >Guardar Cambios</Button>
        </form>
      </Modal>
      <Snackbar message="Producto editado con exito  ✅!" duration={2500} variant="edit" visible={openSnackbar} onClose={() => setOpenSnackbar(false)}></Snackbar>
      {/* <Snackbar message="Producto eliminado correctamente !" duration={2500} variant="edit" visible={openDelete} onClose={() => setOpenDelete(false)}></Snackbar> */}
    </>
  );
};
