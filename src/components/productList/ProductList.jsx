import { ProductItem } from "../productItem/ProductItem"
export const ProductList = () => {
  return (
    <div>ProductList

      <ProductItem id={Date.now()} name={"Lentejas"} description={"lenntejas marca"} price={5000} stock={5000} ></ProductItem>
    </div>
  )
}
