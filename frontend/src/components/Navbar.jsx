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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white ${
        isScrolled ? "shadow-2xl" : ""
      } py-4`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Serenity Logo" className="h-8 w-auto" />
            <span className="text-xl font-medium text-emerald-900">
              Serenity Busay
            </span>
          </Link>

          {/* Navigation Links - Centered */}
          <div className="hidden md:flex items-center space-x-12 flex-1 justify-center">
            <div className="flex space-x-8">
              {["About", "Amenities", "Gallery", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  className="font-medium text-black hover:text-emerald-700 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Book Room Button */}
          <Link
            to="/booking"
            className="hidden md:block rounded-full bg-emerald-900 text-white hover:bg-emerald-800 transition-colors px-8 py-2.5 font-medium"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
