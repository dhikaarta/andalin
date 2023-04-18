import styles from '@/styles/Header.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Header(){

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Image src="/logo.png" width={100} height={100} />
        <Link href="/" style={{ textDecoration: "none", color: "white" }}>
          Main
        </Link>
      </div>

      <div className={styles.content}>
        <Link href="/login" style={{ textDecoration: "none", color: "white" }}>
          Login
        </Link>
      </div>
    </div>
  );
}