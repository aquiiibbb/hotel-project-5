import './gallery.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { useNavigate } from 'react-router-dom'
import image2 from "../Assets/singleking.webp";
import image4 from "../Assets/tolet.webp";
import image5 from "../Assets/5.webp";
import image6 from "../Assets/rooom.webp";
import image7 from "../Assets/dba.webp";
import image8 from "../Assets/doubleking.webp";
import image9 from "../Assets/reception.webp";
import image10 from "../Assets/bathroom.webp";
import image11 from "../Assets/hm.webp";
import SEO from '../components/SEO';
import { BreadcrumbStructuredData } from '../components/StructuredData';

export default function Gallery() {
  const navigate = useNavigate()

  return (
    <>
      <SEO
        title="Photo Gallery"
        description="View photos of Crossroads Inn Hotel rooms, reception, and facilities in Fort Pierce, FL. See our single rooms, double rooms, king rooms and hotel amenities."
        keywords="hotel photos Fort Pierce, hotel gallery, hotel room pictures, Crossroads Inn photos"
        canonical="/gallery"
      />
      {/* Hero Section */}
      <section className="gallery-hero-section">
        <div className="gallery-hero-overlay">
          
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="gallery-grid-section">
        <div className="gallery-container">
          <div className="gallery-grid">
            <div className="gallery-item">
              <img
                src={image2}
               alt="Single King Room at Crossroads Inn Hotel Fort Pierce FL"
                className="gallery-image" width="800" height="600" loading="lazy" />
              <div className="gallery-overlay">
                <div className="gallery-overlay-content">
                  <h3 className="gallery-overlay-title">Single Room</h3>
                </div>
              </div>
            </div>

            <div className="gallery-item">
              <img
                src={image7}
                alt="Double Room at Crossroads Inn Hotel Fort Pierce Florida"
                className="gallery-image" width="800" height="600" loading="lazy" />
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
                className="gallery-image" width="800" height="600" loading="lazy" />
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
                className="gallery-image" width="800" height="600" loading="lazy" />
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
                className="gallery-image" width="800" height="600" loading="lazy" />
              <div className="gallery-overlay">
                <div className="gallery-overlay-content">
                  <h3 className="gallery-overlay-title">Modern Bathroom</h3>
                </div>
              </div>
            </div>

            <div className="gallery-item">
              <img
                src={image9}
                alt="Modern Hotel Bathroom at Crossroads Inn Fort Pierce"
                className="gallery-image" width="800" height="600" loading="lazy" />
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
                className="gallery-image" width="800" height="600" loading="lazy" />
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
                className="gallery-image" width="800" height="600" loading="lazy" />
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
                className="gallery-image" width="800" height="600" loading="lazy" />
              <div className="gallery-overlay">
                <div className="gallery-overlay-content">
                  <h3 className="gallery-overlay-title">Bathroom</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
