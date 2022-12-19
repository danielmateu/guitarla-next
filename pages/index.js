// import Link from "next/link";
import { Layout } from "../components/Layout";
import { Guitarra } from "../components/Guitarra";
import styles from '../styles/grid.module.css'
import 'animate.css';
import { Post } from "../components/Post";


export default function Home({ guitarras, posts, curso }) {

  // console.log(guitarras)
  // console.log(posts)
  console.log(curso)

  return (
    <>
      <Layout
        title={'inicio'}
        description={'Blog de música, venta de guitarras y más'}
      >
        <main className="contenedor">
          <h1 className="heading animate__animated animate__fadeInDown">Nuestra colección</h1>
          <div className={`${styles.grid} animate__animated animate__fadeIn`} >
            {guitarras?.map(guitarra => (
              <Guitarra
                key={guitarra.id}
                guitarra={guitarra.attributes}

              />
            ))}
          </div>
        </main>

        <section>
          <h1 className="heading animate__animated animate__fadeInUp">Blog</h1>
          <div className={`${styles.grid} animate__animated animate__fadeIn`}>
            {posts?.map(post => (
              <Post
                key={post.id}
                post={post.attributes}
              />
            ))}
          </div>
        </section>
      </Layout>

    </>
  )
}

export async function getStaticProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`
  const urlPosts = `${process.env.API_URL}/posts?populate=imagen`
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`

  const [resGuitarras, resPosts, resCurso] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPosts),
    fetch(urlCurso),
  ])

  const [{ data: guitarras }, { data: posts }, {data: curso}] = await Promise.all([
    resGuitarras.json(),
    resPosts.json(),
    resCurso.json(),
  ])

  // console.log(guitarras)
  // console.log(posts)

  return {
    props: {
      guitarras,
      posts,
      curso
    }
  }

}

