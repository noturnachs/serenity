import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/ui/Input";
import TextArea from "../components/ui/TextArea";
import { saveBookingData, getBookingData } from "../utils/cookies";

function Booking() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    guests: 1,
    roomType: "deluxe",
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
    bookingDate: new Date().toISOString(),
    status: "pending",
    isWalkIn: false,
    numberOfPeople: 1,
    additionalServices: {
      golfClub: 0,
    },
  });

  // Load existing booking data from cookies
  useEffect(() => {
    const savedBooking = getBookingData();
    if (savedBooking) {
      setFormData((prev) => ({
        ...prev,
        ...savedBooking,
      }));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save to cookies
    const bookingData = {
      ...formData,
      bookingId: `SB${Date.now()}`, // Generate unique booking ID
      lastUpdated: new Date().toISOString(),
    };

    saveBookingData(bookingData);

    // Redirect to confirmation page
    navigate("/booking/confirmation", {
      state: { bookingId: bookingData.bookingId },
    });
  };

  return (
    <div className="min-h-screen bg-stone-50 pt-20">
      <div className="container mx-auto px-6 py-24">
        <h1 className="text-4xl font-semibold text-emerald-900 text-center mb-16">
          Book Your Stay
        </h1>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8">
          <div className="mb-8 p-4 bg-emerald-50 rounded-lg">
            <h3 className="text-xl font-medium text-emerald-900 mb-2">
              Walk-in Day Pass Available!
            </h3>
            <p className="text-gray-700">₱400.00 per person (9AM - 5PM)</p>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>
                • Access to Harmonia Swimming Pool and Mini-golf Swimming Pool
              </li>
              <li>• Tables and chairs in the area</li>
              <li>• BBQ grill access</li>
              <li>• Mini-Golf (Club rental: ₱100.00/pc)</li>
              <li>• Playground access</li>
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-2 mb-6">
                <input
                  type="checkbox"
                  id="walkIn"
                  checked={formData.isWalkIn}
                  onChange={(e) =>
                    setFormData({ ...formData, isWalkIn: e.target.checked })
                  }
                  className="w-4 h-4 text-emerald-600"
                />
                <label htmlFor="walkIn" className="text-gray-800">
                  Book Day Pass Instead
                </label>
              </div>

              {formData.isWalkIn ? (
                <>
                  <Input
                    type="number"
                    label="Number of People"
                    min="1"
                    value={formData.numberOfPeople}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        numberOfPeople: e.target.value,
                      })
                    }
                    required
                  />
                  <Input
                    type="number"
                    label="Golf Club Rentals (Optional)"
                    min="0"
                    value={formData.additionalServices.golfClub}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        additionalServices: {
                          ...formData.additionalServices,
                          golfClub: e.target.value,
                        },
                      })
                    }
                  />
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-medium text-gray-800">
                    Stay Details
                  </h2>

                  <Input
                    type="date"
                    label="Check-in Date"
                    value={formData.checkIn}
                    onChange={(e) =>
                      setFormData({ ...formData, checkIn: e.target.value })
                    }
                    required
                  />

                  <Input
                    type="date"
                    label="Check-out Date"
                    value={formData.checkOut}
                    onChange={(e) =>
                      setFormData({ ...formData, checkOut: e.target.value })
                    }
                    required
                  />

                  <div>
                    <label className="block text-gray-800 mb-2">
                      Room Type
                    </label>
                    <select
                      value={formData.roomType}
                      onChange={(e) =>
                        setFormData({ ...formData, roomType: e.target.value })
                      }
                      className="w-full p-3 border border-gray-200
                        rounded-lg bg-white
                        text-gray-800"
                    >
                      <option value="deluxe">Deluxe Mountain Suite</option>
                      <option value="executive">Executive Room</option>
                      <option value="premium">Premium Villa</option>
                      <option value="family">Family Residence</option>
                    </select>
                  </div>

                  <Input
                    type="number"
                    label="Number of Guests"
                    min="1"
                    max="10"
                    value={formData.guests}
                    onChange={(e) =>
                      setFormData({ ...formData, guests: e.target.value })
                    }
                  />
                </>
              )}
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-medium text-gray-800">
                Guest Information
              </h2>

              <Input
                label="Full Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />

              <Input
                type="email"
                label="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />

              <Input
                type="tel"
                label="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
              />

              <TextArea
                label="Special Requests"
                value={formData.specialRequests}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    specialRequests: e.target.value,
                  })
                }
                rows="4"
              />
            </div>

            <div className="md:col-span-2 mt-6">
              <button
                type="submit"
                className="w-full bg-emerald-900 hover:bg-emerald-800 
                  text-white py-4 rounded-lg transition-colors duration-300 text-lg"
              >
                Confirm Booking
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Booking;
