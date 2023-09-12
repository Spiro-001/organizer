import React, { HTMLProps, Key, StyleHTMLAttributes } from "react";
import Text from "./Text";
import EventCard from "./EventCard";

type Event = {
  id: Key;
  dateCreated: Date;
  tStart: Date;
  tEnd: Date;
  info: String;
  color?: String;
};

interface EventsProp {
  events: Array<Event>;
  timeRange: [Date, Date, "after" | "past" | "ongoing" | "between"];
  section: String;
  className?: HTMLProps<HTMLElement>["className"];
}

const Events = ({ events, timeRange, section, className }: EventsProp) => {
  const sortEvent = function (a: Event, b: Event): number {
    if (a.tStart > b.tStart) return 1;
    else if (a.tStart < b.tStart) return -1;
    else return 0;
  };

  const filterRange = (ele: Event) => {
    switch (timeRange[2]) {
      case "between":
        if (timeRange[0] < ele.tStart && timeRange[1] > ele.tEnd) return ele; // Between Range
        break;
      case "after":
        if (ele.tStart > timeRange[1]) return ele; // After Range
        break;
      case "past":
        if (ele.tStart < timeRange[0] && ele.tEnd < timeRange[0]) return ele; // Past
        break;
      case "ongoing":
        if (ele.tStart < new Date() && ele.tEnd > new Date()) return ele; // Ongoing
        break;
    }
  };

  if (events.sort(sortEvent).filter(filterRange).length === 0)
    return (
      <div className={className}>
        <Text className="font-bold text-2xl">
          There are currently no events...
        </Text>
      </div>
    );

  return (
    <div className={className}>
      {events
        .sort(sortEvent)
        .filter(filterRange)
        .map((event) => (
          <EventCard key={event.id} event={event} section={section} />
        ))}
    </div>
  );
};

export default Events;
