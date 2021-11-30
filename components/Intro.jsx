import Image from "next/image";
import styles from "../styles/Intro.module.css";
import devBotPng from "../public/img/devbot.png";
const Intro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brand}>DevBot</span> Digital Services
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor, sed do eiusmod tempor.
        </p>
        <button className={styles.button}>Discover</button>
      </div>
      <div className={styles.card}>
        <Image
          src={devBotPng}
          width="100%"
          height="100%"
          layout="fill"
          objectFit="cover"
          alt="devbot"
        />
      </div>
    </div>
  );
};

export default Intro;
