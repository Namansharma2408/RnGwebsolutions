import dynamic from 'next/dynamic';

// Common Components
export const ThemeToggle = dynamic(() => import('./common/ThemeToggle').then(mod => mod.ThemeToggle));
export const Footer = dynamic(() => import('./common/Footer').then(mod => mod.Footer));
export const Navbar = dynamic(() => import('./common/Navbar').then(mod => mod.Navbar));
export const Logo = dynamic(() => import('./common/Logo').then(mod => mod.Logo));
export const FloatingIcon = dynamic(() => import('./common/FloatingIcon').then(mod => mod.FloatingIcon));
export const YouTubeEmbed = dynamic(() => import('./common/YoutubeVideo').then(mod => mod.YouTubeEmbed));

// Section Components
export const ServicesGrid = dynamic(() => import('./sections/ServicesGrid').then(mod => mod.default));
export const TermsSection = dynamic(() => import('./sections/TermsSection').then(mod => mod.default));
export const HomeServicesSection = dynamic(() => import('./sections/HomeServicesSection').then(mod => mod.default));
export const ContactSection = dynamic(() => import('./sections/ContactSection').then(mod => mod.default));
export const TeamSection = dynamic(() => import('./sections/TeamSection').then(mod => mod.default));