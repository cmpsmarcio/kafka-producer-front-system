import Head from 'next/head'
import Form from '../components/form.js'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Trabalho final - 38SCJ</title>
      </Head>
      <main className={styles.main}>
        <Form />
      </main>
      <footer className={styles.footer}>
       <label>Grupo 2</label>
      </footer>
    </div>
  )
}
