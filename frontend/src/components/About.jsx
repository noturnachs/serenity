function About() {
  const features = [
    {
      title: "Exclusive Pools",
      description: "Private pools with stunning mountain views perfect for relaxation and gatherings.",
      icon: "🏊‍♂️",
    },
    {
      title: "Events Venue",
      description: "Versatile spaces for celebrations, corporate events, and special occasions.",
      icon: "✨",
    },
    {
      title: "Recreation",
      description: "Basketball court, mini golf, and more activities for the whole family.",
      icon: "⛳",
    },
  ];

  return (
    <section id="about" className="pt-50 pb-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl font-semibold mb-6">Welcome to Serenity</h2>
          <p className="text-gray-600 leading-relaxed">
            Rest houses with exclusive pool, Rooms, Event's Place, restaurant, basketball court, mini golf & more. Located in the scenic mountains of Busay, Cebu City, Serenity Farm Resort offers the perfect escape from the hustle and bustle of city life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center group">
              <div className="inline-block bg-gray-100 p-4 rounded-full mb-6">
                <span className="text-4xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-medium mb-4">
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

export default About; 