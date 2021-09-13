import React from "react";
import styles from "../navbar/navbar.module.css";
const Navbar = () => {
  return (
    <header className={styles.mobileNav}>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;