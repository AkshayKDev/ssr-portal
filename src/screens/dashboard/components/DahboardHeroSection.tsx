import { Input } from "@/components/ui/input";
import dashboardBanner from "../../../assets/dashboard.jpg";
import { Search } from "lucide-react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

interface Event {
  eventId: string;
  eventName: string;
}

const DahboardHeroSection = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "http://p401.network.sadhu-sanga.appspot.com/getEventsList?apiVersion=2.9"
      )
      .then((response) => {
        setEvents(response.data.eventsList);
        // setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching event details:", error);
        // setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (events?.length > 0) {
      const event = events.find((event) => event.eventId === eventId);
      setSelectedEvent(event || null);
    }
    console.log(eventId);
  }, [eventId, events]);

  console.log(events);
  console.log(eventId);

  return (
    <div>
      <div className="mb-4 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          {selectedEvent?.eventName}
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Welcome to Sadhu Sanga Retreat Portal
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4 flex flex-col items-center justify-center">
        <img
          className="rounded-lg"
          src={dashboardBanner}
          alt="dashboard-banner"
        />
        <div className="flex items-center px-4 md:px-20 lg:px-32 space-y-4 w-10/12">
          <Search className="h-6 w-6 mr-2 mt-4" />
          <Input type="text" placeholder="Search..." className="border-none" />
        </div>
      </div>
    </div>
  );
};

export default DahboardHeroSection;
