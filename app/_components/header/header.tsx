import Link from "next/link"
import "./header.scss"

export const Header = () => (
    <header className="header">
        <h2 className="header__title">
            <Link href="/">Aermetric</Link>
        </h2>
    </header>
)