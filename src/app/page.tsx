'use client';
import Head from 'next/head';
import '../styles/Home.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | Proyecto con Sitemap</title>
        <meta name="description" content="Ejemplo práctico de un proyecto Next.js con Sitemap dinámico para SEO." />
        <meta property="og:title" content="Inicio | Proyecto con Sitemap" />
        <meta property="og:description" content="Ejemplo práctico de un proyecto Next.js con Sitemap dinámico para SEO." />
      </Head>

      <main className="home-container">
        <h1 className="home-title">Bienvenido a Mi Proyecto con Sitemap Dinámico</h1>
        <p className="home-description">
          Este es un ejemplo de sitio optimizado para SEO con Next.js, incluyendo un sitemap dinámico.
        </p>

        <Link href="/about">
          <span className="home-button">Ir a About</span>
        </Link>
      </main>
    </>
  );
}
