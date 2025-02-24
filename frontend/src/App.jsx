import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Booking from "./pages/Booking";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-stone-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
