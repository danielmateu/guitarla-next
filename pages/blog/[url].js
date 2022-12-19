import Image from "next/image";

import { Layout } from "../../components/Layout";
import formatearFecha from "../../helpers.js/helpers";
import styles from "../../styles/blog.module.css";
import 'animate.css';



const Post = ({ post }) => {

    const { titulo, contenido, imagen, publishedAt } = post[0].attributes

    return (
        <Layout
            title={titulo}
        >
            <article className={`${styles.post} ${styles['mt-3']}`}>
            <Image
                src={imagen.data.attributes.url}
                alt={`imagen blog ${titulo}`}
                width={1000}
                height={400}
                className='animate__animated animate__fadeIn'
            />
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.texto}>{contenido}</p>
            </div>
        </article>
        </Layout>
    )
}

export default Post;

export async function getServerSideProps({query:{url}}){

    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`);

    const {data: post} = await respuesta.json();



    return {
        props: {
            post
        }
    }
}

// export async function getStaticPaths() {
//     const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
//     const { data } = await respuesta.json();

//     const paths = data.map(guitarra => ({
//         params: {
//             url: guitarra.attributes.url
//         }
//     }))

//     return {
//         paths,
//         fallback: false
//     }
// }

// export async function getStaticProps({ params: { url } }) {

//     const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`);

//     const { data: guitarra } = await respuesta.json();

//     return {
//         props: {
//             guitarra
//         }
//     }
// }