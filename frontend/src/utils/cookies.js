import Cookies from "js-cookie";

const BOOKING_COOKIE = "serenity_booking";
const COOKIE_EXPIRY = 30; // days

export const saveBookingData = (data) => {
  Cookies.set(BOOKING_COOKIE, JSON.stringify(data), { expires: COOKIE_EXPIRY });
};

export const getBookingData = () => {
  const data = Cookies.get(BOOKING_COOKIE);
  return data ? JSON.parse(data) : null;
};

export const clearBookingData = () => {
  Cookies.remove(BOOKING_COOKIE);
};
