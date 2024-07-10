import Logo from "@/components/Logo";
import Prabhupad from "../../../assets/prabhupad.png";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-20 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <img src={Prabhupad} className="h-20 w-20 object-contain" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
