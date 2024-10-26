import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          &copy; 2023{" "}
          <a href="#" className="hover:underline text-4xl font-serif">
            CP
          </a>
          . All Rights Reserved.
        </span>
        <div className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <Link href="#" className="hover:underline me-4 md:me-6">
            About
          </Link>
          <Link href="#" className="hover:underline me-4 md:me-6">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline me-4 md:me-6">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};
export { Footer };
