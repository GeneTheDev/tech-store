"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Badge,
  Input,
} from "@heroui/react";
import { ShoppingCart, Search, X } from "lucide-react";
import { useState, useEffect } from "react";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function NavbarComponent() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Ensure this only runs on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Mock API function (Replace with actual API call)
  const fetchSuggestions = async (query: string) => {
    setLoading(true);
    try {
      await new Promise((res) => setTimeout(res, 500));
      const mockData = [
        "Smart Watch Pro",
        "Wireless Earbuds",
        "Bluetooth Speaker",
        "Charging Cable",
        "Gaming Headset",
        "Noise Cancelling Headphones",
      ];
      const filtered = mockData.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
    setLoading(false);
  };

  // Debounce function to limit API calls
  useEffect(() => {
    if (query.length > 1) {
      const timeout = setTimeout(() => {
        fetchSuggestions(query);
      }, 300);
      return () => clearTimeout(timeout);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() !== "") {
      window.location.href = `/search?q=${query}`;
    }
  };

  if (!isClient) return null; // Prevent hydration mismatch

  return (
    <Navbar className="bg-[#121212] font-bebas text-white shadow-lg">
      <NavbarBrand>
        <AcmeLogo />
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-x-9" justify="center">
        <NavbarItem>
          <Link className="text-gray-300 hover:text-accent transition" href="/watches">
            Smart Watches
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-gray-300 hover:text-accent transition" href="/earbuds">
            Earbuds & Audio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-gray-300 hover:text-accent transition" href="/accessories">
            Accessories
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-gray-300 hover:text-accent transition" href="/new-arrivals">
            New Arrivals
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <button
            className="p-2 rounded-md bg-transparent hover:bg-gray-800 transition"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <Search className="text-gray-300 hover:text-accent w-6 h-6" />
          </button>
        </NavbarItem>

        <NavbarItem>
          <Button as={Link} href="/cart" className="relative bg-transparent p-2 rounded-md hover:bg-opacity-80 transition">
            <ShoppingCart className="text-gray-300 hover:text-accent w-6 h-6" />
            <Badge color="danger" className="absolute -top-1 -right-1 text-xs px-2 py-1">
              3
            </Badge>
          </Button>
        </NavbarItem>
      </NavbarContent>

      {searchOpen && (
        <div className="absolute top-full left-0 w-full bg-[#121212] shadow-md p-4">
          <form onSubmit={handleSearch} className="flex items-center gap-2 relative">
            <Input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for products..."
              className="flex-1 px-4 py-2 rounded-md text-black"
            />
            {query && (
              <button
                type="button"
                className="absolute right-12 text-gray-500 hover:text-red-500"
                onClick={() => setQuery("")}
              >
                <X className="w-5 h-5" />
              </button>
            )}
            <Button type="submit" className="bg-accent text-primary px-6 py-2 rounded-md">
              Search
            </Button>
          </form>

          {query && suggestions.length > 0 && (
            <ul className="mt-2 bg-white text-black rounded-md shadow-md overflow-hidden">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => {
                    setQuery(suggestion);
                    setSearchOpen(false);
                    window.location.href = `/search?q=${suggestion}`;
                  }}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}

          {loading && (
            <p className="mt-2 text-gray-400 text-sm">Searching suggestions...</p>
          )}
        </div>
      )}
    </Navbar>
  );
}
