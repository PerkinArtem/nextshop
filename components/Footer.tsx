import Container from "./Container";
import styles from '../styles/components/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.copyright}>© 2022 All rights reserved</div>
          <div className={styles.developer}>created by a.pe</div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;