import { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/main-bg.png";

function Hero() {
  const navigate = useNavigate();
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);
  const [stayType, setStayType] = useState("overnight"); // 'overnight' or 'dayuse'
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    adults: 2,
    children: 0,
    rooms: 1,
    isWalkIn: false,
    stayType: "overnight",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchParams = new URLSearchParams({
      adults: formData.adults,
      children: formData.children,
      rooms: formData.rooms,
      isWalkIn: formData.isWalkIn,
      stayType: stayType,
    });

    if (!formData.isWalkIn) {
      searchParams.append("checkIn", formData.checkIn);
      searchParams.append("checkOut", formData.checkOut);
    } else {
      const today = new Date().toISOString().split("T")[0];
      searchParams.append("checkIn", today);
    }

    navigate(`/booking/rooms?${searchParams.toString()}`);
  };

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

        {/* Enhanced Booking Form Section */}
        <div className="absolute -bottom-32 left-0 right-0 z-20 px-6">
          <div className="bg-white rounded-[2rem] shadow-xl p-8 max-w-6xl mx-auto">
            {/* Stay Type Toggle */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex rounded-lg border border-gray-200 p-1">
                <button
                  type="button"
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    stayType === "overnight"
                      ? "bg-emerald-900 text-white"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => {
                    setStayType("overnight");
                    setFormData((prev) => ({ ...prev, stayType: "overnight" }));
                  }}
                >
                  Overnight Stays
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    stayType === "dayuse"
                      ? "bg-emerald-900 text-white"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => {
                    setStayType("dayuse");
                    setFormData((prev) => ({ ...prev, stayType: "dayuse" }));
                  }}
                >
                  Day Use Stays
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Check-in Date */}
                <div className="relative">
                  <p className="font-medium mb-2">
                    {stayType === "dayuse" ? "Date" : "Check-in"}
                  </p>
                  <div className="flex items-center gap-2 p-3 border rounded-xl hover:border-gray-400 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <input
                      type="date"
                      className="w-full outline-none"
                      value={formData.checkIn}
                      onChange={(e) =>
                        setFormData({ ...formData, checkIn: e.target.value })
                      }
                      disabled={formData.isWalkIn}
                      required={!formData.isWalkIn}
                    />
                  </div>
                </div>

                {/* Check-out Date - Only show for overnight stays */}
                {stayType === "overnight" && (
                  <div className="relative">
                    <p className="font-medium mb-2">Check-out</p>
                    <div className="flex items-center gap-2 p-3 border rounded-xl hover:border-gray-400 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <input
                        type="date"
                        className="w-full outline-none"
                        value={formData.checkOut}
                        onChange={(e) =>
                          setFormData({ ...formData, checkOut: e.target.value })
                        }
                        disabled={formData.isWalkIn}
                        required={
                          !formData.isWalkIn && stayType === "overnight"
                        }
                      />
                    </div>
                  </div>
                )}

                {/* Time Selection - Only show for day use */}
                {stayType === "dayuse" && (
                  <div className="relative">
                    <p className="font-medium mb-2">Time</p>
                    <div className="flex items-center gap-2 p-3 border rounded-xl hover:border-gray-400 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <select
                        className="w-full outline-none bg-transparent"
                        value={formData.timeSlot}
                        onChange={(e) =>
                          setFormData({ ...formData, timeSlot: e.target.value })
                        }
                        required={stayType === "dayuse"}
                      >
                        <option value="">Select time</option>
                        <option value="morning">Morning (8 AM - 4 PM)</option>
                        <option value="afternoon">
                          Afternoon (2 PM - 10 PM)
                        </option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Guests & Rooms Dropdown */}
                <div className="relative">
                  <p className="font-medium mb-2">Guests & Rooms</p>
                  <div
                    className="p-3 border rounded-xl hover:border-gray-400 cursor-pointer transition-colors"
                    onClick={() => setShowGuestDropdown(!showGuestDropdown)}
                  >
                    <div className="flex items-center justify-between">
                      <span>
                        {formData.adults + formData.children} Guests,{" "}
                        {formData.rooms} Room(s)
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>

                    {/* Dropdown Panel */}
                    {showGuestDropdown && (
                      <div className="absolute left-0 right-0 mt-2 p-4 bg-white border rounded-xl shadow-lg z-50">
                        {/* Adults */}
                        <div className="flex items-center justify-between mb-4">
                          <span>Adults</span>
                          <div className="flex items-center gap-3">
                            <button
                              type="button"
                              className="w-8 h-8 rounded-full border flex items-center justify-center"
                              onClick={() =>
                                setFormData((prev) => ({
                                  ...prev,
                                  adults: Math.max(1, prev.adults - 1),
                                }))
                              }
                            >
                              -
                            </button>
                            <span>{formData.adults}</span>
                            <button
                              type="button"
                              className="w-8 h-8 rounded-full border flex items-center justify-center"
                              onClick={() =>
                                setFormData((prev) => ({
                                  ...prev,
                                  adults: prev.adults + 1,
                                }))
                              }
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Children */}
                        <div className="flex items-center justify-between mb-4">
                          <span>Children</span>
                          <div className="flex items-center gap-3">
                            <button
                              type="button"
                              className="w-8 h-8 rounded-full border flex items-center justify-center"
                              onClick={() =>
                                setFormData((prev) => ({
                                  ...prev,
                                  children: Math.max(0, prev.children - 1),
                                }))
                              }
                            >
                              -
                            </button>
                            <span>{formData.children}</span>
                            <button
                              type="button"
                              className="w-8 h-8 rounded-full border flex items-center justify-center"
                              onClick={() =>
                                setFormData((prev) => ({
                                  ...prev,
                                  children: prev.children + 1,
                                }))
                              }
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Rooms */}
                        <div className="flex items-center justify-between">
                          <span>Rooms</span>
                          <div className="flex items-center gap-3">
                            <button
                              type="button"
                              className="w-8 h-8 rounded-full border flex items-center justify-center"
                              onClick={() =>
                                setFormData((prev) => ({
                                  ...prev,
                                  rooms: Math.max(1, prev.rooms - 1),
                                }))
                              }
                            >
                              -
                            </button>
                            <span>{formData.rooms}</span>
                            <button
                              type="button"
                              className="w-8 h-8 rounded-full border flex items-center justify-center"
                              onClick={() =>
                                setFormData((prev) => ({
                                  ...prev,
                                  rooms: prev.rooms + 1,
                                }))
                              }
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Search Button */}
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.isWalkIn}
                      onChange={(e) =>
                        setFormData({ ...formData, isWalkIn: e.target.checked })
                      }
                      className="rounded text-emerald-900"
                    />
                    <span className="text-sm">Walk-in booking</span>
                  </label>
                  <button
                    type="submit"
                    className="bg-emerald-900 text-white px-8 py-3 rounded-xl hover:bg-emerald-800 transition-colors font-medium"
                  >
                    Search {stayType === "overnight" ? "Rooms" : "Availability"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
