import { useState } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { rooms } from "../data/mockDb";

import { saveBookingData } from "../utils/cookies";

function BookingDetails() {
  const { roomId } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const room = rooms.find((r) => r.id === parseInt(roomId));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
    checkIn: searchParams.get("checkIn") || "",
    checkOut: searchParams.get("checkOut") || "",
    guests: searchParams.get("guests") || 1,
    roomType: room?.name || "",
    totalAmount: room?.price || 0,
  });

  if (!room) {
    return <div>Room not found</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingData = {
      ...formData,
      bookingId: `SB${Date.now()}`,
      roomId: room.id,
      status: "confirmed",
      bookingDate: new Date().toISOString(),
    };

    saveBookingData(bookingData);
    navigate("/booking/confirmation");
  };

  return (
    <div className="min-h-screen bg-emerald-950 pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Room Preview */}
          <div className="relative h-[300px] rounded-xl overflow-hidden mb-8">
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
              <div className="absolute bottom-0 left-0 p-8">
                <h1 className="text-3xl font-bold text-white mb-2">
                  {room.name}
                </h1>
                <p className="text-white/90 text-lg">
                  ₱{room.price.toLocaleString()} per night
                </p>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-emerald-900 rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h2 className="text-xl font-medium text-emerald-100">
                  Room Details
                </h2>
                <p className="text-emerald-200">{room.description}</p>
                <ul className="text-emerald-200 space-y-2">
                  {room.amenities.map((amenity, index) => (
                    <li key={index}>• {amenity}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="text-xl font-medium text-emerald-100">
                  Stay Information
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-emerald-200">Check-in</p>
                    <p className="text-lg text-emerald-100">
                      {new Date(formData.checkIn).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-emerald-200">Check-out</p>
                    <p className="text-lg text-emerald-100">
                      {new Date(formData.checkOut).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-emerald-200">Guests</p>
                    <p className="text-lg text-emerald-100">
                      {formData.guests}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div>
                <label className="block text-emerald-100 mb-2 font-medium text-sm">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 border-2 border-emerald-600/30 rounded-lg bg-emerald-800/30 text-emerald-100 focus:outline-none focus:border-emerald-500 placeholder:text-emerald-500/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-emerald-100 mb-2 font-medium text-sm">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 border-2 border-emerald-600/30 rounded-lg bg-emerald-800/30 text-emerald-100 focus:outline-none focus:border-emerald-500 placeholder:text-emerald-500/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-emerald-100 mb-2 font-medium text-sm">
                  Phone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 border-2 border-emerald-600/30 rounded-lg bg-emerald-800/30 text-emerald-100 focus:outline-none focus:border-emerald-500 placeholder:text-emerald-500/50 transition-colors"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-emerald-100 mb-2 font-medium text-sm">
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
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-emerald-600/30 rounded-lg bg-emerald-800/30 text-emerald-100 focus:outline-none focus:border-emerald-500 placeholder:text-emerald-500/50 transition-colors"
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded-lg transition-colors duration-300 font-medium text-lg"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingDetails;
