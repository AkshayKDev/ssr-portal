import DropDownMenu from "@/components/DropDownMenu";
import axios from "axios";
import { UserRound } from "lucide-react";
import { useEffect, useState } from "react";

interface Event {
  eventId: string;
  eventName: string;
}

const Hero = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    axios
      .get(
        "http://p402.network.sadhu-sanga.appspot.com/getEventsList?apiVersion=2.9"
      )
      .then((response) => setEvents(response.data.eventsList))
      .catch((error) => console.log(error));
    console.log(events);
  }, []);

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col">
        <div className="mb-4 flex font-bold items-center border shadow-xs p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <UserRound className="h-6 w-6 mr-2" />
          Admin Dashboard
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6 font-bold">
          Sadhu Sanga Retreat Portal
        </h1>
        <div className="text-3xl md:text-6xl font-bold bg-linear-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit mb-4">
          Hare Krsna
        </div>
      </div>
      <DropDownMenu events={events} />
    </div>
  );
};

export default Hero;
