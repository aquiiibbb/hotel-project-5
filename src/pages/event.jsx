import './event.css'

export default function Event() {
   return (
      <>

         {/* TOP EVENT SECTION */}
         <section className="event-section">
            <div className="event-container">

               <div className="event-icon">
                  <span>❦</span>
               </div>

               <h2 className="event-title">
                  Events, Conferences & Venue Hire <br />
                  at the Prince of Wales Hotel
               </h2>

               <p className="event-text">
                  Whether you are planning a corporate conference, business meeting or training day, or celebrating a wedding,
                  presentation night, party or private event, the Prince of Wales Hotel offers versatile venue spaces to suit every
                  occasion. With flexible layouts, tailored catering options and a dedicated team on hand to support your event,
                  we provide a seamless experience from start to finish — all with venue hire available from just £150.
               </p>

               <h3 className="event-price">
                  Venue Hire from £150
               </h3>

               <button className="event-btn">
                  CALL OUR EVENTS TEAM
               </button>

            </div>
         </section>


         {/* EVENT TYPES SECTION */}
         <section className="event-types-section">

            <h2 className="event-types-title">
               Event Types Covered
            </h2>

            <div className="event-types-container">

               <div className="event-card">
                  <img
                     src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
                     alt="Conference"
                  />
                  <p>Conferences & business meetings</p>
               </div>

               <div className="event-card">
                  <img
                     src="https://images.unsplash.com/photo-1511578314322-379afb476865"
                     alt="Training"
                  />
                  <p>Training days & presentations</p>
               </div>

               <div className="event-card">
                  <img
                     src="https://images.unsplash.com/photo-1519741497674-611481863552"
                     alt="Wedding"
                  />
                  <p>Weddings & receptions</p>
               </div>

            </div>

         </section>
         {/* VENUE PRICING SECTION */}

         <section className="venue-pricing-section">

            <div className="venue-pricing-header">
               <div className="venue-icon">❦</div>
               <h2>Venue Hire Pricing</h2>
            </div>

            <div className="venue-pricing-container">

               <div className="venue-card highlight">
                  <div className="venue-card-icon">🛏</div>
                  <h4>Venue hire starting from £150</h4>
                  <p className="small">(subject to terms and conditions)</p>
               </div>

               <div className="venue-card">
                  <div className="venue-card-icon">📅</div>
                  <h4>Half-day and full-day options available</h4>
               </div>

               <div className="venue-card">
                  <div className="venue-card-icon">🍽</div>
                  <h4>Catering & room setup priced separately</h4>
               </div>

               <div className="venue-card">
                  <div className="venue-card-icon">✔</div>
                  <h4>Bespoke packages available</h4>
               </div>

            </div>

         </section>
         {/* EVENT SERVICES SECTION */}

         <section className="event-services-section">

            <div className="event-services-container">

               {/* CARD 1 */}
               <div className="event-service-card">

                  <img
                     src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205"
                     alt="Conference"
                  />

                  <div className="service-content">
                     <h3>Conferences & Business Events</h3>

                     <ul>
                        <li>AV equipment and Wi-Fi</li>
                        <li>Tea & coffee breaks</li>
                        <li>Working lunches and buffets</li>
                        <li>Free parking</li>
                     </ul>
                  </div>

               </div>


               {/* CARD 2 */}
               <div className="event-service-card">

                  <img
                     src="https://images.unsplash.com/photo-1519741497674-611481863552"
                     alt="Wedding"
                  />

                  <div className="service-content">
                     <h3>Weddings & Private Celebrations</h3>

                     <ul>
                        <li>Flexible layouts</li>
                        <li>Customisable packages</li>
                        <li>Catering and bar options</li>
                        <li>Event coordination support</li>
                     </ul>
                  </div>

               </div>


               {/* CARD 3 */}
               <div className="event-service-card">

                  <img
                     src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
                     alt="Accommodation"
                  />

                  <div className="service-content">
                     <h3>Accommodation for Event Guests</h3>

                     <ul>
                        <li>On-site accommodation</li>
                        <li>Discounted delegate rates</li>
                        <li>Breakfast options</li>
                        <li>Free parking</li>
                     </ul>
                  </div>

               </div>

            </div>

         </section>

      </>
   )
}