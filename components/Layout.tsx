import React from 'react'
import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import styles from "../styles/components/Layout.module.css";

type LayoutProps = {
  children?: React.ReactNode,
  title?: string
}

const Layout = ({children, title}: LayoutProps) => {

  const defaultTitle = 'Next.js Shop'

  return (
    <>
      <Head>
        <title>{title ? `${title} | Next.js Shop` : defaultTitle}</title>
        <meta name="description" content="Next.js simple shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <Header />
        <main className={styles.main}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;