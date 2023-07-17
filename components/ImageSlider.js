import React, { useState,useEffect } from 'react';
import { SliderData } from './SliderData';
import { MdKeyboardArrowRight,MdKeyboardArrowLeft } from 'react-icons/md';
import Image from 'next/image';
import styles from './ImageSlider.module.css';


const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const handleNextSlide = () => {
    setCurrent((current + 1) % length);
  };

  const handlePrevSlide = () => {
    setCurrent((current - 1 + length) % length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNextSlide();
    }, 7000); 

    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className={styles.slider}>
      <MdKeyboardArrowLeft className={styles['left-arrow']} onClick={handlePrevSlide} style={{ fontSize: '96px', color:'white', cursor:'pointer', zIndex:'10',marginRight:'15px'  }} />
      {SliderData.map((slide, index) => (
        <div className={index === current ? styles.slideActive : styles.slide} key={index}>
          {index === current && (
            <imageContainer>
            <Image
              src={slide.image}
              alt="game images"
              layout="responsive"
              width={150}
              height={50}
              objectFit="cover"
            />
            </imageContainer>
          )}
        </div>
      ))}
      <MdKeyboardArrowRight className={styles['right-arrow']} onClick={handleNextSlide} style={{ fontSize: '96px',color:'white', cursor:'pointer', zIndex:'10',marginLeft:'15px' }} />
    </section>
  );
};

export default ImageSlider;
