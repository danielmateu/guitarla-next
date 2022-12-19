import Image from "next/image";
import { useState } from "react";

import { Layout } from "../../components/Layout";
import styles from "../../styles/guitarras.module.css";


const Producto = ({ guitarra, agregarCarrito, actualizarCantidad }) => {

    const [cantidad, setCantidad] = useState(0);
    const { nombre, descripcion, imagen, precio } = guitarra[0].attributes

    // console.log(guitarra[0])

    const handleSubmit = e => {
        e.preventDefault();
        if(cantidad < 1 ){
            alert('Cantidad no válida');
            return;
        }

        //Contstruir objeto con la guitarra seleccionada y almacenar en localstorage
        const guitarraSeleccionada = {
            id: guitarra[0].id,
            imagen: imagen.data.attributes.url,
            nombre,
            precio,
            cantidad
        }

        // console.log(guitarraSeleccionada)

        //Pasando la info al context
        agregarCarrito(guitarraSeleccionada);

    }

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

                    <form
                        action=""
                        className={styles.formulario}
                        onSubmit={handleSubmit}
                        >
                        
                        <label htmlFor="cantidad">Cantidad: </label>

                        <select 
                            onChange={e => setCantidad(+e.target.value)}
                            name="cantidad" id="cantidad">
                            <option value="0">--Seleccione--</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>

                        <input type="submit" value='agregar al carrito'/>
                    </form>

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