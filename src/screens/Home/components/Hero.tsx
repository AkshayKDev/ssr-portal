import { Button } from "@/components/ui/button";
import { UserRound } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col">
        <div className="mb-4 flex font-bold items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <UserRound className="h-6 w-6 mr-2" />
          Admin Dashboard
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6 font-bold">
          Sadhu Sanga Retreat Portal
        </h1>
        <div className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
          Hare Krsna
        </div>
      </div>
      <div>
        <Link to="/portal/login">
          <Button className="mt-6 mr-2" size="lg" variant="outline">
            Login
          </Button>
        </Link>
        <Link to="/portal/register">
          <Button className="mt-6 mr-2" size="lg">
            Register
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
