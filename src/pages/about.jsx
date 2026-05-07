import './about.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import image9 from "../Assets/reception.webp";
import image10 from "../Assets/bahar.webp";
import image13 from "../Assets/bahar1.webp";
import image11 from "../Assets/hm.webp";
import SEO from '../components/SEO';

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const historyImages = [image9, image10, image11];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % historyImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [historyImages.length]);

  return (
    <>
      <SEO
        title="About Our Hotel"
        description="Learn about Crossroads Inn Hotel in Fort Pierce, FL. We offer clean rooms, warm hospitality, free WiFi, free parking and comfortable stays at affordable rates."
        keywords="about Crossroads Inn Hotel, Fort Pierce hotel, affordable hotel Fort Pierce FL, hotel near Fort Pierce attractions"
        canonical="/about"
      />

      <section className="about-hero-section">
        <div className="about-hero-overlay"></div>
      </section>

      <section className="about-hotel-section">
        <div className="about-container">
          <div className="about-content-wrapper">

            <div className="about-images-section">
              <div className="about-images-container">
                <div className="about-room-container">
                  <img
                    src={image13}
                    alt="Crossroads Inn Hotel exterior area in Fort Pierce Florida"
                    className="about-room-image"
                    width="800"
                    height="600"
                    loading="lazy"
                  />
                </div>

                <div className="about-hotel-container">
                  <img
                    src={image9}
                    alt="Crossroads Inn Hotel reception in Fort Pierce FL"
                    className="about-hotel-image"
                    width="800"
                    height="600"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="about-golden-frame">
                <div className="golden-line-horizontal"></div>
                <div className="golden-line-vertical"></div>
              </div>
            </div>

            <div className="about-content">
              <div className="about-header">
                <div className="about-decorative-icon">
                  <div className="about-diamond-icon"></div>
                </div>

                <p className="about-subtitle">ABOUT THE HOTEL</p>

                <h1 className="about-title">
                  Affordable & Comfortable Stay in Fort Pierce, Florida
                </h1>
              </div>

              <div className="about-description">
                <p className="about-text">
                  Crossroads Inn Hotel in Fort Pierce, Florida offers clean and comfortable rooms with free WiFi, free parking, air conditioning, and easy access to nearby beaches, restaurants, Fort Pierce City Marina, Fort Pierce Inlet State Park, and local attractions.
                </p>

                <div className="about-features">
                  <div className="about-feature">
                    <div className="feature-bullet"></div>
                    <span>Clean and comfortable rooms</span>
                  </div>

                  <div className="about-feature">
                    <div className="feature-bullet"></div>
                    <span>Easy access to Fort Pierce beaches and local attractions</span>
                  </div>

                  <div className="about-feature">
                    <div className="feature-bullet"></div>
                    <span>Free parking, free WiFi and 24-hour front desk</span>
                  </div>
                </div>

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

      <section className="about-history-section">
        <div className="about-history-container">

          <div className="about-history-header">
            <p className="about-history-subtitle">CROSSROADS INN HOTEL</p>
            <h2 className="about-history-title">Our Hospitality</h2>
          </div>

          <div className="about-history-content">
            <div className="about-history-images">
              <div className="history-slider">
                {historyImages.map((image, index) => (
                  <div
                    key={index}
                    className={`history-slide ${index === currentSlide ? 'active' : ''}`}
                  >
                    <img
                      src={image}
                      alt={`Crossroads Inn Hotel Fort Pierce image ${index + 1}`}
                      className="history-image"
                      width="800"
                      height="600"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              <div className="history-slider-dots">
                {historyImages.map((_, index) => (
                  <button
                    key={index}
                    className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`View hotel image ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>

            <div className="about-history-text">
              <h3 className="history-content-title">
                Comfortable Hospitality in Fort Pierce
              </h3>

              <p className="history-text">
                Crossroads Inn Hotel welcomes travelers looking for affordable comfort, clean rooms, modern amenities, and convenient access to Fort Pierce attractions, nearby restaurants, beaches, and local travel routes.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}