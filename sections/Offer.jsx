import styles from "@/styles/sections/offer.module.scss";
import { scrollToSection } from "@/utils/scrollToSection";

const Offer = () => {
  return (
    <section id="offer" className={styles.offer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.discount}>ХАПАЙ ВИГОДУ — ЗНИЖКА 47%</p>
          <h1 className={styles.title}>Ультразвуковий автомобільний аромадифузор</h1>
          <p className={styles.description}>
            Ідеальний подарунок на всі випадки життя. Стиль, комфорт і преміальні аромати у вашому авто та приміщенні!
          </p>
          <button className={styles.button} onClick={() => scrollToSection("form")}>Замовити за 1058 грн</button>
        </div>
      </div>
      <div className={styles.fog}></div>
    </section>
  );
};

export default Offer;
