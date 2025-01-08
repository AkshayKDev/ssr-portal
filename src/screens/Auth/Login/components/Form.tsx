import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { FormEvent, useState } from "react";

const Form: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://p402.network.sadhu-sanga.appspot.com/validateUserLogin",
        {
          appVersion: "2.9",
          apiVersion: "1.8",
          userAccessCode: password,
          userEmail: email,
        }
      );

      if (response.data.success) {
        console.log("Login successful:", response.data);
        // Handle successful login, e.g., redirect to another page or save token
      } else {
        console.error("Login failed:", response.data.message);
        // Handle case where login was not successful, e.g., show error message
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.response?.data);
        // Handle axios-specific error
      } else {
        console.error("General error:", error);
        // Handle other errors (e.g., network issues)
      }
    }
  };

  return (
    <div className="md:w-1/2 bg-white md:flex md:justify-center md:items-center min-h-screen pt-60 w-full md:pt-0">
      <div className="max-w-sm w-full px-6 py-8">
        <h2 className="text-center font-semibold text-2xl mb-4 uppercase">
          Sign in
        </h2>
        <form onSubmit={handleLogin}>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button className="w-full" type="submit">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Form;
