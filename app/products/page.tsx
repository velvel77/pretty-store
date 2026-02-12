import Header from "../../components/navigation/header";
import type { Product } from ".././models/product";

// export async function generateStaticParams() {
//     const products = await getStore();
// }

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

type PageProps = {
  params: {
    id: string;
  };
};

export default async function ProductsPage({ params }: PageProps) {
    const { id } = params;

    const product = await getProduct(Number(id));
  return(
    <>
      <header>
        <Header/>
      </header>

      <section className="grid">
        <div className="flex flex-col">
          <div className="flex">
            <span>{product.category.id}</span>
            <span>{product.category.name}</span>
          </div>
          <h1>{product.title}</h1>
          <span>{product.price}</span>
          <span>{product.description}</span>
        </div>
        <div className="">
          <img
          className=""
          src=""
          alt=""
          />
        </div>
      </section>
    </>
  )
}
