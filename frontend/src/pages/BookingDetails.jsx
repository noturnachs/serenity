import { useState, useEffect } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { rooms } from "../data/mockDb";
import Input from "../components/ui/Input";
import TextArea from "../components/ui/TextArea";
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
              <Input
                label="Full Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="bg-emerald-800 text-emerald-100"
              />
              <Input
                type="email"
                label="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="bg-emerald-800 text-emerald-100"
              />
              <Input
                type="tel"
                label="Phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
                className="bg-emerald-800 text-emerald-100"
              />
              <TextArea
                label="Special Requests"
                value={formData.specialRequests}
                onChange={(e) =>
                  setFormData({ ...formData, specialRequests: e.target.value })
                }
                className="bg-emerald-800 text-emerald-100"
              />
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
