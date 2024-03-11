import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import Google from "../../../../assets/google.svg";

const Form = () => {
  return (
    <div className="md:w-1/2 bg-white md:flex md:justify-center md:items-center min-h-screen pt-60 w-full md:pt-0">
      <div className="max-w-sm w-full px-6 py-8">
        <h2 className="text-center font-semibold text-2xl mb-4 uppercase">
          sign in
        </h2>
        <Button variant="outline" className="w-full py-2 px-4 rounded-md mb-4">
          <img
            src={Google}
            height="20"
            width="20"
            className="mr-2"
            alt="google-logo"
          />
          Login with Google
        </Button>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <Input
              placeholder="Your Email"
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <Input
              placeholder="Password"
              type="password"
              id="password"
              name="password"
            />
          </div>
          <Button className="w-full" type="submit">
            Login
          </Button>
        </form>
        <div className="text-center mt-4">
          <p>
            Don't have an account?
            <Link to="/portal/register">
              <span className="text-blue-500 cursor-pointer ml-2">Sign Up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;
