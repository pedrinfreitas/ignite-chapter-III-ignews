import type { GetStaticProps } from 'next';
import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';
import styles from '../styles/home.module.scss';

interface IHomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: IHomeProps) {
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
            <span>por {product.amount} ao mês</span>
          </p>

          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src="/images/avatar.svg" alt="menina codando" />
      </main>

    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1JwaUKCwtMwOQa5XHai7y7Ap', /*{
    expand: ['product']
  }*/)

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
      //@ts-ignore
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24, // 24 horas
  }
}
