import React, { useState } from "react";
import { ProductItem } from "../productItem/ProductItem";

export const ProductList = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Lentejas",
      description: "lentejas ",
      price: 5000,
      stock: 5000,
    },
    {
      id: 2,
      name: "Arroz",
      description: "arroz Salvador",
      price: 2000,
      stock: 2000,
    },
    {
      id: 3,
      name: "Fideos",
      description: "fideos Lucheti",
      price: 3000,
      stock: 3000,
    },
  ]);

  return (
    <div className="product-list-container">
      <h2>Lista de Productos</h2>{" "}
      {products.length > 0 ? ( // Verificamos si hay productos antes de mapear
        products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            stock={product.stock}
          />
        ))
      ) : (
        <p>No hay productos en esta lista.</p>
      )}
    </div>
  );
};
