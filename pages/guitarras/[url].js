import Image from "next/image";

import { Layout } from "../../components/Layout";
import styles from "../../styles/guitarras.module.css";


const Producto = ({ guitarra }) => {

    const { nombre, descripcion, imagen, precio } = guitarra[0].attributes

    return (
        <Layout
            title={`Guitarra ${nombre}`}
        >
            <div className={styles.guitarra}>
                <Image src={imagen.data.attributes.url} alt={`Imagen guitarra ${nombre}`} width={100} height={200} />
                <div className={styles.contenido}>
                    <h3>{nombre}</h3>
                    <p className={styles.descripcion}>{descripcion}</p>
                    <p className={styles.precio}>${precio}</p>
                    {/* <button>Añadir</button> */}
                </div>
            </div>
        </Layout>
    )
}

export default Producto;

// export async function getServerSideProps({query:{url}}){

//     const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`);

//     const {data: guitarra} = await respuesta.json();

//     return {
//         props: {
//             guitarra
//         }
//     }
// }

export async function getStaticPaths() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
    const { data } = await respuesta.json();

    const paths = data.map(guitarra => ({
        params: {
            url: guitarra.attributes.url
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { url } }) {

    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`);

    const { data: guitarra } = await respuesta.json();

    return {
        props: {
            guitarra
        }
    }
}