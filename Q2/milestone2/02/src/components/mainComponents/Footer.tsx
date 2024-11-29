import React from "react";

function Footer() {
  return (
    <footer>
      {/* <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:grid-cols-4     max-w-full w-[85%] mx-20"> */}
      <div id="footerContent">
        {/* Column 1: About Us */}
        <div id="aboutUs">
          <h2>About Us</h2>
          <ul>
            <li>📍 123 Karachi St., ArtCity, AC 45678</li>
            <li>📧 support@exclusive.com</li>
            <li>📞 +92 3333333333</li>
          </ul>
        </div>

        {/* Column 2: Quick Links */}
        <div id="links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Customer Service */}
        <div id="service">
          <h2>Customer Service</h2>
          <ul>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Shipping & Returns</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Stay Connected */}
        <div id="subscribe">
          <h2>Stay Connected</h2>
          <p>Subscribe to our newsletter for updates and special offers.</p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div id="footer">&copy; Copyright Exclusice. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
