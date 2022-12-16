import Image from "next/image"
import Link from "next/link"
import styles from '../styles/guitarras.module.css'


export const Guitarra = ({ guitarra }) => {


    const { descripcion, imagen, nombre, precio, url } = guitarra

    return (
        <div className={styles.guitarra}>
            <Image src={imagen.data.attributes.formats.medium.url} alt={`Imagen guitarra ${nombre}`} width={100} height={200} />
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>${precio}</p>
                <Link href={`/guitarras/${url}`} className={styles.enlace}>
                    Ver producto
                </Link>
            </div>
        </div>
    )
}
