import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { rooms } from "../data/mockDb";

function RoomSelection() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [loading] = useState(false);
  const availableRooms = rooms; // Using mock data

  return (
    <div className="min-h-screen bg-emerald-950 pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Search Summary */}
          <div className="bg-emerald-900 rounded-xl shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-emerald-200 font-medium">Check-in</p>
                <p className="text-lg text-emerald-100">
                  {new Date(searchParams.get("checkIn")).toLocaleDateString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-emerald-200 font-medium">
                  Check-out
                </p>
                <p className="text-lg text-emerald-100">
                  {new Date(searchParams.get("checkOut")).toLocaleDateString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-emerald-200 font-medium">Guests</p>
                <p className="text-lg text-emerald-100">
                  {searchParams.get("guests")}{" "}
                  {parseInt(searchParams.get("guests")) > 1
                    ? "guests"
                    : "guest"}
                </p>
              </div>
            </div>
          </div>

          {/* Available Rooms */}
          <h2 className="text-2xl font-bold text-emerald-100 mb-6">
            Available Accommodations
          </h2>

          {loading ? (
            <div className="text-center py-12">
              <div className="text-emerald-100 text-lg">
                Searching for available rooms...
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {availableRooms.map((room) => (
                <div
                  key={room.id}
                  className="bg-emerald-900 rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-64">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-emerald-600 text-white px-4 py-2 rounded-lg">
                      ₱{room.price.toLocaleString()}/night
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-emerald-100 mb-3">
                      {room.name}
                    </h3>
                    <p className="text-emerald-200 mb-4">{room.description}</p>
                    <div className="space-y-3 mb-6">
                      {room.amenities.map((amenity, index) => (
                        <div
                          key={index}
                          className="flex items-center text-emerald-200"
                        >
                          <span className="mr-2">•</span>
                          {amenity}
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => navigate(`/booking/details/${room.id}`)}
                      className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-lg transition-colors font-medium"
                    >
                      Select Room
                    </button>
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
