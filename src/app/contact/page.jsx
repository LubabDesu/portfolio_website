import "../globals.css";
export default function Contact() {
    return (
        <form action="/api/submit-form" method="POST" className="contact-form">
            <label>Email</label>
            <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                style={{ color: "black" }}
            />
        </form>
    );
}
