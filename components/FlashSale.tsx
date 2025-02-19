"use client";

import { useState, useEffect } from 'react';

const FlashSale = () => {
  const [timeLeft, setTimeLeft] = useState<number>(3600); // Initial countdown set to 1 hour (3600 seconds)
  const [isSaleActive, setIsSaleActive] = useState<boolean>(true);

  // Function to update the countdown
  useEffect(() => {
    if (!isSaleActive) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          setIsSaleActive(false); // Sale ends when the timer hits 0
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [isSaleActive]);

  // Convert seconds into hours, minutes, seconds format
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <section className="bg-primary text-white py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Flash Sale Title with Bebas Font */}
        <h2 className="text-3xl sm:text-4xl font-bebas mb-4">⚡ Flash Sale - Limited Time Offer!</h2>
        
        {/* Sale Timer with Bebas Font */}
        <div className="text-xl sm:text-2xl font-bebas font-bold mb-6">
          <span>Hurry! Only </span>
          <span className="text-accent">{formatTime(timeLeft)}</span>
          <span> left to grab amazing discounts!</span>
        </div>
        
        {/* Call to Action Button */}
        {isSaleActive ? (
          <a
            href="/shop"
            className="bg-accent text-primary px-8 py-3 rounded-full text-lg hover:bg-opacity-80 transition"
          >
            Shop Now and Save Big!
          </a>
        ) : (
          <div className="text-lg font-semibold text-accent mt-4">
            The flash sale has ended! Stay tuned for future offers.
          </div>
        )}
      </div>
    </section>
  );
};

export default FlashSale;
