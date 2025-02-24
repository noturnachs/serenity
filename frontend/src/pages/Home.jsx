import Hero from "../components/Hero";
import Features from "../components/Features";
import Amenities from "../components/Amenities";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";

function Home() {
  return (
    <main className="bg-emerald-950">
      <Hero />
      <Features />
      <Amenities />
      <Gallery />
      <Contact />
      <footer className="bg-emerald-950 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/90">
            © 2024 Serenity Busay. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

export default Home;
