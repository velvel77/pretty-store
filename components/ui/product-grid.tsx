import type { Product } from "../../app/models/product";
import ProductCard from "./product-card";



export default function ProductGrid({ products}: { products: Product[] }) {
    return (
        <section>
            <h2>Produkter:</h2>
            <ul className="grid grid-cols-2 gap-10 items-stretch">
                {products.map((product) => (
                    <li key={product.id}>
                        <ProductCard product={product} />
                    </li>
                ))}
            </ul>
        </section>
    )
}