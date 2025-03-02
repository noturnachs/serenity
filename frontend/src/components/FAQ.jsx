function FAQ() {
  const faqs = [
    {
      question: "What are the check-in and check-out times?",
      answer:
        "Check-in time is 2:00 PM and check-out time is 12:00 PM. Early check-in and late check-out may be available upon request, subject to availability.",
    },
    {
      question: "Is there Wi-Fi available at the resort?",
      answer:
        "Yes, complimentary high-speed Wi-Fi is available throughout the property for all our guests.",
    },
    {
      question: "Can I host a private event at Serenity?",
      answer:
        "Absolutely! We offer versatile event spaces perfect for weddings, corporate events, and special celebrations. Please contact our events team for more information and availability.",
    },
    {
      question: "Are pets allowed at the resort?",
      answer:
        "We have designated pet-friendly accommodations available. Please inform us in advance if you plan to bring a pet, as additional fees and restrictions may apply.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-emerald-900 mb-2">
            Frequently Asked Questions
          </h3>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-700 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-emerald-50 hover:border-emerald-100 hover:shadow-lg transition-all duration-300"
            >
              <details className="group transition-all duration-300">
                <summary className="flex items-center justify-between cursor-pointer p-4 sm:p-6 bg-gradient-to-r from-white to-emerald-50 transition-all duration-300">
                  <h5 className="text-base sm:text-lg font-medium text-emerald-900 pr-4">
                    {faq.question}
                  </h5>
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-700 transform transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-gray-700 bg-white">
                  <p className="text-sm sm:text-base">{faq.answer}</p>
                </div>
              </details>
            </div>
          ))}
        </div>

        {/* Have more questions section */}
        <div className="max-w-3xl mx-auto mt-8 sm:mt-12 bg-gradient-to-r from-emerald-700 to-emerald-900 rounded-xl p-4 sm:p-6 shadow-lg text-white">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-200 mt-0.5 mr-0 sm:mr-3 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <h4 className="text-base sm:text-lg font-medium text-white mb-2">
                Have more questions?
              </h4>
              <p className="text-emerald-100 mb-4 text-sm sm:text-base">
                Our friendly staff is always ready to assist you with any
                inquiries you may have about your stay at Serenity.
              </p>
              <a
                href="mailto:info@serenitybusay.com"
                className="text-white hover:text-emerald-200 font-medium inline-flex items-center bg-emerald-800/50 px-3 sm:px-4 py-2 rounded-lg hover:bg-emerald-800 transition-colors text-sm sm:text-base"
              >
                Contact us
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
