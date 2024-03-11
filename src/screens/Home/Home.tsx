import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const Home = () => {
  return (
    <div className="h-full bg-slate-100">
      <Navbar />
      <main className="bg-slate-100 min-h-screen flex flex-col justify-center items-center">
        <Hero />
      </main>
    </div>
  );
};

export default Home;
