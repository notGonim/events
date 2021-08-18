import Link from "next/link";
import React from "react";
import classes from "./main-header.module.css";
export const Header = () => {
  return (
    <header className={classes.header}>
      <div  className={classes.logo}>
        <Link href="/">Next Events</Link>
      </div>
      <nav >
        <ul className={classes.navigation}>
          <li>
            <Link href="/events">Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
