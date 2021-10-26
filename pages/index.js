import Head from 'next/head'
import Navigation from '../components/Navigation/Navigation';
import Companies from '../containers/LandingPage/Companies-section/Companies';
import Features from '../containers/LandingPage/Features-section/Features';
import IntroSection from '../containers/LandingPage/Intro-section/Intro';
import GallerySection from '../containers/LandingPage/Gallery-section/GallerySection';
import MoreFeatures from '../containers/LandingPage/Features-section/More-features';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
      <>    
      <Head>
        <title>Lippsa is an Accounting Software for businesses</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <Navigation />
      <IntroSection />
      <Companies  />
      <Features />
      <GallerySection />
      <MoreFeatures />
      <br />
      <Footer />

    </>
  )
}
