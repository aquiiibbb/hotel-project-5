import { useState } from 'react'
import './contact.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime, MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'

const faqs = [
  {
    question: "What type of room can I book at Crossroads Inn?",
    answer: (
      <>
        Room options at Crossroads Inn include:
        <ul className="faq-list">
          <li>Double</li>
        </ul>
      </>
    ),
  },
  {
    question: "How much does it cost to stay at Crossroads Inn?",
    answer: "The prices at Crossroads Inn may vary depending on your stay (e.g. dates you select, hotel's policy etc.). See the prices by entering your dates.",
  },
  {
    question: "What are the check-in and check-out times at Crossroads Inn?",
    answer: "Check-in at Crossroads Inn is from 15:00, and check-out is until 11:00.",
  },
  {
    question: "How far is Crossroads Inn from the centre of Fort Pierce?",
    answer: "Crossroads Inn is 8 km from the centre of Fort Pierce.",
  },
]

function FAQItem({ faq }) {
  const [open, setOpen] = useState(true)

  return (
    <div className="faq-item">
      <div className="faq-header" onClick={() => setOpen(!open)}>
        <span className="faq-question">{faq.question}</span>
        <span className="faq-chevron">
          {open ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
        </span>
      </div>
      {open && (
        <div className="faq-body">
          {faq.answer}
        </div>
      )}
    </div>
  )
}

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="contact-hero-section">
        <div className="contact-hero-overlay">
          <div className="contact-hero-content">
            <h1 className="contact-hero-title">Contact</h1>
            <div className="contact-breadcrumb">
              <span>HOME</span>
              <span className="contact-breadcrumb-separator">/</span>
              <span>CONTACT</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="contact-main-section">
        <div className="contact-container">
          <div className="contact-content-wrapper">

            {/* Left Side - Contact Form */}
            <div className="contact-form-section">
              <div className="contact-form-header">
                <div className="contact-decorative-line"></div>
                <p className="contact-subtitle">CONTACT WITH US</p>
                <h2 className="contact-form-title">Send us a Message</h2>
              </div>

              <form className="contact-form">
                <div className="contact-form-row">
                  <input type="text" placeholder="Your Name" className="contact-input" />
                  <input type="email" placeholder="Email Address" className="contact-input" />
                </div>
                <div className="contact-form-row">
                  <input type="tel" placeholder="Phone Number" className="contact-input" />
                  <input type="text" placeholder="Subject" className="contact-input" />
                </div>
                <textarea
                  placeholder="Write a Message"
                  className="contact-textarea"
                  rows="6"
                ></textarea>
                <button type="submit" className="contact-submit-btn">
                  SEND A MESSAGE
                </button>
              </form>
            </div>

            {/* Right Side - Contact Info */}
            <div className="contact-info-section">
              <div className="contact-info-card">
                <h3 className="contact-info-title">Reach Us</h3>

                <div className="contact-info-item">
                  <div className="contact-info-icon"><MdLocationOn /></div>
                  <div className="contact-info-details">
                    <h4 className="contact-info-label">ADDRESS</h4>
                    <p className="contact-info-text">
                      7050 Okeechobee Rd, Fort Pierce, FL 34945, <br />
                      USA St. Lucie County, Florida, United States - 34945
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon"><MdPhone /></div>
                  <div className="contact-info-details">
                    <h4 className="contact-info-label">PHONE</h4>
                    <p className="contact-info-text">+17724658600</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon"><MdEmail /></div>
                  <div className="contact-info-details">
                    <h4 className="contact-info-label">EMAIL</h4>
                    <p className="contact-info-text">crossroadsinnflorida@gmail.com</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon"><MdAccessTime /></div>
                  <div className="contact-info-details">
                    <h4 className="contact-info-label">RECEPTION HOURS</h4>
                    <p className="contact-info-text">
                      2 PM - 10 PM<br />
                      After 10 PM Self Check In
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map-section">
        <div className="contact-map-container">
          <iframe
            src="https://maps.google.com/maps?q=Bristol%20Road,%20A38,%20Berkeley,%20Gloucestershire,%20GL13%209HD&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Prince of Wales Hotel - Bristol Road, A38, Berkeley"
          ></iframe>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-wrapper">
          <h2 className="faq-heading">FAQs about Crossroads Inn</h2>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} />
            ))}
          </div>
        </div>
      </section>

    </>
  )
}