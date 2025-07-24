'use client'
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');
  return (
    <main>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <Navbar />
      <Header />
    </main>

  );
}
