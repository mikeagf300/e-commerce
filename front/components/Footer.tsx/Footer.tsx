"use client";

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// Componente Footer que contiene enlaces rápidos, información de contacto y redes sociales
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap justify-between gap-10">
                    {/* Quick Links Section */}
                    <div className="flex-1 min-w-[250px]">
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><a href="/products" className="hover:text-yellow-400">Shop</a></li>
                            <li><a href="/about" className="hover:text-yellow-400">About Us</a></li>
                            <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
                            <li><a href="/faq" className="hover:text-yellow-400">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Contact Us Section */}
                    <div className="flex-1 min-w-[250px]">
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                        <p><FaEnvelope className="inline mr-2" /> support@ecommerce.com</p>
                        <p>+1 234 567 890</p>
                    </div>

                    {/* Social Media Section */}
                    <div className="flex-1 min-w-[250px]">
                        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-6">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400">
                                <FaFacebook size={30} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400">
                                <FaTwitter size={30} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400">
                                <FaInstagram size={30} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400">
                                <FaLinkedin size={30} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center text-sm">
                    <p>&copy; 2024 Ecommerce. All rights reserved.</p>
                    <p className="mt-2">Terms & Conditions | Privacy Policy</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
