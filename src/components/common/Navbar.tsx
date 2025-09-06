"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { useTheme } from '@/contexts/ThemeContext'  // Use the global theme context
import {Logo} from "@/components";

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

// Style configurations (updated to use CSS variables for theme-awareness and vibrancy)
const styles = {
    nav: 'w-full max-w-6xl mx-auto px-6 py-4 h-fit ',
    container: 'flex items-center justify-between',
    logo: {
        container: 'flex items-center',
        title: 'text-2xl font-bold',
        subtitle: 'text-sm font-normal'
    },
    navigation: {
        container: 'hidden md:flex items-center space-x-6',
        item: {
            base: 'flex items-center space-x-2 transition-colors duration-200 px-4 py-2 rounded-lg',
            active: 'text-foreground bg-background hover:bg-foreground/20 hover:text-foreground/80',
            inactive: 'text-foreground bg-background hover:bg-foreground/20 hover:text-foreground/80'
        }
    },
    mobile: {
        container: 'md:hidden',
        button: 'text-foreground hover:text-red/80 focus:outline-none'
    }
}

const Navbar = () => {
    const [activeItem, setActiveItem] = useState('vision');
    useTheme();  // Get current theme for dynamic behavior

    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                {/* Logo Section */}
                <Logo/>

                {/* Navigation Items */}
                <div className={styles.navigation.container}>
                    {navigationItems.map((item) => (
                        <Link
                            key={item.id}
                            href={item.href}
                            onClick={() => setActiveItem(item.id)}
                            className={`${styles.navigation.item.base} ${activeItem === item.id
                                    ? styles.navigation.item.active
                                    : styles.navigation.item.inactive
                                }`}
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className={styles.mobile.container}>
                    <button className={styles.mobile.button}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export { Navbar }