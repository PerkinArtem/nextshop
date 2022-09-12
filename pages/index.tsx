import type { NextPage } from "next";
import styles from "../styles/pages/Home.module.css";
import Layout from "../components/Layout";
import Container from "../components/Container";

const Home: NextPage = () => {
  const heroBg = '/images/hero-bg.jpg'
  return (
    <Layout title="Home">
      <div 
        className={styles.hero} 
        style={{backgroundImage: `url('${heroBg}')`}}
      >
        <Container>
          <div className={styles.inner}>
            <h1 className={styles.title}>Next.js</h1>
            <p className={styles.subtitle}>Simple Shop</p>
            <div className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum purus, est tortor pulvinar ut in. Fringilla a diam enim sed justo, sed iaculis sagittis. Tortor id eu interdum nec ut iaculis. Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi. Tortor nibh magna feugiat id nunc, dui nisl viverra.
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Home;
