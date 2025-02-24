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
      <div className="container mx-auto px-6 py-24">
        <h1 className="text-4xl font-semibold text-emerald-100 text-center mb-16">
          Check Availability
        </h1>

        <div className="max-w-2xl mx-auto bg-emerald-900 rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center space-x-2 mb-6">
              <input
                type="checkbox"
                id="walkIn"
                checked={formData.isWalkIn}
                onChange={(e) =>
                  setFormData({ ...formData, isWalkIn: e.target.checked })
                }
                className="w-4 h-4 text-emerald-600"
              />
              <label htmlFor="walkIn" className="text-emerald-100">
                Day Pass Only (9AM - 5PM)
              </label>
            </div>

            {!formData.isWalkIn && (
              <>
                <div className="mb-4">
                  <label className="block text-emerald-100 mb-3 font-medium">
                    Check-in Date
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
                <div className="mb-4">
                  <label className="block text-emerald-100 mb-3 font-medium">
                    Check-out Date
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
              </>
            )}

            <div className="mb-4">
              <label className="block text-emerald-100 mb-3 font-medium">
                Number of Guests
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

            <button
              type="submit"
              className="w-full bg-emerald-700 hover:bg-emerald-600 text-white py-4 rounded-lg transition-colors duration-300 text-lg"
            >
              Check Available Rooms
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Booking;
