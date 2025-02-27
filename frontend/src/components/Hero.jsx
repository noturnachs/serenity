import heroImage from "../assets/main-bg.png";

function Hero() {
  return (
    <div className="relative pt-20 px-12">
      {/* Hero section */}
      <div className="container mx-auto">
        <div className="relative h-[70vh] overflow-hidden rounded-[3rem] shadow-2xl">
          {/* Background image with overlay */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black/40 z-10 shadow-inner"></div>
            <img
              src={heroImage}
              alt="Serenity Busay Resort"
              className="h-full w-full object-cover object-center shadow-[inset_0_0_20px_rgba(0,0,0,0.6)]"
            />
          </div>

          {/* Content container */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6">
            <div className="max-w-6xl w-full text-center">
              {/* Hero text */}
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4 drop-shadow-lg font-cormorant-sc">
                <span className="relative inline-block">
                  <span className="absolute -inset-1 w-full h-full rounded-full"></span>
                  <span className="relative text-6xl md:text-7xl tracking-wider bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent font-[700] font-cormorant-sc">
                    Escape to Serenity Farm Resort
                  </span>
                </span>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-6 drop-shadow-md">
                Experience pure tranquility in the mountains of Busay, Cebu City
              </p>

              {/* Call to action buttons with hash links */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <a
                  href="#amenities"
                  className="bg-white text-emerald-900 px-8 py-3 rounded-full hover:bg-white/90 transition-colors font-medium min-w-[200px] shadow-lg"
                >
                  Discover More
                </a>
                <a
                  href="#gallery"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors font-medium min-w-[200px] shadow-lg"
                >
                  View Gallery
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Calendar Section */}
        <div className="absolute -bottom-20 left-0 right-0 z-20 px-6">
          <div className="bg-white rounded-[2rem] shadow-xl p-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="relative">
                <p className="font-medium mb-2">Check-in</p>
                <div className="flex items-center gap-2 p-3 border rounded-xl hover:border-gray-400 cursor-pointer transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <input 
                    type="date" 
                    className="w-full outline-none cursor-pointer" 
                    placeholder="Select date"
                  />
                </div>
              </div>

              <div className="relative">
                <p className="font-medium mb-2">Check-out</p>
                <div className="flex items-center gap-2 p-3 border rounded-xl hover:border-gray-400 cursor-pointer transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <input 
                    type="date" 
                    className="w-full outline-none cursor-pointer" 
                    placeholder="Select date"
                  />
                </div>
              </div>

              <div className="relative">
                <p className="font-medium mb-2">Room</p>
                <div className="relative">
                  <select className="w-full p-3 border rounded-xl appearance-none hover:border-gray-400 cursor-pointer transition-colors pr-10">
                    <option value="standard">Standard Room</option>
                    <option value="deluxe">Deluxe Room</option>
                    <option value="suite">Suite Room</option>
                    <option value="family">Family Room</option>
                  </select>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <button className="bg-emerald-900 text-white px-8 py-3 rounded-xl hover:bg-emerald-800 transition-colors font-medium h-[46px] self-end">
                Check Availability
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
