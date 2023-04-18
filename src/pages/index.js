import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header'
import Carousel from '@/components/carousel'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.landingPage}>
      <Header />

      <div className={styles.mainContent}>
        <div className = {styles.layer}>

        </div>
        <Image
          className={styles.landingImage}
          src="/landing.jpg"
          width={1900}
          height={1080}
        ></Image>
        <div className = {styles.mainText}>
          <h1> Shipping </h1>
          <h1>Without Border</h1>
          <p>
            {" "}
            It’s easier now to expand your business without border. Backed with
            our digital platform, you can easily ship to hundreds of cities and
            ports around the world.{" "}
          </p>
        </div>

        <button className={styles.button}>Learn More</button>
      </div>
    </div>
  );
}
