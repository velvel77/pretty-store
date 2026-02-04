import Header from "../components/navigation/header";
import type { Product } from "./models/product";

//GETTER for shop API
async function getStore() {
  try {

    const response = await fetch(
      "https://api.escuelajs.co/api/v1/products"
    );

    if(!response.ok) {
      console.log(response);
      throw new Error("Kunde inte hämta butiken");
    }

    const data = await response.json();
    return data;

  } catch(error) {
    console.error("Fel vid hämtning av butik: ", error);
  }
}

export default async function Home() {

  try {

    const products: Product[] = await getStore();

    return (
      <>
        <header className="">
          <Header />
        </header>

        <main>
          <h1>Välkommen till Pretty Shop!</h1>
          <p>Hitta din favorit här nedan:</p>
          <ul>
            {products.map((product: {id: number, title: string }) => (
              <li key={product.id}>{product.title}</li>
            ))}
          </ul>
        </main>
      </>
    );
  } catch(error) {
      console.log("Fel vid hämtning av butik: ", error);
      return (
      <>
        <header>
          <Header />
        </header>

        <main>
          <h1>Ett fel har inträffat:</h1>
          <p>Vi kunde tyvärr inte ladda butiken just nu.</p>
        </main>
      </>
      )
  }
}
