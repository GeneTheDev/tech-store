import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bebas text-accent">Tech Store</h2>
          <p className="text-gray-400">
            Your go-to store for the latest and greatest in technology.
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-2">
          <h3 className="text-xl font-poppins text-accent">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/about" className="hover:text-accent transition">About Us</a></li>
            <li><a href="/products" className="hover:text-accent transition">Products</a></li>
            <li><a href="/contact" className="hover:text-accent transition">Contact</a></li>
            <li><a href="/faq" className="hover:text-accent transition">FAQ</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-poppins text-accent">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-accent transition">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-accent transition">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-accent transition">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-accent transition">
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-poppins text-accent">Stay Updated</h3>
          <p className="text-gray-400">Subscribe to our newsletter for the latest tech updates and deals.</p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg bg-primary text-white placeholder-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-accent text-primary font-semibold px-6 py-2 rounded-lg hover:bg-opacity-80 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Tech Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
