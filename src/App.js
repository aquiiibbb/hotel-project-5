import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

import Header from "./components/header";
import Footer from "./components/footer";
import WhatsAppChat from "./pages/WhatsAppChat"; // ✅ IMPORT

import Home from "./pages/home";
import Contact from "./pages/contact";
import Gallery from "./pages/gallery";
import Amenities from "./pages/amenities";
import Room from "./pages/room";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Page4 from "./pages/page4";
import Page5 from "./pages/page5";
import Page6 from "./pages/page6";
import Page7 from "./pages/page7";
import Page8 from "./pages/page8";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/room" element={<Room />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page5" element={<Page5 />} />
        <Route path="/page6" element={<Page6 />} />
        <Route path="/page7" element={<Page7 />} />
        <Route path="/page8" element={<Page8 />} />
      </Routes>

      {/* ✅ GLOBAL WHATSAPP CHAT */}
      <WhatsAppChat />

      <Footer />
    </Router>
  );
}

export default App;