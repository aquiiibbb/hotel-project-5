import React, { useState } from "react";
import "./WhatsAppChat.css";

export default function WhatsAppChat() {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");

    const phoneNumber = "916355699542";
    const bookingLink = "https://bookingengine.stayflexi.com/?hotel_id=35135";

    const sendMessage = () => {
        if (!message.trim()) return;

        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
        setMessage("");
    };

    return (
        <>
            {/* Floating Buttons Container */}
            <div className="prince-floating-action-container">
                {/* Book Now Button */}
                <a
                    href={bookingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="prince-book-now-fab"
                >
                    <img
                        src="https://princeofwaleshotels.co.uk/wp-content/uploads/2026/02/booknow-3.png"
                        alt="Book Now"
                    />
                </a>

                {/* WhatsApp Button */}
                <div className="prince-whatsapp-fab" onClick={() => setOpen(!open)}>
                    <img
                        src="https://princeofwaleshotels.co.uk/wp-content/uploads/2026/02/whatsapp.png"
                        alt="WhatsApp"
                    />
                </div>
            </div>

            {/* Chat Box */}
            {open && (
                <div className="prince-whatsapp-chat-container">
                    {/* Header */}
                    <div className="prince-chat-header-section">
                        <span className="prince-chat-title-text">Chat with us</span>
                        <button className="prince-chat-close-btn" onClick={() => setOpen(false)}>✕</button>
                    </div>

                    {/* Body */}
                    <div className="prince-chat-message-area">
                        <p>Hello 👋</p>
                        <p>How can we help you?</p>
                    </div>

                    {/* Footer */}
                    <div className="prince-chat-input-section">
                        <input
                            type="text"
                            className="prince-chat-message-input"
                            placeholder="Type a message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        />
                        <button className="prince-chat-send-btn" onClick={sendMessage}>Send</button>
                    </div>
                </div>
            )}
        </>
    );
}