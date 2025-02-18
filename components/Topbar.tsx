import React from "react";

const Topbar = () => {
  return (
    <div className="font-bebas flex items-center justify-between p-3 bg-[#1E1E1E] text-white text-sm">
      <div>
        <p>🚀 Free Shipping on Orders Over $50!</p>
      </div>
      <div className="flex gap-4">
        <a href="/support" className="hover:text-accent transition">Customer Support</a>
        <a href="/track-order" className="hover:text-accent transition">Track Your Order</a>
        <a href="/login" className="hover:text-accent transition">Sign In</a>
      </div>
    </div>
  );
};

export default Topbar;
