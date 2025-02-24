import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Amenities from "./components/Amenities";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Amenities />
        <Gallery />
        <Contact />
      </main>

      <footer className="bg-emerald-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/90">
            © 2024 Serenity Busay. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
