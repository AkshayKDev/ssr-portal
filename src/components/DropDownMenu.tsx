import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import axios from "axios";

interface Event {
  eventId: string;
  eventName: string;
}

const DropDownMenu: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    axios
      .get(
        "http://p401.network.sadhu-sanga.appspot.com/getEventsList?apiVersion=2.9"
      )
      .then((response) => setEvents(response.data.eventsList))
      .catch((error) => console.log(error));
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button className="w-full px-8">Select Event</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {events.map((event) => (
          <div key={event.eventId}>
            <DropdownMenuItem>{event.eventName}</DropdownMenuItem>
            <DropdownMenuSeparator />
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownMenu;
