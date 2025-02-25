import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "@/styles/sections/assortment.module.scss";
import { useState, useRef } from "react";

const aromas = [
  {
    name: "White Tea",
    description: "Освіжаючий мікс лимона, груші, чаю, дині, жасмину, мімози, чорнобривців, фіалки та ветиверу",
    image: "/images/White-tea.png",
    bgColor: "#FFD93D",
  },
  {
    name: "Sandalwood",
    description: "Благородний аромат сандалу з нотами білого кардамону, перцю, кориці, бергамоту, фіалки та мускусу",
    image: "/images/Sandalwood.png",
    bgColor: "#A65F3E",
  },
  {
    name: "Green Bamboo",
    description: "Гармонійне поєднання кедра, грейпфрута, груші, жасмину, ірису та амбри",
    image: "/images/Green-bamboo.png",
    bgColor: "#68D391",
  },
  {
    name: "Hilton",
    description: "Вишуканий букет сандалового дерева, дині, персика, яблука, мімози, туберози, фрезії, конвалії",
    image: "/images/Hilton.png",
    bgColor: "#FFB74D",
  },
  {
    name: "Diamond",
    description: "Розкішна композиція ванілі, троянди, кориці, медової роси, мускусу, бурштину, сандалу та шкіри",
    image: "/images/Diamond.png",
    bgColor: "#D4AF37",
  },
  {
    name: "Pachuli",
    description: "Чуттєва суміш бергамоту, рожевого грейпфрута, сливи, кедра, цитруса, жасмину, ванілі, пачулі та бобів тонка",
    image: "/images/Pachuli.png",
    bgColor: "#8D6E63",
  },
];

const Assortment = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <section id="assortment" className={styles.assortment}> {/* ✅ ДОДАНО ID */}
      <h2 className={styles.title}>Преміальні аромати на будь-який смак</h2>

      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        centeredSlides={true}
        centerInsufficientSlides={true}
        pagination={{ clickable: true }}
        loopAdditionalSlides={2}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        className={styles.swiper}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {aromas.map((aroma, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <div
              className={`${styles.card} ${activeIndex === index ? styles.activeCard : ""}`}
              style={{ backgroundColor: aroma.bgColor }}
            >
              <div
                className={styles.cardImage}
                style={{ backgroundImage: `url(${aroma.image})` }}
              ></div>
              <div className={styles.info}>
                <h3 className={styles.name}>{aroma.name}</h3>
                <p className={styles.description}>{aroma.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.navContainer}>
        <button className={`${styles.navButton} ${styles.prevButton}`} onClick={goPrev}>
          <img src="/icons/Arrow left.svg" alt="Prev" />
        </button>
        <button className={`${styles.navButton} ${styles.nextButton}`} onClick={goNext}>
          <img src="/icons/Arrow right.svg" alt="Next" />
        </button>
      </div>
    </section>
  );
};

export default Assortment;
