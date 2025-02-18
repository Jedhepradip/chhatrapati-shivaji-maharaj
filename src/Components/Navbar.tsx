import React from 'react';
import logo from "../assets/Chhatrapti Shivaji Maharaj Img.webp"
const Navbar: React.FC = () => {
    return (
        <nav className="bg-orange-700 text-white py-4 shadow-md top-0 left-0 w-full z-10">
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center space-x-4">
                    <img
                        src={logo}
                    alt="Maharaj Logo"
                    className="w-10 h-10 rounded-full object-cover"
                    />
                    <h1 className="text-3xl font-bold text-white">छत्रपती शिवाजी महाराज</h1>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
