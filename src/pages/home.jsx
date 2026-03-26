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
      bgImage: `url(${image1})`
   },
   {
      id: 2,
      bgImage: `url(${image2})`
   },
   {
      id: 3,
      bgImage: `url(${image3})`
   },
   {
      id: 3,
      bgImage: `url(${image12})`
   },
   {
      id: 3,
      bgImage: `url(${image10})`
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
      name: "NK- King Bed (Non-Smoking)",
      price: 114.99,
      area: 12,
      person: 2,
      image: image4, // Remove curly braces
      featured: true
   },
   {
      id: 2,
      name: "NDD - Double Room  (2 Beds, Non-Smoking)",
      price: 109.99,
      area: 19,
      person: 2,
      image: image5, // Remove curly braces
      featured: false
   },
   {
      id: 3,
      name: "HNK - King Room (Disability Access, Non-Smoking)",
      price: 113.30,
      area: 22,
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
                        <p className="welcome-text">ABOUT THIS PROPERTY</p>
                     </div>

                     <h2 className="hotel-title">A Comfortable Country Hotel in Berkeley</h2>

                     <p className="hotel-description">
                     <b>Comfortable Accommodations:</b>  Crossroads Inn in Fort Pierce offers air-conditioned rooms with private bathrooms, walk-in showers, and free WiFi. Each room includes a refrigerator, microwave, work desk, and TV.<br></br>

 <b>Convenient Facilities:</b>  Guests benefit from a 24-hour front desk, daily housekeeping service, and free on-site private parking. Additional amenities include a bath, carpeted floors, and a work desk.<br></br>

 <b>Local Attractions:</b> Nearby attractions include Fort Pierce City Marina (9 km), Fort Pierce Inlet State Park (15 km), and the Vero Beach Museum of Art (31 km). The Vero Beach Municipal Airport is 28 km away.
                     </p>

                     <p className="location-text">A short drive from Junction 13/14 of the M5.</p>

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
                              <span>Meeting Rooms Available</span>
                           </div>
                           <div className="amenity-item">
                              <span className="check-icon">✓</span>
                              <span>Arrange Wedding Destinations</span>
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

         {/* Hotel Features Section */}
         <section className="features-section">
            <div className="container">
               <div className="features-content">
                  <div className="features-text">
                     <p className="features-description">
                        Located in the historic town of Berkeley, close to Junction 13/14 of the M5 and just off the A38, our hotel is perfectly positioned for travellers whether passing through or visiting Gloucester, Bristol, South Gloucestershire, and the Cotswolds.
                     </p>

                     <div className="features-grid-left">
                        <div className="feature-item">
                           <div className="feature-icon">
                              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                 <path d="M20 5L25 15H15L20 5Z" fill="#D4AF37" />
                                 <circle cx="20" cy="20" r="15" stroke="#D4AF37" strokeWidth="2" fill="none" />
                                 <path d="M15 25L25 25" stroke="#D4AF37" strokeWidth="2" />
                              </svg>
                           </div>
                           <h3>In J3/14 of the M5</h3>
                        </div>

                        <div className="feature-item">
                           <div className="feature-icon">
                              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                 <rect x="5" y="10" width="30" height="20" rx="3" stroke="#D4AF37" strokeWidth="2" fill="none" />
                                 <rect x="10" y="15" width="20" height="10" fill="#D4AF37" />
                              </svg>
                           </div>
                           <h3>38 Bedrooms</h3>
                        </div>

                        <div className="feature-item">
                           <div className="feature-icon">
                              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                 <rect x="5" y="8" width="30" height="20" rx="2" stroke="#D4AF37" strokeWidth="2" fill="none" />
                                 <rect x="8" y="12" width="24" height="12" fill="#D4AF37" />
                              </svg>
                           </div>
                           <h3>Flat-screen TV</h3>
                        </div>

                        <div className="feature-item">
                           <div className="feature-icon">
                              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                 <rect x="8" y="15" width="24" height="15" rx="2" stroke="#D4AF37" strokeWidth="2" fill="none" />
                                 <path d="M12 20h16M12 25h12" stroke="#D4AF37" strokeWidth="2" />
                              </svg>
                           </div>
                           <h3>Fresh towels</h3>
                        </div>

                        <div className="feature-item">
                           <div className="feature-icon">
                              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                 <rect x="10" y="12" width="20" height="16" rx="2" stroke="#D4AF37" strokeWidth="2" fill="none" />
                                 <circle cx="20" cy="20" r="3" fill="#D4AF37" />
                              </svg>
                           </div>
                           <h3>Free Toiletries</h3>
                        </div>
                     </div>
                  </div>

                  <div className="features-cards">
                     <div className="feature-card light">
                        <div className="feature-card-icon">
                           <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                              <rect x="5" y="15" width="40" height="25" rx="3" stroke="#D4AF37" strokeWidth="2" fill="none" />
                              <rect x="10" y="20" width="30" height="15" fill="#D4AF37" />
                              <circle cx="15" cy="10" r="3" fill="#D4AF37" />
                              <circle cx="35" cy="10" r="3" fill="#D4AF37" />
                           </svg>
                        </div>
                        <h3>Free On-Site Parking</h3>
                        <p>Benefit from free on-site parking, offering generous space for cars and work vehicles.</p>
                     </div>

                     <div className="feature-card light">
                        <div className="feature-card-icon">
                           <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                              <circle cx="25" cy="25" r="20" stroke="#D4AF37" strokeWidth="2" fill="none" />
                              <path d="M15 25c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="#D4AF37" strokeWidth="2" />
                              <circle cx="25" cy="25" r="3" fill="#D4AF37" />
                           </svg>
                        </div>
                        <h3>Free High-Speed Wi-Fi</h3>
                        <p>Stay connected with our completely free, open Wi-Fi network available across the hotel.</p>
                     </div>

                     <div className="feature-card dark">
                        <div className="feature-card-icon">
                           <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                              <rect x="10" y="15" width="30" height="20" rx="3" stroke="#D4AF37" strokeWidth="2" fill="none" />
                              <path d="M15 20h20M15 25h15M15 30h18" stroke="#D4AF37" strokeWidth="2" />
                              <circle cx="25" cy="8" r="3" fill="#D4AF37" />
                           </svg>
                        </div>
                        <h3>Continental Breakfast</h3>
                        <p>Start your day with a self-serve continental breakfast, including a toastie bar, available for £9.95 per person.</p>
                     </div>

                     <div className="feature-card light">
                        <div className="feature-card-icon">
                           <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                              <rect x="10" y="10" width="30" height="30" rx="5" stroke="#D4AF37" strokeWidth="2" fill="none" />
                              <path d="M20 20h10M20 25h8M20 30h12" stroke="#D4AF37" strokeWidth="2" />
                              <circle cx="32" cy="18" r="2" fill="#D4AF37" />
                           </svg>
                        </div>
                        <h3>Easy Self Check-In</h3>
                        <p>Arriving late? Our simple self check-in process allows hassle-free access after 10pm via WhatsApp instructions.</p>
                     </div>
                  </div>
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
         <section className="nearby-section">
            <div className="container">

               <div className="nearby-header">
                  <p className="nearby-subtitle">EXPLORE THE LOCAL AREA</p>
                  <h2 className="nearby-title">Nearby attraction</h2>
               </div>

               <div className="nearby-grid">

                  <div className="nearby-card">
                     <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60" alt="Edward Jenner Museum" />
                     <div className="nearby-info">
                        <span className="time">5 minutes</span>
                        <h4>Edward Jenner Museum</h4>
                     </div>
                  </div>

                  <div className="nearby-card">
                     <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60" alt="Cotswold Way" />
                     <div className="nearby-info">
                        <span className="time">10 minutes</span>
                        <h4>Cotswold Way National Trail</h4>
                     </div>
                  </div>

                  <div className="nearby-card">
                     <img src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=60" alt="Wetland Centre" />
                     <div className="nearby-info">
                        <span className="time">10 minutes</span>
                        <h4>Slimbridge Wetland Centre</h4>
                     </div>
                  </div>

                  <div className="nearby-card">
                     <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60" alt="Berkeley Marina" />
                     <div className="nearby-info">
                        <span className="time">8 minutes</span>
                        <h4>Berkeley Marina</h4>
                     </div>
                  </div>

                  <div className="nearby-card">
                     <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=60" alt="Thornbury Castle" />
                     <div className="nearby-info">
                        <span className="time">15 minutes</span>
                        <h4>Thornbury Castle</h4>
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
