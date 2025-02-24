function Contact() {
  return (
    <section id="contact" className="py-24 bg-[var(--gray-50)]">
      <div className="container max-w-5xl px-6">
        <h2 className="text-3xl font-semibold text-center mb-16 text-[var(--primary)]">
          Contact & Reservations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-medium mb-8 text-[var(--text)]">
              Get in Touch
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-[var(--primary)] font-medium mb-2">
                  Location
                </p>
                <p className="text-[var(--gray-600)]">
                  Busay, Cebu City, Philippines
                </p>
              </div>
              <div>
                <p className="text-[var(--primary)] font-medium mb-2">
                  Contact
                </p>
                <p className="text-[var(--gray-600)]">+63 XXX XXX XXXX</p>
                <p className="text-[var(--gray-600)]">
                  reservations@serenitybusay.com
                </p>
              </div>
              <div>
                <p className="text-[var(--primary)] font-medium mb-2">Hours</p>
                <p className="text-[var(--gray-600)]">Front Desk: 24/7</p>
                <p className="text-[var(--gray-600)]">Check-in: 2:00 PM</p>
                <p className="text-[var(--gray-600)]">Check-out: 12:00 PM</p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border border-[var(--gray-200)] rounded-lg focus:outline-none focus:border-[var(--primary)] transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border border-[var(--gray-200)] rounded-lg focus:outline-none focus:border-[var(--primary)] transition-colors"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full p-3 border border-[var(--gray-200)] rounded-lg focus:outline-none focus:border-[var(--primary)] transition-colors"
              ></textarea>
            </div>
            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
