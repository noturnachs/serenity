import { useState, useEffect } from "react";

function OptimizedImage({
  src,
  alt,
  className = "",
  skeletonClassName = "",
  priority = false,
}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (priority) {
      const img = new Image();
      img.src = src;
      img.onload = () => setImageLoaded(true);
      img.onerror = () => setError(true);
    }
  }, [src, priority]);

  const handleLoad = () => {
    setImageLoaded(true);
  };

  const handleError = () => {
    setError(true);
  };

  return (
    <div className={`relative overflow-hidden ${skeletonClassName}`}>
      {!imageLoaded && !error && (
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 to-emerald-200 animate-pulse">
          <div
            className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"
            style={{
              backgroundSize: "200% 100%",
              animation: "shimmer 1.5s infinite",
            }}
          />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${
          imageLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? "eager" : "lazy"}
      />
    </div>
  );
}

export default OptimizedImage;
