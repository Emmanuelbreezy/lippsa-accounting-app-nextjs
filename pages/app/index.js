import Head from 'next/head'
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';

export default function App() {
  return (
      <>    
      <Head>
        <title>Dashboard - Lippsa</title>
        <meta name="description" content="sign in to lippsa" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <Navigation />
      <br />
      <Footer />

    </>
  )
}
