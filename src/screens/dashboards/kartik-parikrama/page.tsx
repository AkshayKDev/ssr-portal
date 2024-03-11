import Navbar from "@/screens/Home/components/Navbar";
import Hero from "./components/Hero";
import Buttons from "./components/Buttons";

const kartikParikrama = () => {
  return (
    <div>
      <Navbar />
      <main className="bg-slate-100 pt-30 min-h-screen flex flex-col justify-center items-center">
        <Hero />
        <Buttons />
      </main>
    </div>
  );
};

export default kartikParikrama;
