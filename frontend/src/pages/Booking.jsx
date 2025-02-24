import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Booking() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    guests: 1,
    isWalkIn: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchParams = new URLSearchParams({
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
      guests: formData.guests,
    });
    navigate(`/booking/rooms?${searchParams.toString()}`);
  };

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
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-4 gap-4"
            >
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
                  required
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
                  required
                  className="w-full px-4 py-3 border-2 border-emerald-600/30 rounded-lg bg-emerald-800/30 text-emerald-100 focus:outline-none focus:border-emerald-500 placeholder:text-emerald-500/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-emerald-100 mb-2 font-medium text-sm">
                  Guests
                </label>
                <input
                  type="number"
                  min="1"
                  value={formData.guests}
                  onChange={(e) =>
                    setFormData({ ...formData, guests: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 border-2 border-emerald-600/30 rounded-lg bg-emerald-800/30 text-emerald-100 focus:outline-none focus:border-emerald-500 placeholder:text-emerald-500/50 transition-colors"
                />
              </div>

              <div className="flex flex-col justify-end">
                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-lg transition-colors duration-300 font-medium"
                >
                  Search Rooms
                </button>
              </div>
            </form>

            <div className="mt-4 flex items-center space-x-2">
              <input
                type="checkbox"
                id="walkIn"
                checked={formData.isWalkIn}
                onChange={(e) =>
                  setFormData({ ...formData, isWalkIn: e.target.checked })
                }
                className="w-4 h-4 text-emerald-600"
              />
              <label htmlFor="walkIn" className="text-emerald-100 text-sm">
                I'm interested in day pass only (9AM - 5PM)
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
