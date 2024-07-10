import MobileNav from "./MobileNav";
import Prabhupad from "../../../assets/prabhupad.png";
import BreadCrumbs from "@/components/BreadCrumbs";

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <MobileNav />
      <div className="flex w-full justify-between items-center">
        <BreadCrumbs />
        <img src={Prabhupad} className="h-20 w-20" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
