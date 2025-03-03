import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { rooms } from "../data/mockDb";
import Cookies from "js-cookie";
import { isValid, format, parse } from "date-fns";

function RoomSelection() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const navigate = useNavigate();
  const [loading] = useState(false);

  // Initialize state from URL parameters or cookies as fallback
  const [bookingState, setBookingState] = useState(() => {
    // Try to get data from URL parameters first
    const checkInParam = searchParams.get("checkIn");
    const checkOutParam = searchParams.get("checkOut");
    const adultsParam = searchParams.get("adults");
    const childrenParam = searchParams.get("children");
    const roomsParam = searchParams.get("rooms");
    const stayTypeParam = searchParams.get("stayType");

    // If URL parameters are missing, try to get from cookies
    const checkInCookie = Cookies.get("bookingCheckIn");
    const checkOutCookie = Cookies.get("bookingCheckOut");
    const adultsCookie = Cookies.get("bookingAdults");
    const childrenCookie = Cookies.get("bookingChildren");
    const roomsCookie = Cookies.get("bookingRooms");
    const stayTypeCookie = Cookies.get("bookingStayType");

    return {
      checkIn: checkInParam || checkInCookie || "",
      checkOut: checkOutParam || checkOutCookie || "",
      adults: parseInt(adultsParam || adultsCookie || "2"),
      children: parseInt(childrenParam || childrenCookie || "0"),
      rooms: parseInt(roomsParam || roomsCookie || "1"),
      stayType: stayTypeParam || stayTypeCookie || "overnight",
    };
  });

  // Format dates for display
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

  // Store booking data in cookies on component mount
  useEffect(() => {
    const options = {
      expires: 1,
      secure: true,
      sameSite: "strict",
    };

    // Always update cookies with current state values
    Object.entries(bookingState).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        Cookies.set(
          `booking${key.charAt(0).toUpperCase() + key.slice(1)}`,
          value.toString(),
          options
        );
      }
    });
  }, [bookingState]);

  const handleModifySearch = () => {
    navigate("/", { state: { scrollToBooking: true } });
  };

  const availableRooms = rooms; // Using mock data
  const totalGuests = bookingState.adults + bookingState.children;

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Booking Summary Bar - Agoda Style */}
        <div className="bg-white shadow-md rounded-lg mb-8 sticky top-20 z-30">
          <div className="border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-6 py-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                <div className="col-span-3">
                  <div className="flex flex-wrap md:flex-nowrap items-center gap-4 md:gap-8">
                    <div>
                      <p className="text-sm text-gray-500 font-medium">
                        Check-in
                      </p>
                      <p className="text-base text-gray-900 font-semibold">
                        {formatDateForDisplay(bookingState.checkIn)}
                      </p>
                    </div>
                    <div className="hidden md:block h-8 w-px bg-gray-200"></div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">
                        Check-out
                      </p>
                      <p className="text-base text-gray-900 font-semibold">
                        {formatDateForDisplay(bookingState.checkOut)}
                      </p>
                    </div>
                    <div className="hidden md:block h-8 w-px bg-gray-200"></div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">
                        Guests & Rooms
                      </p>
                      <p className="text-base text-gray-900 font-semibold">
                        {totalGuests} guest{totalGuests !== 1 ? "s" : ""} •{" "}
                        {bookingState.rooms} room
                        {bookingState.rooms !== 1 ? "s" : ""}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:text-right">
                  <button
                    className="text-emerald-700 hover:text-emerald-800 font-medium text-sm"
                    onClick={handleModifySearch}
                  >
                    Modify Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Back button */}
          <div className="mb-6">
            <button
              onClick={() => navigate("/")}
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
              <span className="font-medium">Back to Home</span>
            </button>
          </div>

          {/* Page Title */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Available Rooms
            </h1>
            <div className="text-sm text-gray-500">
              {rooms.length} properties found
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="text-gray-600 text-lg">
                Searching for available rooms...
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {availableRooms.map((room) => (
                <div
                  key={room.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Room Image Section */}
                    <div className="md:w-1/3 relative">
                      <img
                        src={room.image}
                        alt={room.name}
                        className="w-full h-full object-cover min-h-[240px]"
                      />
                      {/* Favorite Button */}
                      <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white shadow-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Room Details Section */}
                    <div className="md:w-2/3 p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {room.name}
                          </h3>
                          <div className="flex items-center gap-2 mb-3">
                            <div className="px-2 py-1 bg-emerald-50 text-emerald-700 text-sm rounded">
                              Most Popular
                            </div>
                            <div className="flex items-center text-yellow-400">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <span className="text-sm text-gray-600 ml-1">
                                4.8
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500 line-through">
                            ₱{(room.price * 1.2).toLocaleString()}
                          </p>
                          <p className="text-2xl font-bold text-emerald-700">
                            ₱{room.price.toLocaleString()}
                          </p>
                          <p className="text-sm text-gray-500">per night</p>
                        </div>
                      </div>

                      <div className="mt-4 space-y-2">
                        <p className="text-gray-600 text-sm">
                          {room.description}
                        </p>
                        <div className="flex flex-wrap gap-3 mt-3">
                          {room.amenities.map((amenity, index) => (
                            <div
                              key={index}
                              className="flex items-center text-sm text-gray-600"
                            >
                              <svg
                                className="h-4 w-4 text-emerald-600 mr-2"
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

                      <div className="mt-6 flex justify-between items-center">
                        <div>
                          <div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-sm font-medium rounded-full">
                            20% OFF Today
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            navigate(`/booking/details/${room.id}`);
                            window.scrollTo(0, 0);
                          }}
                          className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors font-medium text-sm"
                        >
                          Reserve Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RoomSelection;
