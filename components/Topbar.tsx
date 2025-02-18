import React from "react";

const Topbar = () => {
  return (
    <div className="flex items-center justify-between p-3 bg-[#1E1E1E] text-white text-sm">
      <div>
        <p>🚀 Free Shipping on Orders Over $50</p>
      </div>
      <div className="flex gap-4">
        <a href="#" className="hover:text-accent transition">Help</a>
        <a href="#" className="hover:text-accent transition">Track Order</a>
        <a href="#" className="hover:text-accent transition">Sign In</a>
      </div>
    </div>
  );
};

export default Topbar;
