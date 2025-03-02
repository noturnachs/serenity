import { useState } from "react";

function About() {
  const [activeTab, setActiveTab] = useState("about");

  const features = [
    {
      title: "Exclusive Pools",
      description:
        "Private pools with stunning mountain views perfect for relaxation and gatherings.",
      icon: (
        <svg
          className="w-8 h-8 text-emerald-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
      image:
        "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Events Venue",
      description:
        "Versatile spaces for celebrations, corporate events, and special occasions.",
      icon: (
        <svg
          className="w-8 h-8 text-emerald-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
          />
        </svg>
      ),
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Recreation",
      description:
        "Basketball court, mini golf, and more activities for the whole family.",
      icon: (
        <svg
          className="w-8 h-8 text-emerald-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
      image:
        "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  const testimonials = [
    {
      name: "Maria Santos",
      role: "Family Vacation",
      content:
        "Our stay at Serenity was absolutely perfect! The private pool was a hit with the kids, and the mountain views were breathtaking. We'll definitely be back!",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
      rating: 5,
    },
    {
      name: "John Reyes",
      role: "Corporate Retreat",
      content:
        "We hosted our company retreat here and it exceeded all expectations. The events space was perfect for our meetings and the recreational activities provided great team building opportunities.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
    },
    {
      name: "Sarah Chen",
      role: "Weekend Getaway",
      content:
        "A perfect escape from the city! The serene environment and excellent amenities made our weekend truly special. The staff was incredibly accommodating.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 4,
    },
  ];

  return (
    <section
      id="about"
      className="pt-[32rem] sm:pt-32 pb-12 sm:pb-20 bg-gradient-to-b from-emerald-50 to-white mt-0 sm:mt-20"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Resort Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-20">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-emerald-900 mb-2">
              Your Mountain Retreat
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-emerald-500 to-emerald-700 mb-4 sm:mb-6"></div>
            <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg">
              Rest houses with exclusive pool, comfortable rooms, versatile
              event spaces, restaurant, basketball court, mini golf & more. Our
              resort is designed to provide the perfect balance of relaxation
              and recreation.
            </p>
            <p className="text-gray-700 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
              Whether you&apos;re planning a family vacation, a romantic
              getaway, or a corporate retreat, Serenity offers the ideal setting
              with breathtaking mountain views and modern amenities.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 bg-white p-4 rounded-lg shadow-sm border border-emerald-100">
              <div className="flex items-center text-yellow-400">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium text-sm sm:text-base">
                4.9 out of 5 based on 200+ reviews
              </span>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative mb-8 sm:mb-0">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Serenity Resort"
              className="rounded-xl shadow-xl w-full h-64 sm:h-96 object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-gradient-to-r from-emerald-700 to-emerald-900 p-3 sm:p-4 rounded-lg shadow-lg text-white">
              <p className="font-bold text-sm sm:text-base">Established 2015</p>
              <p className="text-emerald-100 text-xs sm:text-sm">
                Busay, Cebu City
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16 sm:mb-24">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-emerald-900 mb-2">
              Resort Highlights
            </h3>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-700 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="h-40 sm:h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 shadow-sm">
                      {feature.icon}
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-emerald-900">
                      {feature.title}
                    </h4>
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16 sm:mb-24">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-emerald-900 mb-2">
              What Our Guests Say
            </h3>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-700 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-4 sm:p-6 relative border border-emerald-50 hover:border-emerald-100 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="absolute -top-4 sm:-top-5 left-4 sm:left-6 bg-gradient-to-r from-emerald-700 to-emerald-900 rounded-full p-1 shadow-lg">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                  />
                </div>
                <div className="pt-4 sm:pt-6">
                  <div className="flex items-center mb-3 sm:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4 text-sm sm:text-base">
                    &quot;{testimonial.content}&quot;
                  </p>
                  <div className="border-t border-emerald-50 pt-3 sm:pt-4">
                    <p className="font-medium text-emerald-900 text-sm sm:text-base">
                      {testimonial.name}
                    </p>
                    <p className="text-xs sm:text-sm text-emerald-700">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <a
              href="#"
              className="text-emerald-700 hover:text-emerald-900 font-medium inline-flex items-center bg-emerald-50 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-emerald-100 transition-colors shadow-sm text-sm sm:text-base"
            >
              View all reviews
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-emerald-700 to-emerald-900 rounded-xl p-6 sm:p-8 md:p-12 text-center shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
              Ready to Experience Serenity?
            </h3>
            <p className="text-emerald-100 mb-6 sm:mb-8 max-w-3xl mx-auto text-sm sm:text-base">
              Book your stay now and discover why our guests keep coming back.
              Special rates available for extended stays and group bookings.
            </p>
            <a
              href="#booking-section"
              className="inline-block bg-white text-emerald-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-emerald-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300 text-sm sm:text-base"
            >
              Book Your Stay
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
