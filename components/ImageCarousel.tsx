"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    if (images.length <= 1 || isLightboxOpen) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500); // Crossfade every 3.5 seconds
    
    return () => clearInterval(interval);
  }, [images.length, isLightboxOpen]);

  const handlePrev = useCallback((e?: React.MouseEvent | KeyboardEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const handleNext = useCallback((e?: React.MouseEvent | KeyboardEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsLightboxOpen(false);
      if (e.key === "ArrowLeft") handlePrev(e);
      if (e.key === "ArrowRight") handleNext(e);
    };

    window.addEventListener("keydown", handleKeyDown);
    // Prevent scrolling when lightbox is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isLightboxOpen, handlePrev, handleNext]);

  return (
    <>
      <div 
        className="relative w-full h-full overflow-hidden group rounded-2xl sm:rounded-[2rem] cursor-pointer"
        onClick={() => setIsLightboxOpen(true)}
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex]}
              alt={`${alt} - Image ${currentIndex + 1}`}
              fill
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              referrerPolicy="no-referrer"
              unoptimized={true}
            />
          </motion.div>
        </AnimatePresence>

        {/* Apple-style pagination dots */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
            {images.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1.5 rounded-full transition-all duration-500 backdrop-blur-md shadow-sm ${
                  idx === currentIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl"
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 backdrop-blur-md"
              onClick={(e) => {
                e.stopPropagation();
                setIsLightboxOpen(false);
              }}
            >
              <X size={24} />
            </button>

            {/* Previous Button */}
            {images.length > 1 && (
              <button
                className="absolute left-4 sm:left-8 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 backdrop-blur-md hidden sm:block"
                onClick={handlePrev}
              >
                <ChevronLeft size={32} />
              </button>
            )}

            {/* Main Image */}
            <div 
              className="relative w-full h-full max-w-7xl max-h-[90vh] mx-4 sm:mx-24 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <Image
                    src={images[currentIndex]}
                    alt={`${alt} - Image ${currentIndex + 1} (Fullscreen)`}
                    fill
                    className="object-contain"
                    referrerPolicy="no-referrer"
                    sizes="100vw"
                    priority
                    unoptimized={true}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Mobile Navigation Overlays */}
              {images.length > 1 && (
                <>
                  <div 
                    className="absolute left-0 top-0 bottom-0 w-1/3 sm:hidden z-40"
                    onClick={handlePrev}
                  />
                  <div 
                    className="absolute right-0 top-0 bottom-0 w-1/3 sm:hidden z-40"
                    onClick={handleNext}
                  />
                </>
              )}
            </div>

            {/* Next Button */}
            {images.length > 1 && (
              <button
                className="absolute right-4 sm:right-8 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 backdrop-blur-md hidden sm:block"
                onClick={handleNext}
              >
                <ChevronRight size={32} />
              </button>
            )}

            {/* Lightbox Pagination */}
            {images.length > 1 && (
              <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-50">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(idx);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
