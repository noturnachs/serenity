function Gallery() {
  const images = [
    { url: "/resort-pool.jpg", alt: "Luxury Pool", title: "Infinity Pool" },
    { url: "/resort-room.jpg", alt: "Premium Suite", title: "Executive Suite" },
    {
      url: "/resort-restaurant.jpg",
      alt: "Fine Dining",
      title: "Gourmet Restaurant",
    },
    { url: "/resort-event.jpg", alt: "Event Space", title: "Grand Ballroom" },
    {
      url: "/resort-activity.jpg",
      alt: "Activities",
      title: "Recreation Area",
    },
    { url: "/resort-view.jpg", alt: "Scenic View", title: "Mountain Vista" },
  ];

  return (
    <section id="gallery" className="py-24 bg-[var(--cream)]">
      {" "}
      <div className="container px-6">
        <h2 className="text-3xl font-semibold text-center mb-16 text-[var(--primary)]">
          Property Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <p className="text-white p-6 text-lg font-medium">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
