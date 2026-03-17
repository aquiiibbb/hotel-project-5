import './room.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { useState } from 'react'

export default function Room(){
   const [favorites, setFavorites] = useState([]);
   const [sortBy, setSortBy] = useState('price');

   const toggleFavorite = (roomId) => {
     setFavorites(prev => 
       prev.includes(roomId) 
         ? prev.filter(id => id !== roomId)
         : [...prev, roomId]
     );
   };

   const rooms = [
     {
       id: 1,
       name: "NK- King Bed (Non-Smoking)",
       price: 114.99,
       area: 17,
       person: 2,
       image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop",
       featured: true
     },
     {
       id: 2,
       name: "NDD - Double Room  (2 Beds, Non-Smoking)",
       price: 109.99,
       area: 17,
       person: 2,
       image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
       featured: false
     },
     {
       id: 3,
       name: "HNK - King Room (Disability Access, Non-Smoking)",
       price: 113.30,
       area: 17,
       person: 2,
       image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop",
       featured: false
     },
     {
       id: 4,
       name: "HNDD - Double Room ( Disability Access, 2 beds, Non-Smoking)",
       price: 134.20,
       area: 22,
       person: 2,
       image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
       featured: false
     },
     {
       id: 5,
       name: "HDD - Double Room (Disability Access, 2 beds)",
       price: 109.99,
       area: 50,
       person: 4,
       image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=300&fit=crop",
       featured: true
     },
     {
       id: 6,
       name: "DD - Double Room (2 beds)",
       price: 109.99,
       area: 33,
       person: 4,
       image: "https://princeofwaleshotels.co.uk/wp-content/uploads/2026/02/Honeymoon-Suite1.png",
       featured: true
     },
     {
       id: 7,
       name: "D - Double Room (1 bed)",
       price: 109.99,
       area: 61,
       person: 2,
       image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
       featured: true
     },
     {
       id: 8,
       name: "ND - Double Room (1 bed, Non-Smoking)",
       price: 367.30,
       area: 61,
       person: 2,
       image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
       featured: true
     }
   ];

   return(
    <>
      {/* Hero Section */}
      <section className="room-hero-section">
        <div className="room-hero-overlay">
          <div className="room-hero-content">
            <h1 className="room-hero-title">Our Rooms</h1>
            <p className="room-hero-subtitle">Modern rooms designed for restful nights near the A38 and M5</p>
          </div>
        </div>
      </section>

      {/* Rooms Listing Section */}
      <section className="room-listing-section">
        <div className="room-container">
          {/* Header with count and sort */}
          <div className="room-listing-header">
            <h2 className="room-count">{rooms.length} Rooms</h2>
            <div className="room-sort">
              <span>Sort by</span>
              <select 
                className="room-sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="price">Price</option>
                <option value="name">Name</option>
                <option value="size">Size</option>
              </select>
            </div>
          </div>

          {/* Rooms Grid */}
          <div className="room-grid">
            {rooms.map((room) => (
              <div key={room.id} className="room-card">
                <div className="room-image-container">
                  <img 
                    src={room.image} 
                    alt={room.name} 
                    className="room-image"
                  />
                  {room.featured && (
                    <div className="room-featured-badge">FEATURED</div>
                  )}
                  <button 
                    className="room-favorite-btn"
                    onClick={() => toggleFavorite(room.id)}
                  >
                    {favorites.includes(room.id) ? <MdFavorite /> : <MdFavoriteBorder />}
                  </button>
                  <div className="room-rating">
                    <span className="room-rating-icon">⭐</span>
                  </div>
                </div>
                <div className="room-content">
                  <h3 className="room-title">{room.name}</h3>
                  <div className="room-price">
                    <span className="room-price-amount">${room.price}</span>
                    <span className="room-price-period">/ night</span>
                  </div>
                  <div className="room-details">
                    <div className="room-detail">
                      <span className="room-detail-label">Area:</span>
                      <span className="room-detail-value">{room.area} m²</span>
                    </div>
                    <div className="room-detail">
                      <span className="room-detail-label">Person:</span>
                      <span className="room-detail-value">{room.person}</span>
                    </div>
                  </div>
                  <a
                    href="https://bookingengine.stayflexi.com/?hotel_id=35135"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="room-book-btn"
                    style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}
                  >
                    BOOK NOW
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Comfort Section */}
      <section className="room-comfort-section">
        <div className="room-comfort-container">
          <div className="room-comfort-image">
            <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=500&fit=crop" 
              alt="Comfortable Room" 
              className="comfort-image"
            />
            <div className="comfort-image-overlay">
              <p className="comfort-overlay-text">Designed to provide a relaxing and practical stay for every guest.</p>
            </div>
          </div>
          <div className="room-comfort-content">
            <div className="room-comfort-header">
              <div className="comfort-decorative-icon">
                <div className="comfort-diamond-icon"></div>
              </div>
              <p className="comfort-subtitle">ROOM COMFORT & CONVENIENCE</p>
              <h2 className="comfort-title">Comfortable Rooms for Every Stay</h2>
            </div>
            <div className="comfort-description">
              <p className="comfort-highlight">Recently refurbished rooms designed for comfort, convenience, and a restful stay.</p>
              <p className="comfort-text">
                All rooms at The Prince of Wales Hotel are recently refurbished and thoughtfully 
                equipped to ensure a comfortable stay. Guests enjoy en-suite bathrooms, free Wi-Fi, flat-
                screen TVs, tea and coffee facilities, fresh towels, and complimentary toiletries.
              </p>
              <p className="comfort-text">
                Whether you're visiting for business, working locally, or exploring Gloucestershire, our 
                rooms provide a quiet and convenient base.
              </p>
            </div>
            <button className="comfort-book-btn">BOOK NOW</button>
          </div>
        </div>
      </section>
    </>
   ) 
}