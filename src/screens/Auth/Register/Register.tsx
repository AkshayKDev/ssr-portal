import LoginBanner from "../../../assets/login-banner.jpg";
import Navbar from "@/screens/Home/components/Navbar";
import Form from "./components/Form";

const Register = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row min-h-screen">
        <Form />
        <div className="md:w-1/2 hidden md:block">
          <img
            src={LoginBanner}
            alt="Placeholder"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
