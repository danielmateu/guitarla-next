import Image from 'next/image'
import Link from 'next/link'
import formatearFecha from '../helpers.js/helpers'

import styles from '../styles/blog.module.css'


export const Post = ({post}) => {
    // console.log(post)
    const {contenido, imagen,titulo,url,publishedAt} = post
    return (
        <article >
            <Image
                src={imagen.data.attributes.formats.medium.url}
                alt={`imagen blog ${titulo}`}
                width={600}
                height={400}
            />
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.resumen}>{contenido}</p>
                <Link href={`/blog/${url}`} className={styles.enlace}>Leer post</Link>
            </div>
        </article>
    )
}
