import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../styles/Home.module.css'
import Card from '../components/Card'
import Collection from '../components/Collection'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Collections</title>
        <meta name="description" content="Useful collections" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Collection />


    </div>
  )
}

export default Home
