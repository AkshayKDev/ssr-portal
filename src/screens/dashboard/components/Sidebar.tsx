import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import {
  LayoutDashboard,
  User,
  UserPlus,
  HomeIcon,
  WalletCards,
  Mail,
  Plus,
} from "lucide-react";
import { cn } from "@/lib/utils";

const routes = [
  {
    label: "Admin Home",
    icon: HomeIcon,
    href: "/kartik-parikrama-2023/admin-home",
    color: "text-sky-500",
  },
  {
    label: "Admin Register",
    icon: Plus,
    href: "/kartik-parikrama-2023/admin-register",
    color: "text-violet-500",
  },
  {
    label: "Process Payments",
    icon: WalletCards,
    href: "/kartik-parikrama-2023/process-payments",
    color: "text-pink-700",
  },
  {
    label: "Offsite Allocations",
    icon: LayoutDashboard,
    href: "/kartik-parikrama-2023/offsite-allocations",
    color: "text-blue-700",
  },
  {
    label: "Mailing List Homes",
    icon: Mail,
    href: "/kartik-parikrama-2023/mailing-list-homes",
    color: "text-red-500",
  },
  {
    label: "View Sponsors",
    icon: User,
    href: "/kartik-parikrama-2023/view-sponsors",
    color: "text-green-500",
  },
  {
    label: "Add New Sponsor",
    icon: UserPlus,
    href: "/kartik-parikrama-2023/add-new-sponsor",
    color: "text-white-500",
  },
];

const Sidebar = () => {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link to="/" className="flex items-center pl-3 mb-14">
          <div className="relative w-10 h-10 mr-4">
            <img src={Logo} alt="logo" />
          </div>
          <h1 className="text-xl font-bold">Sadhu Sanga Retreat</h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              to={route.href}
              key={route.href}
              className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition"
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
