"use client";

import { useState } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

export default function NoticeBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-pink-500 text-white text-sm px-4 py-2 flex flex-col md:flex-row justify-between items-center gap-2">
      {/* Promo message */}
      <div className="text-center md:text-left flex-1">
        🎉 20% Off on All Digital Marketing Services! &nbsp;
        <a href="/services" className="underline font-semibold">Explore Now</a>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-4">
        <a href="https://www.facebook.com/profile.php?id=61577809307474" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com/websathi" target="_blank" rel="noopener noreferrer" className="hover:text-pink-200">
          <FaInstagram />
        </a>
        <a href="https://wa.me/9779765306743" target="_blank" rel="noopener noreferrer" className="hover:text-green-100">
          <FaWhatsapp />
        </a>
        <a href="https://linkedin.com/company/websathi" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
          <FaLinkedinIn />
        </a>
      </div>

      {/* Close Button */}
      <button
        onClick={() => setVisible(false)}
        className="text-white hover:text-black text-lg ml-2 md:ml-4"
        aria-label="Dismiss Notice"
      >
        ✖
      </button>
    </div>
  );
}
