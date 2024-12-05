"use client";

import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-gray-50 text-gray-800">
 {/* Introducción con el título de la página y una breve descripción */}
            <section className="bg-blue-600 text-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl font-semibold mb-4">About Us</h1>
                    <p className="text-lg mb-6">
                        Learn more about our journey, mission, and what makes us stand out in the world of e-commerce.
                    </p>
                    <Image
                        src="https://th.bing.com/th/id/R.b36291d11dc9bde9fa995067d62e2e76?rik=1%2fkKzJwzxaXaPg&pid=ImgRaw&r=0"
                        alt="About Us"
                        width={500}  // Definir un ancho específico
                        height={300} // Definir una altura específica
                        className="rounded-lg shadow-lg w-full h-auto"
                    />
                </div>
            </section>

             {/* Información de la empresa con el relato de la historia y lo que hacen */}
            <section className="container mx-auto py-16 px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold">Our Story</h2>
                    <p className="text-lg text-gray-600 mt-4">
                        At E-commerce Platform, we started with the goal of making shopping easier, faster, and more affordable. Our team works relentlessly to bring you a wide selection of products that fit your needs.
                    </p>
                </div>
                <div className="text-center">
                    <h3 className="text-2xl font-semibold mb-4">What We Do</h3>
                    <p className="text-lg text-gray-600">
                        We offer a diverse catalog of products, ranging from electronics to home essentials. Our goal is to provide an outstanding shopping experience, ensuring customer satisfaction through quality, variety, and affordability.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
