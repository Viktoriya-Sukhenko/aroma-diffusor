import { useEffect, useState } from "react";
import styles from "@/styles/components/header.module.scss";

const Header = () => {
  const [isTransparent, setIsTransparent] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const offerSection = document.getElementById("offer");
      if (offerSection) {
        const offerHeight = offerSection.offsetHeight;
        setIsTransparent(window.scrollY < offerHeight);
      }

      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Закриваємо мобільне меню після переходу
    }
  };

  return (
    <header
      className={`${styles.header} ${isTransparent ? styles.transparent : styles.darkHeader} ${
        isVisible ? styles.visible : styles.hidden
      }`}
    >
      <div className={styles.container}>
        <button className={styles.logo} onClick={() => scrollToSection("offer")}>
          Aroma diffuser
        </button>

        {/* Гамбургер-меню для мобільних пристроїв */}
        <button
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Навігація */}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
          <ul>
            <li>
              <button onClick={() => scrollToSection("assortment")}>Асортимент</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("why-us")}>Чому ми?</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("reviews")}>Відгуки</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("form")}>Контакти</button>
            </li>
          </ul>
        </nav>

        <button className={styles.button} onClick={() => scrollToSection("form")}>
          Купити зараз
        </button>
      </div>
    </header>
  );
};

export default Header;
