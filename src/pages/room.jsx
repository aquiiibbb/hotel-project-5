import './room.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import image2 from "../Assets/2.jpg";
import image4 from "../Assets/s1.jpg";
import image5 from "../Assets/5.jpg";
import image6 from "../Assets/rooom.jpg";
import image7 from "../Assets/db1.JPG";
import image8 from "../Assets/doubleking.JPG";
import image9 from "../Assets/dba.JPG";
import image10 from "../Assets/6.jpg";
import image11 from "../Assets/db4.JPG";

export default function Room() {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);
  const [sortBy, setSortBy] = useState('price');

  const toggleFavorite = (roomId) => {
    setFavorites(prev =>
      prev.includes(roomId)
        ? prev.filter(id => id !== roomId)
        : [...prev, roomId]
    );
  };

  const handleRoomClick = (roomId) => {
    navigate(`/page${roomId}`);  // ✅ /page1, /page2, etc.
  };

  const rooms = [
    {
      id: 1,
      name: "King Bed",
      price: 114.99,
      area: "28", // Wrap in quotes
      person: 2,
      image: image4,
      featured: true
    },
    {
      id: 2,
      name: " Double Room  (2 Beds)",
      price: 109.99,
      area: "28", // Wrap in quotes
      person: 2,
      image: image5,
      featured: false
    },
    {
      id: 3,
      name: " King Room (Disability Access)",
      price: 113.30,
      area: "28", // Wrap in quotes
      person: 2,
      image: image6,
      featured: false
    },
    {
      id: 4,
      name: " Double Room ( Disability Access, 2 Beds)",
      price: 134.20,
      area: "28 ", // Wrap in quotes
      person: 2,
      image: image7,
      featured: false
    },
    {
      id: 5,
      name: " Double Room (Disability Access, 2 Beds)",
      price: 109.99,
      area: "28 ", // Wrap in quotes
      person: 4,
      image: image8,
      featured: true
    },
    {
      id: 6,
      name: " Double Room (2 Beds)",
      price: 109.99,
      area: "28", // Wrap in quotes
      person: 4,
      image: image9,
      featured: true
    },
    {
      id: 7,
      name: " Double Room (1 Bed)",
      price: 109.99,
      area: "28 ", // Wrap in quotes
      person: 2,
      image: image10,
      featured: true
    },
    {
      id: 8,
      name: "Double Room (1 Bed)",
      price: 367.30,
      area: "28 ", // Wrap in quotes
      person: 2,
      image: image11, // Added missing space
      featured: true
    }
];

  return (
    <>
      {/* Hero Section */}
      <section className="room-hero-section">
        <div className="room-hero-overlay">
          <div className="room-hero-content">
            <h1 className="room-hero-title">Our Rooms</h1>
            <p className="room-hero-subtitle">HOME / ROOM</p>
          </div>
        </div>
      </section>

      {/* Rooms Listing Section */}
      <section className="room-listing-section">
        <div className="room-container">
          {/* Header with count and sort */}
        

          {/* Rooms Grid */}
          <div className="room-grid">
            {rooms.map((room) => (
              <div key={room.id} className="room-card">
                <div className="room-image-container">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="room-image"
                    onClick={() => handleRoomClick(room.id)}
                    style={{ cursor: 'pointer' }}
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
                  <h3
                    className="room-title"
                    onClick={() => handleRoomClick(room.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    {room.name}
                  </h3>
                  
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
                <div style={{
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%"
}}>
  <a 
    href="https://bookingengine.stayflexi.com/?hotel_id=35135"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      background: "blue",
      color: "white",
      padding: "clamp(10px, 2vw, 12px) clamp(20px, 4vw, 24px)",
      textAlign: "center",
      cursor: "pointer",
      fontSize: "clamp(14px, 3vw, 16px)",
      fontWeight: "500",
      border: "none",
      display: "inline-block",
      width: "90%",
      borderRadius: "10px",
      transition: "all 0.3s ease",
      boxSizing: "border-box",
      textDecoration: "none"
    }}
    onMouseEnter={(e) => {
      e.target.style.background = "#1e40af";
      e.target.style.transform = "translateY(-2px)";
      e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
    }}
    onMouseLeave={(e) => {
      e.target.style.background = "blue";
      e.target.style.transform = "translateY(0)";
      e.target.style.boxShadow = "none";
    }}
  >
    Book now
  </a>
</div>
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
              src={image2}
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
                All rooms at The Crossroads Inn Hotel are recently refurbished and thoughtfully
                equipped to ensure a comfortable stay. Guests enjoy en-suite bathrooms, free Wi-Fi, flat-
                screen TVs, tea and coffee facilities, fresh towels, and complimentary toiletries.
              </p>
              <p className="comfort-text">
                Whether you're visiting for business, working locally, or exploring Gloucestershire, our
                rooms provide a quiet and convenient base.
              </p>
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
      </section>
    </>
  )
}