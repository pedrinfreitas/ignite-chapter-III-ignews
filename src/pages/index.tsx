import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/home.module.scss';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title> Inicio | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Olá, seja bem-vindo</span>
          <h1>
            Um pouco sobre <br />
            o mundo do <span>React</span>
          </h1>

          <p>
            Tenha acesso a todas as publicações <br />
            <span>por R$ 9,90 ao mês</span>
          </p>
        </section>

        <img src="/images/avatar.svg" alt="menina codando" />
      </main>

    </>
  )
}

export default Home
