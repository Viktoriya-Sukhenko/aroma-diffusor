import styles from "@/styles/components/footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© {new Date().getFullYear()} Aroma Diffuser. Усі права захищені.</p>
      </div>
    </footer>
  );
};

export default Footer;
