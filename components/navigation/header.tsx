import Link from "next/link";
import menu from "../../app/data/menu.json";

export default function Header() {
    return(
        <nav>
            <div>
                <span>Img</span>
                <span>Logo</span>
            </div>

            <ul>
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