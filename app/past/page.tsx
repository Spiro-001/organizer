"use client";

import { AppContext } from "@/components/AppProvider";
import { events } from "@/public/FakeData/events";
import Events from "@/components/Events";
import Text from "@/components/Text";
import React, { useContext } from "react";

const Past = () => {
  const { options, setOptions } = useContext(AppContext);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-y-8 py-4 px-12">
        <Text className="text-6xl font-bold underline underline-offset-8">
          Past Events
        </Text>
        <Events
          events={events}
          timeRange={[options.timeNow, options.timeTmr, "past"]}
          section="past"
          className="flex gap-x-4 bg-red-100 py-6 px-8 rounded-md overflow-x-auto"
        />
      </div>
    </div>
  );
};

export default Past;
