import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Collections</title>
        <meta name="description" content="Useful collections" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <h1>Hello, this is the homepage</h1>

      <Link href="/design/tools">meem</Link>

    </div>
  )
}

export default Home
