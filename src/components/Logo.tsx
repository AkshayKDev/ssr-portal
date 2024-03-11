import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="hover:opacity-75 transition items-center gap-x-2 flex cursor-pointer">
      <Link to="/">
        <img src="/logo.png" alt="Logo" height="60" width="60" />
      </Link>
    </div>
  );
};

export default Logo;
