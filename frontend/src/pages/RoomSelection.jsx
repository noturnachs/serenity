import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { rooms } from "../data/mockDb";

function RoomSelection() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [availableRooms, setAvailableRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Here you would fetch available rooms from your database
    // based on searchParams (checkIn, checkOut, guests)
    fetchAvailableRooms();
  }, [searchParams]);

  const fetchAvailableRooms = async () => {
    setLoading(true);
    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setAvailableRooms(rooms);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 pt-20">
      <div className="container mx-auto px-6 py-24">
        <h1 className="text-4xl font-semibold text-emerald-900 text-center mb-16">
          Available Accommodations
        </h1>

        {loading ? (
          <div className="text-center">Loading available rooms...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {availableRooms.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    {room.name}
                  </h3>
                  <p className="text-emerald-900 font-medium mb-4">
                    ₱{room.price.toLocaleString()} / night
                  </p>
                  <ul className="text-gray-600 mb-6">
                    {room.amenities.map((amenity, index) => (
                      <li key={index}>• {amenity}</li>
                    ))}
                  </ul>
                  <button
                    onClick={() => navigate(`/booking/details/${room.id}`)}
                    className="w-full bg-emerald-900 hover:bg-emerald-800 text-white py-2 rounded-lg transition-colors"
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
  );
}

export default RoomSelection;
