import Header from "../../../components/navigation/header";
import type { Product } from "../../models/product";
import { notFound } from "next/navigation";


async function getProduct(id: string): Promise<Product> {
  console.log("Value before calling getProduct:", id);
  
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

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if(!id) {
    notFound();
  }

  const product = await getProduct(id);
    
  return(
    <>
      <header>
        <Header/>
      </header>

      <section className="grid">
        <div className="flex flex-col">
          <h1>{product.title}</h1>
          <span>{product.price}</span>
          <span>{product.description}</span>
        </div>
        {/* <div className="">
          <img
          className=""
          src=""
          alt=""
          />
        </div> */}
      </section>
    </>
  )
}
