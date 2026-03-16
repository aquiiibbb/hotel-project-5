import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { MdLocationOn, MdEmail, MdPhone, MdMenu, MdClose } from 'react-icons/md'
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Header(){
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const navigate = useNavigate();
   const location = useLocation();

   const toggleMenu = () => {
     setIsMenuOpen(!isMenuOpen);
   };

   const handleLinkClick = (path) => {
     navigate(path);
     setIsMenuOpen(false); // Close menu on mobile after clicking
   };

   return(
    <>
      <header className="hotel-header">
        {/* Top contact bar - Hidden on mobile */}
        <div className="top-bar">
          <div className="contact-info">
            <span className="contact-item">
              <MdLocationOn className="icon" />
              A38 M5, Bristol Road, Berkeley, GL13 9HD, United Kingdom
            </span>
            <span className="contact-item">
              <MdEmail className="icon" />
              info@princeofwaleshotels.co.uk
            </span>
            <span className="contact-item">
              <MdPhone className="icon" />
              +44 1453 810474
            </span>
          </div>
          <div className="top-actions">
            <span className="action-item">
              <MdLocationOn className="icon" />
              Locate Us
            </span>
            <span className="action-item">
              <FaWhatsapp className="icon" />
              Get In Touch
            </span>
            <div className="social-icons">
              <FaFacebookF className="social-icon" />
              <FaInstagram className="social-icon" />
              <FaTiktok className="social-icon" />
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="main-nav">
          <div className="nav-container">
            <div className="logo" onClick={() => handleLinkClick('/')}>
              <img src="https://princeofwaleshotels.co.uk/wp-content/uploads/2022/12/theprinceofwaleslogo.png" alt="The Prince of Wales Hotel" />
            </div>
            
            {/* Mobile menu button */}
            <button className="mobile-menu-btn" onClick={toggleMenu}>
              {isMenuOpen ? <MdClose /> : <MdMenu />}
            </button>
            
            <div className={`nav-right ${isMenuOpen ? 'nav-open' : ''}`}>
              <ul className="nav-menu">
                <li>
                  <button 
                    className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} 
                    onClick={() => handleLinkClick('/')}
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    className={`nav-link ${location.pathname === '/room' ? 'active' : ''}`} 
                    onClick={() => handleLinkClick('/room')}
                  >
                    Rooms
                  </button>
                </li>
                <li>
                  <button 
                    className={`nav-link ${location.pathname === '/gallery' ? 'active' : ''}`} 
                    onClick={() => handleLinkClick('/gallery')}
                  >
                    Gallery
                  </button>
                </li>
                <li>
                  <button 
                    className={`nav-link ${location.pathname === '/event' ? 'active' : ''}`} 
                    onClick={() => handleLinkClick('/event')}
                  >
                    Events & Venue Hire
                  </button>
                </li>
                <li>
                  <button 
                    className={`nav-link ${location.pathname === '/amenities' ? 'active' : ''}`} 
                    onClick={() => handleLinkClick('/amenities')}
                  >
                    Amenities/Facilities
                  </button>
                </li>
                <li>
                  <button 
                    className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} 
                    onClick={() => handleLinkClick('/about')}
                  >
                    About
                  </button>
                </li>
                <li>
                  <button 
                    className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} 
                    onClick={() => handleLinkClick('/contact')}
                  >
                    Contact
                  </button>
                </li>
              </ul>
              <button className="book-btn">BOOK NOW</button>
            </div>
          </div>
        </nav>
      </header>
    </>
   ) 
}