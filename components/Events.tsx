import React, { HTMLProps, Key, StyleHTMLAttributes } from "react";
import Text from "./Text";

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
  return (
    <div className={className}>
      {events
        .sort(sortEvent)
        .filter(filterRange)
        .map((event) => (
          <div
            key={event.id}
            style={{
              backgroundColor: event.color ?? "white",
              maxWidth: 550,
              wordBreak: "break-all",
            }}
            id={`#${section}`}
            className="px-4 py-3 flex flex-col gap-y-4 border border-gray-100 rounded-md shadow-md"
          >
            <div className="flex justify-between gap-x-8 font-semibold">
              <Text>
                {event.tStart.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "2-digit",
                  day: "numeric",
                })}
              </Text>
              <div className="font-bold bg-black text-white px-3 py-1 rounded-md">
                <Text>
                  {event.tStart.toLocaleTimeString([], {
                    hour: "numeric",
                    minute: "2-digit",
                  })}
                </Text>
                {" - "}
                <Text>
                  {event.tEnd.toLocaleTimeString([], {
                    hour: "numeric",
                    minute: "2-digit",
                  })}
                </Text>
              </div>
            </div>
            <Text className="border border-gray-50 bg-slate-100 rounded-sm px-4 py-3">
              {event.info}
            </Text>
          </div>
        ))}
    </div>
  );
};

export default Events;
