import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const MexicoSadhuSanga = () => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-80 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
        <Sidebar />
      </div>
      <main className="md:pl-80">
        <Navbar />
      </main>
    </div>
  );
};

export default MexicoSadhuSanga;
