import Header from "../../components/navigation/header";
import type { Product } from ".././models/product";

async function getProduct(id: number): Promise<Product> {
  try {

    const response = await fetch(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );

    if(!response.ok) {
      console.log(response);
      throw new Error("Kunde inte hämta produkten");
    }

    return (await response.json()) as Product;
    
  } catch(error) {
    console.error("Fel vid hämtning av produkt: ", error);
    throw error;
  }
}