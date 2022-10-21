import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

// Desenvolvido por Grupo 5, FIAP, 21-10-22.
// Contribuintes: Aline Melissa; Gabriela Jesumary; Igo Marcos; Pilar Leminski; Vitória Neris Mendes.
// Mentor: Gláucio Daniel

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projeto React - Trabalho em Grupo</title>
        <meta name="description" content="Objetivo é desmembrar este arquivo em vários componentes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <Main />
      </main>
      <Footer />
    </div>
  )
}

export default Home
