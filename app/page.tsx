'use client'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Aboutme from './components/Aboutme';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';


export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Aboutme />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}
