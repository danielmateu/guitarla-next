
import Image from "next/image"
import { Layout } from "../components/Layout";
import 'animate.css';
import styles from '../styles/nosotros.module.css'


const Nosotros = () => {
    return (
        <Layout
            title={'nosotros'}
            description={'Blog de música, venta de guitarras y más'}
        >
            <main className="contenedor">
                <h1 className="heading animate__animated animate__fadeInUp">Nosotros</h1>

                <div className={styles.contenido}>

                    <Image src='/img/nosotros.jpg' width={1000} height={800} alt='Imagen sobre nosotros' className="animate__animated animate__fadeInLeft" />

                    <div>

                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium aperiam ad harum, quis necessitatibus nam totam voluptate, quidem minus, ducimus laboriosam nostrum quod magnam. Aliquam nisi neque soluta magni eos?</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium aperiam ad harum, quis necessitatibus nam totam voluptate</p>

                    </div>

                </div>
            </main>


        </Layout>
    )
}

export default Nosotros