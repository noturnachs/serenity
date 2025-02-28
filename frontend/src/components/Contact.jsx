import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: "Thank you for your message! Our team will contact you shortly.",
    });

    // Reset form after successful submission (in a real app, this would happen after API response)
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: "",
      });
    }, 500);
  };

  return (
    <section
      id="contact"
      className="py-12 sm:py-24 relative bg-gradient-to-b from-emerald-900/5 via-emerald-900/10 to-emerald-900/5"
    >
      {/* Decorative background elements - adjusted for mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-12 -right-12 sm:-top-24 sm:-right-24 w-48 sm:w-96 h-48 sm:h-96 rounded-full bg-gradient-to-br from-emerald-200/20 to-emerald-600/20 blur-3xl"></div>
        <div className="absolute -bottom-12 -left-12 sm:-bottom-24 sm:-left-24 w-48 sm:w-96 h-48 sm:h-96 rounded-full bg-gradient-to-tr from-emerald-200/20 to-emerald-600/20 blur-3xl"></div>
        <div className="absolute top-1/4 left-1/3 w-32 sm:w-64 h-32 sm:h-64 rounded-full bg-emerald-400/10 blur-2xl"></div>

        {/* Pattern overlay remains the same */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOHY2YzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJoNnptLTYgNmMwLTYuNjI3LTUuMzczLTEyLTEyLTEydjZjMy4zMTQgMCA2IDIuNjg2IDYgNmg2eiIgZmlsbD0icmdiYSgxNiwgMTg1LCAxMjksIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
        {/* Section Header - Improved mobile spacing and text sizes */}
        <div className="text-center mb-8 sm:mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium text-emerald-700 bg-emerald-100 rounded-full mb-3 sm:mb-4">
            Reach Out
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Contact & Reservations
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Have questions or ready to book your stay? Our dedicated team is
            here to assist you with any inquiries or special requests.
          </p>
        </div>

        {/* Grid Layout - Adjusted for better mobile display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Contact Information Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-emerald-100 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="bg-gradient-to-r from-emerald-700 to-emerald-800 px-4 sm:px-6 py-6 sm:py-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOHY2YzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJoNnptLTYgNmMwLTYuNjI3LTUuMzczLTEyLTEyLTEydjZjMy4zMTQgMCA2IDIuNjg2IDYgNmg2eiIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 relative">
                  Get in Touch
                </h3>
                <p className="text-emerald-100 relative text-sm sm:text-base">
                  We're here to help make your stay at Serenity unforgettable
                </p>
              </div>

              {/* Contact Info Content - Improved spacing for mobile */}
              <div className="p-4 sm:p-6 bg-gradient-to-b from-white/80 to-emerald-50/80">
                <div className="space-y-6 sm:space-y-8">
                  {/* Location */}
                  <div className="flex items-start group">
                    <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 shadow-sm group-hover:shadow-md transition-all duration-300">
                      <svg
                        className="w-6 h-6 text-emerald-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium mb-1 text-sm sm:text-base">
                        Location
                      </p>
                      <p className="text-gray-600 text-sm">
                        Busay, Cebu City, Philippines
                      </p>
                      <p className="text-gray-600 text-sm">
                        Nestled in the mountains with panoramic city views
                      </p>
                    </div>
                  </div>

                  {/* Similar adjustments for Contact and Hours sections */}
                </div>

                {/* Social Media Links - Adjusted spacing */}
                <div className="mt-6 pt-6 sm:mt-8 sm:pt-8 border-t border-emerald-100">
                  <h4 className="text-gray-900 font-medium mb-3 sm:mb-4 text-sm sm:text-base">
                    Connect With Us
                  </h4>
                  <div className="flex space-x-3 sm:space-x-4">
                    {/* Social media buttons - Adjusted sizes */}
                    <a
                      href="#"
                      className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-2 sm:p-3 rounded-full text-emerald-700 hover:bg-gradient-to-br hover:from-emerald-600 hover:to-emerald-700 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-2 sm:p-3 rounded-full text-emerald-700 hover:bg-gradient-to-br hover:from-emerald-600 hover:to-emerald-700 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map - Adjusted height for mobile */}
            <div className="rounded-xl overflow-hidden shadow-xl border border-emerald-100 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d583.3893820224589!2d123.86223896714044!3d10.377003227382039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99f600e42ba09%3A0xf5beeb9630c5377!2sSerenity%20Farm%20and%20Resort%20Busay!5e0!3m2!1sen!2sph!4v1740379531213!5m2!1sen!2sph"
                className="w-full h-[200px] sm:h-[300px] border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="bg-gradient-to-b from-white/80 to-emerald-50/80 p-3 sm:p-4">
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <svg
                    className="w-4 h-4 text-emerald-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                  <span>Directions from Cebu City: 30 minutes drive</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-4 sm:p-8 border border-emerald-100 transform transition-all duration-300 hover:shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
                Send Us a Message
              </h3>

              {/* Form Status Message */}
              {formStatus.submitted && (
                <div
                  className={`mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg text-sm ${
                    formStatus.success
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {formStatus.message}
                </div>
              )}

              {/* Contact Form - Improved spacing and sizing for mobile */}
              <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {/* Form fields - Adjusted for mobile */}
                  <div className="group">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-emerald-100 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white/70 text-gray-900 focus:outline-none transition-all duration-300 shadow-sm group-hover:shadow-md text-sm sm:text-base"
                    />
                  </div>
                  <div className="group">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-emerald-100 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white/70 text-gray-900 focus:outline-none transition-all duration-300 shadow-sm group-hover:shadow-md text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number (Optional)
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+63 XXX XXX XXXX"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-emerald-100 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white/70 text-gray-900 focus:outline-none transition-all duration-300 shadow-sm group-hover:shadow-md text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-emerald-100 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white/70 text-gray-900 focus:outline-none transition-all duration-300 shadow-sm group-hover:shadow-md text-sm sm:text-base"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Reservation">Reservation</option>
                      <option value="Event Booking">Event Booking</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="How can we help you?"
                    rows="5"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-emerald-100 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white/70 text-gray-900 focus:outline-none transition-all duration-300 shadow-sm group-hover:shadow-md text-sm sm:text-base"
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    required
                    className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="privacy"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    I agree to the{" "}
                    <a
                      href="#"
                      className="text-emerald-600 hover:text-emerald-700"
                    >
                      privacy policy
                    </a>{" "}
                    and consent to being contacted regarding my inquiry.
                  </label>
                </div>

                {/* Submit Button - Adjusted for mobile */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm sm:text-base"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Send Message
                </button>
              </form>
            </div>

            {/* Quick Contact Options - Adjusted for mobile */}
            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {/* Quick contact cards - Adjusted sizing and spacing */}
              <a
                href="tel:+63XXXXXXXX"
                className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 sm:p-4 text-center border border-emerald-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-full flex items-center justify-center mb-2 sm:mb-3 shadow-sm">
                  <svg
                    className="w-6 h-6 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <p className="text-gray-900 font-medium text-sm sm:text-base">
                  Call Us
                </p>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Direct phone support
                </p>
              </a>
              <a
                href="mailto:reservations@serenitybusay.com"
                className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 sm:p-4 text-center border border-emerald-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-full flex items-center justify-center mb-2 sm:mb-3 shadow-sm">
                  <svg
                    className="w-6 h-6 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-gray-900 font-medium text-sm sm:text-base">
                  Email Us
                </p>
                <p className="text-gray-600 text-xs sm:text-sm">
                  24/7 email support
                </p>
              </a>
              <a
                href="#booking-section"
                className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 sm:p-4 text-center border border-emerald-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-full flex items-center justify-center mb-2 sm:mb-3 shadow-sm">
                  <svg
                    className="w-6 h-6 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-gray-900 font-medium text-sm sm:text-base">
                  Book Now
                </p>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Instant booking
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
