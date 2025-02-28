import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBookingData } from "../utils/cookies";

function BookingConfirmation() {
  const [booking] = useState(() => {
    const data = getBookingData();
    return data || null;
  });

  // Format date for display
  const formatDateForDisplay = (dateString) => {
    if (!dateString) return "N/A";

    try {
      const date = new Date(dateString);
      if (!isNaN(date.getTime())) {
        return date.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
          year: "numeric",
        });
      }
      return "Invalid Date";
    } catch (error) {
      return "Invalid Date";
    }
  };

  // Share booking details
  const handleShareBooking = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "My Booking at Serenity Busay Resort",
          text: `I've booked a stay at Serenity Busay Resort! Check-in: ${formatDateForDisplay(
            booking.checkIn
          )}, Check-out: ${formatDateForDisplay(
            booking.checkOut
          )}. Booking ID: ${booking.bookingId}`,
          url: window.location.href,
        })
        .catch((error) => console.log("Error sharing", error));
    } else {
      // Fallback for browsers that don't support the Web Share API
      alert("Booking details copied to clipboard!");
      navigator.clipboard.writeText(
        `My booking at Serenity Busay Resort - ID: ${booking.bookingId}`
      );
    }
  };

  if (!booking) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-6 py-24 text-center">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-8">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Booking Not Found
            </h1>
            <p className="text-gray-600 mb-6">
              We couldn't find your booking information. It may have expired or
              been removed.
            </p>
            <Link
              to="/"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg transition-colors font-medium"
            >
              Make a New Booking
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Success Banner */}
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mb-6 rounded-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg
                  className="h-8 w-8 text-emerald-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-emerald-800">
                  Booking Confirmed!
                </h3>
                <p className="text-emerald-700">
                  Your reservation has been successfully confirmed. A
                  confirmation email has been sent to {booking.email}.
                </p>
              </div>
            </div>
          </div>

          {/* Main Confirmation Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
            <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-900">
                  Booking Details
                </h2>
                <span className="text-sm font-medium text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                  Confirmed
                </span>
              </div>
            </div>

            <div className="p-6">
              {/* Booking ID and QR Code */}
              <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-8 border-b border-gray-100">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Booking ID</p>
                  <p className="text-xl font-bold text-gray-900">
                    {booking.bookingId}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Booked on {formatDateForDisplay(booking.bookingDate)}
                  </p>
                </div>
                <div className="mt-4 md:mt-0 bg-gray-100 p-4 rounded-lg">
                  <div className="w-24 h-24 bg-white p-2 mx-auto">
                    {/* Placeholder for QR code - in a real app, generate actual QR */}
                    <div className="w-full h-full border-2 border-gray-300 flex items-center justify-center">
                      <span className="text-xs text-gray-400">QR Code</span>
                    </div>
                  </div>
                  <p className="text-xs text-center text-gray-500 mt-2">
                    Show this at check-in
                  </p>
                </div>
              </div>

              {/* Stay Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 pb-8 border-b border-gray-100">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Stay Information
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Check-in</p>
                      <div className="flex items-center mt-1">
                        <svg
                          className="h-5 w-5 text-emerald-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <p className="text-base font-medium text-gray-900">
                          {formatDateForDisplay(booking.checkIn)}
                        </p>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">From 2:00 PM</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Check-out</p>
                      <div className="flex items-center mt-1">
                        <svg
                          className="h-5 w-5 text-emerald-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <p className="text-base font-medium text-gray-900">
                          {formatDateForDisplay(booking.checkOut)}
                        </p>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        Until 12:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Room Details
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-medium text-gray-900">
                      {booking.roomType}
                    </p>
                    <div className="flex items-center mt-2">
                      <svg
                        className="h-5 w-5 text-gray-400 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span className="text-gray-600">
                        {booking.adults} adult{booking.adults !== 1 ? "s" : ""}
                        {parseInt(booking.children) > 0 &&
                          `, ${booking.children} child${
                            booking.children !== 1 ? "ren" : ""
                          }`}
                      </span>
                    </div>
                    <div className="flex items-center mt-2">
                      <svg
                        className="h-5 w-5 text-gray-400 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                      <span className="text-gray-600">
                        {booking.rooms} room{booking.rooms !== 1 ? "s" : ""}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guest and Payment Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 pb-8 border-b border-gray-100">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Guest Information
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <svg
                        className="h-5 w-5 text-gray-400 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <span className="text-gray-900 font-medium">
                        {booking.name}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="h-5 w-5 text-gray-400 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-gray-600">{booking.email}</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="h-5 w-5 text-gray-400 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span className="text-gray-600">{booking.phone}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Payment Information
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Room Rate</span>
                      <span className="text-gray-900">
                        ₱
                        {(booking.totalAmount / booking.rooms).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Number of Rooms</span>
                      <span className="text-gray-900">x {booking.rooms}</span>
                    </div>
                    {booking.specialRequests && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-sm font-medium text-gray-700">
                          Special Requests:
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          {booking.specialRequests}
                        </p>
                      </div>
                    )}
                    <div className="flex justify-between mt-4 pt-4 border-t border-gray-200">
                      <span className="font-bold text-gray-900">
                        Total Amount
                      </span>
                      <span className="font-bold text-emerald-600 text-xl">
                        ₱{parseInt(booking.totalAmount).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Important Information */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Important Information
                </h3>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex">
                    <svg
                      className="h-5 w-5 text-blue-500 mt-0.5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-blue-800">
                        Check-in Information
                      </p>
                      <p className="text-sm text-blue-700 mt-1">
                        Please present a valid ID and the credit card used for
                        booking upon check-in. Early check-in is subject to
                        availability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 justify-between items-center">
                <div className="space-x-4">
                  <button
                    onClick={() => window.print()}
                    className="inline-flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                      />
                    </svg>
                    Print
                  </button>
                  <button
                    onClick={handleShareBooking}
                    className="inline-flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                      />
                    </svg>
                    Share
                  </button>
                </div>
                <Link
                  to="/"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          </div>

          {/* Need Help Section */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Need Help?
              </h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+639123456789"
                  className="flex items-center text-emerald-600 hover:text-emerald-700"
                >
                  <svg
                    className="h-5 w-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +63 912 345 6789
                </a>
                <a
                  href="mailto:support@serenitybusay.com"
                  className="flex items-center text-emerald-600 hover:text-emerald-700"
                >
                  <svg
                    className="h-5 w-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  support@serenitybusay.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingConfirmation;
