import './home.css'
import './room.css'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { MdFavorite, MdFavoriteBorder } from "react-icons/md"

import image1 from "../Assets/1.webp"
import image2 from "../Assets/2.webp"
import image3 from "../Assets/3.webp"
import image4 from "../Assets/s1.webp"
import image5 from "../Assets/5.webp"
import image6 from "../Assets/rooom.webp"
import image10 from "../Assets/bahar1.webp"
import image12 from "../Assets/reception.webp"

import SEO from '../components/SEO'

export default function Home() {
   const [currentSlide, setCurrentSlide] = useState(0)
   const [favorites, setFavorites] = useState([])
   const navigate = useNavigate()

   const slides = [
      {
         id: 1,
         bgImage: `url(${image1})`,
         title: "Crossroads Inn Hotel"
      },
      {
         id: 2,
         bgImage: `url(${image2})`,
         title: "Comfortable Hotel in Fort Pierce"
      },
      {
         id: 3,
         bgImage: `url(${image3})`,
         title: "Affordable Stay in Fort Pierce"
      },
      {
         id: 4,
         bgImage: `url(${image12})`,
         title: "Warm Hospitality Every Stay"
      },
      {
         id: 5,
         bgImage: `url(${image10})`,
         title: "Crossroads Inn Hotel Exterior"
      }
   ]

   const rooms = [
      {
         id: 1,
         name: "King Bed",
         price: 114.99,
         area: 28,
         person: 2,
         image: image4,
         featured: true
      },
      {
         id: 2,
         name: "Double Room (2 Beds)",
         price: 109.99,
         area: 28,
         person: 2,
         image: image5,
         featured: false
      },
      {
         id: 3,
         name: "King Room (Disability Access)",
         price: 113.30,
         area: 28,
         person: 2,
         image: image6,
         featured: false
      }
   ]

   const toggleFavorite = (id) => {
      if (favorites.includes(id)) {
         setFavorites(favorites.filter((fav) => fav !== id))
      } else {
         setFavorites([...favorites, id])
      }
   }

   useEffect(() => {
      const timer = setInterval(() => {
         setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 5000)

      return () => clearInterval(timer)
   }, [slides.length])

   const goToSlide = (index) => {
      setCurrentSlide(index)
   }

   return (
      <>
         <SEO
            title="Welcome to Crossroads Inn Hotel"
            description="Crossroads Inn Hotel in Fort Pierce, FL offers comfortable king, double and accessible rooms with free WiFi, free parking, 24-hour front desk and warm hospitality. Book now for best rates."
            keywords="Crossroads Inn Hotel, hotel Fort Pierce FL, affordable hotel Fort Pierce Florida, hotel near Fort Pierce, Fort Pierce hotel with free parking, hotel near Fort Pierce Inlet State Park"
            canonical="/"
         />

         <div className="hero-slider">
            {slides.map((slide, index) => (
               <div
                  key={slide.id}
                  className={`slide ${index === currentSlide ? 'active' : ''}`}
                  style={{ backgroundImage: slide.bgImage }}
                  aria-label={slide.title}
               ></div>
            ))}

            <div className="slide-indicators">
               {slides.map((_, index) => (
                  <button
                     key={index}
                     className={`indicator ${index === currentSlide ? 'active' : ''}`}
                     onClick={() => goToSlide(index)}
                     aria-label={`Go to slide ${index + 1}`}
                  ></button>
               ))}
            </div>
         </div>

         <section className="hotel-info-section">
            <div className="container">
               <div className="hotel-info-content">
                  <div className="hotel-image">
                     <img
                        src={image10}
                        alt="Crossroads Inn Hotel exterior view in Fort Pierce Florida"
                        width="800"
                        height="600"
                        loading="lazy"
                     />
                  </div>

                  <div className="hotel-details">
                     <div className="hotel-header">
                        <div className="crown-icon">
                           <svg width="40" height="30" viewBox="0 0 40 30" fill="none">
                              <path d="M20 5L25 15H15L20 5Z" fill="#D4AF37" />
                              <circle cx="8" cy="15" r="3" fill="#D4AF37" />
                              <circle cx="32" cy="15" r="3" fill="#D4AF37" />
                              <path d="M5 15L35 15L32 25H8L5 15Z" fill="#D4AF37" />
                           </svg>
                        </div>
                     </div>

                     <h1 className="hotel-title">Crossroads Inn Hotel in Fort Pierce, Florida</h1>

                     <p className="hotel-description">
                        <b>Comfortable Accommodations:</b> Crossroads Inn in Fort Pierce offers air-conditioned rooms with private bathrooms, walk-in showers, and free WiFi. Each room includes a refrigerator, microwave, work desk, and TV.<br />

                        <b>Convenient Facilities:</b> Guests benefit from a 24-hour front desk, daily housekeeping service, and free on-site private parking. Additional amenities include a bath, carpeted floors, and a work desk.<br />

                        <b>Local Attractions:</b> Nearby attractions include Fort Pierce City Marina, Fort Pierce Inlet State Park, The Savannahs Recreation Area, Navy SEAL Museum, Fort Pierce Beach, and Vero Beach Museum of Art.
                     </p>

                     <div className="amenities-section">
                        <div className="quality-badge">
                           <div className="badge-circle">
                              <span>QUALITY</span>
                              <div className="stars">★★★★★</div>
                              <span>GUARANTEED</span>
                           </div>
                        </div>

                        <div className="amenities-list">
                           <div className="amenity-item">
                              <span className="check-icon">✓</span>
                              <span>Free parking</span>
                           </div>
                           <div className="amenity-item">
                              <span className="check-icon">✓</span>
                              <span>Free WiFi</span>
                           </div>
                           <div className="amenity-item">
                              <span className="check-icon">✓</span>
                              <span>Non-smoking rooms</span>
                           </div>
                           <div className="amenity-item">
                              <span className="check-icon">✓</span>
                              <span>Facilities for disabled guests</span>
                           </div>
                           <div className="amenity-item">
                              <span className="check-icon">✓</span>
                              <span>Comfortable Rooms</span>
                           </div>
                           <div className="amenity-item">
                              <span className="check-icon">✓</span>
                              <span>24-hour Front Desk</span>
                           </div>
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
         </section>

         <section className="lux-rooms-section">
            <div className="lux-container">
               <div className="lux-header">
                  <p className="lux-subtitle">FEATURED ROOMS</p>
                  <h2 className="lux-title">Discover Our Rooms</h2>
               </div>

               <div className="room-grid">
                  {rooms.map((room) => (
                     <div key={room.id} className="room-card">
                        <div className="room-image-container">
                           <img
                              src={room.image}
                              alt={`${room.name} at Crossroads Inn Hotel Fort Pierce FL`}
                              className="room-image"
                              onClick={() => navigate(`/page${room.id}`)}
                              loading="lazy"
                              style={{ cursor: 'pointer' }}
                           />

                           {room.featured && (
                              <div className="room-featured-badge">FEATURED</div>
                           )}

                           <button
                              className="room-favorite-btn"
                              onClick={() => toggleFavorite(room.id)}
                              aria-label="Add room to favorite"
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
                              onClick={() => navigate(`/page${room.id}`)}
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
                                    e.target.style.background = "#1e40af"
                                    e.target.style.transform = "translateY(-2px)"
                                    e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)"
                                 }}
                                 onMouseLeave={(e) => {
                                    e.target.style.background = "blue"
                                    e.target.style.transform = "translateY(0)"
                                    e.target.style.boxShadow = "none"
                                 }}
                              >
                                 Book now
                              </a>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>

               <div className="lux-footer">
                  <button
                     className="lux-view-btn"
                     onClick={() => navigate("/room")}
                  >
                     VIEW ALL ROOMS
                  </button>
               </div>
            </div>
         </section>

         <section className="property-surroundings-section">
            <div className="surroundings-container">
               <div className="surroundings-header">
                  <h2 className="surroundings-title">Property Surroundings</h2>
               </div>

               <div className="surroundings-categories">
                  <div className="category-block">
                     <div className="category-header">
                        <span className="category-check">✓</span>
                        <span className="category-title">🎯 Top attractions</span>
                     </div>

                     <div className="category-content">
                        <div className="location-item">
                           <span className="location-name">The Savannahs Recreation Area</span>
                           <span className="location-distance">9 miles</span>
                        </div>
                        <div className="location-item">
                           <span className="location-name">Fort Pierce Inlet State Park</span>
                           <span className="location-distance">14 miles</span>
                        </div>
                        <div className="location-item">
                           <span className="location-name">Navy SEAL Museum</span>
                           <span className="location-distance">16 miles</span>
                        </div>
                        <div className="location-item">
                           <span className="location-name">Pepper Beach State Recreation Area</span>
                           <span className="location-distance">19 miles</span>
                        </div>
                     </div>
                  </div>

                  <div className="category-block">
                     <div className="category-header">
                        <span className="category-check">✓</span>
                        <span className="category-title">🍴 Restaurants & cafes</span>
                     </div>

                     <div className="category-content">
                        <div className="location-item">
                           <span className="location-name">Cafe/bar • Dunkin'</span>
                           <span className="location-distance">150 m</span>
                        </div>
                        <div className="location-item">
                           <span className="location-name">Restaurant • La Granja</span>
                           <span className="location-distance">200 m</span>
                        </div>
                        <div className="location-item">
                           <span className="location-name">Restaurant • Arby's</span>
                           <span className="location-distance">200 m</span>
                        </div>
                     </div>
                  </div>

                  <div className="category-block">
                     <div className="category-header">
                        <span className="category-check">✓</span>
                        <span className="category-title">✈️ Closest airports</span>
                     </div>

                     <div className="category-content">
                        <div className="location-item">
                           <span className="location-name">Vero Beach Municipal Airport</span>
                           <span className="location-distance">28 miles</span>
                        </div>
                        <div className="location-item">
                           <span className="location-name">Witham Field Airport</span>
                           <span className="location-distance">37 miles</span>
                        </div>
                        <div className="location-item">
                           <span className="location-name">Melbourne International Airport</span>
                           <span className="location-distance">84 miles</span>
                        </div>
                     </div>
                  </div>

                  <div className="category-block">
                     <div className="category-header">
                        <span className="category-check">✓</span>
                        <span className="category-title">🏖️ Beaches in the neighbourhood</span>
                     </div>

                     <div className="category-content">
                        <div className="location-item">
                           <span className="location-name">Fort Pierce Beach</span>
                           <span className="location-distance">9 miles</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}