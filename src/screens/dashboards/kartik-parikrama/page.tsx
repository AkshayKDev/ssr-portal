import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const kartikParikrama = () => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-80 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
        <Sidebar />
      </div>
      <main className="md:pl-80 bg-slate-100 h-full">
        <Navbar />
      </main>
    </div>
  );
};

export default kartikParikrama;
