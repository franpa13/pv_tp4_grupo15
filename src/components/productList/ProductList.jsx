import React, { useState } from "react";
import { ProductItem } from "../productItem/ProductItem";
import "./productList.css";
export const ProductList = ({ products }) => {
  return (
    <div className="product-list-container">
      <h2>Tabla de Productos</h2>{" "}
      {products.length > 0 ? (
        <table className="products-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Precio</th>
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
                price={product.price}
                stock={product.stock}
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
