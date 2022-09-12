import React from 'react';
import styles from '../styles/components/Container.module.css'

type ContainerProps = {
  children: React.ReactNode,
  customClasses?: string
}


const Container = ({children}: ContainerProps) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}

export default Container;