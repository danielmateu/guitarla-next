
import { Layout } from "../components/Layout"
import { Post } from "../components/Post";
import styles from '../styles/grid.module.css'
import 'animate.css';

const Blog = ({ posts }) => {

    // console.log(posts)

    return (
        <Layout
            title={'blog'}
            description={'Blog de música, venta de guitarras, consejos y más'}
        >

            <main className="contenedor">
                <h1 className="heading animate__animated animate__fadeInUp">Blog</h1>
                <div className={`${styles.grid} animate__animated animate__fadeIn`}>
                    {posts?.map(post => (
                        <Post
                            key={post.id}
                            post={post.attributes}
                        />
                    ))}
                </div>
            </main>



        </Layout>
    )
}

export default Blog


export async function getStaticProps() {
    const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`);
    const { data: posts } = await respuesta.json();

    // console.log(guitarras);

    return {
        props: {
            posts
        }
    }
}
