import MobileNav from "./MobileNav";
import Prabhupad from "../../../../assets/prabhupad.png";

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <MobileNav />
      <div className="flex w-full justify-end">
        <img src={Prabhupad} className="h-20 w-20" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
