import Head from "next/head"
import { Footer } from "./Footer"
import { Header } from "./Header"


export const Layout = ({children, title = '', description = ''}) => {
    return (
        <>
            <Head>
                <title>{`GuitarLA - ${title}`}</title>
                <meta name="description" content={description}></meta>
            </Head>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}
