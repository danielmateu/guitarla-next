// import Link from "next/link";
import { Layout } from "../components/Layout";
import 'animate.css';

export default function Home() {
  return (
    <>
      <Layout
        title={'inicio'}
        description={'Blog de música, venta de guitarras y más'}
      >
        <h1 className="heading animate__animated animate__fadeInDown">Inicio</h1>

        
      </Layout>

    </>
  )
}
