import './amenities.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { 
  MdRestaurant, 
  MdLocalParking, 
  MdWifi, 
  MdLocalBar, 
  MdEvent, 
  MdMobileFriendly,
  MdSecurity,
  MdLuggage,
  MdCleaningServices,
  MdKitchen,
  MdLocalDining,
  MdWeekend,
  MdHotTub,
  MdChair,
  MdDeck,
  MdOutdoorGrill,
  MdCoffee,
  MdSmokeFree,
  MdSensors,
  MdFireExtinguisher
} from 'react-icons/md'

export default function Amenities(){
   return(
    <>
      {/* Hero Section */}
      <section className="amenities-hero-section">
        <div className="amenities-hero-overlay">
          <div className="amenities-hero-content">
            <h1 className="amenities-hero-title">Amenities/Facilities</h1>
            <div className="amenities-breadcrumb">
              <span>HOME</span>
              <span className="amenities-breadcrumb-separator">/</span>
              <span>AMENITIES/FACILITIES</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Amenities Section */}
      <section className="amenities-featured-section">
        <div className="amenities-container">
          <div className="amenities-section-header">
            <div className="amenities-decorative-icon">
              <div className="amenities-diamond-icon"></div>
            </div>
            <p className="amenities-subtitle">DISCOVER OUR ALL</p>
            <h2 className="amenities-section-title">Featured Amenities</h2>
          </div>

          <div className="amenities-grid">
            {/* Continental Breakfast */}
            <div className="amenities-card amenities-card-featured">
              <div className="amenities-card-icon">
                <MdRestaurant />
              </div>
              <h3 className="amenities-card-title">Continental Breakfast</h3>
              <p className="amenities-card-description">
                Self-serve continental breakfast with a toastie bar, 
                available at your chosen time for £9.95 per person.
              </p>
            </div>

            {/* Free Parking */}
            <div className="amenities-card">
              <div className="amenities-card-icon">
                <MdLocalParking />
              </div>
              <h3 className="amenities-card-title">Free On-Site Parking</h3>
              <p className="amenities-card-description">
                Enjoy complimentary parking throughout your stay, 
                with ample space for cars, vans, and work vehicles.
              </p>
            </div>

            {/* Wi-Fi */}
            <div className="amenities-card">
              <div className="amenities-card-icon">
                <MdWifi />
              </div>
              <h3 className="amenities-card-title">Complimentary Wi-Fi</h3>
              <p className="amenities-card-description">
                Connect to "Prince of Wales Guest" network fast, 
                open access and completely free to use.
              </p>
            </div>

            {/* Bar & Restaurant */}
            <div className="amenities-card">
              <div className="amenities-card-icon">
                <MdLocalBar />
              </div>
              <h3 className="amenities-card-title">Bar & Restaurant Nearby</h3>
              <p className="amenities-card-description">
                The Ashville Bar & Restaurant is next door, serving 
                food and drinks in a relaxed setting.
              </p>
            </div>

            {/* Events */}
            <div className="amenities-card">
              <div className="amenities-card-icon">
                <MdEvent />
              </div>
              <h3 className="amenities-card-title">Events & Function Space</h3>
              <p className="amenities-card-description">
                Ideal venue for parties, weddings, and birthdays, 
                with flexible space for private gatherings.
              </p>
            </div>

            {/* Self Check-in */}
            <div className="amenities-card">
              <div className="amenities-card-icon">
                <MdMobileFriendly />
              </div>
              <h3 className="amenities-card-title">Late Self Check-In</h3>
              <p className="amenities-card-description">
                After 10pm, receive easy WhatsApp instructions, with 
                videos and details for seamless arrival.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="amenities-features-section">
        <div className="amenities-container">
          <div className="amenities-section-header">
            <div className="amenities-decorative-icon">
              <div className="amenities-diamond-icon"></div>
            </div>
            <p className="amenities-subtitle">DISCOVER OUR ALL</p>
            <h2 className="amenities-section-title">Features</h2>
          </div>

          <div className="amenities-features-grid">
            {/* Services */}
            <div className="amenities-feature-column">
              <h3 className="amenities-feature-title">Services</h3>
              <ul className="amenities-feature-list">
                <li><MdSecurity className="amenities-list-icon" /> 24-hour security</li>
                <li><MdLuggage className="amenities-list-icon" /> Luggage storage</li>
                <li><MdCleaningServices className="amenities-list-icon" /> Housekeeping</li>
              </ul>
            </div>

            {/* Dining */}
            <div className="amenities-feature-column">
              <h3 className="amenities-feature-title">Dining</h3>
              <ul className="amenities-feature-list">
                <li><MdRestaurant className="amenities-list-icon" /> Restaurant</li>
                <li><MdLocalBar className="amenities-list-icon" /> Bar/Lounge area</li>
              </ul>

              <h3 className="amenities-feature-title amenities-feature-title-spacing">Kitchen has</h3>
              <ul className="amenities-feature-list">
                <li><MdKitchen className="amenities-list-icon" /> Electric kettle</li>
              </ul>
            </div>

            {/* Rooms have */}
            <div className="amenities-feature-column">
              <h3 className="amenities-feature-title">Rooms have</h3>
              <ul className="amenities-feature-list">
                <li><MdHotTub className="amenities-list-icon" /> Heating</li>
                <li><MdChair className="amenities-list-icon" /> Sitting area</li>
                <li><MdDeck className="amenities-list-icon" /> Patio</li>
                <li><MdOutdoorGrill className="amenities-list-icon" /> Garden furniture</li>
                <li><MdCoffee className="amenities-list-icon" /> Tea and coffee facilities</li>
              </ul>
            </div>

            {/* General facilities */}
            <div className="amenities-feature-column">
              <h3 className="amenities-feature-title">General facilities</h3>
              <ul className="amenities-feature-list">
                <li><MdSmokeFree className="amenities-list-icon" /> No smoking on site</li>
                <li><MdWeekend className="amenities-list-icon" /> Allergy-free rooms</li>
                <li><MdSensors className="amenities-list-icon" /> Smoke detectors</li>
                <li><MdFireExtinguisher className="amenities-list-icon" /> Fire extinguishers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="amenities-cta-section">
        <div className="amenities-cta-container">
          <div className="amenities-cta-content">
            <p className="amenities-cta-subtitle">THE PRINCE OF WALES HOTEL</p>
            <h2 className="amenities-cta-title">Recently Refurbished Rooms in Berkeley</h2>
          </div>
          <button className="amenities-cta-btn">EXPLORE MORE</button>
        </div>
      </section>
    </>
   ) 
}