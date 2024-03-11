import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const DropDownMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button className="mt-2 w-full px-8 outline-none focus-visible:ring-1">Select Event</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <Link to="/portal/us-sadhu-sanga-2024">
          <DropdownMenuItem>US Sadhu Sanga Retreat 2024</DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <Link to="/portal/mexico-sadhu-sanga-2023">
          <DropdownMenuItem>Mexico Sadhu Sanga Retreat 2023</DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <Link to="/portal/sadhu-sanga-2023">
          <DropdownMenuItem>Sadhu Sanga Retreat 2023</DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <Link to="/portal/kartik-parikrama-2023">
          <DropdownMenuItem>Kartik Parikrama 2023</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownMenu;
