import { useState } from 'react';

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Function to close the banner
  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="bg-accent text-primary py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Promo Text */}
        <div className="text-white text-lg sm:text-xl font-semibold">
          <span>Exclusive Offer: </span>
          <span>Get 20% off on all tech products! Use code: </span>
          <strong>TECH20</strong>
        </div>

        {/* CTA Button */}
        <div className="space-x-4">
          <a
            href="/shop"
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-80 transition"
          >
            Shop Now
          </a>
          <button
            onClick={handleClose}
            className="text-white font-bold hover:text-accent transition"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
