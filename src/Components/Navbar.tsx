import React from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
    return (
        <nav className="bg-orange-700 text-white py-3 shadow-md static w-full z-10">
            <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">छत्रपती शिवाजी महाराज</h1>
                <ul className="flex space-x-6">
                    <li><Link to={"/"} className="hover:text-gray-300">मुख्यपृष्ठ</Link></li>
                    <li><Link to={"/history"} className="hover:text-gray-300">इतिहास</Link></li>
                    <li><Link to={"/achievements"} className="hover:text-gray-300">यश</Link></li>
                    <li><Link to={"/gallery"} className="hover:text-gray-300">गॅलरी</Link></li>
                    <li><Link to={"/Contact"} className="hover:text-gray-300">संपर्क</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
