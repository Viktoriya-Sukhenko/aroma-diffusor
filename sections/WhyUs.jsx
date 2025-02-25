import styles from "@/styles/sections/whyUs.module.scss";

const WhyUs = () => {
  return (
    <section id="why-us" className={styles.whyUs}>
      <div className={styles.fogTop}></div> {/* Верхній туман */}
      <div className={styles.container}>
        
        {/* Контейнер для заголовка та карток */}
        <div className={styles.contentContainer}>
          <h2 className={styles.title}>Чому обирають саме нас?</h2>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Інноваційна ультразвукова технологія</h3>
              <p>Рівномірний розподіл аромату без нагрівання</p>
            </div>

            <div className={styles.card}>
              <h3>Компактний та стильний дизайн</h3>
              <p>Ідеально доповнює інтер’єр будь-якого авто</p>
            </div>

            <div className={styles.card}>
              <h3>Енергоефективне автоматичне вимкнення</h3>
              <p>Працює лише за вашого бажання, коли це потрібно</p>
            </div>

            <div className={styles.card}>
              <h3>Простота та зручність у використанні</h3>
              <p>Просто вставте капсулу з магнітним кріпленням і насолоджуйтеся</p>
            </div>
          </div>
        </div>
        
      </div>
      <div className={styles.fogBottom}></div> {/* Нижній туман */}
    </section>
  );
};

export default WhyUs;
