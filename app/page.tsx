"use client";

import { AppContext } from "@/components/AppProvider";
import { events } from "@/public/FakeData/events";
import { useContext } from "react";
import Events from "@/components/Events";
import Text from "@/components/Text";

export default function Home() {
  const { options, setOptions } = useContext(AppContext);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-y-8 py-4 px-12">
        <Text className="text-6xl font-bold underline underline-offset-8">
          Events Today
        </Text>
        <Events
          events={events}
          timeRange={[options.timeNow, options.timeTmr, "between"]}
          section="today"
          className="flex gap-x-4 bg-red-100 py-6 px-8 rounded-md"
        />
      </div>
    </div>
  );
}
