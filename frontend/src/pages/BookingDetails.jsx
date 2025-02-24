import { useState, useEffect } from "react";
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
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-900 rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-semibold text-emerald-100 mb-8">
              Complete Your Booking
            </h1>

            <div className="mb-8 p-4 bg-emerald-800 rounded-lg">
              <h2 className="text-xl font-medium text-emerald-100 mb-2">
                {room.name}
              </h2>
              <p className="text-emerald-200 mb-4">{room.description}</p>
              <p className="text-emerald-100 font-medium">
                ₱{room.price.toLocaleString()} per night
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="mb-4">
                <label className="block text-emerald-100 mb-3 font-medium">
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
              <div className="mb-4">
                <label className="block text-emerald-100 mb-3 font-medium">
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
              <div className="mb-4">
                <label className="block text-emerald-100 mb-3 font-medium">
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
              <div className="mb-4">
                <label className="block text-emerald-100 mb-3 font-medium">
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
              <button
                type="submit"
                className="w-full bg-emerald-700 hover:bg-emerald-600 text-white py-4 rounded-lg transition-colors"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingDetails;
