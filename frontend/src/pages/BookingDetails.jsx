import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { rooms } from "../data/mockDb";
import Cookies from "js-cookie";
import { saveBookingData } from "../utils/cookies";

function BookingDetails() {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const room = rooms.find((r) => r.id === parseInt(roomId));

  const [formData, setFormData] = useState(() => {
    // Initialize state from cookies
    return {
      name: Cookies.get("bookingName") || "",
      email: Cookies.get("bookingEmail") || "",
      phone: Cookies.get("bookingPhone") || "",
      specialRequests: Cookies.get("bookingSpecialRequests") || "",
      checkIn: Cookies.get("bookingCheckIn") || "",
      checkOut: Cookies.get("bookingCheckOut") || "",
      adults: parseInt(Cookies.get("bookingAdults")) || 2,
      children: parseInt(Cookies.get("bookingChildren")) || 0,
      rooms: parseInt(Cookies.get("bookingRooms")) || 1,
      stayType: Cookies.get("bookingStayType") || "overnight",
      roomType: room?.name || "",
      totalAmount:
        (room?.price || 0) * (parseInt(Cookies.get("bookingRooms")) || 1),
    };
  });

  // Update cookies whenever formData changes
  useEffect(() => {
    const options = {
      expires: 1,
      secure: true,
      sameSite: "strict",
    };

    Object.entries(formData).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        Cookies.set(
          `booking${key.charAt(0).toUpperCase() + key.slice(1)}`,
          value.toString(),
          options
        );
      }
    });
  }, [formData]);

  // Room capacity validation
  useEffect(() => {
    const totalGuests = parseInt(formData.adults) + parseInt(formData.children);
    const maxCapacity =
      (room?.capacity.adults + room?.capacity.children) *
      parseInt(formData.rooms);

    if (totalGuests > maxCapacity) {
      alert(
        `This room type can only accommodate ${maxCapacity} guests with ${formData.rooms} room(s)`
      );
      navigate("/booking/rooms");
    }
  }, []);

  if (!room) {
    return <div>Room not found</div>;
  }

  const handleBackToRooms = () => {
    // Navigate back to room selection, cookies will be used to restore state
    navigate("/booking/rooms");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingData = {
      ...formData,
      bookingId: `SB${Date.now()}`,
      roomId: room.id,
      status: "confirmed",
      bookingDate: new Date().toISOString(),
    };

    // Save booking data with proper options
    const options = {
      expires: 1,
      secure: true,
      sameSite: "strict",
    };

    // Save essential booking details
    saveBookingData(bookingData);

    // Update existing cookies with final values
    Cookies.set("bookingName", bookingData.name, options);
    Cookies.set("bookingEmail", bookingData.email, options);
    Cookies.set("bookingPhone", bookingData.phone, options);
    Cookies.set("bookingSpecialRequests", bookingData.specialRequests, options);
    Cookies.set(
      "bookingTotalAmount",
      bookingData.totalAmount.toString(),
      options
    );
    Cookies.set("bookingRoomType", bookingData.roomType, options);
    Cookies.set("bookingId", bookingData.bookingId, options);

    navigate("/booking/confirmation");
  };

  // Format date for display
  const formatDateForDisplay = (dateString) => {
    if (!dateString) return "Select date";

    try {
      const date = new Date(dateString);
      if (!isNaN(date.getTime())) {
        return date.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        });
      }
      return "Invalid Date";
    } catch (error) {
      return "Invalid Date";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Button + Progress Bar Container */}
          <div className="mb-8 space-y-6">
            {/* Back Button */}
            <button
              onClick={handleBackToRooms}
              className="flex items-center text-emerald-700 hover:text-emerald-800 transition-colors group"
            >
              <svg
                className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="font-medium">Back to Room Selection</span>
            </button>

            {/* Existing Progress Bar */}
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-4 sm:space-x-8">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-emerald-900 text-white flex items-center justify-center font-semibold">
                    1
                  </div>
                  <span className="ml-2 text-emerald-900 font-medium hidden sm:block">
                    Select Room
                  </span>
                </div>
                <div className="w-12 sm:w-20 h-1 bg-emerald-900"></div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-emerald-900 text-white flex items-center justify-center font-semibold">
                    2
                  </div>
                  <span className="ml-2 text-emerald-900 font-medium hidden sm:block">
                    Guest Details
                  </span>
                </div>
                <div className="w-12 sm:w-20 h-1 bg-gray-300"></div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center font-semibold">
                    3
                  </div>
                  <span className="ml-2 text-gray-600 font-medium hidden sm:block">
                    Confirmation
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Back Button (Fixed Position) */}
          <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50">
            <button
              onClick={handleBackToRooms}
              className="w-full flex items-center justify-center space-x-2 bg-white border-2 border-emerald-600 text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="font-medium">Back to Room Selection</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Booking Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Room Preview Card */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="relative h-[300px]">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white px-4 py-2 rounded-lg">
                    ₱{room.price.toLocaleString()}/night
                  </div>
                </div>
                <div className="p-6">
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    {room.name}
                  </h1>
                  <p className="text-gray-600 mb-4">{room.description}</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {room.amenities.map((amenity, index) => (
                      <div
                        key={index}
                        className="flex items-center text-gray-600"
                      >
                        <svg
                          className="h-5 w-5 text-emerald-600 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {amenity}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Guest Information Form */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Guest Information
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">
                      Special Requests (Optional)
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="Any special requests or preferences?"
                    />
                  </div>
                </form>
              </div>
            </div>

            {/* Booking Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Booking Summary
                </h2>

                {/* Stay Details */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between pb-4 border-b">
                    <div>
                      <p className="text-gray-600">Check-in</p>
                      <p className="text-gray-900 font-medium">
                        {formatDateForDisplay(formData.checkIn)}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600">Check-out</p>
                      <p className="text-gray-900 font-medium">
                        {formatDateForDisplay(formData.checkOut)}
                      </p>
                    </div>
                  </div>

                  <div className="pb-4 border-b">
                    <p className="text-gray-600">Guests</p>
                    <p className="text-gray-900 font-medium">
                      {formData.adults} Adults, {formData.children} Children
                    </p>
                    <p className="text-gray-600">
                      {formData.rooms} Room{formData.rooms !== 1 ? "s" : ""}
                    </p>
                  </div>

                  {/* Price Breakdown */}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <p className="text-gray-600">Room Rate</p>
                      <p className="text-gray-900">
                        ₱{room.price.toLocaleString()}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-gray-600">Number of Rooms</p>
                      <p className="text-gray-900">x {formData.rooms}</p>
                    </div>
                    <div className="flex justify-between pt-4 border-t">
                      <p className="text-gray-900 font-bold">Total Amount</p>
                      <p className="text-emerald-600 font-bold text-xl">
                        ₱{formData.totalAmount.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Confirm Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-lg transition-colors duration-300 font-medium text-lg"
                >
                  Confirm Booking
                </button>

                {/* Booking Protection */}
                <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                  <div className="flex items-start">
                    <svg
                      className="h-6 w-6 text-emerald-600 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        Secure Booking
                      </p>
                      <p className="text-sm text-gray-600">
                        We use secure transmission and encrypted storage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingDetails;
