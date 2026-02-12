import Link from "next/link";

export default function NotFound() {
    return(
        <main>
            <article>
                <div>
                    <h1>Not Found</h1>
                    <p>The product does not exist</p>
                    <Link href="/">&larr; Back to Home</Link>
                </div>
            </article>
        </main>
    )
}