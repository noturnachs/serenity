import { useState } from "react";

function Gallery() {
  const [activeImage, setActiveImage] = useState(null);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      alt: "Luxury Pool",
      title: "Infinity Pool",
      description:
        "Our stunning infinity pool overlooks the mountains of Busay, offering a serene swimming experience with panoramic views.",
    },
    {
      url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      alt: "Premium Suite",
      title: "Executive Suite",
      description:
        "Spacious and elegantly appointed suites featuring modern amenities and breathtaking mountain views.",
    },
    {
      url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      alt: "Fine Dining",
      title: "Gourmet Restaurant",
      description:
        "Experience exquisite culinary creations prepared by our master chefs using locally-sourced ingredients.",
    },
    {
      url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      alt: "Event Space",
      title: "Grand Ballroom",
      description:
        "An elegant venue for weddings, corporate events, and special celebrations with customizable layouts.",
    },
    {
      url: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      alt: "Activities",
      title: "Recreation Area",
      description:
        "Enjoy a variety of activities including basketball, mini golf, and outdoor games for the whole family.",
    },
    {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      alt: "Scenic View",
      title: "Mountain Vista",
      description:
        "Take in the breathtaking views of Cebu City and the surrounding mountains from our scenic viewpoints.",
    },
  ];

  const categories = [
    { name: "All", count: images.length },
    { name: "Accommodations", count: 2 },
    { name: "Dining", count: 1 },
    { name: "Leisure", count: 2 },
    { name: "Events", count: 1 },
  ];

  const openLightbox = (index) => {
    setActiveImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setActiveImage(null);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction) => {
    const newIndex = (activeImage + direction + images.length) % images.length;
    setActiveImage(newIndex);
  };

  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Our Property
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Take a visual journey through our resort's stunning facilities and
            breathtaking surroundings
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center mt-8 gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-emerald-600 text-white"
                    : "bg-white text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 border border-gray-200"
                }`}
              >
                {category.name}{" "}
                <span className="text-xs opacity-70">({category.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden group rounded-xl shadow-md cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {image.title}
                </h3>
                <p className="text-white/80 text-sm line-clamp-2">
                  {image.description}
                </p>
                <div className="mt-4 flex items-center">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs">
                    View Larger
                  </span>
                </div>
              </div>

              {/* Image Number Badge */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-xs font-medium">
                {index + 1}/{images.length}
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 border border-emerald-600 text-emerald-600 bg-white rounded-lg hover:bg-emerald-600 hover:text-white transition-colors font-medium">
            View Complete Gallery
            <svg
              className="w-5 h-5 ml-2"
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
          </button>
        </div>

        {/* Featured Gallery Item */}
        <div className="mt-20 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-96">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Featured Resort View"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-emerald-600 text-white text-xs uppercase tracking-wider rounded-full">
                Featured
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Experience Serenity
              </h3>
              <p className="text-gray-600 mb-6">
                Our resort offers a perfect blend of luxury and natural beauty.
                Nestled in the mountains of Busay, Serenity provides a tranquil
                escape with modern amenities and breathtaking views. Whether
                you're seeking relaxation or adventure, our property has
                something for everyone.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full">
                  Mountain Views
                </span>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full">
                  Luxury Accommodations
                </span>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full">
                  Fine Dining
                </span>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full">
                  Event Spaces
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {activeImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <button
            onClick={() => navigateImage(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10"
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={() => navigateImage(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10"
          >
            <svg
              className="w-10 h-10"
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
          </button>

          <div className="max-w-5xl w-full">
            <div className="relative">
              <img
                src={images[activeImage].url}
                alt={images[activeImage].alt}
                className="w-full max-h-[80vh] object-contain"
              />
            </div>
            <div className="bg-black/50 p-6 mt-2 rounded-lg">
              <h3 className="text-white text-xl font-semibold mb-2">
                {images[activeImage].title}
              </h3>
              <p className="text-white/80">{images[activeImage].description}</p>
              <div className="mt-4 text-white/60 text-sm">
                Image {activeImage + 1} of {images.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
