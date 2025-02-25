import styles from "@/styles/sections/callback.module.scss";
import { useState } from "react";

const Callback = () => {
  const [phone, setPhone] = useState("");
  const [agree, setAgree] = useState(false);
  const [selectedSocial, setSelectedSocial] = useState("");
  const [nickname, setNickname] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agree) {
      alert("Будь ласка, погодьтесь на обробку персональних даних.");
      return;
    }
    alert(
      `Ваші дані надіслано!\nТелефон: ${phone || "не вказано"}\nСоцмережа: ${selectedSocial || "не вибрано"}\n${
        selectedSocial === "Viber" ? `Номер Viber: ${nickname || "не вказано"}` : `Нікнейм: ${nickname || "не вказано"}`
      }`
    );
    setPhone("");
    setNickname("");
    setSelectedSocial("");
    setAgree(false);
  };

  return (
    <section id="callback" className={styles.callback}>
      {/* ✅ Верхній туман */}
      <div className={styles.fogTop}></div>

      <div className={styles.container} id="form">
        <h2 className={styles.title}>Щоб зробити замовлення, оберіть зручний спосіб зв'язку</h2>

        {/* ✅ Варіант 1: Номер телефону */}
        <div className={styles.choiceBlock}>
          <h3 className={styles.choiceTitle}>Варіант 1: Телефонний дзвінок</h3>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <input
                type="tel"
                className={styles.inputTel}
                placeholder="Введіть ваш номер телефону"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </form>
        </div>

        {/* ✅ Роздільник */}
        <div className={styles.separator}>АБО</div>

        {/* ✅ Варіант 2: Соцмережі */}
        <div className={styles.choiceBlock}>
          <h3 className={styles.choiceTitle}>Варіант 2: Напишемо вам у соцмережах</h3>
          <div className={styles.socialCheckboxes}>
            <label>
              <input
                type="radio"
                name="social"
                value="Telegram"
                checked={selectedSocial === "Telegram"}
                onChange={(e) => setSelectedSocial(e.target.value)}
              />
              <span className={styles.checkmark}></span> Telegram
            </label>
            <label>
              <input
                type="radio"
                name="social"
                value="Instagram"
                checked={selectedSocial === "Instagram"}
                onChange={(e) => setSelectedSocial(e.target.value)}
              />
              <span className={styles.checkmark}></span> Instagram
            </label>
            <label>
              <input
                type="radio"
                name="social"
                value="Viber"
                checked={selectedSocial === "Viber"}
                onChange={(e) => setSelectedSocial(e.target.value)}
              />
              <span className={styles.checkmark}></span> Viber
            </label>
          </div>

          {/* ✅ Інпут для нікнейму або номера Viber */}
          <div className={styles.inputGroup}>
            <input
              type={selectedSocial === "Viber" ? "tel" : "text"} // Якщо Viber - інпут як номер
              className={styles.inputTel}
              placeholder={
                selectedSocial === "Viber"
                  ? "Введіть ваш номер Viber"
                  : selectedSocial
                  ? `Ваш нікнейм у ${selectedSocial}`
                  : "Ваш нікнейм у соцмережі"
              }
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </div>
        </div>

        {/* ✅ Кнопка відправки */}
        <button type="submit" className={styles.button} onClick={handleSubmit} disabled={!agree}>
          Надіслати заявку
        </button>

        {/* ✅ Чекбокс про згоду */}
        <label className={styles.checkboxContainer}>
          <input type="checkbox" checked={agree} onChange={() => setAgree(!agree)} />
          <span className={styles.checkmark}></span>
          Натискаючи кнопку, ви погоджуєтесь на обробку ваших <a href="#">персональних даних.</a>
        </label>
      </div>

      {/* ✅ Нижній туман */}
      <div className={styles.fogBottom}></div>
    </section>
  );
};

export default Callback;
