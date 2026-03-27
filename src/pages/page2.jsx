import './page1.css'
import image5 from "../Assets/5.jpg";

export default function HotelRoomPageThree() {
    return (
        <>
            {/* Image Gallery */}
            <div className="hotel-room-image-gallery">
                <div className="hotel-room-gallery-container">
                    <div className="hotel-room-gallery-item">
                        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/841167377.jpg?k=6e76f042b8b2bc6a7039bcbef3d080d8b4545b4fed97849a4b90b436b5a3db64&o=" alt="Luxury hotel bed" />
                    </div>
                    <div className="hotel-room-gallery-item">
                        <img src={image5} alt="Modern hotel room bed" />
                    </div>
                    <div className="hotel-room-gallery-item">
                        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/841167744.jpg?k=08eb06acf04fc443588b0f1d28f5536c9cff4fcc2ad0519d0b37decb57d37baf&o=" alt="King size bed room" />
                    </div>
                    <div className="hotel-room-gallery-item">
                        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/841168151.jpg?k=01e93358bcccd0ea880aca3a9ef193b6d4b383e5cd246c268275900c7ddf9d6b&o=" alt="Premium hotel bedroom" />
                    </div>
                </div>

                {/* Scroll indicators */}
                <div className="hotel-room-gallery-indicators">
                    <div className="indicator active"></div>
                    <div className="indicator"></div>
                    <div className="indicator"></div>
                    <div className="indicator"></div>
                </div>
            </div>

            {/* Room Details */}
            <div className="hotel-room-details-section">
                <div className="hotel-room-header-container">
                    <div className="hotel-room-info-block">
                        <h1 className="hotel-room-title-text">Double Room (2 Beds)</h1>
                       
                    </div>

                    <div className="hotel-room-features-container">
                        <div className="hotel-room-feature-item">
                            <div className="hotel-room-feature-icon-wrapper">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M16 4C18.2091 4 20 5.79086 20 8C20 10.2091 18.2091 12 16 12C13.7909 12 12 10.2091 12 8C12 5.79086 13.7909 4 16 4Z" fill="#B8941F" />
                                    <path d="M8 4C10.2091 4 12 5.79086 12 8C12 10.2091 10.2091 12 8 12C5.79086 12 4 10.2091 4 8C4 5.79086 5.79086 4 8 4Z" fill="#B8941F" />
                                </svg>
                            </div>
                            <div className="hotel-room-feature-text-block">
                                <span className="hotel-room-feature-number">2 Person</span>
                                <span className="hotel-room-feature-label">Guests</span>
                            </div>
                        </div>

                        <div className="hotel-room-feature-item">
                            <div className="hotel-room-feature-icon-wrapper">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <rect x="3" y="3" width="18" height="18" stroke="#B8941F" strokeWidth="2" fill="none" />
                                    <path d="M9 9h6v6H9z" fill="#B8941F" />
                                </svg>
                            </div>
                            <div className="hotel-room-feature-text-block">
                                <span className="hotel-room-feature-number">28 m²</span>
                                <span className="hotel-room-feature-label">Size</span>
                            </div>
                        </div>

                        <div className="hotel-room-feature-item">
                            <div className="hotel-room-feature-icon-wrapper">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="8" stroke="#B8941F" strokeWidth="2" fill="none" />
                                    <path d="M12 6v6l4 2" stroke="#B8941F" strokeWidth="2" />
                                </svg>
                            </div>
                            <div className="hotel-room-feature-text-block">
                                <span className="hotel-room-feature-number">Garden</span>
                                <span className="hotel-room-feature-label">View</span>
                            </div>
                        </div>
                    </div>
                </div>

               
            </div>

            {/* Main Content */}
            <div className="hotel-room-main-content-wrapper">
                <div className="hotel-room-content-left-section">
                    <section className="hotel-room-overview-section">
                        <h2 className="hotel-room-section-title">Overview</h2>
                        <p className="hotel-room-overview-text">
                            This twin room is ideal for guests travelling together who prefer separate sleeping arrangements.
                        </p>
                        <p className="hotel-room-overview-text">
                            The room features <strong>two single beds</strong>, an <strong>en-suite bathroom with shower</strong>, <strong>flat-screen TV</strong>, <strong>free Wi-Fi</strong>, and <strong>tea and coffee making facilities</strong>. Towels and toiletries are included.
                        </p>
                        <p className="hotel-room-overview-text">
                            A practical and comfortable choice for friends, colleagues, or short stays.
                        </p>
                    </section>

                    <section className="hotel-room-amenities-section">
                        <h2 className="hotel-room-section-title">Room Amenities</h2>
                        <div className="hotel-room-amenities-grid">
                            <div className="hotel-room-amenity-item">
                                <div className="hotel-room-amenity-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V9C15 10.1 14.1 11 13 11S11 10.1 11 9V7.5L5 7V9C5 10.1 4.1 11 3 11S1 10.1 1 9V7C1 5.9 1.9 5 3 5H21C22.1 5 23 5.9 23 7V9C23 10.1 22.1 11 21 11S19 10.1 19 9Z" fill="#B8941F" />
                                    </svg>
                                </div>
                                <span className="hotel-room-amenity-text">Complimentary toiletries</span>
                            </div>

                            <div className="hotel-room-amenity-item">
                                <div className="hotel-room-amenity-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <rect x="2" y="3" width="20" height="14" rx="2" fill="#B8941F" />
                                        <path d="M8 21L16 21" stroke="#B8941F" strokeWidth="2" />
                                        <path d="M12 17L12 21" stroke="#B8941F" strokeWidth="2" />
                                    </svg>
                                </div>
                                <span className="hotel-room-amenity-text">Flat-screen TV</span>
                            </div>

                            <div className="hotel-room-amenity-item">
                                <div className="hotel-room-amenity-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M1 9L12 2L23 9V22H1V9Z" stroke="#B8941F" strokeWidth="2" fill="none" />
                                        <path d="M8 22V12H16V22" stroke="#B8941F" strokeWidth="2" fill="none" />
                                    </svg>
                                </div>
                                <span className="hotel-room-amenity-text">Free Wi-Fi</span>
                            </div>

                            <div className="hotel-room-amenity-item">
                                <div className="hotel-room-amenity-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <rect x="3" y="3" width="18" height="18" rx="2" fill="#B8941F" />
                                        <path d="M9 9H15V15H9V9Z" fill="white" />
                                    </svg>
                                </div>
                                <span className="hotel-room-amenity-text">Fresh towels</span>
                            </div>

                            <div className="hotel-room-amenity-item">
                                <div className="hotel-room-amenity-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M18.5 3C19.3 3 20 3.7 20 4.5V5.5C20 6.3 19.3 7 18.5 7H5.5C4.7 7 4 6.3 4 5.5V4.5C4 3.7 4.7 3 5.5 3H18.5Z" fill="#B8941F" />
                                        <circle cx="12" cy="12" r="3" fill="#B8941F" />
                                    </svg>
                                </div>
                                <span className="hotel-room-amenity-text">Tea and coffee making facilities</span>
                            </div>
                        </div>
                    </section>

                    <section className="hotel-room-booking-rules-section">
                        <h2 className="hotel-room-section-title">Booking Rules</h2>
                        <div className="hotel-room-booking-rules-grid">
                            <div className="hotel-room-rules-column">
                                <h3 className="hotel-room-rules-subtitle">Check-In Rules</h3>
                                <p className="hotel-room-rules-text">From 14:00</p>
                                <p className="hotel-room-rules-text">Guests are required to show a photo identification and credit card upon check-in</p>
                                <p className="hotel-room-rules-text">You'll need to let the property know in advance what time you'll arrive.</p>
                            </div>
                            <div className="hotel-room-rules-column">
                                <h3 className="hotel-room-rules-subtitle">Check-Out Rules</h3>
                                <p className="hotel-room-rules-text">Until 10:00</p>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="hotel-room-content-right-section">
                    <a
                        href="https://bookingengine.stayflexi.com/?hotel_id=35135"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hotel-room-book-now-btn"
                        style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}
                    >
                        BOOK NOW
                    </a>
                </div>
            </div>
        </>
    )
}