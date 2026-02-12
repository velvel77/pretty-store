import Link from "next/link";
import type { Product } from "../../app/models/product";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
    // console.log(`Type of id: ${typeof product.id}`);
    
    return (
        <Link
            href={`/products/${product.id}`}
            className="block max-w-150 h-full"
            aria-label={`View details for ${product.title}`}
        >
            <article  className="max-w-150 h-full flex flex-col border rounded-xl shadow-md overflow-hidden">
                <div className="relative w-full h-100">
                    <Image 
                        className="w-30% aspect-square object-cover" 
                        src={product.images[0]  ?? "/placeholder.png"} 
                        alt={product.title}
                        fill
                        unoptimized
                    />
                </div>
                <div className="h-full flex flex-col justify-center items-center">
                    <h3 className="text-xl font-semibold">{product.title}</h3>
                    <span>{product.id}</span>
                    <span className="font-semibold text-red-500">Price: {product.price}$</span>
                    <span className="max-w-[80%]">{product.description}</span>
                </div>
            </article>
        </Link>
    )
}