import styles from '../styles/components/Header.module.css'
import Container from './Container';
import Logo from './Logo';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <Logo />
          <Navigation />
        </div>
      </Container>
    </header>
  );
}

export default Header;