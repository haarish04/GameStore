import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Stack from '@mui/material/Stack';


export default function Home() {
  return (
    <div>
      <Stack className={styles.Stack} spacing={2} direction="row">
        <button className={styles.button}>About</button>
        <button className={styles.button}>Explore</button>
        <button className={styles.button}>Wishlist</button>
        <button className={styles.button}>Cart</button>
      </Stack>
    </div>
  )
}
