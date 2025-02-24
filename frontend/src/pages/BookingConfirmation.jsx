import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBookingData } from "../utils/cookies";

function BookingConfirmation() {
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const bookingData = getBookingData();
    if (bookingData) {
      setBooking(bookingData);
    }
  }, []);

  if (!booking) {
    return (
      <div className="min-h-screen bg-stone-50 pt-20">
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl font-semibold text-emerald-900 mb-8">
            Booking Not Found
          </h1>
          <Link
            to="/booking"
            className="inline-block bg-emerald-900 hover:bg-emerald-800 text-white px-8 py-3 rounded-lg"
          >
            Make a New Booking
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 pt-20">
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm p-8">
          <h1 className="text-4xl font-semibold text-emerald-900 mb-8">
            Booking Confirmed
          </h1>

          <div className="space-y-6">
            <div className="border-b pb-4">
              <p className="text-sm text-gray-600">Booking Reference</p>
              <p className="text-lg font-medium text-gray-800">
                {booking.bookingId}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-600">Check-in</p>
                <p className="text-lg text-gray-800">
                  {new Date(booking.checkIn).toLocaleDateString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Check-out</p>
                <p className="text-lg text-gray-800">
                  {new Date(booking.checkOut).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-600">Room Type</p>
              <p className="text-lg text-gray-800">{booking.roomType}</p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Guest Name</p>
              <p className="text-lg text-gray-800">{booking.name}</p>
            </div>

            <div className="pt-6">
              <Link
                to="/"
                className="inline-block bg-emerald-900 hover:bg-emerald-800 text-white px-8 py-3 rounded-lg"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingConfirmation;
