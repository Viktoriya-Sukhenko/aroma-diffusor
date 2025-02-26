import { useState } from "react";
import { db, collection, addDoc } from "../firebase"; // ✅ Імпорт Firebase
import styles from "@/styles/sections/callback.module.scss"; // ✅ Імпорт стилів

const Callback = () => {
  const [phone, setPhone] = useState("+380");
  const [selectedSocial, setSelectedSocial] = useState("");
  const [nickname, setNickname] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔥 Функція відправки заявки у Firestore
  const sendToFirebase = async (data) => {
    try {
      await addDoc(collection(db, "requests"), data);
      console.log("✅ Заявка успішно збережена у Firestore:", data);
      return true;
    } catch (error) {
      console.error("❌ Помилка збереження у Firestore:", error);
      return false;
    }
  };

  // 🔥 Функція надсилання заявки у Telegram
  const sendToTelegram = async (message) => {
    const botToken = "7711059163:AAHWNiFfmUzvV3ViPSsdGJl-GgQdaq8ucus"; // 🔥 Заміни на реальний токен
    const chatId = "1446641391"; // 🔥 Заміни на реальний chat_id
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const data = {
      chat_id: chatId,
      text: message,
      parse_mode: "HTML",
    };

    console.log("📤 Відправляємо в Telegram:", JSON.stringify(data, null, 2));

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("📩 Відповідь Telegram API:", result);

      return response.ok;
    } catch (error) {
      console.error("❌ Помилка відправки в Telegram:", error);
      return false;
    }
  };

  // 🔥 Обробник форми
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!phone.replace("+380", "").trim() && (!selectedSocial || nickname.trim() === "")) {
      alert("⚠️ Заповніть хоча б один спосіб зв'язку.");
      return;
    }

    setLoading(true);

    const site = window.location.hostname;
    const requestData = {
      site,
      phone: phone.length > 4 ? phone : "не вказано",
      social: selectedSocial || "не вказано",
      nickname: nickname.trim() !== "" ? nickname : "не вказано",
      status: "new",
      timestamp: new Date().toISOString(),
    };

    const message = `📌 <b>Нова заявка</b>\n🌍 <b>Сайт:</b> ${site}\n📞 <b>Телефон:</b> ${phone.length > 4 ? phone : "не вказано"}\n🔗 <b>${selectedSocial}:</b> ${nickname.trim() !== "" ? nickname : "не вказано"}`;

    const firebaseSuccess = await sendToFirebase(requestData);
    const telegramSuccess = await sendToTelegram(message);

    if (firebaseSuccess && telegramSuccess) {
      alert("✅ Ваші дані надіслано!");
      setPhone("+380");
      setNickname("");
      setSelectedSocial("");
    } else {
      alert("❌ Помилка відправки. Спробуйте ще раз.");
    }

    setLoading(false);
  };

  // 🔥 Валідація номера телефону (дозволяє вводити лише цифри після "+380")
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Видаляє всі нецифрові символи
    if (value.startsWith("380")) {
      setPhone(`+${value}`);
    } else {
      setPhone("+380" + value.slice(3)); // Додає "+380" на початку
    }
  };

  // 🔥 Валідація нікнейма або номера Viber
  const handleNicknameChange = (e) => {
    let value = e.target.value;
    if (selectedSocial === "Viber") {
      // ✅ Якщо Viber — дозволяємо лише цифри (як телефон)
      value = value.replace(/\D/g, "");
      if (value.startsWith("380")) {
        setNickname(`+${value}`);
      } else {
        setNickname("+380" + value.slice(3)); // Автоматично додає "+380"
      }
    } else {
      // ✅ Для інших соцмереж дозволені літери, цифри та спецсимволи
      value = value.replace(/[^a-zA-Z0-9_.-]/g, ""); // Видаляє все, окрім дозволених символів
      setNickname("@" + value);
    }
  };

  return (
    <section id="callback" className={styles.callback}>
      <div className={styles.fogTop}></div>
      <div className={styles.container} id="form">
        <h2 className={styles.title}>Щоб зробити замовлення, оберіть зручний спосіб зв'язку</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          {/* 📞 Варіант 1: Телефонний дзвінок */}
          <div className={styles.choiceBlock}>
            <h3 className={styles.choiceTitle}>Варіант 1: Телефонний дзвінок</h3>
            <div className={styles.inputGroup}>
              <input
                type="tel"
                placeholder="Введіть ваш номер телефону"
                value={phone}
                onChange={handlePhoneChange}
                className={styles.input}
                maxLength={13} // Обмеження довжини +380XXXXXXXXX (12 символів + "+")
              />
            </div>
          </div>

          <div className={styles.separator}>АБО</div>

          {/* 💬 Варіант 2: Соцмережі */}
          <div className={styles.choiceBlock}>
            <h3 className={styles.choiceTitle}>Варіант 2: Напишемо вам у соцмережах</h3>
            <div className={styles.socialCheckboxes}>
              {["Telegram", "Instagram", "Viber"].map((social) => (
                <label key={social}>
                  <input
                    type="radio"
                    name="social"
                    value={social}
                    checked={selectedSocial === social}
                    onChange={(e) => {
                      setSelectedSocial(e.target.value);
                      setNickname(e.target.value === "Viber" ? "+380" : "@");
                    }}
                  />
                  {social}
                </label>
              ))}
            </div>

            <div className={styles.inputGroup}>
              <input
                type={selectedSocial === "Viber" ? "tel" : "text"}
                placeholder={
                  selectedSocial
                    ? selectedSocial === "Viber"
                      ? "Введіть номер у Viber"
                      : `Ваш нікнейм у ${selectedSocial}`
                    : "Оберіть соцмережу"
                }
                value={nickname}
                onChange={handleNicknameChange}
                className={styles.input}
                disabled={!selectedSocial} // Забороняє введення, якщо не вибрана соцмережа
                maxLength={selectedSocial === "Viber" ? 13 : 30} // Обмеження довжини
              />
            </div>
          </div>

          {/* 🔘 Кнопка відправки */}
          <button type="submit" className={styles.button} disabled={loading}>
            {loading ? "Надсилаємо..." : "Надіслати заявку"}
          </button>
        </form>
      </div>
      <div className={styles.fogBottom}></div>
    </section>
  );
};

export default Callback;
