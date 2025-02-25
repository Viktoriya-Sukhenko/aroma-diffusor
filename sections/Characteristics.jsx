import styles from "@/styles/sections/characteristics.module.scss";

const Characteristics = () => {
  const characteristics = [
    {
      title: "Два режими розпилення",
      description: "5-секундне розпилення з інтервалом 5 хвилин та 5-секундне з інтервалом 10 хвилин  ",
    },
    {
      title: "Легка зміна ароматів",
      description: "Ви можете легко змінювати аромати з нашого широкого асортименту",
    },
    {
      title: "Функція сну",
      description: "Коли автомобіль не використовується, дифузор автоматично вмикає у режим сну",
    },
    {
      title: "Простий дизайн",
      description: "Сучасний чорний дизайн впишеться в інтер'єр будь-якого автомобіля",
    },
    {
      title: "Зручна зарядка",
      description: "Вбудований акумулятор заряджається через порт Type-C",
    },
    {
      title: "Датчик руху",
      description: "Автоматично вмикається в разі виявлення руху, заощаджуючи заряд батареї",
    },
  ];

  return (
    <section className={styles.characteristics}>
      {/* Верхній туман */}
      <div className={styles.fogTop}></div>

      <div className={styles.container}>
        {characteristics.map((char, index) => (
          <div key={index} className={styles.card}>
            <h3>{char.title}</h3>
            <p>{char.description}</p>
          </div>
        ))}
      </div>

      {/* Нижній туман */}
      <div className={styles.fogBottom}></div>
    </section>
  );
};

export default Characteristics;
