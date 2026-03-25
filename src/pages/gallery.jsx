import './gallery.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { useNavigate } from 'react-router-dom'
import image2 from "../Assets/singleking.JPG";
import image4 from "../Assets/tolet.JPG";
import image5 from "../Assets/5.jpg";
import image6 from "../Assets/rooom.jpg";
import image7 from "../Assets/dba.JPG";
import image8 from "../Assets/doubleking.JPG";
import image9 from "../Assets/reception.JPG";
import image10 from "../Assets/bathroom.JPG";
import image11 from "../Assets/hm.JPG";

export default function Gallery() {
  const navigate = useNavigate()

  return (
    <>
      {/* Hero Section */}
      <section className="gallery-hero-section">
        <div className="gallery-hero-overlay">
          <div className="gallery-hero-content">
            <h1 className="gallery-hero-title">Gallery</h1>
            <div className="gallery-breadcrumb">
              <span>HOME</span>
              <span className="gallery-breadcrumb-separator">/</span>
              <span>GALLERY</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="gallery-grid-section">
        <div className="gallery-container">
          <div className="gallery-grid">
            <div className="gallery-item">
              <img
                src={image2}
                alt="Single Room with Window"
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <div className="gallery-overlay-content">
                  <h3 className="gallery-overlay-title">Single Room</h3>
                </div>
              </div>
            </div>

            <div className="gallery-item">
              <img
                src={image7}
                alt="Double Room with Modern Decor"
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <div className="gallery-overlay-content">
                  <h3 className="gallery-overlay-title">Double Room</h3>
                </div>
              </div>
            </div>

            <div className="gallery-item">
              <img
              src={image8}
                alt="Lounge Area with Seating"
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <div className="gallery-overlay-content">
                  <h3 className="gallery-overlay-title">Double King Room</h3>
                </div>
              </div>
            </div>

            <div className="gallery-item">
              <img
                src={image11}
                alt="Restaurant and Bar Area"
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <div className="gallery-overlay-content">
                  <h3 className="gallery-overlay-title">Restaurant & Bar</h3>
                </div>
              </div>
            </div>

            <div className="gallery-item">
              <img
                src={image10}
                alt="Four Poster Bed Room"
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <div className="gallery-overlay-content">
                  <h3 className="gallery-overlay-title">Modern Bathroom</h3>
                </div>
              </div>
            </div>

            <div className="gallery-item">
              <img
                src={image9}
                alt="Modern Bathroom"
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <div className="gallery-overlay-content">
                  <h3 className="gallery-overlay-title">Reception</h3>
                </div>
              </div>
            </div>

            <div className="gallery-item">
              <img
                src={image6}
                alt="Deluxe Room Interior"
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <div className="gallery-overlay-content">
                  <h3 className="gallery-overlay-title">Deluxe Room</h3>
                </div>
              </div>
            </div>

            <div className="gallery-item">
              <img
                src={image5 }
                alt="Family Suite"
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <div className="gallery-overlay-content">
                  <h3 className="gallery-overlay-title">Family Suite</h3>
                </div>
              </div>
            </div>

            <div className="gallery-item">
              <img
                src={image4}
                alt="Honeymoon Suite"
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <div className="gallery-overlay-content">
                  <h3 className="gallery-overlay-title">Bathroom</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gallery-cta-section">
        <div className="gallery-cta-container">
          <div className="gallery-cta-content">
            <p className="gallery-cta-subtitle">THE PRINCE OF WALES HOTEL</p>
            <h2 className="gallery-cta-title">Recently Refurbished Rooms in Berkeley</h2>
          </div>
          <button
            className="gallery-cta-btn"
            onClick={() => navigate("/room")}
          >
            EXPLORE MORE
          </button>
        </div>
      </section>
    </>
  )
}