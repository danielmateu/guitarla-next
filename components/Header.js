
import styles from '../styles/Header.module.css';
import Image from "next/image"
import Link from "next/link"
// import logo from "../public/img/logo.svg"

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className="contenedor">
                <Image src='/img/logo.svg' width={300} height={40} alt="imagen logo" />
                <nav className={styles.navegacion}>
                    <Link href='/'>Inicio</Link>
                    <Link href='/nosotros'>Nosotros</Link>
                    <Link href='/blog'>Blog</Link>
                    <Link href='/tienda'>Tienda</Link>
                </nav>
            </div>
        </header>
    )
}

