import styles from "@/styles/sections/callToAction.module.scss";
import { scrollToSection } from "@/utils/scrollToSection";

const CallToAction = () => {
  return (
    <section className={styles.callToAction}>
      <div className={styles.container}>
        <h2 className={styles.title}>Вишуканий аромат кожної поїздки</h2>
        <p className={styles.description}>
          Відкрийте для себе новий рівень комфорту з ультразвуковим аромадифузором Vitol. 
          Завдяки сучасній технології холодної дифузії ваш салон наповниться розкішними ароматами, 
          створюючи атмосферу релаксу, свіжості або енергії – саме таку, як вам потрібно.
        </p>
        <button className={styles.button} onClick={() => scrollToSection("form")}>Замовити зараз</button>
      </div>
    </section>
  );
};

export default CallToAction;
