export async function getAllProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  const allProducts = await res.json();
  return allProducts;
}
export async function getProductById(productId) {
  const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
  const product = await res.json();
  return product;
}
