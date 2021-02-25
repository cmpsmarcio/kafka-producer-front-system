import Head from 'next/head'
import Form from '../components/form.js'
import Control from '../components/Control.js'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Trabalho final - 38SCJ</title>
      </Head>
      <main className={styles.main}>
        <Form />
        <Control title='Temperatura' legend='ºC' value={15} min={-25} max={40} step={5} />
        <Control title='Umidade do Ar' legend='%' value={40} min={0} max={100} step={5} />
      </main>
      <footer className={styles.footer}>
       <label>Grupo 2</label>
      </footer>
    </div>
  )
}
