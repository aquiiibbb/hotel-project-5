import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Gallery from "./pages/gallery";
import Amenities from "./pages/amenities";
import Room from "./pages/room";

function App() {
  return (
    <Router>

      {/* ✅ ADD THIS LINE */}
      <ScrollToTop />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/room" element={<Room />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;