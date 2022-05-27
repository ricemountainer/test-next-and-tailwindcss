import type { NextPage } from 'next';
import Link from 'next/link';
//import Head from 'next/head'
//import Image from 'next/image'
//import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <h1>index page</h1>

      <p><Link href="/test">test</Link></p>
      <p><Link href="/test2">tes2</Link></p>
      <p><Link href="/sleep">sleep</Link></p>
      <p><Link href="/infinity-test">inifinity-test</Link></p>
    </>
  )
}

export default Home
