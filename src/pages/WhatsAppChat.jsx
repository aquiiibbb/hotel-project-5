import React, { useState } from "react";
import "./WhatsAppChat.css";

export default function WhatsAppChat() {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");

    const phoneNumber = "916355699542"; // 👉 Replace with your number

    const sendMessage = () => {
        if (!message.trim()) return;

        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
        setMessage("");
    };

    return (
        <>
            {/* Floating Button */}
            <div className="wa-button" onClick={() => setOpen(!open)}>
                <img
                    src="https://princeofwaleshotels.co.uk/wp-content/uploads/2026/02/whatsapp.png"
                    alt="WhatsApp"
                />
            </div>

            {/* Chat Box */}
            {open && (
                <div className="wa-chat-box">
                    {/* Header */}
                    <div className="wa-header">
                        <span>Chat with us</span>
                        <button onClick={() => setOpen(false)}>✕</button>
                    </div>

                    {/* Body */}
                    <div className="wa-body">
                        <p>Hello 👋</p>
                        <p>How can we help you?</p>
                    </div>

                    {/* Footer */}
                    <div className="wa-footer">
                        <input
                            type="text"
                            placeholder="Type a message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        />
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            )}
        </>
    );
}