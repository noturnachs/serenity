import { useState, useRef, useEffect } from "react";

function About() {
  const [activeTab, setActiveTab] = useState("about");
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef(null);

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

  // Function to handle scroll snap
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const slideWidth = scrollContainerRef.current.offsetWidth;
      const newSlide = Math.round(scrollLeft / slideWidth);
      setCurrentSlide(newSlide);
    }
  };

  // Scroll to slide function
  const scrollToSlide = (index) => {
    if (scrollContainerRef.current) {
      const slideWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: slideWidth * index,
        behavior: "smooth",
      });
    }
  };

  // Use Intersection Observer instead of scroll events
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
              className="rounded-xl shadow-xl w-full h-64 sm:h-96 object-cover transform hover:scale-105"
              style={{
                transform: "translateZ(0)",
              }}
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
                    className="w-full h-full object-cover will-change-transform hover:scale-105"
                    style={{
                      transform: "translateZ(0)",
                    }}
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
            <span className="text-emerald-600 text-sm sm:text-base font-medium tracking-wider uppercase mb-2 block">
              Testimonials
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-emerald-900">
              What Our Guests Say
            </h3>
          </div>

          {/* Desktop Grid */}
          <div className="hidden sm:grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.1)] transition-all duration-300"
              >
                {/* Quote Icon */}
                <div className="mb-4 text-emerald-500">
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                  </svg>
                </div>

                {/* Testimonial Content */}
                <p className="text-gray-600 mb-6 text-base leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Divider */}
                <div className="w-12 h-0.5 bg-emerald-100 mb-6"></div>

                {/* Author Info */}
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-emerald-50"
                  />
                  <div className="ml-4">
                    <p className="font-semibold text-emerald-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-emerald-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? "text-yellow-400"
                          : "text-gray-200"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel with Snap Scroll */}
          <div className="sm:hidden relative">
            <div
              ref={scrollContainerRef}
              className="overflow-x-auto scrollbar-hide snap-x snap-mandatory"
              style={{
                scrollSnapType: "x mandatory",
                WebkitOverflowScrolling: "touch",
              }}
            >
              <div className="inline-flex">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-[85vw] max-w-[360px] flex-shrink-0 snap-center mx-2 first:ml-4 last:mr-4"
                  >
                    <div className="bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                      {/* Quote Icon */}
                      <div className="mb-3 text-emerald-500">
                        <svg
                          className="w-6 h-6"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                        </svg>
                      </div>

                      {/* Testimonial Content */}
                      <p className="text-gray-600 mb-4 text-sm line-clamp-4">
                        "{testimonial.content}"
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-10 h-10 rounded-full object-cover border-2 border-emerald-50"
                        />
                        <div className="ml-3">
                          <p className="font-semibold text-emerald-900 text-sm">
                            {testimonial.name}
                          </p>
                          <p className="text-xs text-emerald-600">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center mt-3">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-3 h-3 ${
                              i < testimonial.rating
                                ? "text-yellow-400"
                                : "text-gray-200"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-emerald-600 w-4"
                      : "bg-emerald-200"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* View All Reviews Button */}
          <div className="text-center mt-10 sm:mt-12">
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 border border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white rounded-full transition-colors duration-300 text-sm sm:text-base font-medium"
            >
              View all reviews
              <svg
                className="w-4 h-4 ml-2"
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
      </div>
    </section>
  );
}

export default About;
