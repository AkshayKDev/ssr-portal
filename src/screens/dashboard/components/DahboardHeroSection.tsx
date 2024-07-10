import { Input } from "@/components/ui/input";
import dashboardBanner from "../../../assets/dashboard.jpg";
import { IoIosSearch } from "react-icons/io";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface Event {
  eventId: string;
  eventName: string;
}

interface DashboardHeroSectionProps {
  events: Event[];
}

const DahboardHeroSection = ({ events }: DashboardHeroSectionProps) => {
  const { eventId } = useParams<{ eventId: string }>();
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  useEffect(() => {
    if (events?.length > 0) {
      const event = events.find((event) => event.eventId === eventId);
      setSelectedEvent(event || null);
    }
  }, [eventId, events]);

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
          <IoIosSearch className="h-8 w-8 mr-2 mt-4" />
          <Input type="text" placeholder="Search..." className="border-none" />
        </div>
      </div>
    </div>
  );
};

export default DahboardHeroSection;
