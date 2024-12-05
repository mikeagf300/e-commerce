// components/Hero.tsx

import Link from 'next/link';

const Hero = () => {
    return (
        <header className="relative bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white h-72 flex flex-col items-center justify-center rounded-2xl my-3 overflow-hidden">
            {/* Imagen de fondo */}
            <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?shopping')" }}></div>
            
            <div className="relative z-10 text-center px-4">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                    Welcome to Miguel's Market!
                </h1>
                <p className="text-xl md:text-2xl mb-8">
                    Discover the best products at amazing prices. Find your next favorite item today!
                </p>
                <Link
                    href="/products"
                    className="px-8 py-3 bg-white text-indigo-600 rounded-full text-xl font-semibold hover:bg-indigo-600 hover:text-white transition duration-300"
                >
                    Go to Products
                </Link>
            </div>
        </header>
    );
};

export default Hero;
