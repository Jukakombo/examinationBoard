import React from "react";
import styles from "./Navigation.module.scss";

import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul className={styles.mainMenu}>
        <li className={styles?.drop}>
          <Link to={process.env.PUBLIC_URL + "/"}>
            Home
            {/* <IoIosArrowDown /> */}
          </Link>
        </li>
        <li className={styles.drop}>
          <Link to={process.env.PUBLIC_URL + "/service"}>Service</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/about"}>About</Link>
        </li>
        <li className={styles.drop}>
          <Link to={process.env.PUBLIC_URL + "/blog"}>Blog</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
