import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white py-10 mt-28">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8     max-w-full w-[85%] mx-20">
        {/* Column 1: About Us */}
        <div>
          <h2 className="text-lg font-semibold mb-4">About Us</h2>
          <ul className="space-y-2 text-sm">
            <li>📍 123 Karachi St., ArtCity, AC 45678</li>
            <li>📧 support@exclusive.com</li>
            <li>📞 +92 3333333333</li>
          </ul>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Customer Service */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Customer Service</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm hover:underline">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Stay Connected */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Stay Connected</h2>
          <p className="text-sm mb-4">
            Subscribe to our newsletter for updates and special offers.
          </p>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 bg-slate-200 text-black rounded focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center border-t border-gray-700 pt-4 text-sm text-gray-400">
        &copy; Copyright Exclusice. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
