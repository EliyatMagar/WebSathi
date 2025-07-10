import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6 sm:py-8">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-center md:text-left">
                        <p className="text-sm sm:text-base">
                            &copy; {new Date().getFullYear()} Web Sathi. All rights reserved.
                        </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                        <p className="text-sm sm:text-base">
                            Follow us on:
                        </p>
                        <div className="flex gap-3 sm:gap-4">
                            <a 
                                href="https://twitter.com" 
                                className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm sm:text-base"
                                aria-label="Twitter"
                            >
                                Twitter
                            </a>
                            <a 
                                href="https://facebook.com" 
                                className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm sm:text-base"
                                aria-label="Facebook"
                            >
                                Facebook
                            </a>
                            <a 
                                href="https://instagram.com" 
                                className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm sm:text-base"
                                aria-label="Instagram"
                            >
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-700 hidden sm:block">
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                        <a href="/privacy" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-200">
                            Privacy Policy
                        </a>
                        <a href="/terms" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-200">
                            Terms of Service
                        </a>
                        <a href="/contact" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-200">
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
