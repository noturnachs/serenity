import Hero from "../components/Hero";
import About from "../components/About";
import Amenities from "../components/Amenities";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";

function Home() {
  return (
    <main className="bg-gray-50">
      <Hero />
      <About />
      <Amenities />
      <Gallery />
      <Contact />
    </main>
  );
}

export default Home;
