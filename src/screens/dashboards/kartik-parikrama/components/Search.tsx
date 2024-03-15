import { SearchIcon } from "lucide-react";
import DashboardImage from "../../../../assets/dashboard.jpg";
import { Input } from "@/components/ui/input";

const Search = () => {
  return (
    <div className="pt-20 overflow-y-hidden">
      <div className="flex flex-col justify-center items-center mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Kartik Parikrama 2023
        </h2>
        <img src={DashboardImage} className="rounded-xl" alt="" />
      </div>
      <div>
        <div className="px-4 flex justify-center items-center md:px-24 lg:px-48 space-y-4">
          <SearchIcon className="h-5 w-5 mr-1 mt-4" />
          <Input placeholder="Search.." />
        </div>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center px-8 sm:px-16 md:px-24 lg:px-40 mt-2">
          (default by name/email/city) <br /> For Custom Query:
          eg:name:jayendran + status:confirmed + city: austin <br /> Available
          Field Names: name(legal or
          spiritual)/license/building/room/parking/gender/city/email/
          status(either regn or check-in status)/needs/state/comments/spdisciple
        </p>
      </div>
    </div>
  );
};

export default Search;
