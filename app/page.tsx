'use client'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Aboutme from './components/Aboutme';
import Services from './components/Services';
import Work from './components/Work';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <Aboutme />
      <Services />
      <Work />
    </main>

  );
}
