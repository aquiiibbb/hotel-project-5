import './footer.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import logo1 from "../Assets/logo.png";

export default function Footer(){
   const navigate = useNavigate();

   const handleLinkClick = (path) => {
     navigate(path);
   };

   return(
    <>
      <footer className="prince-wales-footer">
        <div className="pwf-container">
          {/* Logo and Description */}
          <div className="pwf-section pwf-logo-section">
            <div className="pwf-logo">
               <img src={logo1} alt="The Prince of Wales Hotel" />
            </div>
            <p className="pwf-description">
              The Crossroadsinn of Wales Hotel Berkeley is a recently refurbished country hotel offering comfortable en-suite rooms, free parking, and easy access to the M5 and A38.
            </p>
            <div className="pwf-social-links">
              <div className="pwf-social-icon">
                <FaFacebookF />
              </div>
              <div className="pwf-social-icon">
                <FaInstagram />
              </div>
              <div className="pwf-social-icon">
                <FaTiktok />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="pwf-section">
            <h3 className="pwf-title">Quick Links</h3>
            <ul className="pwf-links">
              <li><button onClick={() => handleLinkClick('/')}>Home</button></li>
              <li><button onClick={() => handleLinkClick('/about')}>About</button></li>
              <li><button onClick={() => handleLinkClick('/contact')}>Contact</button></li>
              <li><button onClick={() => handleLinkClick('/blog')}>Blog</button></li>
              <li><button onClick={() => handleLinkClick('/policies')}>Hotel Policies</button></li>
              <li><button onClick={() => handleLinkClick('/privacy')}>Privacy policy</button></li>
              <li><button onClick={() => handleLinkClick('/terms')}>Terms & Condition</button></li>
            </ul>
          </div>

          {/* Facilities */}
          <div className="pwf-section">
            <h3 className="pwf-title">Facilities</h3>
            <ul className="pwf-links">
              <li><button onClick={() => handleLinkClick('/room')}>Hotel Rooms</button></li>
              <li><button onClick={() => handleLinkClick('/event')}>Events & Venue Hire</button></li>
              <li><button onClick={() => handleLinkClick('/gallery')}>Gallery</button></li>
              <li><button onClick={() => handleLinkClick('/amenities')}>Amenities/Facilities</button></li>
              <li><button onClick={() => handleLinkClick('/local-guide')}>Local Area Guide</button></li>
              <li><button onClick={() => handleLinkClick('/transport')}>Transport Links & Accessibility</button></li>
              <li><button onClick={() => handleLinkClick('/offers')}>Offers/Corporate Rates</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="pwf-section pwf-contact-section">
            <h3 className="pwf-title">Contact</h3>
            <div className="pwf-contact-items">
              <div className="pwf-contact-item">
                <div className="pwf-contact-icon pwf-location-icon">
                  <MdLocationOn />
                </div>
                <div className="pwf-contact-details">
                  <span className="pwf-contact-label">Locations</span>
                   <span className="pwf-contact-value">7050 Okeechobee Rd, Fort Pierce, FL 34945, USA St. Lucie County, Florida, United States - 34945</span>
                </div>
              </div>
              
              <div className="pwf-contact-item">
                <div className="pwf-contact-icon pwf-email-icon">
                  <MdEmail />
                </div>
                 <div className="pwf-contact-details">
                   <span className="pwf-contact-label">Send Email</span>
                   <a
                     href="mailto:crossroadsinnflorida@gmail.com"
                     className="pwf-contact-value pwf-contact-link"
                   >
                     crossroadsinnflorida@gmail.com
                   </a>
                 </div>
              </div>
              
              <div className="pwf-contact-item">
                <div className="pwf-contact-icon pwf-phone-icon">
                  <MdPhone />
                </div>
                <div className="pwf-contact-details">
                  <span className="pwf-contact-label">Call Anytime</span>
                   <a href="tel: +17724658600" className="pwf-contact-value pwf-contact-link">+17724658600</a>
                </div>
              </div>
              
              <div className="pwf-contact-item">
                <div className="pwf-contact-icon pwf-whatsapp-icon">
                  <FaWhatsapp />
                </div>
                <div className="pwf-contact-details">
                  <span className="pwf-contact-label">Get in Touch</span>
                   <a href="https://wa.me/ +17724658600" className="pwf-contact-value pwf-contact-link">+17724658600</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      
      </footer>
    </>
   ) 
}