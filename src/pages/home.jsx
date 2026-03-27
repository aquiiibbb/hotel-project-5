import './home.css'
import { useState, useEffect } from 'react'
import booking from "../Assets/booking.png";
import tripadvisor from "../Assets/tripadvisor.png";
import agoda from "../Assets/agoda.png";
import image1 from "../Assets/1.jpg";
import image2 from "../Assets/2.jpg";
import image3 from "../Assets/3.jpg";
import image4 from "../Assets/s1.jpg";
import image5 from "../Assets/5.jpg";
import image6 from "../Assets/rooom.jpg";
import image9 from "../Assets/reception.JPG";
import image10 from "../Assets/bahar1.JPG";
import image12 from "../Assets/reception.JPG";

import { useNavigate } from "react-router-dom"
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import './room.css'
export default function Home() {

   const [currentSlide, setCurrentSlide] = useState(0)
   const [startIndex, setStartIndex] = useState(0)
   const [favorites, setFavorites] = useState([]);
   const slides = [
      {
         id: 1,
         bgImage: `url(${image1})`,
         title: "CrossInn Hotel",
         subtitle: "WHERE COMFORT MEETS ELEGANCE",
         description: "Experience luxury redefined in every corner"
      },
      {
         id: 2,
         bgImage: `url(${image2})`,
         title: "CrossInn Hotel",
         subtitle: "YOUR HOME AWAY FROM HOME",
         description: "Unwind in our beautifully crafted spaces"
      },
      {
         id: 3,
         bgImage: `url(${image3})`,
         title: "CrossInn Hotel",
         subtitle: "BREATHTAKING VIEWS AWAIT",
         description: "Wake up to scenery that takes your breath away"
      },
      {
         id: 4,
         bgImage: `url(${image12})`,
         title: "CrossInn Hotel",
         subtitle: "WARM HOSPITALITY, EVERY STAY",
         description: "Our team is here to make every moment perfect"
      },
      {
         id: 5,
         bgImage: `url(${image10})`,
         title: "CrossInn Hotel",
         subtitle: "DISCOVER SERENITY",
         description: "Escape the ordinary — step into tranquility"
      }
   ]

   const toggleFavorite = (id) => {
      if (favorites.includes(id)) {
         setFavorites(favorites.filter((fav) => fav !== id));
      } else {
         setFavorites([...favorites, id]);
      }
   };

   const rooms = [
      {
         id: 1,
         name: "King Bed",
         price: 114.99,
         area: 28,
         person: 2,
         image: image4, // Remove curly braces
         featured: true
      },
      {
         id: 2,
         name: "Double Room  (2 Beds)",
         price: 109.99,
         area: 28,
         person: 2,
         image: image5, // Remove curly braces
         featured: false
      },
      {
         id: 3,
         name: "King Room (Disability Access)",
         price: 113.30,
         area: 28,
         person: 2,
         image: image6, // Remove curly braces
         featured: false
      }
   ]

   const attractions = [
      { title: "Edward Jenner Museum", time: "5 minutes", image: "https://source.unsplash.com/random/600x400?nature&sig=1" },
      { title: "Cotswold Way National Trail", time: "10 minutes", image: "https://source.unsplash.com/random/600x400?mountain&sig=2" },
      { title: "Slimbridge Wetland Centre", time: "10 minutes", image: "https://source.unsplash.com/random/600x400?lake&sig=3" },
      { title: "Berkeley Marina", time: "8 minutes", image: "https://source.unsplash.com/random/600x400?harbour&sig=4" },
      { title: "Thornbury Castle", time: "15 minutes", image: "https://source.unsplash.com/random/600x400?castle&sig=5" },
      { title: "Gloucester Cathedral", time: "20 minutes", image: "https://source.unsplash.com/random/600x400?cathedral&sig=6" },
      { title: "Berkeley Castle", time: "6 minutes", image: "https://source.unsplash.com/random/600x400?palace&sig=7" },
      { title: "Cotswolds Village", time: "25 minutes", image: "https://source.unsplash.com/random/600x400?village&sig=8" },
      { title: "Severn Bridge", time: "18 minutes", image: "https://source.unsplash.com/random/600x400?bridge&sig=9" },
      { title: "Bristol Harbour", time: "30 minutes", image: "https://source.unsplash.com/random/600x400?city&sig=10" }
   ]

   const nextSlide = () => {
      setStartIndex((prev) => (prev + 1) % attractions.length)
   }

   const prevSlide = () => {
      setStartIndex((prev) =>
         prev === 0 ? attractions.length - 1 : prev - 1
      )
   }

   const visibleAttractions = []

   for (let i = 0; i < 5; i++) {
      visibleAttractions.push(
         attractions[(startIndex + i) % attractions.length]
      )
   }
   const navigate = useNavigate();
   /* Auto slide attractions */
   useEffect(() => {

      const auto = setInterval(() => {
         setStartIndex((prev) => (prev + 1) % attractions.length)
      }, 4000)

      return () => clearInterval(auto)

   }, [attractions.length])


   /* Hero slider */
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
         <div className="hero-slider">
            {slides.map((slide, index) => (
               <div
                  key={slide.id}
                  className={`slide ${index === currentSlide ? 'active' : ''}`}
                  style={{ backgroundImage: slide.bgImage }}
               >
                  <div className="slide-content">
                     <div className="text-content">
                        {slide.subtitle && (
                           <p className="subtitle">{slide.subtitle}</p>
                        )}
                        <h1 className="main-title">{slide.title}</h1>
                        {slide.description && (
                           <p className="description">{slide.description}</p>
                        )}
                        <div className="decorative-line"></div>
                     </div>
                  </div>
               </div>
            ))}

            {/* Slide indicators */}
            <div className="slide-indicators">
               {slides.map((_, index) => (
                  <button
                     key={index}
                     className={`indicator ${index === currentSlide ? 'active' : ''}`}
                     onClick={() => goToSlide(index)}
                  ></button>

               ))}
            </div>
         </div>

         {/* Hotel Info Section */}
         <section className="hotel-info-section">
            <div className="container">
               <div className="hotel-info-content">
                  <div className="hotel-image">
                     <img
                        src={image10}
                        alt=" of Wales Hotel"
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

                     <h2 className="hotel-title">ABOUT THIS PROPERTY</h2>

                     <p className="hotel-description">
                        <b>Comfortable Accommodations:</b>  Crossroads Inn in Fort Pierce offers air-conditioned rooms with private bathrooms, walk-in showers, and free WiFi. Each room includes a refrigerator, microwave, work desk, and TV.<br></br>

                        <b>Convenient Facilities:</b>  Guests benefit from a 24-hour front desk, daily housekeeping service, and free on-site private parking. Additional amenities include a bath, carpeted floors, and a work desk.<br></br>

                        <b>Local Attractions:</b> Nearby attractions include Fort Pierce City Marina (9 km), Fort Pierce Inlet State Park (15 km), and the Vero Beach Museum of Art (31 km). The Vero Beach Municipal Airport is 28 km away.
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
                              <span>Luxury Rooms</span>
                           </div>
                           <div className="amenity-item">
                              <span className="check-icon">✓</span>
                              <span>24/7 Reservation</span>
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



         {/* Discover Our Rooms Section */}
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
                              alt={room.name}
                              className="room-image"
                              onClick={() => navigate(`/page${room.id}`)}
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



         {/* Customer Reviews Section */}
         <section className="reviews-section">

            <style>{`
.reviews-section {
  padding: 90px 0;
  background: #f3f3f3;
  text-align: center;
}

/* HEADER */
.crown-icon {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}

.reviews-subtitle {
  font-size: 12px;
  letter-spacing: 2px;
  color: #8a8a8a;
  margin-bottom: 10px;
}

.reviews-title {
  font-size: 48px;
  font-weight: 500;
  color: #2d2d2d;
  margin-bottom: 50px;
}

/* SCROLL */
.reviews-grid {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 20px;
}

.reviews-grid::-webkit-scrollbar {
  display: none;
}

/* CARD */
.review-card {
  flex: 0 0 auto;
  width: 300px;
  background: #e6e6e6;
  border-radius: 14px;
  padding: 20px;
  text-align: left;
}

/* HEADER */
.review-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.reviewer-info {
  display: flex;
  gap: 10px;
  align-items: center;
}

.reviewer-avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #0f766e;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}

.reviewer-avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.reviewer-name {
  font-size: 15px;
  font-weight: 600;
}

.reviewer-date {
  font-size: 12px;
  color: #777;
}

/* GOOGLE ICON */
.google-icon {
  width: 18px;
}

/* RATING */
.review-rating {
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 8px 0;
}

.stars {
  color: #fbbc04;
  font-size: 14px;
}

.verified {
  width: 16px;
  height: 16px;
  background: #4285F4;
  color: #fff;
  font-size: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* TEXT */
.review-text {
  font-size: 14px;
  color: #333;
  line-height: 1.6;
}

.read-more {
  font-size: 13px;
  color: #888;
  margin-top: 6px;
}

/* MOBILE */
@media(max-width:768px){
  .review-card{width:240px;}
  .reviews-title{font-size:34px;}
}

@media(max-width:480px){
  .review-card{width:85%;}
  .reviews-title{font-size:26px;}
}
`}</style>

            {/* LOGO */}
            <div className="crown-icon">
               <svg width="50" height="30" viewBox="0 0 40 30">
                  <path d="M20 5L25 15H15L20 5Z" fill="#D4AF37" />
                  <circle cx="8" cy="15" r="3" fill="#D4AF37" />
                  <circle cx="32" cy="15" r="3" fill="#D4AF37" />
                  <path d="M5 15L35 15L32 25H8L5 15Z" fill="#D4AF37" />
               </svg>
            </div>

            <p className="reviews-subtitle">CUSTOMERS REVIEWS</p>
            <h2 className="reviews-title">What They’re Saying?</h2>

            <div className="reviews-grid">

               {/* CARD 1 */}
               <div className="review-card">
                  <div className="review-header">
                     <div className="reviewer-info">
                        <div className="reviewer-avatar">P</div>
                        <div>
                           <div className="reviewer-name">Patrick Goodenough</div>
                           <div className="reviewer-date">2 months ago</div>
                        </div>
                     </div>
                     <img className="google-icon" src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" />
                  </div>

                  <div className="review-rating">
                     <div className="stars">★★★★★</div>
                     <div className="verified">✓</div>
                  </div>

                  <div className="review-text">
                     Great location for exploring the Cotswolds... restaurant food 5 star...
                     room is clean and comfortable... Excellent value for money...
                  </div>
                  <div className="read-more">Read more</div>
               </div>

               {/* CARD 2 */}
               <div className="review-card">
                  <div className="review-header">
                     <div className="reviewer-info">
                        <div className="reviewer-avatar">
                           <img src="https://lh3.googleusercontent.com/a-/ALV-UjWjC134L2j7knJzFzSGlNfKXAhKyODdaaUXD_hiXx9thdgHqZWM=w40-h40-c-rp-mo-br100" />
                        </div>
                        <div>
                           <div className="reviewer-name">Sean Hurley</div>
                           <div className="reviewer-date">2 months ago</div>
                        </div>
                     </div>
                     <img className="google-icon" src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" />
                  </div>

                  <div className="review-rating">
                     <div className="stars">★★★★★</div>
                     <div className="verified">✓</div>
                  </div>

                  <div className="review-text">
                     Rooms were immaculate, newly renovated so the door system and shower...
                  </div>
                  <div className="read-more">Read more</div>
               </div>

               {/* CARD 3 */}
               <div className="review-card">
                  <div className="review-header">
                     <div className="reviewer-info">
                        <div className="reviewer-avatar" style={{ background: "#1a73e8" }}>M</div>
                        <div>
                           <div className="reviewer-name">Mark Hughes</div>
                           <div className="reviewer-date">3 months ago</div>
                        </div>
                     </div>
                     <img className="google-icon" src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" />
                  </div>

                  <div className="review-rating">
                     <div className="stars">★★★★★</div>
                     <div className="verified">✓</div>
                  </div>

                  <div className="review-text">
                     Dined in the steakhouse- BEST fillet steak I've ever eaten.
                  </div>
               </div>

               {/* CARD 4 */}
               <div className="review-card">
                  <div className="review-header">
                     <div className="reviewer-info">
                        <div className="reviewer-avatar" style={{ background: "#9333ea" }}>M</div>
                        <div>
                           <div className="reviewer-name">Macadam Mac</div>
                           <div className="reviewer-date">3 months ago</div>
                        </div>
                     </div>
                     <img
                        className="google-icon"
                        src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                        alt="Google review"
                     />
                  </div>

                  <div className="review-rating">
                     <div className="stars">★★★★★</div>
                     <div className="verified">✓</div>
                  </div>

                  <div className="review-text">Ok</div>
               </div>
               {/* CARD 5 */}
               <div className="review-card">
                  <div className="review-header">
                     <div className="reviewer-info">
                        <div className="reviewer-avatar" style={{ background: "#9333ea" }}>G</div>
                        <div>
                           <div className="reviewer-name">Gordon Brumby</div>
                           <div className="reviewer-date">3 months ago</div>
                        </div>
                     </div>
                     <img
                        className="google-icon"
                        src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                        alt="Google review"
                     />
                  </div>

                  <div className="review-rating">
                     <div className="stars">★★★★★</div>
                     <div className="verified">✓</div>
                  </div>

                  <div className="review-text">Had a two day stay and very relaxed atmosphere, the manager Sophia went above and beyond to make sure we were comfortable.
                  </div>
               </div>

            </div>
         </section>
         {/* Nearby Attractions Section */}
         <section className="property-surroundings-section">
            <div className="surroundings-container">
               <div className="surroundings-header">
                  <h2 className="surroundings-title">Property surroundings</h2>
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
                           <span className="location-distance">9 km</span>
                        </div>
                        <div className="location-item">
                           <span className="location-name">Fort Pierce Inlet State Park</span>
                           <span className="location-distance">14 km</span>
                        </div>
                        <div className="location-item">
                           <span className="location-name">Navy Seal Museum</span>
                           <span className="location-distance">16 km</span>
                        </div>
                        <div className="location-item">
                           <span className="location-name">Pepper Beach State Recreation Area</span>
                           <span className="location-distance">19 km</span>
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
                           <span className="location-distance">28 km</span>
                        </div>
                        <div className="location-item">
                           <span className="location-name">Witham Field Airport</span>
                           <span className="location-distance">37 km</span>
                        </div>
                        <div className="location-item">
                           <span className="location-name">Melbourne International Airport</span>
                           <span className="location-distance">84 km</span>
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
                           <span className="location-distance">9 km</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Partner Logos */}
         <section className="partners-section">
            <div className="partners-container">

               <img src={booking} alt="Booking" />
               <img src={tripadvisor} alt="Tripadvisor" />
               <img src={agoda} alt="Agoda" />


            </div>
         </section>
      </>
   )
}