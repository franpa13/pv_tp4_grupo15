//FUNCIONES SERVICIO- LOGICA DE NEGOCIO

export const addProduct = (products, newProduct) => {
    return [...products, newProduct];
};

export const updateProduct = (products, updatedProduct) => {
    return products.map(product =>
        product.id === updatedProduct.id ? updatedProduct : product
    );
};

export const deleteProduct = (products, productId) => {
    return products.filter(product => product.id !== productId);
};

export const searchProduct = (products, query) => {
    return products.filter(product =>
        product.descripcion.toLowerCase().includes(query.toLowerCase()) ||
        product.id.toString().includes(query)
    );
};
