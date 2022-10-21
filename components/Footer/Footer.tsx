import Image from 'next/image';
import React from 'react';
import styles from '../../styles/Home.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by Grupo 5
        <span className={styles.logo}>
          <Image src="/png1.svg" alt="Grupo 5 Logo" width='100%' height='100%' />
        </span>
      </a>
    </footer>
  )
}
