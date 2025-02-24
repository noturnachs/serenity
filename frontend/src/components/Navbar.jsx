import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Serenity Logo" className="h-12 w-auto" />
          <h1
            className={`text-2xl font-semibold ${
              isScrolled ? "text-emerald-900" : "text-white"
            }`}
          >
            Serenity Busay
          </h1>
        </div>

        <div className="hidden md:flex space-x-8">
          {["Features", "Amenities", "Gallery", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`transition-colors ${
                isScrolled
                  ? "text-gray-800 hover:text-emerald-800"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
