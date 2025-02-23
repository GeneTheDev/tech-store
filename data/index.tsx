import { useEffect, useState } from "react";

export const featuredProducts = [
  {
    title: "Smartwatch",
    description: "Premium design and features for a connected lifestyle.",
    imageUrl: "/images/smartwatch.jpg",
    link: "/shop-smartwatches",
    category: "Wearables", // Added category to match expected structure
  },
  {
    title: "Wireless Earbuds",
    description: "Crystal-clear sound with sleek design.",
    imageUrl: "/images/earbuds.jpg",
    link: "/shop-earbuds",
    category: "Audio",
  },
  {
    title: "Fitness Tracker",
    description: "Track your workouts and stay on top of your goals.",
    imageUrl: "/images/fitnesstracker.jpg",
    link: "/shop-fitness-tracker",
    category: "Wearables",
  },
  {
    title: "Fitness Tracker",
    description: "Track your workouts and stay on top of your goals.",
    imageUrl: "/images/fitnesstracker.jpg",
    link: "/shop-fitness-tracker",
    category: "Wearables",
  },
];

export const bestSellers = [
  {
    title: "Smartwatch",
    description: "Premium design and features for a connected lifestyle.",
    imageUrl: "/images/smartwatch.jpg",
    link: "/shop-smartwatches",
    category: "Wearables",
  },
  {
    title: "Wireless Earbuds",
    description: "Crystal-clear sound with sleek design.",
    imageUrl: "/images/earbuds.jpg",
    link: "/shop-earbuds",
    category: "Audio",
  },
  {
    title: "Fitness Tracker",
    description: "Track your workouts and stay on top of your goals.",
    imageUrl: "/images/fitnesstracker.jpg",
    link: "/shop-fitness-tracker",
    category: "Wearables",
  },
  {
    title: "Smart Glasses",
    description: "Tech meets fashion with smart eyewear.",
    imageUrl: "/images/glasses.jpg",
    link: "/shop-smart-glasses",
    category: "Wearables",
  },
];

export const productCategories = [
  {
    title: "Smartwatches",
    description: "Stay connected with our smartwatches.",
    imageUrl: "/images/smartwatch.jpg",
    link: "/shop-smartwatches",
  },
  {
    title: "Wireless Earbuds",
    description: "Crystal-clear sound with sleek design.",
    imageUrl: "/images/earbuds.jpg",
    link: "/shop-earbuds",
  },
  {
    title: "Fitness Trackers",
    description: "Track your workouts and stay on top of your goals.",
    imageUrl: "/images/fitnesstracker.jpg",
    link: "/shop-fitness-tracker",
  },
  {
    title: "Smart Glasses",
    description: "Tech meets fashion with smart eyewear.",
    imageUrl: "/images/glasses.jpg",
    link: "/shop-smart-glasses",
  },
  
  {
    title: "Smart Glasses",
    description: "Tech meets fashion with smart eyewear.",
    imageUrl: "/images/glasses.jpg",
    link: "/shop-smart-glasses",
  },
  
];

// ✅ Example of how to ensure client-specific logic does not break hydration
export const ClientComponent = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevents SSR mismatch

  return <div>Client-side content loaded!</div>;
};
