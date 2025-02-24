import { Link } from "react-router-dom";
import mainBg from "../assets/main-bg.png";

function Hero() {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${mainBg})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>{" "}
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-semibold mb-6 text-white">
            Serenity Busay Resort
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 font-light">
            Luxury Mountain Resort & Events Destination
          </p>
          <Link
            to="/booking"
            className="inline-block bg-emerald-900 hover:bg-emerald-800 text-white text-lg px-12 py-3 rounded-lg transition-colors duration-300"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
