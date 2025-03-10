import React, { useState } from 'react'

const Navbar = () => {
    const [isOpen , setIsOpen] = useState(false)
    return (
        <div>
            <nav className="bg-white shadow-md rounded-full mx-4 my-2 p-2 flex items-center justify-between">
                <div className="flex items-center">
                    <button className="text-2xl p-2" onClick={() => setIsOpen(!isOpen)}>
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="relative group">
                        <button className="text-gray-700 hover:text-gray-900">Product <i className="fas fa-chevron-down"></i></button>
                        <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-2">
                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 1</a>
                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 2</a>
                        </div>
                    </div>
                    <div className="relative group">
                        <button className="text-gray-700 hover:text-gray-900">Customers <i className="fas fa-chevron-down"></i></button>
                        <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-2">
                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 1</a>
                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 2</a>
                        </div>
                    </div>
                    <div className="relative group">
                        <button className="text-gray-700 hover:text-gray-900">Resources <i className="fas fa-chevron-down"></i></button>
                        <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-2">
                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 1</a>
                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 2</a>
                        </div>
                    </div>
                    <div className="relative group">
                        <button className="text-gray-700 hover:text-gray-900">About us <i className="fas fa-chevron-down"></i></button>
                        <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-2">
                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 1</a>
                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 2</a>
                        </div>
                    </div>
                    <button className="text-gray-700 hover:text-gray-900">Plans</button>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="text-orange-500 border border-orange-500 rounded-full px-4 py-2 hover:bg-orange-100">Login</button>
                    <button className="bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-600">Request a Demo</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
