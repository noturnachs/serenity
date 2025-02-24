import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBookingData } from "../utils/cookies";

function BookingConfirmation() {
  const [booking] = useState(() => {
    const data = getBookingData();
    return data || null;
  });

  if (!booking) {
    return (
      <div className="min-h-screen bg-emerald-950 pt-20">
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl font-semibold text-emerald-100 mb-8">
            Booking Not Found
          </h1>
          <Link
            to="/booking"
            className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-lg transition-colors"
          >
            Make a New Booking
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-emerald-950 pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-emerald-900 rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-emerald-100">
                Booking Confirmed!
              </h1>
              <p className="text-emerald-200 mt-2">
                Booking ID: {booking.bookingId}
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-emerald-200 font-medium">
                    Check-in
                  </p>
                  <p className="text-lg text-emerald-100">
                    {new Date(booking.checkIn).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-emerald-200 font-medium">
                    Check-out
                  </p>
                  <p className="text-lg text-emerald-100">
                    {new Date(booking.checkOut).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm text-emerald-200 font-medium">
                  Room Type
                </p>
                <p className="text-lg text-emerald-100">{booking.roomType}</p>
              </div>

              <div>
                <p className="text-sm text-emerald-200 font-medium">
                  Guest Details
                </p>
                <p className="text-lg text-emerald-100">{booking.name}</p>
                <p className="text-emerald-200">{booking.email}</p>
                <p className="text-emerald-200">{booking.phone}</p>
              </div>

              <div>
                <p className="text-sm text-emerald-200 font-medium">
                  Total Amount
                </p>
                <p className="text-2xl text-emerald-100 font-semibold">
                  ₱{booking.totalAmount.toLocaleString()}
                </p>
              </div>

              <div className="border-t border-emerald-800 pt-6 mt-6">
                <div className="flex justify-between items-center">
                  <Link
                    to="/"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-lg transition-colors font-medium"
                  >
                    Return to Home
                  </Link>
                  <button
                    onClick={() => window.print()}
                    className="text-emerald-200 hover:text-emerald-100 transition-colors"
                  >
                    Print Confirmation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingConfirmation;
