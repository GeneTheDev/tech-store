"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Badge,
} from "@heroui/react";
import { ShoppingCart } from "lucide-react";

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
  return (
    <Navbar className="bg-[#121212] font-bebas text-white shadow-lg">
      <NavbarBrand>
        <AcmeLogo />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="text-gray-300 hover:text-accent transition" href="/watches">
            Smart Watches
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            className="text-accent border-b-2 border-accent pb-1"
            aria-current="page"
            href="/earbuds"
          >
            Earbuds & Audio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-gray-300 hover:text-accent transition" href="/sale">
            Offers & Deals
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
        <NavbarItem>
          <Link className="text-gray-300 hover:text-accent transition" href="/reviews">
            Reviews
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
  <NavbarItem>
    <Button
      as={Link}
      href="/cart"
      className="relative bg-transparent p-2 rounded-md hover:bg-opacity-80 transition"
    >
      <ShoppingCart className="text-gray-300 hover:text-accent w-6 h-6" />
      {/* Badge for cart count, adjust dynamically */}
      <Badge
        color="danger"
        className="absolute -top-1 -right-1 text-xs px-2 py-1"
      >
        3 {/* Replace with dynamic cart count */}
      </Badge>
    </Button>
  </NavbarItem>
</NavbarContent>
    </Navbar>
  );
}
