

import Image from "next/image"
import Link from "next/link"
// import logo from "../public/img/logo.svg"

export const Header = () => {
    return (
        <header>
            <div className="contenedor">
                <Image src='/img/logo.svg' width={300} height={40} alt="imagen logo" />
                <nav>
                    <Link href='/'>Inicio</Link>
                    <Link href='/nosotros'>Nosotros</Link>
                    <Link href='/blog'>Blog</Link>
                    <Link href='/tienda'>Tienda</Link>
                </nav>
            </div>
        </header>
    )
}

