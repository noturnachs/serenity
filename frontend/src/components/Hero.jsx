import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import heroImage from "../assets/main-bg.png";

// Custom calendar styles - add this to your index.css or a new styles file
const calendarStyles = `
  .react-datepicker {
    font-family: 'Inter', sans-serif;
    border: none;
    border-radius: 0.75rem;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }

  .react-datepicker__header {
    background-color: white;
    border-bottom: 1px solid #e5e7eb;
    border-top-right-radius: 0.75rem;
    border-top-left-radius: 0.75rem;
    padding-top: 1rem;
  }

  .react-datepicker__current-month {
    color: #064e3b;
    font-weight: 600;
    font-size: 1rem;
  }

  .react-datepicker__day-name {
    color: #6b7280;
    font-weight: 500;
    width: 2.5rem;
    margin: 0.2rem;
  }

  .react-datepicker__day {
    width: 2.5rem;
    height: 2.5rem;
    line-height: 2.5rem;
    margin: 0.2rem;
    border-radius: 9999px;
    color: #374151;
  }

  .react-datepicker__day:hover {
    background-color: #f3f4f6;
  }

  .react-datepicker__day--selected {
    background-color: #064e3b !important;
    color: white !important;
  }

  .react-datepicker__day--keyboard-selected {
    background-color: #065f46;
    color: white;
  }

  .react-datepicker__day--in-range {
    background-color: #065f46;
    color: white;
  }

  .react-datepicker__day--in-selecting-range {
    background-color: #064e3b;
    color: white;
  }

  .react-datepicker__navigation {
    top: 1rem;
  }

  .react-datepicker__navigation-icon::before {
    border-color: #064e3b;
  }

  .react-datepicker__day--disabled {
    color: #d1d5db;
  }
`;

function Hero() {
  const navigate = useNavigate();
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);
  const [stayType, setStayType] = useState("overnight");
  const [formData, setFormData] = useState({
    checkIn: null,
    checkOut: null,
    adults: 2,
    children: 0,
    rooms: 1,
    stayType: "overnight",
    timeSlot: "",
  });
  const dropdownRef = useRef(null);

  // Add the styles to the document
  if (typeof document !== "undefined") {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = calendarStyles;
    document.head.appendChild(styleSheet);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowGuestDropdown(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Remove dependency on showGuestDropdown

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchParams = new URLSearchParams({
      adults: formData.adults,
      children: formData.children,
      rooms: formData.rooms,
      stayType: stayType,
    });

    if (formData.checkIn) {
      searchParams.append(
        "checkIn",
        formData.checkIn.toISOString().split("T")[0]
      );
    }
    if (stayType === "overnight" && formData.checkOut) {
      searchParams.append(
        "checkOut",
        formData.checkOut.toISOString().split("T")[0]
      );
    } else if (stayType === "dayuse" && formData.timeSlot) {
      searchParams.append("timeSlot", formData.timeSlot);
    }

    navigate(`/booking/rooms?${searchParams.toString()}`);
  };

  // Custom calendar header
  const CustomHeader = ({
    date,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
  }) => (
    <div className="flex items-center justify-between px-4 py-2">
      <button
        onClick={decreaseMonth}
        disabled={prevMonthButtonDisabled}
        type="button"
        className="p-1 hover:bg-gray-100 rounded-full disabled:opacity-50"
      >
        <svg
          className="w-6 h-6 text-emerald-900"
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
      </button>
      <h3 className="text-emerald-900 font-semibold">
        {date.toLocaleString("default", { month: "long", year: "numeric" })}
      </h3>
      <button
        onClick={increaseMonth}
        disabled={nextMonthButtonDisabled}
        type="button"
        className="p-1 hover:bg-gray-100 rounded-full disabled:opacity-50"
      >
        <svg
          className="w-6 h-6 text-emerald-900"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );

  // Add these handlers for the counter buttons
  const handleCounterClick = (e, type, operation) => {
    e.stopPropagation();
    setFormData((prev) => {
      let newValue;
      if (operation === "increase") {
        newValue = prev[type] + 1;
      } else {
        newValue =
          type === "adults"
            ? Math.max(1, prev[type] - 1)
            : Math.max(0, prev[type] - 1);
      }
      return { ...prev, [type]: newValue };
    });
  };

  return (
    <div className="relative pt-16 px-6">
      <div className="container mx-auto">
        <div className="relative h-[65vh] overflow-hidden rounded-2xl shadow-lg">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <img
              src={heroImage}
              alt="Serenity Busay Resort"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6">
            <div className="max-w-5xl w-full text-center">
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 font-cormorant-sc">
                Escape to Serenity Farm Resort
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Experience pure tranquility in the mountains of Busay, Cebu City
              </p>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-24 left-0 right-0 z-20 px-4">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-5xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="inline-flex rounded-lg border border-gray-100 p-1 bg-gray-50">
                <button
                  type="button"
                  className={`px-6 py-2 rounded-md text-base transition-colors ${
                    stayType === "overnight"
                      ? "bg-emerald-900 text-white"
                      : "text-gray-500"
                  }`}
                  onClick={() => {
                    setStayType("overnight");
                    setFormData((prev) => ({ ...prev, stayType: "overnight" }));
                  }}
                >
                  Overnight Stays
                </button>
                <button
                  type="button"
                  className={`px-6 py-2 rounded-md text-base transition-colors ${
                    stayType === "dayuse"
                      ? "bg-emerald-900 text-white"
                      : "text-gray-500"
                  }`}
                  onClick={() => {
                    setStayType("dayuse");
                    setFormData((prev) => ({ ...prev, stayType: "dayuse" }));
                  }}
                >
                  Day Use Stays
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <div className="flex items-center gap-3 p-3 border rounded-lg hover:border-gray-300 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <DatePicker
                      selected={formData.checkIn}
                      onChange={(date) =>
                        setFormData({ ...formData, checkIn: date })
                      }
                      dateFormat="MMM dd, yyyy"
                      minDate={new Date()}
                      placeholderText={
                        stayType === "dayuse" ? "Select date" : "Check-in date"
                      }
                      className="w-full outline-none text-base cursor-pointer"
                      renderCustomHeader={CustomHeader}
                    />
                  </div>
                </div>

                <div className="relative">
                  {stayType === "overnight" ? (
                    <div className="flex items-center gap-3 p-3 border rounded-lg hover:border-gray-300 cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <DatePicker
                        selected={formData.checkOut}
                        onChange={(date) =>
                          setFormData({ ...formData, checkOut: date })
                        }
                        dateFormat="MMM dd, yyyy"
                        minDate={formData.checkIn || new Date()}
                        placeholderText="Check-out date"
                        className="w-full outline-none text-base cursor-pointer"
                        renderCustomHeader={CustomHeader}
                      />
                    </div>
                  ) : (
                    <div className="flex items-center gap-3 p-3 border rounded-lg hover:border-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <select
                        className="w-full outline-none bg-transparent text-base"
                        value={formData.timeSlot}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            timeSlot: e.target.value,
                          })
                        }
                        required
                      >
                        <option value="">Select time</option>
                        <option value="morning">Morning (8 AM - 4 PM)</option>
                        <option value="afternoon">
                          Afternoon (2 PM - 10 PM)
                        </option>
                      </select>
                    </div>
                  )}
                </div>

                <div className="relative">
                  <div
                    ref={dropdownRef}
                    className="p-3 border rounded-lg hover:border-gray-300 cursor-pointer"
                  >
                    <div
                      className="flex items-center justify-between text-base"
                      onClick={() => setShowGuestDropdown(!showGuestDropdown)}
                    >
                      <span>
                        {formData.adults + formData.children} Guests,{" "}
                        {formData.rooms} Room(s)
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>

                    {showGuestDropdown && (
                      <div className="absolute left-0 right-0 mt-2 p-4 bg-white border rounded-lg shadow-lg z-50">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-base">Adults</span>
                            <div className="flex items-center gap-4">
                              <button
                                type="button"
                                className="w-8 h-8 rounded border flex items-center justify-center text-base hover:bg-gray-50"
                                onClick={(e) =>
                                  handleCounterClick(e, "adults", "decrease")
                                }
                              >
                                -
                              </button>
                              <span className="text-base w-6 text-center">
                                {formData.adults}
                              </span>
                              <button
                                type="button"
                                className="w-8 h-8 rounded border flex items-center justify-center text-base hover:bg-gray-50"
                                onClick={(e) =>
                                  handleCounterClick(e, "adults", "increase")
                                }
                              >
                                +
                              </button>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-base">Children</span>
                            <div className="flex items-center gap-4">
                              <button
                                type="button"
                                className="w-8 h-8 rounded border flex items-center justify-center text-base hover:bg-gray-50"
                                onClick={(e) =>
                                  handleCounterClick(e, "children", "decrease")
                                }
                              >
                                -
                              </button>
                              <span className="text-base w-6 text-center">
                                {formData.children}
                              </span>
                              <button
                                type="button"
                                className="w-8 h-8 rounded border flex items-center justify-center text-base hover:bg-gray-50"
                                onClick={(e) =>
                                  handleCounterClick(e, "children", "increase")
                                }
                              >
                                +
                              </button>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-base">Rooms</span>
                            <div className="flex items-center gap-4">
                              <button
                                type="button"
                                className="w-8 h-8 rounded border flex items-center justify-center text-base hover:bg-gray-50"
                                onClick={(e) =>
                                  handleCounterClick(e, "rooms", "decrease")
                                }
                              >
                                -
                              </button>
                              <span className="text-base w-6 text-center">
                                {formData.rooms}
                              </span>
                              <button
                                type="button"
                                className="w-8 h-8 rounded border flex items-center justify-center text-base hover:bg-gray-50"
                                onClick={(e) =>
                                  handleCounterClick(e, "rooms", "increase")
                                }
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="bg-emerald-900 text-white px-10 py-3 rounded-lg hover:bg-emerald-800 transition-colors text-base font-medium w-full md:w-auto md:self-end"
              >
                Search {stayType === "overnight" ? "Rooms" : "Availability"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
