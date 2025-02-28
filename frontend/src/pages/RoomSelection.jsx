import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { rooms } from "../data/mockDb";
import Cookies from "js-cookie";

function RoomSelection() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [loading] = useState(false);
  const [bookingState, setBookingState] = useState({
    adults: parseInt(searchParams.get("adults") || "2"),
    children: parseInt(searchParams.get("children") || "0"),
    rooms: parseInt(searchParams.get("rooms") || "1"),
  });

  // Store search params in cookies and update state
  useEffect(() => {
    const options = {
      expires: 1,
      secure: true,
      sameSite: "strict",
    };

    const newState = {
      adults: parseInt(searchParams.get("adults") || "2"),
      children: parseInt(searchParams.get("children") || "0"),
      rooms: parseInt(searchParams.get("rooms") || "1"),
      checkIn: searchParams.get("checkIn") || "",
      checkOut: searchParams.get("checkOut") || "",
      isWalkIn: searchParams.get("isWalkIn") || "false",
    };

    // Update cookies and state simultaneously
    Object.entries(newState).forEach(([key, value]) => {
      Cookies.set(
        `booking${key.charAt(0).toUpperCase() + key.slice(1)}`,
        value.toString(),
        options
      );
    });

    setBookingState(newState);
  }, [searchParams]);

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
                  <div className="flex items-center gap-8">
                    <div>
                      <p className="text-sm text-gray-500 font-medium">
                        Check-in
                      </p>
                      <p className="text-base text-gray-900 font-semibold">
                        {new Date(
                          searchParams.get("checkIn")
                        ).toLocaleDateString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                    <div className="h-8 w-px bg-gray-200"></div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">
                        Check-out
                      </p>
                      <p className="text-base text-gray-900 font-semibold">
                        {new Date(
                          searchParams.get("checkOut")
                        ).toLocaleDateString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                    <div className="h-8 w-px bg-gray-200"></div>
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
                    onClick={() => navigate("/")}
                  >
                    Modify Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
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
                          onClick={() =>
                            navigate(`/booking/details/${room.id}`)
                          }
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
