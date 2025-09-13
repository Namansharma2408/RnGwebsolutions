import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-permanent-background  text-gray-300 py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between gap-8">
                    {/* Left Section - Brand and Email Signup */}
                    <div className="flex-1 max-w-md">
                        <h2 className="text-white text-2xl font-bold mb-4">
                            R&G WEB SOLUTIONS
                        </h2>
                        <p className="text-gray-400 mb-6">
                            Get started now try our product
                        </p>

                        {/* Email Subscription */}
                        <div className="flex bg-permanent-background border-2 border-gray-400 rounded-full p-1 transition-all duration-300 ease-in-out hover:border-blue-400 focus-within:border-blue-400 focus-within:shadow-lg focus-within:shadow-blue-500/20">
                            <input
                                type="email"
                                placeholder="Enter your email here"
                                className="flex-1 px-4 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none border-none transition-all duration-300 ease-in-out focus:placeholder-gray-300"
                            />
                            <button className="p-3 bg-[#1A73E8] hover:bg-blue-700 rounded-full transition-all duration-300 ease-in-out flex items-center justify-center hover:scale-110 active:scale-95 hover:shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right transition-all duration-300 ease-in-out hover:translate-x-1">
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Right Section - Links */}
                    <div className="flex-1">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Support Column */}
                            <div>
                                <h3 className="text-white font-semibold mb-4">Support</h3>
                                <ul className="space-y-3">
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 ease-in-out hover:translate-x-2 block">
                                            Help centre
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 ease-in-out hover:translate-x-2 block">
                                            Account information
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 ease-in-out hover:translate-x-2 block">
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 ease-in-out hover:translate-x-2 block">
                                            Contact us
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Help and Solution Column */}
                            <div>
                                <h3 className="text-white font-semibold mb-4">Help and Solution</h3>
                                <ul className="space-y-3">
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 ease-in-out hover:translate-x-2 block">
                                            Talk to support
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 ease-in-out hover:translate-x-2 block">
                                            Support docs
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 ease-in-out hover:translate-x-2 block">
                                            System status
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 ease-in-out hover:translate-x-2 block">
                                            Covid responde
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Product Column */}
                            <div>
                                <h3 className="text-white font-semibold mb-4">Product</h3>
                                <ul className="space-y-3">
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 ease-in-out hover:translate-x-2 block">
                                            Update
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 ease-in-out hover:translate-x-2 block">
                                            Security
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 ease-in-out hover:translate-x-2 block">
                                            Beta test
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 ease-in-out hover:translate-x-2 block">
                                            Pricing product
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export { Footer }