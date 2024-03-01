const products = [
  { id: 'h-1', name: 'Hoodie 1', color: 'red', maxPrice: 100 },
  { id: 'h-2', name: 'Hoodie 2', color: 'green', maxPrice: 300 },
  { id: 'h-3', name: 'Hoodie 3', color: 'blue', maxPrice: 500 },
  { id: 's-1', name: 'Sneakers 1', color: 'red', maxPrice: 100 },
  { id: 's-2', name: 'Sneakers 2', color: 'green', maxPrice: 300 },
  { id: 's-3', name: 'Sneakers 3', color: 'blue', maxPrice: 500 },
  { id: 's-4', name: 'Sneakers 4', color: 'red', maxPrice: 100 },
  { id: 'p-1', name: 'Pants 1', color: 'red', maxPrice: 100 },
  { id: 'p-2', name: 'Pants 2', color: 'green', maxPrice: 300 },
  { id: 'p-3', name: 'Pants 3', color: 'blue', maxPrice: 500 },
];

export const getProducts = () => {
  return products;
};

export const getProductById = productId => {
  return products.find(product => product.id === productId);
};
