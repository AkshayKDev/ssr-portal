import { SearchIcon } from "lucide-react";
import DashboardImage from "../../../../assets/dashboard.jpg";
import { Input } from "@/components/ui/input";

const Search = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Kartik Parikrama 2023
        </h2>
        <img src={DashboardImage} className="rounded-xl" alt="" />
      </div>
      <div>
        <div className="px-4 flex justify-center items-center md:px-20 lg:px-36 space-y-4">
          <SearchIcon className="h-5 w-5 mr-1 mt-2" />
          <Input placeholder="Search.." />
        </div>
        <div className="px-12 flex justify-center items-center md:px-20 lg:px-36 space-y-4 mt-4">
          <ul className="list-disc text-wrap">
            <li>(default by name/email/city)</li>
            <li>
              for custom query: eg:name:jayendran + status:confirmed + city:
              austin
            </li>
            <li>
              name(either legal or
              spiritual)/license/building/room/parking/gender/city/registration/email/
              status(either regn or check-in
              status)/needs/state/comments/spdisciple
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Search;
