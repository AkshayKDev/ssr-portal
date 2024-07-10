import { createBrowserRouter } from "react-router-dom";
import Home from "@/screens/Home/Home";
import Login from "@/screens/Auth/Login/Login";
import Register from "@/screens/Auth/Register/Register";
import Dashboard from "@/screens/dashboard/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/:eventId",
    element: <Dashboard />,
  },
]);

export default router;
