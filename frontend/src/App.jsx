import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import BookingConfirmation from "./pages/BookingConfirmation";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-stone-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route
            path="/booking/confirmation"
            element={<BookingConfirmation />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
