import './gallery.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

export default function Gallery(){
   return(
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
            {/* All your existing gallery items remain exactly the same */}
            <div className="gallery-item">
              <img 
                src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop" 
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
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop" 
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
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop" 
                alt="Lounge Area with Seating" 
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <div className="gallery-overlay-content">
                  <h3 className="gallery-overlay-title">Lounge Area</h3>
                </div>
              </div>
            </div>

            <div className="gallery-item">
              <img 
                src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop" 
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
                src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&h=300&fit=crop" 
                alt="Four Poster Bed Room" 
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <div className="gallery-overlay-content">
                  <h3 className="gallery-overlay-title">Four Poster Room</h3>
                </div>
              </div>
            </div>

            <div className="gallery-item">
              <img 
                src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=400&h=300&fit=crop" 
                alt="Modern Bathroom" 
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
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop" 
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
                src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=300&fit=crop" 
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
                src="https://princeofwaleshotels.co.uk/wp-content/uploads/2026/02/Honeymoon-Suite1.png" 
                alt="Honeymoon Suite" 
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <div className="gallery-overlay-content">
                  <h3 className="gallery-overlay-title">Honeymoon Suite</h3>
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
          <button className="gallery-cta-btn">EXPLORE MORE</button>
        </div>
      </section>
    </>
   ) 
}