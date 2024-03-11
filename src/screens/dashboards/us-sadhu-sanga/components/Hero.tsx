import { Input } from "@/components/ui/input";
import SadhuSanga from "../../../../assets/us-sadhu-sanga.jpg";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex items-center justify-center flex-col w-3/3">
      <div className="flex items-center justify-center flex-col">
        <div className="mb-4 flex font-bold items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          US Sadhu Sanga Retreat 2024
        </div>
        <img src={SadhuSanga} className="rounded-lg shadow-sm" alt="" />
        <div className="flex  justify-center items-center w-full">
          <Search className="h-6 w-6 mr-2" />
          <Input className="mt-5 mb-5" placeholder="Search..." name="search" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
