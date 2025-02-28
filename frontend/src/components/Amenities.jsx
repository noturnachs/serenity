function Amenities() {
  const amenities = [
    {
      title: "Leisure",
      items: [
        "Infinity Swimming Pool",
        "Executive Fitness Center",
        "Spa & Wellness",
        "Private Cabanas",
      ],
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description:
        "Unwind in our world-class leisure facilities designed for ultimate relaxation and rejuvenation.",
    },
    {
      title: "Dining",
      items: [
        "Fine Dining Restaurant",
        "Skyline Lounge",
        "In-Room Dining",
        "Private Chef Service",
      ],
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description:
        "Savor exquisite culinary creations prepared by our master chefs using locally-sourced ingredients.",
    },
    {
      title: "Events",
      items: [
        "Grand Ballroom",
        "Executive Meeting Rooms",
        "Garden Pavilion",
        "Wedding Terrace",
      ],
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description:
        "Host unforgettable events in our versatile spaces with breathtaking mountain views and professional service.",
    },
    {
      title: "Accommodations",
      items: [
        "Deluxe Mountain Suites",
        "Executive Rooms",
        "Premium Villas",
        "Family Residences",
      ],
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
      image:
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description:
        "Retreat to luxurious accommodations featuring modern amenities and stunning panoramic views.",
    },
  ];

  return (
    <section
      id="amenities"
      className="py-24 bg-gradient-to-br from-emerald-800 to-emerald-950"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Premium Amenities
          </h2>
          <div className="w-20 h-1 bg-white/30 mx-auto mb-6"></div>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Experience luxury and comfort with our carefully curated amenities
            designed for your ultimate relaxation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((category, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center">
                    <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white mr-3">
                      <span className="text-white">{category.icon}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="p-6 flex-grow">
                <p className="text-white/80 mb-6 text-sm">
                  {category.description}
                </p>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-white/90 flex items-start group-hover:text-white transition-colors"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-400 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-6 pb-6 mt-auto">
                <button className="w-full py-3 px-4 border border-white/30 rounded-lg text-white hover:bg-white hover:text-emerald-900 transition-colors text-sm font-medium">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center justify-center p-1 rounded-full bg-white/10 backdrop-blur-sm mb-8">
            <span className="px-4 py-2 text-white/80 text-sm">
              Exclusive Benefits
            </span>
            <span className="px-4 py-2 bg-white text-emerald-900 rounded-full text-sm font-medium">
              For Resort Guests
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="text-white font-medium mb-2">Early Check-in</h4>
              <p className="text-white/70 text-sm">
                Subject to availability, enjoy early access to your
                accommodation
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <h4 className="text-white font-medium mb-2">Special Rates</h4>
              <p className="text-white/70 text-sm">
                Exclusive discounts on all resort amenities and services
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h4 className="text-white font-medium mb-2">
                Complimentary Upgrade
              </h4>
              <p className="text-white/70 text-sm">
                Room upgrades available based on occupancy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Amenities;
