// import { Input } from "@/components/ui/input";
import { Input } from "@/components/ui/input";
import SadhuSanga from "../../../../assets/us-sadhu-sanga.jpg";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex items-center justify-center flex-col w-3/3">
      <div className="flex items-center justify-center flex-col">
        <div className="mb-4 flex font-bold items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          Kartik Parikrama 2023
        </div>
        <img src={SadhuSanga} className="rounded-lg shadow-sm" alt="" />
        <div className="flex  justify-center items-center w-full">
          <Search className="h-6 w-6 mr-2" />
          <Input className="mt-5 mb-5" placeholder="Search..." name="search" />
        </div>
        {/* <div className="mb-10">
          <ul className="flex flex-col flex-wrap">
            <li>(default by name/email/city)</li>
            <li>
              For Custom Query: eg:name:jayendran + status:confirmed + city:
              austin
            </li>
            <li>
              Available Field Names: name(either legal or
              spiritual)/license/building/room/parking/gender/city/registration/email/
              status(either regn or check-in
              status)/needs/state/comments/spdisciple
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
