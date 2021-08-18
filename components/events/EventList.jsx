import React from "react";
import { EventItem } from "./EventItem";
import classes from './eventList.module.css'
export const EventList = ({ items }) => {
  
  return (
    <ul className={classes.list}>
      {items.map((event) => (
       <EventItem key={event.id} title={event.title} image={event.image} date={event.date} location={event.location} id={event.id} />
      ))}
    </ul>
  );
};
