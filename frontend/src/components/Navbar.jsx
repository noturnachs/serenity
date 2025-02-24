import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isBookingPage = location.pathname === "/booking";

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
        isScrolled || isBookingPage
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Serenity Logo" className="h-12 w-auto" />
          <h1
            className={`text-2xl font-semibold ${
              isScrolled || isBookingPage ? "text-emerald-900" : "text-white"
            }`}
          >
            Serenity Busay
          </h1>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <div className="space-x-8">
            {["Features", "Amenities", "Gallery", "Contact"].map((item) => (
              <a
                key={item}
                href={`/#${item.toLowerCase()}`}
                className={`transition-colors ${
                  isScrolled || isBookingPage
                    ? "text-gray-800 hover:text-emerald-800"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item}
              </a>
            ))}
          </div>
          <Link
            to="/booking"
            className={`transition-colors px-6 py-2 rounded-lg ${
              isScrolled || isBookingPage
                ? "bg-emerald-900 text-white hover:bg-emerald-800"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
