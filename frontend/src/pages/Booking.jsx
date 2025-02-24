import { useState } from "react";

function Booking() {
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    guests: 1,
    roomType: "deluxe",
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking:", formData);
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="container mx-auto px-6 py-24">
        <h1 className="text-4xl font-semibold text-emerald-900 text-center mb-16">
          Book Your Stay
        </h1>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="space-y-6">
              <h2 className="text-2xl font-medium text-gray-800">
                Stay Details
              </h2>

              <div>
                <label className="block text-gray-700 mb-2">
                  Check-in Date
                </label>
                <input
                  type="date"
                  value={formData.checkIn}
                  onChange={(e) =>
                    setFormData({ ...formData, checkIn: e.target.value })
                  }
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-600"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Check-out Date
                </label>
                <input
                  type="date"
                  value={formData.checkOut}
                  onChange={(e) =>
                    setFormData({ ...formData, checkOut: e.target.value })
                  }
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-600"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Room Type</label>
                <select
                  value={formData.roomType}
                  onChange={(e) =>
                    setFormData({ ...formData, roomType: e.target.value })
                  }
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-600"
                >
                  <option value="deluxe">Deluxe Mountain Suite</option>
                  <option value="executive">Executive Room</option>
                  <option value="premium">Premium Villa</option>
                  <option value="family">Family Residence</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Number of Guests
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={formData.guests}
                  onChange={(e) =>
                    setFormData({ ...formData, guests: e.target.value })
                  }
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-600"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-medium text-gray-800">
                Guest Information
              </h2>

              <div>
                <label className="block text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-600"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-600"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-600"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Special Requests
                </label>
                <textarea
                  value={formData.specialRequests}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      specialRequests: e.target.value,
                    })
                  }
                  rows="4"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-600"
                ></textarea>
              </div>
            </div>

            <div className="md:col-span-2 mt-6">
              <button
                type="submit"
                className="w-full bg-emerald-900 hover:bg-emerald-800 text-white py-4 rounded-lg transition-colors duration-300 text-lg"
              >
                Confirm Booking
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Booking;
