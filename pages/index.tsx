import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home.module.scss'

// Components
import Nav from '../components/nav'; 
import Footer from '../components/footer'; 

export default function Home() {
  return (
    <div>
      <Nav/>

      <Head>
        <title>Chul-eun Lee</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="author" href="https://charlieberens.org"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Chul-eun Lee</h1>
      </main>

      <Footer/>
    </div>
  )
}
