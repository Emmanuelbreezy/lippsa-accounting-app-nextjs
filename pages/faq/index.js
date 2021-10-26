import Head from 'next/head'
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';

export default function FAQ() {
  return (
      <>    
      <Head>
        <title>FAQ - Lippsa an Accounting Software for business</title>
        <meta name="description" content="FAQ" />
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
