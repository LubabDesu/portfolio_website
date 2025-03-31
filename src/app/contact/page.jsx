import "../globals.css";
export default function Contact() {
    return (
        <form action="/api/submit-form" method="POST" className="contact-form">
            <div className="contact-group">
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    style={{ color: "black" }}
                />
            </div>
            <div className="contact-group">
                <label>Message</label>
                <input
                    type="text"
                    name="message"
                    placeholder="Write me a message!"
                    required
                    style={{ color: "black" }}
                />
            </div>

            <button type="submit" className="button">
                Send!
            </button>
        </form>
    );
}
