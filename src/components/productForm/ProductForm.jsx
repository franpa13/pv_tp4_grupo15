import { useState } from "react"
import { Button } from "../ui/button/Button"
import { Input } from "../ui/input/Input"
import { addProduct } from "../services/productoService"
import { Snackbar } from "../ui/snackbar/Snackbar"
import "./productForm.css"
export const ProductForm = ({ products, setProducts }) => {
  const [openSnackbar, setOpenSnackbar] = useState()
  const [singleProduct, setSingleProduct] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    discount: "",
    priceDiscount: "",
    stock: ""
  })

  const resetSingleProd = {
    id: "",
    name: "",
    description: "",
    price: "",
    discount: "",
    priceDiscount: "",
    stock: ""
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newArray = addProduct(products, singleProduct)
    setProducts(newArray)
    setSingleProduct(resetSingleProd)
    setOpenSnackbar(true)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedProduct = {
      ...singleProduct,
      [name]: value,
      id: Date.now()
    };
    const price = parseFloat(updatedProduct.price) || 0;
    const discount = parseFloat(updatedProduct.discount) || 0;
    const priceDiscount = price - (price * discount / 100);
    setSingleProduct({
      ...updatedProduct,
      priceDiscount: priceDiscount.toFixed(2)
    });


  };

  return (
    <>
      <h3>Ingrese un nuevo producto :</h3>
      <form onSubmit={handleSubmit} className="form-container">
        <div>
          <Input onChange={handleChange} label={"Nombre del producto:"} type="text" required={true} name={"name"} value={singleProduct.name} ></Input>
          <Input onChange={handleChange} label={"Descripcion del producto:"} type="text" required={false} name={"description"} value={singleProduct.description} ></Input>
          <Input onChange={handleChange} label={"Precio unitario:"} type="number" required={true} name={"price"} value={singleProduct.price} ></Input>
        </div>

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }} >
          <Input onChange={handleChange} label={"Descuento(%) :"} type="number" required={true} name={"discount"} value={singleProduct.discount} ></Input>
          <Input onChange={handleChange} label={"Stock :"} type="number" required={true} name={"stock"} value={singleProduct.stock} ></Input>
          <Button variant="submit" type="submit" style={{ marginTop: "32px" }}> Agregar producto </Button>
        </div>

      </form>

      <Snackbar

        message="Producto agregado con éxito ✅"
        visible={openSnackbar}
        duration={2000}
        onClose={() => setOpenSnackbar(false)}
        variant="submit"
      />

    </>
  )
}
