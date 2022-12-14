import Link from "next/link"
import { Layout } from "../components/Layout"


const Nosotros = () => {
    return (
        <Layout
            title={'nosotros'}
            description={'Blog de música, venta de guitarras y más'}
        >
            <h1>Nosotros</h1>

            <Link href="/">Vuelve a inicio</Link>
        </Layout>
    )
}

export default Nosotros