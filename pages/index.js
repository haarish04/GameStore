import styles from '@/styles/Home.module.css'
import VideogameAssetRoundedIcon from '@mui/icons-material/VideogameAssetRounded';
import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/SliderData';


export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.middleButtons}>
          <VideogameAssetRoundedIcon fontSize="large" sx={{ color: 'white' }} className={styles.icon} />
          <button className={styles.button}>About</button>
          <button className={styles.button}>Explore</button>
          <button className={styles.button}>Wishlist</button>
          <button className={styles.button}>Cart</button>
        </div>
        <div className={styles.rightButton}>
          <loginbtn className={styles.loginbtn}>SIGN IN</loginbtn>
        </div>
      </div>
      <div className={styles.Slider}>
        <ImageSlider slides={SliderData} />
      </div>
    </>
  )
}
