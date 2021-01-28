import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../src/components/layout'
import Footer from '../src/components/footer'


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>
      Home Page!
      </h1>
      <Footer />
    </Layout>
  )
}
