import { ProductItem } from "../productItem/ProductItem";
import "./productList.css";

export const ProductList = ({ products, onDeleteProduct, onUpdateProduct }) => {
  return (
    <div className="product-list-container">
      <h2>Tabla de Productos</h2>
      {products?.length > 0 ? (
        <table className="products-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Descuento(%)</th>
              <th>Precio con descuento</th>
              <th>Stock</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ProductItem
                key={product.id}
                product={product}
                onDeleteProduct={onDeleteProduct}
                onUpdateProduct={onUpdateProduct}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay productos para mostrar en la tabla.</p>
      )}
    </div>
  );
};
