"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { Logo } from "@/components";

// Navigation items configuration (unchanged, but now theme-aware via styles)
const navigationItems = [
    {
        id: 'vision',
        label: 'Our Vision',
        href: '/',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
        )
    },
    {
        id: 'about',
        label: 'About Us',
        href: '/aboutus',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        id: 'contact',
        label: 'Contact Us',
        href: '/contactus',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        id: 'services',
        label: 'Services',
        href: '/services',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        )
    }
]

const Navbar = () => {
    const [activeItem, setActiveItem] = useState('vision');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <>
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo Section */}
                    <Logo />
                    

                    {/* Desktop Navigation Items */}
                    <div className='hidden md:flex items-center space-x-2 bg-foreground/10 px-2 py-2 rounded-full backdrop-blur-sm transition-all duration-300 ease-in-out hover:bg-foreground/15'>
                        {navigationItems.map((item) => (
                            <Link
                                key={item.id}
                                href={item.href}
                                onClick={() => setActiveItem(item.id)}
                                className={`flex items-center space-x-2 transition-all ease-in-out duration-300 px-4 py-2 rounded-full text-foreground bg-background hover:bg-foreground/20 hover:text-foreground/80 hover:scale-105 active:scale-95 ${
                                    activeItem === item.id ? 'bg-foreground/20 text-foreground scale-105 shadow-lg' : ''
                                }`}
                            >
                                <span className="transition-all duration-300 ease-in-out group-hover:rotate-12">{item.icon}</span>
                                <span className="transition-all duration-300 ease-in-out">{item.label}</span>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button 
                            onClick={toggleMobileMenu}
                            className="text-foreground hover:text-foreground/80 focus:outline-none p-2 transition-all duration-300 ease-in-out hover:scale-110 active:scale-95"
                        >
                            <svg className="w-6 h-6 transition-all duration-300 ease-in-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className='h-[100vh] w-full bg-background/60 backdrop-blur-sm fixed inset-0 z-50 transition-all duration-500 ease-in-out animate-in fade-in-0'>
                    <div className="flex flex-col items-center justify-center min-h-screen space-y-6 px-4 sm:px-6">
                        {/* Close Button */}
                        <button 
                            onClick={toggleMobileMenu}
                            className="self-end text-foreground hover:text-foreground/80 focus:outline-none p-2 transition-all duration-300 ease-in-out hover:scale-110 active:scale-95"
                        >
                            <svg className="w-6 h-6 transition-all duration-300 ease-in-out hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Mobile Navigation Items */}
                        <div className="flex flex-col space-y-4">
                            {navigationItems.map((item, index) => (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    onClick={() => {
                                        setActiveItem(item.id);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className={`flex items-center space-x-3 transition-all ease-in-out duration-500 px-4 sm:px-6 py-3 rounded-full text-foreground bg-background/90 backdrop-blur-sm border border-foreground/30 shadow-xl hover:bg-foreground/20 hover:text-foreground/80 hover:scale-105 hover:shadow-2xl active:scale-95 ${
                                        activeItem === item.id ? 'bg-foreground/30 text-foreground scale-105 shadow-2xl' : ''
                                    }`}
                                    style={{ 
                                        animationDelay: `${index * 100}ms`,
                                        animation: 'slideInFromRight 0.5s ease-out forwards'
                                    }}
                                >
                                    <span className="transition-all duration-300 ease-in-out group-hover:rotate-12">{item.icon}</span>
                                    <span className="text-lg transition-all duration-300 ease-in-out">{item.label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export { Navbar }