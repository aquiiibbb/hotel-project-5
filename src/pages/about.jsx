import './about.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { useState, useEffect } from 'react'

export default function About(){
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const historyImages = [
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=500&fit=crop"
  ];
  const handleViewRooms = () => {
    navigate('/room');
    window.scrollTo(0, 0); // Scroll to top
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % historyImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

   return(
    <>
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-overlay">
          <div className="about-hero-content">
            <h1 className="about-hero-title">About</h1>
            <div className="about-breadcrumb">
              <span>HOME</span>
              <span className="about-breadcrumb-separator">/</span>
              <span>ABOUT</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Hotel Section */}
      <section className="about-hotel-section">
        <div className="about-container">
          <div className="about-content-wrapper">
            {/* Left Side - Exact Image Layout */}
            <div className="about-images-section">
              <div className="about-images-container">
                {/* Left Room Image */}
                <div className="about-room-container">
                  <img 
                    src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=450&h=400&fit=crop" 
                    alt="Hotel Room Interior" 
                    className="about-room-image"
                  />
                  <div className="about-play-button">
                    <div className="play-icon">▶</div>
                  </div>
                </div>
                
                {/* Right Hotel Exterior with Pool */}
                <div className="about-hotel-container">
                  <img 
                    src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=450&h=400&fit=crop" 
                    alt="Hotel Exterior with Pool" 
                    className="about-hotel-image"
                  />
                </div>
              </div>
              
              {/* Golden Frame - Bottom Right */}
              <div className="about-golden-frame">
                <div className="golden-line-horizontal"></div>
                <div className="golden-line-vertical"></div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="about-content">
              <div className="about-header">
                <div className="about-decorative-icon">
                  <div className="about-diamond-icon"></div>
                </div>
                <p className="about-subtitle">ABOUT THE HOTEL</p>
                <h2 className="about-title">A Recently Refurbished Country Hotel in Berkeley</h2>
              </div>

              <div className="about-description">
                <p className="about-text">
                  The Prince of Wales Hotel Berkeley is a welcoming 3-star country hotel located on Berkeley 
                  Road in Gloucestershire, set on the edge of the historic town of Berkeley and within the scenic 
                  Severn Vale near the Cotswolds.
                </p>
                <p className="about-text">
                  Originally established as a former public house over 150 years ago, the property has retained 
                  its traditional charm while undergoing significant refurbishment and modernisation. Following 
                  major renovation and investment, including a full transformation in 2025, the hotel now offers 
                  a comfortable and practical stay for business travellers, contractors, and leisure guests.
                </p>

                <div className="about-features">
                  <div className="about-feature">
                    <div className="feature-bullet"></div>
                    <span>Comfortable en-suite rooms</span>
                  </div>
                  <div className="about-feature">
                    <div className="feature-bullet"></div>
                    <span>Easy access via A38 & M5</span>
                  </div>
                  <div className="about-feature">
                    <div className="feature-bullet"></div>
                    <span>Free parking, Wi-Fi & self check-in</span>
                  </div>
                </div>

                 <button className="about-view-rooms-btn" onClick={handleViewRooms}>
                   VIEW ROOMS
                 </button>
              </div>

              <div className="about-years-badge">
                <div className="years-number">150+</div>
                <div className="years-text">Years of History</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="about-history-section">
        <div className="about-history-container">
          <div className="about-history-header">
            <div className="about-decorative-icon">
              <div className="about-diamond-icon"></div>
            </div>
            <p className="about-history-subtitle">THE PRINCE OF WALES HOTEL</p>
            <h2 className="about-history-title">Our History</h2>
          </div>

          <div className="about-history-content">
            {/* Left Side - Sliding Images */}
            <div className="about-history-images">
              <div className="history-slider">
                {historyImages.map((image, index) => (
                  <div 
                    key={index}
                    className={`history-slide ${index === currentSlide ? 'active' : ''}`}
                  >
                    <img 
                      src={image} 
                      alt={`Historic Hotel Image ${index + 1}`} 
                      className="history-image"
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
                  ></button>
                ))}
              </div>
            </div>

            {/* Right Side - History Content */}
            <div className="about-history-text">
              <h3 className="history-content-title">A Historic Landmark on Berkeley Road</h3>
              <p className="history-text">
                The Prince of Wales Hotel has long been a familiar landmark on Berkeley Road, serving travellers, 
                locals, and visitors for generations. Originally known as the Bridge Inn, the property was renamed 
                after a visit from the Prince of Wales (later King Edward VII), giving the hotel its distinguished 
                identity that remains today.
              </p>
              <p className="history-text">
                Situated along the historic A38 — once the main route between Bristol and Gloucester — the hotel 
                has always been a convenient stopping point for those travelling through the region.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
   ) 
}