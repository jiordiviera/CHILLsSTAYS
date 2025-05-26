import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/Apart1.png",
    "/images/Appart2.png",
    "/images/Appart3.png",
    "/images/13.jpg",
    "/images/16.jpg",
    "/images/15.jpg",
    "/images/14.jpg",
    "/images/16.jpg",
    "/images/13.jpg", 
];

export default function CarouselGroup() {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth;
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => scroll("right"), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Carousel container */}
      <div
        ref={containerRef}
        className="flex transition-all duration-700 overflow-x-auto scroll-smooth no-scrollbar"
      >
        {images.concat(images).map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`image-${idx}`}
            className="w-full sm:w-1/2 md:w-1/3 p-3 flex-shrink-0 object-cover h-64"
          />
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-90 p-2 rounded-full shadow-md"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-90 p-2 rounded-full shadow-md"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
