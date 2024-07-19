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
  {
    path: "/:eventId/admin-home",
    element: <h1>Hello</h1>,
  },
  {
    path: "/:eventId/admin-register",
    element: <h1>Hello</h1>,
  },
  {
    path: "/:eventId/process-payments",
    element: <h1>Hello</h1>,
  },
  {
    path: "/:eventId/offsite-allocations",
    element: <h1>Hello</h1>,
  },
  {
    path: "/:eventId/mailing-list-homes",
    element: <h1>Hello</h1>,
  },
  {
    path: "/:eventId/view-sponsors",
    element: <h1>Hello</h1>,
  },
  {
    path: "/:eventId/add-new-sponsor",
    element: <h1>Hello</h1>,
  },
]);

export default router;
