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
    },
    {
      title: "Dining",
      items: [
        "Fine Dining Restaurant",
        "Skyline Lounge",
        "In-Room Dining",
        "Private Chef Service",
      ],
    },
    {
      title: "Events",
      items: [
        "Grand Ballroom",
        "Executive Meeting Rooms",
        "Garden Pavilion",
        "Wedding Terrace",
      ],
    },
    {
      title: "Accommodations",
      items: [
        "Deluxe Mountain Suites",
        "Executive Rooms",
        "Premium Villas",
        "Family Residences",
      ],
    },
  ];

  return (
    <section id="amenities" className="py-24 bg-emerald-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-16 text-emerald-100">
          Premium Amenities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {amenities.map((category, index) => (
            <div key={index} className="group">
              <h3 className="text-xl font-medium mb-6 text-emerald-100">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-emerald-200 group-hover:text-white transition-colors"
                  >
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
