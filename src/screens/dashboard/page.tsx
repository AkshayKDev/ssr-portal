import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DahboardHeroSection from "./components/DahboardHeroSection";
import { useEffect, useState } from "react";
import axios from "axios";

interface Event {
  eventId: string;
  eventName: string;
}

const Dashboard = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    axios
      .get(
        "http://p401.network.sadhu-sanga.appspot.com/getEventsList?apiVersion=2.9"
      )
      .then((response) => {
        setEvents(response.data.eventsList);
      })
      .catch((error) => {
        console.error("Error fetching event details:", error);
      });
  }, []);

  console.log(events);
  

  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-80 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
        <Sidebar />
      </div>
      <main className="md:pl-80 bg-slate-100 min-h-screen">
        <Navbar />
        <DahboardHeroSection events={events} />
      </main>
    </div>
  );
};

export default Dashboard;
