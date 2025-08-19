"use client";

import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="relative z-10 max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
      <Link href="/">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          🚀 MyWebsite
        </h1>
      </Link>

      {/* Gap fix here */}
      <nav className="flex items-center gap-6">
        <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
          Home
        </Link>
        <Link href="/events" className="text-gray-700 hover:text-blue-600 transition">
          Events
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;