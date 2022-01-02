import Head from 'next/head'
import {Box} from '@chakra-ui/react'
import NavBar from './NavBar'
import Footer from './Footer'

const Layout = ({children}) => (
    <>
    <Head>
        <title>Sogno Real Estate App</title>
    </Head>
    <Box maxWidth='1280px' m='auto'>
        <header>
            <NavBar />
        </header>
        <main>
            {children}
        </main>
        <footer>
            <Footer/>
        </footer>
    </Box>
    </>
)

export default Layout