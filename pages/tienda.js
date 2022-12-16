
import { Layout } from "../components/Layout"
import { Guitarra } from "../components/Guitarra"
import styles from '../styles/grid.module.css'
import 'animate.css';



export default function Tienda({ guitarras }) {

    console.log(guitarras)

    return (
        <Layout
            title={'tienda'}
            description={'Tienda virtual, blog de música, venta de guitarras y más'}
        >
            <main className="contenedor">
                <h1 className="heading animate__animated animate__fadeInRight">Nuestra Colección</h1>

                <div className={styles.grid}>
                    {guitarras?.map(guitarra => (
                        <Guitarra
                            key={guitarra.id}
                            guitarra={guitarra.attributes}
                        />


                    ))}
                </div>



            </main>
        </Layout>
    )
}

// export async function getStaticProps() {
//     const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
//     const {data: guitarras} = await respuesta.json();

//     // console.log(guitarras);

//     return { 
//         props: {
//             guitarras
//         }
//     }
// }

export async function getServerSideProps() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
    const { data: guitarras } = await respuesta.json();

    // console.log(guitarras);

    return {
        props: {
            guitarras
        }
    }
}
