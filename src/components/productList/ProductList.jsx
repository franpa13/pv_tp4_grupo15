import React, { useState } from "react";
import { ProductItem } from "../productItem/ProductItem";
import "./productList.css";
export const ProductList = ({ products, setProducts }) => {



  return (
    <div className="product-list-container">
      <h2>Tabla de Productos</h2>{" "}
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
                id={product.id}
                name={product.name}
                description={product.description}
                priceDiscount={product.priceDiscount}
                price={product.price}
                stock={product.stock}
                discount={product.discount}
                products={products}
                setProducts={setProducts}
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
