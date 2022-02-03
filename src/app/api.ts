export interface Product {
    id: string;
    title: string;
    desc: string;
    image: string;
    price: string;
    currency: string;
  }
  
  export async function getProducts(): Promise<Product[]> {
    const results = await fetch("https://dnc0cmt2n557n.cloudfront.net/products.json");
    const products = results.json();
    return products;
  }