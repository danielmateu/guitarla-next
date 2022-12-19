import Link from "next/link"
import { Layout } from "../components/Layout"



const Pagina404 = () => {
    return (
        <Layout
            title="Pagina no encontrada"
        >
            <p className="error">Página no encontrada...</p>
            <Link href="/" className="error-enlace">
                Ir a inicio
            </Link>
        </Layout>
    )
}

export default Pagina404
