import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { MdLocationOn, MdEmail, MdPhone, MdMenu, MdClose } from 'react-icons/md'
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'

import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import logo from "../Assets/logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <header className="header-wrapper">

      {/* MOBILE TOP BAR - Only visible on mobile */}
      <div className="mobile-top-bar">
        <a 
          href="https://maps.google.com/?q=7050+Okeechobee+Rd,+Fort+Pierce,+FL+34945,+USA"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-top-item"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <MdLocationOn className="mobile-icon" />
          <span>Locate Us</span>
        </a>
        <a 
          href="https://wa.me/17724658600"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-top-item"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <FaWhatsapp className="mobile-icon" />
          <span>Get In Touch</span>
        </a>
      </div>

      {/* DESKTOP TOP BAR */}
      <div className="header-top">
        <div className="top-contact">
          <a 
            href="https://maps.google.com/?q=7050+Okeechobee+Rd,+Fort+Pierce,+FL+34945,+USA"
            target="_blank"
            rel="noopener noreferrer"
            className="top-contact-item"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <MdLocationOn className="icon" />
            7050 Okeechobee Rd, Fort Pierce, FL 34945, USA
          </a>
          <span className="top-contact-item">
            <MdEmail className="icon" />
            crossroadsinnflorida@gmail.com
          </span>
          <span className="top-contact-item">
            <MdPhone className="icon" />
            +17724658600
          </span>
        </div>

        <div className="top-actions-group">
          <a 
            href="https://maps.google.com/?q=7050+Okeechobee+Rd,+Fort+Pierce,+FL+34945,+USA"
            target="_blank"
            rel="noopener noreferrer"
            className="top-contact-item"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <MdLocationOn className="icon" />
            Locate Us
          </a>
          <a 
            href="https://wa.me/17724658600"
            target="_blank"
            rel="noopener noreferrer"
            className="top-contact-item"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <FaWhatsapp className="icon" />
            Get In Touch
          </a>

          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTiktok />
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <nav className="header-nav">
        <div className="nav-inner">

          {/* LOGO */}
          <div className="brand-logo" onClick={() => handleLinkClick('/')}>
            <img src={logo} alt="The Prince of Wales Hotel" />
          </div>

          {/* MOBILE MENU BUTTON */}
          <button className="menu-toggle-btn" onClick={toggleMenu}>
            {isMenuOpen ? <MdClose /> : <MdMenu />}
          </button>

          {/* NAV SECTION */}
          <div className={`nav-section ${isMenuOpen ? 'open' : ''}`}>
            <ul className="menu-list">

              <li>
                <button
                  className={`menu-link ${location.pathname === '/' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('/')}
                >
                  Home
                </button>
              </li>

              <li>
                <button
                  className={`menu-link ${location.pathname === '/room' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('/room')}
                >
                  Rooms
                </button>
              </li>

              <li>
                <button
                  className={`menu-link ${location.pathname === '/gallery' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('/gallery')}
                >
                  Gallery
                </button>
              </li>

              <li>
                <button
                  className={`menu-link ${location.pathname === '/amenities' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('/amenities')}
                >
                  Amenities/Facilities
                </button>
              </li>

              <li>
                <button
                  className={`menu-link ${location.pathname === '/contact' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('/contact')}
                >
                  Contact
                </button>
              </li>

            </ul>

            <div className="booking-button-wrapper">
              <a
                href="https://bookingengine.stayflexi.com/?hotel_id=35135"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-booking"
                style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}
              >
                BOOK NOW
              </a>
            </div>
          </div>

        </div>
      </nav>

    </header>
  )
}