import React, { Key } from "react";
import Text from "./Text";

type Event = {
  id: Key;
  dateCreated: Date;
  tStart: Date;
  tEnd: Date;
  info: String;
  color?: String;
};

interface EventProp {
  event: Event;
  section: String;
}

const EventCard = ({ event, section }: EventProp) => {
  return (
    <div
      key={event.id}
      style={{
        backgroundColor: event.color ?? "white",
        maxWidth: 550,
        wordBreak: "break-all",
      }}
      id={`#${section}`}
      className="px-4 py-3 flex flex-col gap-y-4 border border-gray-100 rounded-md shadow-md whitespace-nowrap"
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
  );
};

export default EventCard;
