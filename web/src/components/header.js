import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";

import * as styles from "./header.module.css";

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to="/">Helena D-W</Link>
      </div>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol="hamburger" />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to="/projects/">Projects</Link>
            <Link to="/blog/">Blog</Link>
            {/* <Link to="/about/">About</Link> */}
            <a href="https://github.com/helenadw" target="blank">Github</a>
            <Link to="/contact/">Contact</Link>
            {/* <a href="mailto:hi@helenadw.com">hi@helenadw.com</a> */}
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Header;
