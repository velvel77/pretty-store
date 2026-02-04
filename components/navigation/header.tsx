import Link from "next/link";
import menu from "../../app/data/menu.json";

export default function Header() {
    return(
        <nav className="bg-[hsl(var(--header-default)/1)] flex justify-between p-8">
            <div className="flex gap-2">
                <span>Img</span>
                <span>Logo</span>
            </div>

            <ul className="flex gap-8">
                {
                    menu.map((item) =>
                        <li key={item.id}><Link href={item.href}>{item.title}</Link></li>
                    )
                }
            </ul>

            <section>
                <span>Button</span>
            </section>
        </nav>
    )
}