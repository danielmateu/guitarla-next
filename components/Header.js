

import Image from "next/image"
import logo from "../public/img/logo.svg"

export const Header = () => {
    return (
        <header className="contenedor">
            <Image src={logo.src} width={300} height={40} alt="imagen logo"/>
        </header>
    )
}

