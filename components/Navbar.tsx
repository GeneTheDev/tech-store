"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";

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
    <Navbar className="bg-[#121212] text-white shadow-lg">
      <NavbarBrand>
        <AcmeLogo />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="text-gray-300 hover:text-accent transition" href="#">
            Bags
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            className="text-accent border-b-2 border-accent pb-1"
            aria-current="page"
            href="#"
          >
            Accessories
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-gray-300 hover:text-accent transition" href="#">
            Sale
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-gray-300 hover:text-accent transition" href="#">
            Special Prices
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-gray-300 hover:text-accent transition" href="#">
            Collections
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-gray-300 hover:text-accent transition" href="#">
            Cromia World
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link className="text-gray-300 hover:text-accent transition" href="#">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            href="#"
            className="bg-accent text-primary px-4 py-2 rounded-md hover:bg-opacity-80 transition"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
