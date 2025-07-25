'use client'
import Navbar from "../components/Navbar";
import Header from "../components/Header";
<<<<<<< HEAD

export default function Home() {
  return (
    <main>
=======
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');
  return (
    <main>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
>>>>>>> 52cc42667ae2d6b6dd98dffea1bec6ad90454258
      <Navbar />
      <Header />
    </main>

  );
}
