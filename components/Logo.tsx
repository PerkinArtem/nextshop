import Link from 'next/link';
import styles from '../styles/components/Logo.module.css'

const Logo = () => {
  return (
    <Link href={'/'}>
      <a className={styles.logo}>NEXTSHOP</a>
    </Link>
  );
}

export default Logo;