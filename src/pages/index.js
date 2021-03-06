import Head from 'next/head'
import Main from '../components/Main.js'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Trabalho final - 38SCJ</title>
      </Head>
      <main className={styles.main} > 
        <Main />
      </main>
      <footer className={styles.footer}>
       <label>Grupo 2</label>
      </footer>
    </div>
  )
}
