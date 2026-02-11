import Header from "../components/navigation/header";
import type { Product } from "./models/product";
import ProductGrid from "../components/ui/product-grid";

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

    return response.json();

  } catch(error) {
    console.error("Fel vid hämtning av butik: ", error);
    throw error;
  }
}

export default async function Home() {

  try {

    const products: Product[] = await getStore();

    return (
      <>
        <header>
          <Header />
        </header>

        <main className="grid grid-cols-1 justify-items-center mt-4 space-y-4">
          <h1 className="font-bold text-2xl">Välkommen till Pretty Shop!</h1>
          <span className="text-lg">Hitta din favorit här nedan.</span>
          <ProductGrid products={products} />
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
