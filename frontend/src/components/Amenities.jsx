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
      icon: "🏊‍♂️",
    },
    {
      title: "Dining",
      items: [
        "Fine Dining Restaurant",
        "Skyline Lounge",
        "In-Room Dining",
        "Private Chef Service",
      ],
      icon: "🍽️",
    },
    {
      title: "Events",
      items: [
        "Grand Ballroom",
        "Executive Meeting Rooms",
        "Garden Pavilion",
        "Wedding Terrace",
      ],
      icon: "🎉",
    },
    {
      title: "Accommodations",
      items: [
        "Deluxe Mountain Suites",
        "Executive Rooms",
        "Premium Villas",
        "Family Residences",
      ],
      icon: "🏠",
    },
  ];

  return (
    <section id="amenities" className="py-24 bg-emerald-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-light text-center mb-4 text-white">
          Premium Amenities
        </h2>
        <p className="text-center text-white/80 mb-16 max-w-2xl mx-auto font-light">
          Experience luxury and comfort with our carefully curated amenities designed for your ultimate relaxation
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((category, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-none border-b-2 border-transparent hover:border-white transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3 text-emerald-800">{category.icon}</span>
                <h3 className="text-xl font-medium text-emerald-900">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-emerald-800 group-hover:text-emerald-900 transition-colors flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-emerald-700 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Amenities;
