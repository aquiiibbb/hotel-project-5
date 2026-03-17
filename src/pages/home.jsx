import './home.css'
import { useState, useEffect } from 'react'
import booking from "../Assets/booking.png";
import tripadvisor from "../Assets/tripadvisor.png";
import agoda from "../Assets/agoda.png";
import image1 from "../Assets/1.jpg";
import image2 from "../Assets/2.jpg";
import image3 from "../Assets/3.jpg";
import image5 from "../Assets/5.jpg";
import image6 from "../Assets/6.jpg";
import image8 from "../Assets/8.jpg";
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
         price: 93.50,
         area: 12,
         person: 2,
         image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop",
         featured: true
      },
      {
         id: 2,
         name: "NDD - Double Room  (2 Beds, Non-Smoking)",
         price: 104.50,
         area: 19,
         person: 1,
         image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
         featured: false
      },
      {
         id: 3,
         name: "HNK - King Room (Disability Access, Non-Smoking)",
         price: 113.30,
         area: 22,
         person: 2,
         image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop",
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
                        src={image1}
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
                        <p className="welcome-text">WELCOME TO CROSSROADINN OF WALES HOTEL</p>
                     </div>

                     <h2 className="hotel-title">A Comfortable Country Hotel in Berkeley</h2>

                     <p className="hotel-description">
                        Set just off the A38 and within easy reach of the M5 motorway, The crossroadsinn of Wales Hotel
                        Berkeley offers a relaxed and convenient stay for business travellers, contractors, and leisure
                        guests. Recently refurbished, the hotel features comfortable en-suite rooms, free on-site
                        parking, free high-speed Wi-Fi, and a seamless self check-in option for late arrivals.
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

         {/* Why Choose Our Venue Section */}
         <section className="venue-section">
            <div className="container">
               <div className="venue-content">
                  <div className="venue-text">
                     <div className="venue-header">
                        <div className="crown-icon">
                           <svg width="40" height="30" viewBox="0 0 40 30" fill="none">
                              <path d="M20 5L25 15H15L20 5Z" fill="#D4AF37" />
                              <circle cx="8" cy="15" r="3" fill="#D4AF37" />
                              <circle cx="32" cy="15" r="3" fill="#D4AF37" />
                              <path d="M5 15L35 15L32 25H8L5 15Z" fill="#D4AF37" />
                           </svg>
                        </div>
                     </div>

                     <h2 className="venue-title">Why Choose Our Venue</h2>

                     <div className="venue-subtitle">
                        <h3>Events, Conferences & Venue Hire at</h3>
                        <h3>The crossroadsinn of Wales Hotel</h3>
                     </div>

                     <p className="venue-description">
                        From professional conferences and business meetings to weddings, parties and private
                        celebrations, the crossroadsinn of Wales Hotel offers flexible event spaces, tailored catering and
                        dedicated support — all in a convenient Gloucestershire location. Venue hire available from
                        just £150, with bespoke packages to suit your event and budget.
                     </p>

                     <button
                        className="about-view-rooms-btn"
                        onClick={() => navigate("/amenities")}
                     >
                        VIEW Amenities & Facilities
                     </button>
                  </div>

                  <div className="venue-images">
                     <div className="image-grid">
                        <div className="image-item">
                           <img
                              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                              alt="Conference Room"
                           />
                        </div>
                        <div className="image-item">
                           <img
                              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2098&q=80"
                              alt="Wedding Reception"
                           />
                        </div>
                        <div className="image-item">
                           <img
                              src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                              alt="Event Space"
                           />
                        </div>
                        <div className="image-item">
                           <img
                              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                              alt="Dining Setup"
                           />
                        </div>
                     </div>
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
                                <button className="room-book-btn">BOOK NOW</button>
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

         {/* Comfort & Convenience Section */}
         <section className="comfort-section">
            <div className="container">
               <div className="comfort-content">

                  {/* LEFT SIDE IMAGES */}
                  <div className="comfort-images">
                     <div className="comfort-image-grid">

                        {/* Large Image */}
                        <div className="comfort-image-item main-image">
                           <img
                              src={image1}
                              alt="Hotel Room"
                           />
                        </div>

                        {/* Small Image */}
                        <div className="comfort-image-item small-image">
                           <img
                              src={image5}
                              alt="Hotel Interior"
                           />
                        </div>

                        {/* Decorative Empty Card */}
                        <div className="comfort-image-item empty-card"></div>

                     </div>

                     {/* Recently Refurbished Card */}
                     <div className="recently-refurbished">
                        <div className="refurbished-icon">
                           <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                              <path d="M30 10L35 25H25L30 10Z" fill="#D4AF37" />
                              <circle cx="15" cy="25" r="5" fill="#D4AF37" />
                              <circle cx="45" cy="25" r="5" fill="#D4AF37" />
                              <path d="M10 25L50 25L45 45H15L10 25Z" fill="#D4AF37" />
                           </svg>
                        </div>

                        <h3>Recently Refurbished</h3>
                        <p>CONVENIENTLY LOCATED NEAR THE M5</p>

                        <button className="more-button">MORE</button>
                     </div>
                  </div>

                  {/* RIGHT SIDE CONTENT */}
                  <div className="comfort-details">

                     <div className="comfort-header">
                        <p className="comfort-subtitle">HOTEL AMENITIES</p>
                     </div>

                     <h2 className="comfort-title">Comfort & Convenience Included</h2>

                     <div className="comfort-amenities">

                        <div className="comfort-amenity">
                           <div className="comfort-amenity-icon">✓</div>
                           <div>
                              <h3>Venue Hire</h3>
                              <p>Tailored layouts, catering options, and dedicated support for every occasion.</p>
                           </div>
                        </div>

                        <div className="comfort-amenity">
                           <div className="comfort-amenity-icon">☰</div>
                           <div>
                              <h3>Bar & Restaurant On-Site</h3>
                              <p>Food and drinks at The Ashville Bar & Restaurant. Located conveniently next to the hotel.</p>
                           </div>
                        </div>

                        <div className="comfort-amenity">
                           <div className="comfort-amenity-icon">≡</div>
                           <div>
                              <h3>Events & Functions</h3>
                              <p>Private events, parties, and celebrations welcome. Flexible space for small gatherings.</p>
                           </div>
                        </div>

                     </div>

                  </div>

               </div>
            </div>
         </section>

         {/* Customer Reviews Section */}
         <section className="reviews-section">
            <div className="container">
               <div className="reviews-header">
                  <div className="crown-icon">
                     <svg width="40" height="30" viewBox="0 0 40 30" fill="none">
                        <path d="M20 5L25 15H15L20 5Z" fill="#D4AF37" />
                        <circle cx="8" cy="15" r="3" fill="#D4AF37" />
                        <circle cx="32" cy="15" r="3" fill="#D4AF37" />
                        <path d="M5 15L35 15L32 25H8L5 15Z" fill="#D4AF37" />
                     </svg>
                  </div>
                  <p className="reviews-subtitle">CUSTOMERS REVIEWS</p>
                  <h2 className="reviews-title">What They're Saying?</h2>
               </div>

               <div className="reviews-grid">
                  <div className="review-card">
                     <div className="review-header">
                        <div className="reviewer-info">
                           <div className="reviewer-avatar">
                              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80" alt="John Smith" />
                           </div>
                           <div className="reviewer-details">
                              <h4 className="reviewer-name">John Smith</h4>
                              <p className="reviewer-location">FL 34945, USA St</p>
                           </div>
                        </div>
                        <div className="review-rating">
                           <div className="stars">★★★★★</div>
                           <span className="rating-number">5.0</span>
                        </div>
                     </div>
                     <div className="review-content">
                        <p className="review-text">
                           "Excellent location just off the M5. The room was clean, comfortable, and recently refurbished.
                           Free parking was a huge bonus, and the self check-in process worked perfectly for our late arrival.
                           Would definitely stay again!"
                        </p>
                        <div className="review-date">2 weeks ago</div>
                     </div>
                  </div>

                  <div className="review-card">
                     <div className="review-header">
                        <div className="reviewer-info">
                           <div className="reviewer-avatar">
                              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop" alt="Sarah Johnson" />
                           </div>
                           <div className="reviewer-details">
                              <h4 className="reviewer-name">Sarah Johnson</h4>
                              <p className="reviewer-location">Bristol, UK</p>
                           </div>
                        </div>
                        <div className="review-rating">
                           <div className="stars">★★★★★</div>
                           <span className="rating-number">5.0</span>
                        </div>
                     </div>
                     <div className="review-content">
                        <p className="review-text">
                           "Perfect for business travel. The Wi-Fi was fast and reliable, room was quiet, and the continental
                           breakfast was good value. Staff were helpful and the location made it easy to get to meetings
                           in Gloucester and Bristol."
                        </p>
                        <div className="review-date">1 month ago</div>
                     </div>
                  </div>

                  <div className="review-card">
                     <div className="review-header">
                        <div className="reviewer-info">
                           <div className="reviewer-avatar">
                              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80" alt="Michael Brown" />
                           </div>
                           <div className="reviewer-details">
                              <h4 className="reviewer-name">Michael Brown</h4>
                              <p className="reviewer-location">Birmingham, UK</p>
                           </div>
                        </div>
                        <div className="review-rating">
                           <div className="stars">★★★★☆</div>
                           <span className="rating-number">4.0</span>
                        </div>
                     </div>
                     <div className="review-content">
                        <p className="review-text">
                           "Great value for money. The room was clean and comfortable, parking was convenient, and the
                           location is perfect for accessing the M5. The Ashville restaurant next door was a nice touch
                           for dinner. Highly recommended!"
                        </p>
                        <div className="review-date">3 weeks ago</div>
                     </div>
                  </div>
               </div>

               <div className="reviews-stats">
                  <div className="stats-card">
                     <div className="stat-number">4.8</div>
                     <div className="stat-label">Average Rating</div>
                     <div className="stat-stars">★★★★★</div>
                  </div>
                  <div className="stats-card">
                     <div className="stat-number">150+</div>
                     <div className="stat-label">Happy Customers</div>
                  </div>
                  <div className="stats-card">
                     <div className="stat-number">95%</div>
                     <div className="stat-label">Recommend Us</div>
                  </div>
               </div>
            </div>
           
      </section >
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
         {/* Recent Blog Posts */}
         <section className="blog-section">
            <div className="container">

               <div className="blog-header">
                  <p className="blog-subtitle">NEWS & ARTICLES</p>
                  <h2 className="blog-title">Recent Blog Posts</h2>
               </div>

               <div className="blog-grid">

                  {/* Blog 1 */}
                  <div className="blog-card">
                     <img
                        src="https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=1200&q=60"
                        alt="Berkeley Village"
                     />

                     <div className="blog-content">
                        <p className="blog-author">● POW</p>

                        <h3>
                           Why Berkeley Is the Perfect Base for Exploring Gloucestershire
                        </h3>

                        <p className="blog-text">
                           Choosing where to stay can shape your entire travel experience.
                           Berkeley offers a unique advantage.
                        </p>

                        <button className="blog-btn">READ MORE</button>
                     </div>
                  </div>

                  {/* Blog 2 */}
                  <div className="blog-card">
                     <img
                        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=60"
                        alt="Lake"
                     />

                     <div className="blog-content">
                        <p className="blog-author">● POW</p>

                        <h3>
                           Why Staying Near the M5 Makes Business Travel Easier
                        </h3>

                        <p className="blog-text">
                           Business travel can be demanding, with tight schedules, long
                           drives, and the need for reliable accommodation.
                        </p>

                        <button className="blog-btn">READ MORE</button>
                     </div>
                  </div>

                  {/* Blog 3 */}
                  <div className="blog-card">
                     <img
                        src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=60"
                        alt="City"
                     />

                     <div className="blog-content">
                        <p className="blog-author">● POW</p>

                        <h3>
                           Day Trips from Berkeley: Explore the Cotswolds & Beyond
                        </h3>

                        <p className="blog-text">
                           Berkeley's convenient location in Gloucestershire makes it an
                           ideal base for exploring nearby attractions.
                        </p>

                        <button className="blog-btn">READ MORE</button>
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
               <img src={booking} alt="Booking" />

            </div>
         </section>
      </>
   )
}
