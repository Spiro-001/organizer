import Events from "@/components/Events";
import Text from "@/components/Text";
import { events } from "@/public/FakeData/events";
import Image from "next/image";

export default function Home() {
  const dateNow = new Date();
  const dateTmr = new Date(dateNow);
  dateTmr.setDate(dateTmr.getDate() + 1);
  dateTmr.setHours(0, 0, 0, 0);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-y-8 py-4 px-12">
        <Text className="text-6xl font-bold underline underline-offset-8">
          Events Today
        </Text>
        <Events
          events={events}
          timeRange={[dateNow, dateTmr, "between"]}
          section="today"
          className="flex gap-x-4 bg-red-100 py-6 px-8 rounded-md"
        />
      </div>
      <div className="flex flex-col gap-y-8 py-4 px-12">
        <Text className="text-6xl font-bold underline underline-offset-8">
          Upcoming Events
        </Text>
        <Events
          events={events}
          timeRange={[dateNow, dateTmr, "after"]}
          section="upcoming"
          className="flex gap-x-4 bg-red-100 py-6 px-8 rounded-md"
        />
      </div>
      <div className="flex flex-col gap-y-8 py-4 px-12">
        <Text className="text-6xl font-bold underline underline-offset-8">
          Ongoing Events
        </Text>
        <Events
          events={events}
          timeRange={[dateNow, dateTmr, "ongoing"]}
          section="ongoing"
          className="flex gap-x-4 bg-red-100 py-6 px-8 rounded-md"
        />
      </div>
      <div className="flex flex-col gap-y-8 py-4 px-12">
        <Text className="text-6xl font-bold underline underline-offset-8">
          Past Events
        </Text>
        <Events
          events={events}
          timeRange={[dateNow, dateTmr, "past"]}
          section="past"
          className="flex gap-x-4 bg-red-100 py-6 px-8 rounded-md"
        />
      </div>
    </div>
  );
}
