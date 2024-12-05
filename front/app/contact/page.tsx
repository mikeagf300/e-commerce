"use client";

import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
    return (
        <div className="bg-gray-50 text-gray-800">
            {/* Header */}
            <section className="bg-blue-600 text-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl font-semibold mb-4">Contact Us</h1>
                    <p className="text-lg mb-6">
                        We're here to help! Get in touch with us for any inquiries, feedback, or support.
                    </p>
                </div>
            </section>

            {/* Contact Information */}
            <section className="container mx-auto py-16 px-6">
                <div className="flex flex-col md:flex-row justify-center gap-10">
                    <div className="flex flex-col items-center">
                        <FaPhone className="text-4xl text-blue-600 mb-4" />
                        <h4 className="text-lg font-semibold mb-2">Phone</h4>
                        <p className="text-gray-600">+1 234 567 890</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaEnvelope className="text-4xl text-blue-600 mb-4" />
                        <h4 className="text-lg font-semibold mb-2">Email</h4>
                        <p className="text-gray-600">support@ecommerce.com</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaMapMarkerAlt className="text-4xl text-blue-600 mb-4" />
                        <h4 className="text-lg font-semibold mb-2">Address</h4>
                        <p className="text-gray-600">123 E-commerce St, City, Country</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
