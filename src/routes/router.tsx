import { createBrowserRouter } from "react-router-dom";
import Home from "@/screens/Home/Home";
import Login from "@/screens/Auth/Login/Login";
import Register from "@/screens/Auth/Register/Register";
import SadhuSanga from "@/screens/dashboards/sadhu-sanga/page";
import UsSadhuSanga from "@/screens/dashboards/us-sadhu-sanga/page";
import MexicoSadhuSanga from "@/screens/dashboards/mexico-sadhu-sanga/page";
import KartikParikrama from "../screens/dashboards/kartik-parikrama/page";

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
    path: "/sadhu-sanga-2023",
    element: <SadhuSanga />,
  },
  {
    path: "/us-sadhu-sanga-2024",
    element: <UsSadhuSanga />,
  },
  {
    path: "/mexico-sadhu-sanga-2023",
    element: <MexicoSadhuSanga />,
  },
  {
    path: "/kartik-parikrama-2023",
    element: <KartikParikrama />,
  },
  {
    path: "/home",
    element: <h1>Hello</h1>,
  },
]);

export default router;
