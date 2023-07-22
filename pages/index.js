import styles from '@/styles/Home.module.css'
import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/SliderData';
import TopBar from '@/components/TopBar';

export default function Home() {
  return (
    <>
      <div className={styles.TopBar}>
        <TopBar />
      </div>
      <div className={styles.Slider}>
        <ImageSlider slides={SliderData} />
      </div>
    </>
  )
}
