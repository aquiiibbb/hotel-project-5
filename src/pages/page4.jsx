import './page4.css'

export default function HotelRoomPageFour() {
    return (
        <>
            {/* Image Gallery */}
            <div className="hotel-room-four-image-gallery">
                <div className="hotel-room-four-gallery-container">
                    <div className="hotel-room-four-gallery-item">
                        <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&h=400&fit=crop" alt="Elegant hotel twin beds" />
                    </div>
                    <div className="hotel-room-four-gallery-item">
                        <img src="https://images.unsplash.com/photo-1560448075-bb485b067938?w=500&h=400&fit=crop" alt="Cozy hotel bedroom" />
                    </div>
                    <div className="hotel-room-four-gallery-item">
                        <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=500&h=400&fit=crop" alt="Hotel room with workspace" />
                    </div>
                    <div className="hotel-room-four-gallery-item">
                        <img src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=500&h=400&fit=crop" alt="Modern hotel bathroom" />
                    </div>
                </div>

                {/* Scroll indicators */}
                <div className="hotel-room-four-gallery-indicators">
                    <div className="indicator active"></div>
                    <div className="indicator"></div>
                    <div className="indicator"></div>
                    <div className="indicator"></div>
                </div>
            </div>

            {/* Room Details */}
            <div className="hotel-room-four-details-section">
                <div className="hotel-room-four-header-container">
                    <div className="hotel-room-four-info-block">
                        <h1 className="hotel-room-four-title-text">Twin Room</h1>
                        <div className="hotel-room-four-price-info-container">
                            <span className="hotel-room-four-price-label">From</span>
                            <span className="hotel-room-four-price-amount">£104.50</span>
                            <span className="hotel-room-four-price-period">Per Night</span>
                        </div>
                    </div>

                    <div className="hotel-room-four-features-container">
                        <div className="hotel-room-four-feature-item">
                            <div className="hotel-room-four-feature-icon-wrapper">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M16 4C18.2091 4 20 5.79086 20 8C20 10.2091 18.2091 12 16 12C13.7909 12 12 10.2091 12 8C12 5.79086 13.7909 4 16 4Z" fill="#B8941F" />
                                    <path d="M8 4C10.2091 4 12 5.79086 12 8C12 10.2091 10.2091 12 8 12C5.79086 12 4 10.2091 4 8C4 5.79086 5.79086 4 8 4Z" fill="#B8941F" />
                                </svg>
                            </div>
                            <div className="hotel-room-four-feature-text-block">
                                <span className="hotel-room-four-feature-number">2 Person</span>
                                <span className="hotel-room-four-feature-label">Guests</span>
                            </div>
                        </div>

                        <div className="hotel-room-four-feature-item">
                            <div className="hotel-room-four-feature-icon-wrapper">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <rect x="3" y="3" width="18" height="18" stroke="#B8941F" strokeWidth="2" fill="none" />
                                    <path d="M9 9h6v6H9z" fill="#B8941F" />
                                </svg>
                            </div>
                            <div className="hotel-room-four-feature-text-block">
                                <span className="hotel-room-four-feature-number">17 m²</span>
                                <span className="hotel-room-four-feature-label">Size</span>
                            </div>
                        </div>

                        <div className="hotel-room-four-feature-item">
                            <div className="hotel-room-four-feature-icon-wrapper">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="8" stroke="#B8941F" strokeWidth="2" fill="none" />
                                    <path d="M12 6v6l4 2" stroke="#B8941F" strokeWidth="2" />
                                </svg>
                            </div>
                            <div className="hotel-room-four-feature-text-block">
                                <span className="hotel-room-four-feature-number">Garden</span>
                                <span className="hotel-room-four-feature-label">View</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hotel-room-four-action-buttons-container">
                    <button className="hotel-room-four-action-btn">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                            <path d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5C21 3.34 19.66 2 18 2C16.34 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.34C15.11 18.55 15.08 18.77 15.08 19C15.08 20.61 16.39 21.92 18 21.92C19.61 21.92 20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08Z" fill="currentColor" />
                        </svg>
                        SHARE
                    </button>
                    <button className="hotel-room-four-action-btn">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="currentColor" />
                        </svg>
                        REVIEWS
                    </button>
                    <button className="hotel-room-four-action-btn">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                            <path d="M20.84 4.61C19.32 3.04 17.16 3.04 15.64 4.61L12 8.69L8.36 4.61C6.84 3.04 4.68 3.04 3.16 4.61C1.61 6.27 1.61 8.95 3.16 10.61L12 20.54L20.84 10.61C22.39 8.95 22.39 6.27 20.84 4.61Z" fill="currentColor" />
                        </svg>
                        WISHLIST
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="hotel-room-four-main-content-wrapper">
                <div className="hotel-room-four-content-left-section">
                    <section className="hotel-room-four-overview-section">
                        <h2 className="hotel-room-four-section-title">Overview</h2>
                        <p className="hotel-room-four-overview-text">
                            This twin room is ideal for guests travelling together who prefer separate sleeping arrangements.
                        </p>
                        <p className="hotel-room-four-overview-text">
                            The room features <strong>two single beds</strong>, an <strong>en-suite bathroom with shower</strong>, <strong>flat-screen TV</strong>, <strong>free Wi-Fi</strong>, and <strong>tea and coffee making facilities</strong>. Towels and toiletries are included.
                        </p>
                        <p className="hotel-room-four-overview-text">
                            A practical and comfortable choice for friends, colleagues, or short stays.
                        </p>
                    </section>

                    <section className="hotel-room-four-amenities-section">
                        <h2 className="hotel-room-four-section-title">Room Amenities</h2>
                        <div className="hotel-room-four-amenities-grid">
                            <div className="hotel-room-four-amenity-item">
                                <div className="hotel-room-four-amenity-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V9C15 10.1 14.1 11 13 11S11 10.1 11 9V7.5L5 7V9C5 10.1 4.1 11 3 11S1 10.1 1 9V7C1 5.9 1.9 5 3 5H21C22.1 5 23 5.9 23 7V9C23 10.1 22.1 11 21 11S19 10.1 19 9Z" fill="#B8941F" />
                                    </svg>
                                </div>
                                <span className="hotel-room-four-amenity-text">Complimentary toiletries</span>
                            </div>

                            <div className="hotel-room-four-amenity-item">
                                <div className="hotel-room-four-amenity-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <rect x="2" y="3" width="20" height="14" rx="2" fill="#B8941F" />
                                        <path d="M8 21L16 21" stroke="#B8941F" strokeWidth="2" />
                                        <path d="M12 17L12 21" stroke="#B8941F" strokeWidth="2" />
                                    </svg>
                                </div>
                                <span className="hotel-room-four-amenity-text">Flat-screen TV</span>
                            </div>

                            <div className="hotel-room-four-amenity-item">
                                <div className="hotel-room-four-amenity-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M1 9L12 2L23 9V22H1V9Z" stroke="#B8941F" strokeWidth="2" fill="none" />
                                        <path d="M8 22V12H16V22" stroke="#B8941F" strokeWidth="2" fill="none" />
                                    </svg>
                                </div>
                                <span className="hotel-room-four-amenity-text">Free Wi-Fi</span>
                            </div>

                            <div className="hotel-room-four-amenity-item">
                                <div className="hotel-room-four-amenity-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <rect x="3" y="3" width="18" height="18" rx="2" fill="#B8941F" />
                                        <path d="M9 9H15V15H9V9Z" fill="white" />
                                    </svg>
                                </div>
                                <span className="hotel-room-four-amenity-text">Fresh towels</span>
                            </div>

                            <div className="hotel-room-four-amenity-item">
                                <div className="hotel-room-four-amenity-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M18.5 3C19.3 3 20 3.7 20 4.5V5.5C20 6.3 19.3 7 18.5 7H5.5C4.7 7 4 6.3 4 5.5V4.5C4 3.7 4.7 3 5.5 3H18.5Z" fill="#B8941F" />
                                        <circle cx="12" cy="12" r="3" fill="#B8941F" />
                                    </svg>
                                </div>
                                <span className="hotel-room-four-amenity-text">Tea and coffee making facilities</span>
                            </div>
                        </div>
                    </section>

                    <section className="hotel-room-four-booking-rules-section">
                        <h2 className="hotel-room-four-section-title">Booking Rules</h2>
                        <div className="hotel-room-four-booking-rules-grid">
                            <div className="hotel-room-four-rules-column">
                                <h3 className="hotel-room-four-rules-subtitle">Check-In Rules</h3>
                                <p className="hotel-room-four-rules-text">From 14:00</p>
                                <p className="hotel-room-four-rules-text">Guests are required to show a photo identification and credit card upon check-in</p>
                                <p className="hotel-room-four-rules-text">You'll need to let the property know in advance what time you'll arrive.</p>
                            </div>
                            <div className="hotel-room-four-rules-column">
                                <h3 className="hotel-room-four-rules-subtitle">Check-Out Rules</h3>
                                <p className="hotel-room-four-rules-text">Until 10:00</p>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="hotel-room-four-content-right-section">
                    <a
                        href="https://bookingengine.stayflexi.com/?hotel_id=35135"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hotel-room-four-book-now-btn"
                        style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}
                    >
                        BOOK NOW
                    </a>

                    <div className="hotel-room-four-last-minute-deals">
                        <h3 className="hotel-room-four-deals-title">Last Minute Deals</h3>

                        <div className="hotel-room-four-deal-item">
                            <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=80&h=60&fit=crop" alt="Honeymoon Suite" className="hotel-room-four-deal-image" />
                            <div className="hotel-room-four-deal-info">
                                <h4 className="hotel-room-four-deal-name">Honeymoon Suite</h4>
                                <div className="hotel-room-four-deal-price">
                                    <span className="hotel-room-four-current-price">From £267.30</span>
                                    <span className="hotel-room-four-original-price">£267.30</span>
                                </div>
                            </div>
                        </div>

                        <div className="hotel-room-four-deal-item">
                            <img src="https://images.unsplash.com/photo-1631049552240-59c37f38802b?w=80&h=60&fit=crop" alt="Family Suite" className="hotel-room-four-deal-image" />
                            <div className="hotel-room-four-deal-info">
                                <h4 className="hotel-room-four-deal-name">Family Suite</h4>
                                <div className="hotel-room-four-deal-price">
                                    <span className="hotel-room-four-current-price">From £177.10</span>
                                </div>
                            </div>
                        </div>

                        <div className="hotel-room-four-deal-item">
                            <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=80&h=60&fit=crop" alt="Deluxe Superking Room" className="hotel-room-four-deal-image" />
                            <div className="hotel-room-four-deal-info">
                                <h4 className="hotel-room-four-deal-name">Deluxe Superking Room</h4>
                                <div className="hotel-room-four-deal-price">
                                    <span className="hotel-room-four-current-price">From £134.20</span>
                                    <span className="hotel-room-four-original-price">£134.20</span>
                                </div>
                            </div>
                        </div>

                        <div className="hotel-room-four-deal-item">
                            <img src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=80&h=60&fit=crop" alt="Double Room" className="hotel-room-four-deal-image" />
                            <div className="hotel-room-four-deal-info">
                                <h4 className="hotel-room-four-deal-name">Double Room</h4>
                                <div className="hotel-room-four-deal-price">
                                    <span className="hotel-room-four-current-price">From £113.30</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hotel-room-four-breakfast-promo">
                        <img src="https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=300&h=200&fit=crop" alt="Continental Breakfast" className="hotel-room-four-promo-image" />
                        <div className="hotel-room-four-promo-content">
                            <p className="hotel-room-four-promo-subtitle">Start Your Day Right</p>
                            <h3 className="hotel-room-four-promo-title">Self-Serve Continental Breakfast</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}