import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import RoomSelection from "./pages/RoomSelection";
import BookingDetails from "./pages/BookingDetails";
import BookingConfirmation from "./pages/BookingConfirmation";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-emerald-950 flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking/rooms" element={<RoomSelection />} />
            <Route
              path="/booking/details/:roomId"
              element={<BookingDetails />}
            />
            <Route
              path="/booking/confirmation"
              element={<BookingConfirmation />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
