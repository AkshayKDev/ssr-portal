import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import React from "react";
import { useNavigate } from "react-router-dom";

interface eventProps {
  events: {
    eventId: string;
    eventName: string;
  }[];
}

const DropDownMenu: React.FC<eventProps> = ({ events }) => {
  const navigate = useNavigate();

  const handleEventSelect = (eventId: string) => {
    navigate(`/${eventId}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button className="w-full px-8">Select Event</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {events.map((event) => (
          <div key={event.eventId}>
            <DropdownMenuItem onClick={() => handleEventSelect(event.eventId)}>
              {event.eventName}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownMenu;
