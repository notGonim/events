import React from "react";
import classes from "./eventItem.module.css";
import Link from "next/link";

export const EventItem = ({ title, image, date, location, id }) => {
  const formatedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "/n");

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title} </h2>
          <div className={classes.date}>
            <time>{formatedDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formattedAddress}</address>
          </div>
          <div className={classes.actions}>
            <Link href={`/events/${id}`}>
              <a className={classes.btn}>
                <span>Explore Event </span>
                <span className={classes.icon}>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};
