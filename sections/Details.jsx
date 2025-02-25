import { useEffect, useRef } from "react";
import styles from "@/styles/sections/details.module.scss";
import { scrollToSection } from "@/utils/scrollToSection";

const Details = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(video);

    return () => observer.unobserve(video);
  }, []);

  return (
    <section className={styles.details}>
      <div className={styles.container}>
        {/* Відео-огляд */}
        <div className={styles.videoWrapper}>
          <video 
            ref={videoRef}
            className={styles.video} 
            autoPlay={false}
            loop 
            muted 
            playsInline 
            crossOrigin="anonymous"
            preload="auto"
          >
            <source src="/videos/Details-video.mp4" type="video/mp4" />
            Ваш браузер не підтримує відео.
          </video>
        </div>

        {/* Контентна частина */}
        <div className={styles.content}>
          <h2 className={styles.title}>Для автомобілів<br /> та приміщення від 10-50 м²</h2>
          <p className={styles.description}>
            Аромадифузор легко встановлюється на повітропровід за допомогою кліпси або двостороннього скотча.
            Не містить токсичних матеріалів, можна використовувати у присутності дітей і домашніх тварин.
          </p>

          {/* Характеристики */}
          <div className={styles.features}>
            <div className={styles.feature}>
              <img src="/icons/Battery.svg" alt="Акумулятор" />
              <p>Акумулятор<br />300 мАh</p>
            </div>
            <div className={styles.feature}>
              <img src="/icons/Flower.svg" alt="Аромати" />
              <p>6 ароматів<br />у комплекті</p>
            </div>
            <div className={styles.feature}>
              <img src="/icons/Oil.svg" alt="Натуральні олії" />
              <p>Натуральні<br />олі</p>
            </div>
          </div>

          {/* Акційний текст */}
          <p className={styles.promoText}><strong>Не проґав шанс!</strong> Дифузор за гарячої ціною!</p>

          {/* Блок ціни + кнопка */}
          <div className={styles.priceContainer}>
            <div className={styles.discount}>
              <p className={styles.oldPrice}>1 999 грн</p>
              <p className={styles.newPrice}>1 058 грн</p>
            </div>

            {/* Кнопка з банером */}
            <div className={styles.buttonWrapper}>
              <button className={styles.button} onClick={() => scrollToSection("form")}>
                Хочу знижку!
              </button>
              <div className={styles.discountTag}>🔥 Знижка 47%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
