
import styles from '../styles/Header.module.css';
import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/router';

// import logo from "../public/img/logo.svg"

export const Header = () => {

    const router = useRouter();


    return (
        <header className={styles.header}>
            <div className={`contenedor ${styles.barra}`}>
                <Link href={'/'}>
                    <Image src='/img/logo.svg' width={200} height={40} alt="imagen logo" />
                </Link>
                <nav className={styles.navegacion}>
                    <Link href='/' className={router.pathname === '/' ? styles.active : ''}>
                        Inicio
                    </Link>
                    <Link href='/nosotros' className={router.pathname === '/nosotros' ? styles.active : ''}>
                        Nosotros
                    </Link>
                    <Link href='/blog' className={router.pathname === '/blog' ? styles.active : ''}>
                        Blog
                    </Link>
                    <Link href='/tienda' className={router.pathname === '/tienda' ? styles.active : ''}>
                        Tienda
                    </Link>
                </nav>
            </div>
        </header>
    )
}

