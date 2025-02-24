function Gallery() {
  const images = [
    {
      url: "https://placehold.co/800x600/emerald/white?text=Infinity+Pool",
      alt: "Luxury Pool",
      title: "Infinity Pool",
    },
    {
      url: "https://placehold.co/800x600/emerald/white?text=Executive+Suite",
      alt: "Premium Suite",
      title: "Executive Suite",
    },
    {
      url: "https://placehold.co/800x600/emerald/white?text=Gourmet+Restaurant",
      alt: "Fine Dining",
      title: "Gourmet Restaurant",
    },
    {
      url: "https://placehold.co/800x600/emerald/white?text=Grand+Ballroom",
      alt: "Event Space",
      title: "Grand Ballroom",
    },
    {
      url: "https://placehold.co/800x600/emerald/white?text=Recreation+Area",
      alt: "Activities",
      title: "Recreation Area",
    },
    {
      url: "https://placehold.co/800x600/emerald/white?text=Mountain+Vista",
      alt: "Scenic View",
      title: "Mountain Vista",
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-16 text-emerald-900">
          Property Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg group"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
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
