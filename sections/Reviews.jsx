import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "@/styles/sections/reviews.module.scss";
import { useState, useRef } from "react";

const reviews = [
  {
    name: "Марина Качур",
    city: "Одеса",
    text: "Чудова якість! Аромат рівномірно поширюється, не різкий. Користуюсь кілька місяців, і запах не зникає. Дуже зручне кріплення!",
    shortQuote: "Аромат рівномірно поширюється!",
    image: "/images/review1.png",
  },
  {
    name: "Катерина Ларіонова",
    city: "Миколаїв",
    text: "Дуже класний аромат! Легко змінювати капсули, зручно кріпиться в авто. Дизайн стильний, підходить під будь-який інтер’єр!",
    shortQuote: "Дуже класний аромат!",
    image: "/images/review2.png",
  },
  {
    name: "Олексій Іванов",
    city: "Львів",
    text: "Крута річ для авто! Випробував багато дифузорів, але цей реально топовий. Запах тримається довго, легко змінювати капсули!",
    shortQuote: "Реально топовий!",
    image: "/images/review3.png",
  },
  {
    name: "Анастасія Коваленко",
    city: "Київ",
    text: "Стильний дизайн, якість на висоті. Аромати ніжні, але відчутні, не викликають дискомфорту. Буду замовляти ще!",
    shortQuote: "Стильний дизайн, якість на висоті!",
    image: "/images/review4.png",
  },
  {
    name: "Андрій Грищенко",
    city: "Дніпро",
    text: "Нарешті знайшов аромат, який не набридає! Зручно кріпити, легко змінювати капсули з магнітом. Всім рекомендую!",
    shortQuote: "Аромат, який не набридає!",
    image: "/images/review5.png",
  },
];

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  // Функції для керування кастомними кнопками
  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <section id="reviews" className={styles.reviews}>
      <h2 className={styles.title}>Наші клієнти завжди задоволені</h2>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Pagination]}
        spaceBetween={80}
        slidesPerView={1.2}
        centeredSlides={true}
        loop={true}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className={styles.swiper}
        breakpoints={{
          1024: { slidesPerView: 2.2, spaceBetween: 60 },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <div
              className={`${styles.card} ${
                activeIndex === index ? styles.activeCard : ""
              }`}
            >
              <div className={styles.content}>
                <img src="/icons/quote.svg" alt="Quotes" className={styles.quoteIcon} />
                {/* Цитата у лапках */}
                <p className={styles.shortQuote}>“{review.shortQuote}”</p>
                {/* Основний текст без лапок */}
                <p className={styles.quote}>{review.text}</p>
              </div>
              <div className={styles.profile}>
                <div className={styles.avatar}>
                  <img src={review.image} alt={review.name} />
                </div>
                <h3 className={styles.name}>{review.name}</h3>
                <p className={styles.city}>{review.city}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Кастомні кнопки навігації */}
      <div className={styles.navContainer}>
        <button className={`${styles.navButton} ${styles.prevButton}`} onClick={handlePrevClick}>
          <img src="/icons/Arrow left.svg" alt="Prev" />
        </button>
        <button className={`${styles.navButton} ${styles.nextButton}`} onClick={handleNextClick}>
          <img src="/icons/Arrow right.svg" alt="Next" />
        </button>
      </div>
    </section>
  );
};

export default Reviews;
