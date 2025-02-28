"use client";

import React from "react";
import { Heart } from "lucide-react";

const Topbar = () => {
  return (
    <div className="bg-[#1E1E1E] text-white text-sm">
      <div className="max-w-[1440px] mx-auto px-1 flex items-center justify-between p-3">
        <p>🚀 Free Shipping on Orders Over $50!</p>
        <div className="flex gap-4 items-center">
          <a href="/wish-list" className="flex items-center gap-1 hover:text-accent transition">
            <Heart className="w-4 h-4 text-red-500" />
            Wishlist
          </a>
          <a href="/login" className="hover:text-accent transition">Sign In</a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
