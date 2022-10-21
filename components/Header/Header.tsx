import Head from 'next/head';
import React from 'react';
import styles from '../../styles/Home.module.css';

export default function Header() {
  return (
    <>
      <h1 className={styles.title}>
        Bem vindo ao projeto em grupo!
      </h1>

      <p className={styles.description}>
        Arquivo index.tsx analisado! ✅🥳
      </p>
    </>
  )
}
