import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/Home.module.css";

const Home = () => {
  return (
    <>
      <br />
      <br />

      <div className={styles.container}>
        <div className={styles.backgroundOverlay}></div>
        <main className={styles.main}>
          <h1 className={styles.title}>SENECA INNOVATORS</h1>
          <div className={styles.logoContainer}>
            <Link
              href="https://www.instagram.com/senecabusinessclub/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.logoLink}
            >
              <Image
                src="/Logo/SBC.png"
                alt="Seneca Business Club"
                width={300}
                height={300}
                className={styles.logo}
              />
            </Link>
            <Link
              href="https://www.instagram.com/smarketingclub/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.logoLink}
            >
              <Image
                src="/Logo/SMC.png"
                alt="Seneca Marketing Club"
                width={300}
                height={300}
                className={styles.logo}
              />
            </Link>
            <Link
              href="https://www.instagram.com/seneca_sdc/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.logoLink}
            >
              <Image
                src="/Logo/SDC.png"
                alt="Seneca Software Developers Club"
                width={300}
                height={300}
                className={styles.logo}
              />
            </Link>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
