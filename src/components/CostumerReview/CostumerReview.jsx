"use client";

import { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const testimonials = [
  { id: 1, name: "Emma C.", title: "Pretty (Honest Review)", rating: 5, review: "When I discover a viral product of Rare...", image: "category4.webp" },
  { id: 2, name: "Aimen F.", title: "Obsessed", rating: 4, review: "I'm obsessed with this tinted lip oil! It leaves a beautiful...", image: "category3.webp" },
  { id: 3, name: "M S.", title: "Pillow Talk - nude pink", rating: 5, review: "This lipstick glides on effortlessly and has a lovely...", image: "category2.avif" },
  { id: 4, name: "Janna H.", title: "Very pretty", rating: 3, review: "Very satisfied", image: "category4.webp" },
  { id: 5, name: "Khadija U.", title: "Eidi well spent", rating: 5, review: "Loving this blush, color is so nice...", image: "category4.webp" },
  { id: 6, name: "Khadija U.", title: "Eidi well spent", rating: 2, review: "Loving this blush, color is so nice...", image: "category6.png" },
  { id: 7, name: "Khadija U.", title: "Eidi well spent", rating: 5, review: "Loving this blush, color is so nice...", image: "category4.webp" },
  { id: 8, name: "Khadija U.", title: "Eidi well spent", rating: 4, review: "Loving this blush, color is so nice...", image: "category4.webp" },
  { id: 9, name: "Khadija U.", title: "Eidi well spent", rating: 5, review: "Loving this blush, color is so nice...", image: "category5.webp" },
  { id: 10, name: "Khadija U.", title: "Eidi well spent", rating: 4, review: "Loving this blush, color is so nice...", image: "category4.webp" },
  { id: 11, name: "Khadija U.11", title: "Eidi well spent", rating: 3, review: "Loving this blush, color is so nice...", image: "category5.webp" },
];

const CostumerReview = () => {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [cardWidth, setCardWidth] = useState(250); // Adjusted width
  const gap = 16; // Gap between cards

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const newCardWidth = window.innerWidth < 768 ? containerWidth * 0.75 : 280; // Reduced width
        setCardWidth(newCardWidth);
        const totalWidth = testimonials.length * (newCardWidth + gap);
        setMaxScroll(Math.max(0, totalWidth - containerWidth + gap));
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const scrollLeft = () => {
    setScrollPosition((prev) => Math.max(prev - (cardWidth + gap), 0));
  };

  const scrollRight = () => {
    setScrollPosition((prev) => Math.min(prev + (cardWidth + gap), maxScroll));
  };

  return (
    <div className="relative max-w-6xl mx-auto px-4 py-16 ">
      <h2 style={{
        fontFamily: "'Garamond', serif",
        letterSpacing: '2px',
        color: '#2C3E50',
        textTransform: 'uppercase',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'
      }} className="text-center text-2xl font-bold">OUR CUSTOMER SPEAKS FOR US</h2>
      <p  style={{
                    fontFamily: "'Lora', serif",
                    color: '#7F8C8D'
                }} className="text-center text-gray-500 mb-4">PRODUCT REVIEWS</p>

      <div className="relative">
        <button
          onClick={scrollLeft}
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 shadow-md rounded-full z-10 ${scrollPosition === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={scrollPosition === 0}
        >
          <FaChevronLeft />
        </button>

        <div className="overflow-hidden " ref={containerRef}>
          <div
            className="flex gap-4 transition-transform duration-300  "
            style={{ transform: `translateX(-${scrollPosition}px)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white shadow-lg border border-gray-300  p-4 rounded-xl " style={{ minWidth: `${cardWidth}px`, height: "380px" }}>
                <img src={testimonial.image} alt={testimonial.name} className="h-56 w-full object-cover rounded-md" />
                <div className="mt-3">
                  <h3 className="font-bold">{testimonial.title}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.review}</p>
                  <div className="flex items-center mt-2 text-yellow-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} />

                    ))}
                  </div>
                  <p className="mt-2 font-semibold">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollRight}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 shadow-md rounded-full z-10 ${scrollPosition >= maxScroll ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={scrollPosition >= maxScroll}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default CostumerReview;
