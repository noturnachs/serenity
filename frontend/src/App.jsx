import Hero from "./components/Hero";
import Features from "./components/Features";
import Amenities from "./components/Amenities";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-[var(--primary)] text-2xl font-semibold">
            Serenity Busay
          </h1>
          <div className="hidden md:flex space-x-8">
            <a
              href="#features"
              className="text-[var(--text)] hover:text-[var(--primary)] transition-colors"
            >
              Features
            </a>
            <a
              href="#amenities"
              className="text-[var(--text)] hover:text-[var(--primary)] transition-colors"
            >
              Amenities
            </a>
            <a
              href="#gallery"
              className="text-[var(--text)] hover:text-[var(--primary)] transition-colors"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="text-[var(--text)] hover:text-[var(--primary)] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Features />
        <Amenities />
        <Gallery />
        <Contact />
      </main>

      <footer className="bg-[var(--primary)] text-white py-8">
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
