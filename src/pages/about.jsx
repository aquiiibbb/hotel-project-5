import './about.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import image9 from "../Assets/reception.webp";
import image10 from "../Assets/bahar.webp";
import image13 from "../Assets/bahar1.webp";
import image11 from "../Assets/hm.webp";
import SEO from '../components/SEO';
import { BreadcrumbStructuredData } from '../components/StructuredData';


export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const historyImages = [
    image9,
    image10,
   image11
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % historyImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <SEO
        title="About Our Hotel"
        description="Learn about Crossroads Inn Hotel in Fort Pierce, FL. We offer warm hospitality, clean comfortable rooms and modern facilities at affordable rates."
        keywords="about Crossroads Inn Hotel, Fort Pierce hotel history, hotel Fort Pierce Florida"
        canonical="/about"
      />
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-overlay">
        
        </div>
      </section>

      {/* About Hotel Section */}
      <section className="about-hotel-section">
        <div className="about-container">
          <div className="about-content-wrapper">

            {/* Left Images */}
            <div className="about-images-section">
              <div className="about-images-container">

                <div className="about-room-container">
                  <img
                    src={image13}
                    alt="Hotel Room"
                    className="about-room-image" width="800" height="600" loading="lazy" />
                  <div className="about-play-button">
                    <div className="play-icon">▶</div>
                  </div>
                </div>

                <div className="about-hotel-container">
                  <img
                    src={image9}
                    alt="Hotel"
                    className="about-hotel-image" width="800" height="600" loading="lazy" />
                </div>

              </div>

              <div className="about-golden-frame">
                <div className="golden-line-horizontal"></div>
                <div className="golden-line-vertical"></div>
              </div>
            </div>

            {/* Right Content */}
            <div className="about-content">
              <div className="about-header">
                <div className="about-decorative-icon">
                  <div className="about-diamond-icon"></div>
                </div>
                <p className="about-subtitle">ABOUT THE HOTEL</p>
               <h2 className="about-title">
  Affordable & Comfortable Stay in Fort Pierce, Florida
</h2>
              </div>

              <div className="about-description">
               <p className="about-text">
  Crossroads Inn Hotel in Fort Pierce, Florida offers clean and comfortable rooms with free WiFi, free parking, air conditioning, and easy access to nearby beaches, restaurants, and local attractions.
</p>

                <div className="about-features">
                  <div className="about-feature">
                    <div className="feature-bullet"></div>
                    <span>Comfortable en-suite rooms</span>
                  </div>
                  <div className="about-feature">
                    <div className="feature-bullet"></div>
                   <span>Easy access to Fort Pierce beaches and local attractions</span>
                  </div>
                  <div className="about-feature">
                    <div className="feature-bullet"></div>
                    <span>Free parking, Wi-Fi & self check-in</span>
                  </div>
                </div>

                {/* BUTTON FIXED */}
                <button
                  className="about-view-rooms-btn"
                  onClick={() => navigate("/room")}
                >
                  VIEW ROOMS
                </button>
              </div>

             
            </div>

          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="about-history-section">
        <div className="about-history-container">

          <div className="about-history-header">
            <p className="about-history-subtitle">THE PRINCE OF WALES HOTEL</p>
            <h2 className="about-history-title">Our History</h2>
          </div>

          <div className="about-history-content">

            {/* Slider */}
            <div className="about-history-images">
              <div className="history-slider">
                {historyImages.map((image, index) => (
                  <div
                    key={index}
                    className={`history-slide ${index === currentSlide ? 'active' : ''}`}
                  >
                    <img src={image} alt="history" className="history-image" width="800" height="600" loading="lazy" />
                  </div>
                ))}
              </div>

              <div className="history-slider-dots">
                {historyImages.map((_, index) => (
                  <button
                    key={index}
                    className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                  ></button>
                ))}
              </div>
            </div>

            {/* Text */}
            <div className="about-history-text">
              <h3 className="history-content-title">
                A Historic Landmark on Berkeley Road
              </h3>
              <p className="history-text">
                The Prince of Wales Hotel has long been a familiar landmark serving travellers and visitors.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
