import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Booking() {
  const navigate = useNavigate();
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    adults: 2,
    children: 0,
    rooms: 1,
    isWalkIn: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchParams = new URLSearchParams({
      adults: formData.adults,
      children: formData.children,
      rooms: formData.rooms,
      isWalkIn: formData.isWalkIn,
    });

    if (!formData.isWalkIn) {
      searchParams.append("checkIn", formData.checkIn);
      searchParams.append("checkOut", formData.checkOut);
    } else {
      const today = new Date().toISOString().split("T")[0];
      searchParams.append("checkIn", today);
      searchParams.append("checkOut", today);
    }

    navigate(`/booking/rooms?${searchParams.toString()}`);
  };

  const GuestDropdown = () => (
    <div className="absolute top-full left-0 mt-2 w-72 bg-emerald-800 rounded-lg shadow-lg p-4 z-50">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-emerald-100 font-medium">Room</p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              type="button"
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  rooms: Math.max(1, prev.rooms - 1),
                }))
              }
              className="w-8 h-8 rounded-full bg-emerald-700 text-white flex items-center justify-center hover:bg-emerald-600"
            >
              -
            </button>
            <span className="text-emerald-100 w-4 text-center">
              {formData.rooms}
            </span>
            <button
              type="button"
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  rooms: Math.min(5, prev.rooms + 1),
                }))
              }
              className="w-8 h-8 rounded-full bg-emerald-700 text-white flex items-center justify-center hover:bg-emerald-600"
            >
              +
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-emerald-100 font-medium">Adults</p>
            <p className="text-sm text-emerald-300">Ages 18 or above</p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              type="button"
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  adults: Math.max(1, prev.adults - 1),
                }))
              }
              className="w-8 h-8 rounded-full bg-emerald-700 text-white flex items-center justify-center hover:bg-emerald-600"
            >
              -
            </button>
            <span className="text-emerald-100 w-4 text-center">
              {formData.adults}
            </span>
            <button
              type="button"
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  adults: Math.min(10, prev.adults + 1),
                }))
              }
              className="w-8 h-8 rounded-full bg-emerald-700 text-white flex items-center justify-center hover:bg-emerald-600"
            >
              +
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-emerald-100 font-medium">Children</p>
            <p className="text-sm text-emerald-300">Ages 0-17</p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              type="button"
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  children: Math.max(0, prev.children - 1),
                }))
              }
              className="w-8 h-8 rounded-full bg-emerald-700 text-white flex items-center justify-center hover:bg-emerald-600"
            >
              -
            </button>
            <span className="text-emerald-100 w-4 text-center">
              {formData.children}
            </span>
            <button
              type="button"
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  children: Math.min(10, prev.children + 1),
                }))
              }
              className="w-8 h-8 rounded-full bg-emerald-700 text-white flex items-center justify-center hover:bg-emerald-600"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-emerald-950 pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
            <img
              src="https://placehold.co/1920x600/emerald/white?text=Serenity+Resort"
              alt="Resort"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
              <div className="absolute bottom-0 left-0 p-8">
                <h1 className="text-4xl font-bold text-white mb-2">
                  Find Your Perfect Stay
                </h1>
                <p className="text-white/90 text-lg">
                  Best rates guaranteed at Serenity Busay Resort
                </p>
              </div>
            </div>
          </div>

          {/* Search Form */}
          <div className="bg-emerald-900 rounded-xl shadow-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {!formData.isWalkIn && (
                  <>
                    <div>
                      <label className="block text-emerald-100 mb-2 font-medium text-sm">
                        Check-in
                      </label>
                      <input
                        type="date"
                        value={formData.checkIn}
                        onChange={(e) =>
                          setFormData({ ...formData, checkIn: e.target.value })
                        }
                        required={!formData.isWalkIn}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full px-4 py-3 border-2 border-emerald-600/30 rounded-lg bg-emerald-800/30 text-emerald-100 focus:outline-none focus:border-emerald-500 placeholder:text-emerald-500/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-emerald-100 mb-2 font-medium text-sm">
                        Check-out
                      </label>
                      <input
                        type="date"
                        value={formData.checkOut}
                        onChange={(e) =>
                          setFormData({ ...formData, checkOut: e.target.value })
                        }
                        required={!formData.isWalkIn}
                        min={
                          formData.checkIn ||
                          new Date().toISOString().split("T")[0]
                        }
                        className="w-full px-4 py-3 border-2 border-emerald-600/30 rounded-lg bg-emerald-800/30 text-emerald-100 focus:outline-none focus:border-emerald-500 placeholder:text-emerald-500/50 transition-colors"
                      />
                    </div>
                  </>
                )}

                <div
                  className={`relative ${
                    formData.isWalkIn ? "md:col-span-3" : ""
                  }`}
                >
                  <label className="block text-emerald-100 mb-2 font-medium text-sm">
                    Guests
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowGuestDropdown(!showGuestDropdown)}
                    className="w-full px-4 py-3 border-2 border-emerald-600/30 rounded-lg bg-emerald-800/30 text-emerald-100 focus:outline-none focus:border-emerald-500 text-left flex justify-between items-center"
                  >
                    <span>
                      {formData.adults + formData.children} guest
                      {formData.adults + formData.children !== 1
                        ? "s"
                        : ""} • {formData.rooms} room
                      {formData.rooms !== 1 ? "s" : ""}
                    </span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {showGuestDropdown && <GuestDropdown />}
                </div>

                <div className="flex flex-col justify-end">
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-lg transition-colors duration-300 font-medium"
                  >
                    Search Rooms
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-2 pt-2">
                <input
                  type="checkbox"
                  id="walkIn"
                  checked={formData.isWalkIn}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      isWalkIn: e.target.checked,
                      checkIn: e.target.checked ? "" : formData.checkIn,
                      checkOut: e.target.checked ? "" : formData.checkOut,
                    })
                  }
                  className="w-4 h-4 text-emerald-600"
                />
                <label htmlFor="walkIn" className="text-emerald-100 text-sm">
                  I'm interested in day pass only (9AM - 5PM)
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
