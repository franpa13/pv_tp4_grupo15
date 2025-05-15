import { Button } from "../ui/button/Button"
import "./productItem.css"
export const ProductItem = ({ id, name, description, price, stock }) => {
  return (
    <div className="container-item">
      <span>ID : {id}</span>
      <span>nombre : {name}</span>
      <span>descripcion : {description} </span>
      <span>price : {price}</span>
      <span>stock : {stock} </span>
      <div className="actions-container">

        <Button variant="danger" size="small">Eliminar</Button>
        <Button variant="primary" size="small">Editar</Button>
      </div>
    </div>
  )
}
