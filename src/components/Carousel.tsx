import React, { useEffect, useRef } from "react";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  console.log("images", images);
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const maxScrollLeft =
          carouselRef.current.scrollWidth - carouselRef.current.clientWidth;

        if (carouselRef.current.scrollLeft >= maxScrollLeft) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          carouselRef.current.scrollBy({
            left: carouselRef.current.clientWidth,
            behavior: "smooth",
          });
        }
      }
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden">
      <div
        ref={carouselRef}
        className="flex justify-between mt-12 w-full"
        style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-1/6 md:w-1/6 lg:w-1/12"
            style={{ scrollSnapAlign: "center" }}
          >
            <img
              src={image}
              alt={`client-logo-${index}`}
              className="w-full/2 h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
