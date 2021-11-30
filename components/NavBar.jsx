import Link from "next/link";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <Link href="/">DevBot</Link>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/products/development">Development</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/production">Production</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/photography">Photography</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
