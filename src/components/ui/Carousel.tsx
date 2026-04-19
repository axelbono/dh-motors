import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CarouselProps {
  images: string[];
  autoPlayInterval?: number; // Interval in milliseconds for auto-play
}

const Carousel: React.FC<CarouselProps> = ({ images, autoPlayInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    // Start auto-play
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoPlayInterval);

    // Clear interval on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [images.length, autoPlayInterval]);

  const goToNext = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current); // Clear current interval on manual interaction
    }
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    // Restart auto-play after a short delay to allow user interaction
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoPlayInterval);
  };

  const goToPrevious = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current); // Clear current interval on manual interaction
    }
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    // Restart auto-play after a short delay
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoPlayInterval);
  };

  if (images.length === 0) {
    return (
      <div className="w-full aspect-video bg-black-2 border border-border flex items-center justify-center relative overflow-hidden">
        <p className="text-muted">No images to display</p>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video bg-black-2 border border-border flex items-center justify-center overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Carousel image ${currentIndex + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }} // Slower transition for slow rotation
        />
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 z-10 p-2 bg-black-3 bg-opacity-50 hover:bg-opacity-75 rounded-full text-white transition-colors duration-200"
        aria-label="Previous image"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 z-10 p-2 bg-black-3 bg-opacity-50 hover:bg-opacity-75 rounded-full text-white transition-colors duration-200"
        aria-label="Next image"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 z-10 flex space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (intervalRef.current) {
                clearInterval(intervalRef.current);
              }
              setCurrentIndex(idx);
              intervalRef.current = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
              }, autoPlayInterval);
            }}
            className={`h-2 w-2 rounded-full ${
              currentIndex === idx ? 'bg-orange' : 'bg-gray-400'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
