import { Input } from "@/components/ui/input";
import dashboardBanner from "../../../assets/dashboard.jpg";
import { Search } from "lucide-react";

const DahboardHeroSection = () => {
  return (
    <div>
      <div className="mb-4 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Kartik Parikrama 2023
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
        <div className="flex items-center w-full px-4 md:px-20 lg:px-32 space-y-4">
          <Search className="h-6 w-6 mr-1 mt-3" />
          <Input type="text" placeholder="Search..." className="border-none" />
        </div>
      </div>
    </div>
  );
};

export default DahboardHeroSection;
