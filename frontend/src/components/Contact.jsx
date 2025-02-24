function Contact() {
  return (
    <section id="contact" className="py-24 bg-emerald-900">
      <div className="container mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-semibold text-center mb-16 text-emerald-100">
          Contact & Reservations
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-medium mb-8 text-emerald-100">
              Get in Touch
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-emerald-100 font-medium mb-2">Location</p>
                <p className="text-emerald-200">
                  Busay, Cebu City, Philippines
                </p>
              </div>
              <div>
                <p className="text-emerald-100 font-medium mb-2">Contact</p>
                <p className="text-emerald-200">+63 XXX XXX XXXX</p>
                <p className="text-emerald-200">
                  reservations@serenitybusay.com
                </p>
              </div>
              <div>
                <p className="text-emerald-100 font-medium mb-2">Hours</p>
                <p className="text-emerald-200">Front Desk: 24/7</p>
                <p className="text-emerald-200">Check-in: 2:00 PM</p>
                <p className="text-emerald-200">Check-out: 12:00 PM</p>
              </div>
            </div>

            <div className="mt-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d583.3893820224589!2d123.86223896714044!3d10.377003227382039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99f600e42ba09%3A0xf5beeb9630c5377!2sSerenity%20Farm%20and%20Resort%20Busay!5e0!3m2!1sen!2sph!4v1740379531213!5m2!1sen!2sph"
                className="w-full h-[400px] rounded-lg shadow-md"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <form className="space-y-6">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border-2 border-emerald-600/30 rounded-lg bg-emerald-800/30 text-emerald-100 focus:outline-none focus:border-emerald-500 placeholder:text-emerald-500/50 transition-colors"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border-2 border-emerald-600/30 rounded-lg bg-emerald-800/30 text-emerald-100 focus:outline-none focus:border-emerald-500 placeholder:text-emerald-500/50 transition-colors"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-3 border-2 border-emerald-600/30 rounded-lg bg-emerald-800/30 text-emerald-100 focus:outline-none focus:border-emerald-500 placeholder:text-emerald-500/50 transition-colors"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-700 hover:bg-emerald-600 text-white py-3 rounded-lg transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
