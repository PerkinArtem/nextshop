import { NextPage } from "next";
import Container from "../components/Container";
import Layout from "../components/Layout";
import styles from '../styles/pages/About.module.css'

const About: NextPage = () => {
  return (
    <Layout title="About">
      <Container>
        <div className={styles.section}>
          Coming Soon!
        </div>
      </Container>
    </Layout>
  );
}

export default About;