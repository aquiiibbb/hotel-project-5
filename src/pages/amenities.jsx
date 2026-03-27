import './amenities.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { useNavigate } from 'react-router-dom'
import {
  MdRestaurant,
  MdLocalParking,
  MdWifi,
  MdLocalBar,
  MdSecurity,
  MdLuggage,
  MdCleaningServices,
  MdKitchen,
  MdWeekend,
  MdHotTub,
  MdChair,
  MdDeck,
  MdOutdoorGrill,
  MdCoffee,
  MdSmokeFree,
  MdSensors,
  MdFireExtinguisher,
  MdDesktopWindows,
  MdLocalPhone,
  MdTv,
  MdCameraAlt,
  MdHeat,
  MdLanguage,
  MdReceipt,
  MdAccessible,
  MdHealing,
} from 'react-icons/md'
import {
  FaBath,
  FaTv,
  FaTshirt,
  FaWheelchair,
  FaParking,
  FaSnowflake,
  FaEnglish,
} from 'react-icons/fa'
import { GiVendingMachine } from 'react-icons/gi'

export default function Amenities() {
  const navigate = useNavigate()

  return (
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
            {/* Great for your stay */}
            <div className="amenities-card amenities-card-featured">
              <div className="amenities-card-icon">
                <MdRestaurant />
              </div>
              <h3 className="amenities-card-title">Great for your stay</h3>
              <p className="amenities-card-description">
                Parking, private bathroom, air conditioning, bath, free WiFi, flat-screen TV,
                free parking, facilities for disabled guests, private parking, and non-smoking rooms.
              </p>
            </div>

            {/* Bathroom */}
            <div className="amenities-card">
              <div className="amenities-card-icon">
                <FaBath />
              </div>
              <h3 className="amenities-card-title">Bathroom</h3>
              <p className="amenities-card-description">
                Toilet paper, towels, bath or shower, private bathroom, toilet,
                and bath facilities with lower bathroom sink available.
              </p>
            </div>

            {/* Bedroom */}
            <div className="amenities-card">
              <div className="amenities-card-icon">
                <FaTshirt />
              </div>
              <h3 className="amenities-card-title">Bedroom</h3>
              <p className="amenities-card-description">
                Quality linen provided for comfortable and restful sleep
                throughout your stay at our property.
              </p>
            </div>

            {/* Kitchen */}
            <div className="amenities-card">
              <div className="amenities-card-icon">
                <MdKitchen />
              </div>
              <h3 className="amenities-card-title">Kitchen</h3>
              <p className="amenities-card-description">
                Microwave and refrigerator available for your convenience
                to prepare and store food during your stay.
              </p>
            </div>

            {/* Living Area */}
            <div className="amenities-card">
              <div className="amenities-card-icon">
                <MdChair />
              </div>
              <h3 className="amenities-card-title">Living Area</h3>
              <p className="amenities-card-description">
                Comfortable desk area provided for work or personal use,
                creating a productive space in your room.
              </p>
            </div>

            {/* Media & Technology */}
            <div className="amenities-card">
              <div className="amenities-card-icon">
                <FaTv />
              </div>
              <h3 className="amenities-card-title">Media & Technology</h3>
              <p className="amenities-card-description">
                Cable channels and telephone services available for
                entertainment and communication needs during your stay.
              </p>
            </div>

            {/* Internet */}
            <div className="amenities-card">
              <div className="amenities-card-icon">
                <MdWifi />
              </div>
              <h3 className="amenities-card-title">Internet</h3>
              <p className="amenities-card-description">
                WiFi is available in all areas and is free of charge
                for all guests throughout the property.
              </p>
            </div>

            {/* Parking */}
            <div className="amenities-card">
              <div className="amenities-card-icon">
                <MdLocalParking />
              </div>
              <h3 className="amenities-card-title">Parking</h3>
              <p className="amenities-card-description">
                Free private parking is possible on site and reservation
                is not needed for your convenience.
              </p>
            </div>

            {/* Safety & Security */}
            <div className="amenities-card">
              <div className="amenities-card-icon">
                <MdSecurity />
              </div>
              <h3 className="amenities-card-title">Safety & Security</h3>
              <p className="amenities-card-description">
                Fire extinguishers, CCTV outside property, CCTV in common areas,
                and smoke alarms ensure your safety and security.
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

            {/* Column 1 — Great for your stay + Bathroom */}
            <div className="amenities-feature-column">
              <h3 className="amenities-feature-title">Great for your stay</h3>
              <ul className="amenities-feature-list">
                <li><MdLocalParking className="amenities-list-icon" /> Parking</li>
                <li><FaBath className="amenities-list-icon" /> Private bathroom</li>
                <li><MdWeekend className="amenities-list-icon" /> Air conditioning</li>
                <li><FaBath className="amenities-list-icon" /> Bath</li>
                <li><MdWifi className="amenities-list-icon" /> Free WiFi</li>
                <li><FaTv className="amenities-list-icon" /> Flat-screen TV</li>
                <li><MdLocalParking className="amenities-list-icon" /> Free parking</li>
                <li><MdAccessible className="amenities-list-icon" /> Facilities for disabled guests</li>
                <li><MdLocalParking className="amenities-list-icon" /> Private parking</li>
                <li><MdSmokeFree className="amenities-list-icon" /> Non-smoking rooms</li>
              </ul>

              <h3 className="amenities-feature-title">Bathroom</h3>
              <ul className="amenities-feature-list">
                <li><MdHotTub className="amenities-list-icon" /> Toilet paper</li>
                <li><FaBath className="amenities-list-icon" /> Towels</li>
                <li><FaBath className="amenities-list-icon" /> Bath or shower</li>
                <li><MdHotTub className="amenities-list-icon" /> Private bathroom</li>
                <li><MdHotTub className="amenities-list-icon" /> Toilet</li>
                <li><FaBath className="amenities-list-icon" /> Bath</li>
              </ul>
            </div>

            {/* Column 2 — Bedroom + Kitchen + Living Area + Media & Technology */}
            <div className="amenities-feature-column">
              <h3 className="amenities-feature-title">Bedroom</h3>
              <ul className="amenities-feature-list">
                <li><MdHotTub className="amenities-list-icon" /> Linen</li>
              </ul>

              <h3 className="amenities-feature-title">Kitchen</h3>
              <ul className="amenities-feature-list">
                <li><MdRestaurant className="amenities-list-icon" /> Microwave</li>
                <li><MdLocalBar className="amenities-list-icon" /> Refrigerator</li>
              </ul>

              <h3 className="amenities-feature-title">Living Area</h3>
              <ul className="amenities-feature-list">
                <li><MdChair className="amenities-list-icon" /> Desk</li>
              </ul>

              <h3 className="amenities-feature-title">Media & Technology</h3>
              <ul className="amenities-feature-list">
                <li><FaTv className="amenities-list-icon" /> Flat-screen TV</li>
                <li><MdTv className="amenities-list-icon" /> Cable channels</li>
                <li><MdLocalPhone className="amenities-list-icon" /> Telephone</li>
                <li><MdTv className="amenities-list-icon" /> TV</li>
              </ul>
            </div>

            {/* Column 3 — Internet + Parking + Services + Reception */}
            <div className="amenities-feature-column">
              <h3 className="amenities-feature-title">Internet</h3>
              <ul className="amenities-feature-list">
                <li><MdWifi className="amenities-list-icon" /> WiFi is available in all areas and is free of charge.</li>
              </ul>

              <h3 className="amenities-feature-title">Parking</h3>
              <ul className="amenities-feature-list">
                <li><MdLocalParking className="amenities-list-icon" /> Free private parking is possible on site (reservation is not needed).</li>
              </ul>

              <h3 className="amenities-feature-title">Services</h3>
              <ul className="amenities-feature-list">
                <li><MdCleaningServices className="amenities-list-icon" /> Daily housekeeping</li>
                <li><MdKitchen className="amenities-list-icon" /> Vending machine (drinks)</li>
                <li><MdLuggage className="amenities-list-icon" /> Wake-up service</li>
                <li><MdSecurity className="amenities-list-icon" /> 24-hour front desk</li>
              </ul>

              <h3 className="amenities-feature-title">Reception services</h3>
              <ul className="amenities-feature-list">
                <li><MdReceipt className="amenities-list-icon" /> Invoice provided</li>
              </ul>
            </div>

            {/* Column 4 — Safety & Security + General + Accessibility + Languages */}
            <div className="amenities-feature-column">
              <h3 className="amenities-feature-title">Safety & Security</h3>
              <ul className="amenities-feature-list">
                <li><MdFireExtinguisher className="amenities-list-icon" /> Fire extinguishers</li>
                <li><MdCameraAlt className="amenities-list-icon" /> CCTV outside property</li>
                <li><MdCameraAlt className="amenities-list-icon" /> CCTV in common areas</li>
                <li><MdSensors className="amenities-list-icon" /> Smoke alarms</li>
              </ul>

              <h3 className="amenities-feature-title">General</h3>
              <ul className="amenities-feature-list">
                <li><MdWeekend className="amenities-list-icon" /> Air conditioning</li>
                <li><MdDeck className="amenities-list-icon" /> Carpeted</li>
                <li><MdHotTub className="amenities-list-icon" /> Heating</li>
                <li><MdAccessible className="amenities-list-icon" /> Facilities for disabled guests</li>
                <li><MdSmokeFree className="amenities-list-icon" /> Non-smoking rooms</li>
              </ul>

              <h3 className="amenities-feature-title">Accessibility</h3>
              <ul className="amenities-feature-list">
                <li><FaBath className="amenities-list-icon" /> Lower bathroom sink</li>
                <li><MdHotTub className="amenities-list-icon" /> Toilet with grab rails</li>
                <li><MdAccessible className="amenities-list-icon" /> Wheelchair accessible</li>
              </ul>

              <h3 className="amenities-feature-title">Languages spoken</h3>
              <ul className="amenities-feature-list">
                <li><MdLanguage className="amenities-list-icon" /> English</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}