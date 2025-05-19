import { Button } from "../ui/button/Button";
import "./productItem.css";

export const ProductItem = ({ id, name, description, price, priceDiscount, stock, discount }) => {


  return (
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
          <Button variant="danger" size="small">Eliminar</Button>
          <Button variant="primary" size="small">Editar</Button>
        </div>
      </td>
    </tr>
  );
};
