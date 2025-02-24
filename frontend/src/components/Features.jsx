function Features() {
  const features = [
    {
      title: "Exclusive Pools",
      description: "Infinity pools with panoramic views",
      icon: "🏊‍♂️",
    },
    {
      title: "Luxury Suites",
      description: "Elegant mountain-view accommodations",
      icon: "🛏️",
    },
    {
      title: "Premier Events",
      description: "Sophisticated venues for all occasions",
      icon: "✨",
    },
    {
      title: "Recreation",
      description: "Premium leisure facilities",
      icon: "⛳",
    },
  ];

  return (
    <section id="features" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-16 text-emerald-900">
          Experience Excellence
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-2 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
