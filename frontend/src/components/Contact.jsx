function Contact() {
  return (
    <section id="contact" className="py-24 bg-[var(--gray-50)]">
      <div className="container max-w-7xl px-6">
        <h2 className="text-3xl font-semibold text-center mb-16 text-[var(--primary)]">
          Contact & Reservations
        </h2>

        {/* Contact Form and Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
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

            <form className="mt-12 space-y-6">
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

          {/* Map Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-[var(--text)]">Find Us</h3>
            <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d583.3893820224589!2d123.86223896714044!3d10.377003227382039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99f600e42ba09%3A0xf5beeb9630c5377!2sSerenity%20Farm%20and%20Resort%20Busay!5e0!3m2!1sen!2sph!4v1740379531213!5m2!1sen!2sph"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-medium mb-2 text-[var(--primary)]">
                Getting Here
              </h4>
              <p className="text-[var(--gray-600)]">
                Located in the scenic hills of Busay, our resort offers a
                perfect escape just minutes away from Cebu City. Follow the main
                Busay road and look for our signature entrance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
