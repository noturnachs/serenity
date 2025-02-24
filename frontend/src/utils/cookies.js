import Cookies from "js-cookie";

const BOOKING_COOKIE = "serenity_booking";
const COOKIE_EXPIRY = 30; // days

const COOKIE_OPTIONS = {
  expires: 1,
  secure: true,
  sameSite: "strict",
};

export const saveBookingData = (data) => {
  Object.entries(data).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      Cookies.set(
        `booking${key.charAt(0).toUpperCase() + key.slice(1)}`,
        value.toString(),
        COOKIE_OPTIONS
      );
    }
  });
};

export const getBookingData = () => {
  const cookieKeys = Object.keys(Cookies.get());
  return cookieKeys.reduce((acc, key) => {
    if (key.startsWith("booking")) {
      const value = Cookies.get(key);
      const propertyName = key.replace("booking", "");
      acc[propertyName.charAt(0).toLowerCase() + propertyName.slice(1)] = value;
    }
    return acc;
  }, {});
};

export const clearBookingData = () => {
  Object.keys(Cookies.get())
    .filter((key) => key.startsWith("booking"))
    .forEach((key) => Cookies.remove(key));
};
