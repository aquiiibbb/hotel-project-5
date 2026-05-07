import "./footer.css";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo1 from "../Assets/logo.webp";

export default function Footer() {
  const navigate = useNavigate();
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What type of room can I book at Crossroads Inn?",
      answer: "Room options at Crossroads Inn include:",
      list: ["Double"],
    },
    {
      question: "What are the check-in and check-out times at Crossroads Inn?",
      answer: "Check-in is from 3:00 PM, and check-out is until 11:00 AM.",
    },
    {
      question: "How much does it cost to stay at Crossroads Inn?",
      answer: "Prices may vary depending on your stay dates and availability.",
    },
    {
      question: "How far is Crossroads Inn from the centre of Fort Pierce?",
      answer: "Crossroads Inn is around 8 km from the centre of Fort Pierce.",
    },
  ];

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section footer-brand">
            <img
              src={logo1}
              alt="Crossroads Inn logo"
              className="footer-logo"
              loading="lazy"
            />
            <p>
              Crossroads Inn is near Fort Pierce City Marina, Inlet State Park,
              and Vero Beach Airport.
            </p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><button onClick={() => navigate("/")}>Home</button></li>
              <li><button onClick={() => navigate("/about")}>About</button></li>
              <li><button onClick={() => navigate("/contact")}>Contact</button></li>
              <li><button onClick={() => setIsFaqOpen(true)}>FAQ</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact</h3>
            <p><MdLocationOn /> <span>Fort Pierce, FL</span></p>
            <p><MdEmail /> <span>crossroadsinnflorida@gmail.com</span></p>
            <p><MdPhone /> <span>+1 772-465-8600</span></p>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Crossroads Inn. All Rights Reserved.
        </div>
      </footer>

      {isFaqOpen && (
        <div className="faq-overlay" onClick={() => setIsFaqOpen(false)}>
          <div className="faq-modal" onClick={(e) => e.stopPropagation()}>
            <div className="faq-header">
              <h2>Frequently Asked Questions</h2>
              <button onClick={() => setIsFaqOpen(false)}>✕</button>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div className="faq-card" key={index}>
                  <div
                    className="faq-question"
                    onClick={() =>
                      setActiveIndex(activeIndex === index ? null : index)
                    }
                  >
                    <span>{faq.question}</span>
                    <FaChevronDown
                      className={`faq-icon ${
                        activeIndex === index ? "open" : ""
                      }`}
                    />
                  </div>

                  <div
                    className={`faq-answer ${
                      activeIndex === index ? "show" : ""
                    }`}
                  >
                    <p>{faq.answer}</p>
                    {faq.list && (
                      <ul>
                        {faq.list.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}