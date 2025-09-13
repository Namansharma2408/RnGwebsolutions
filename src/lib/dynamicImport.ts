import dynamic from 'next/dynamic';

// Specific dynamic imports for components
export const DynamicServicesGrid = dynamic(() => import('@/components/sections/ServicesGrid'), { ssr: true });
export const DynamicTermsSection = dynamic(() => import('@/components/sections/TermsSection'), { ssr: true });
export const DynamicHomeServicesSection = dynamic(() => import('@/components/sections/HomeServicesSection'), { ssr: true });
export const DynamicContactSection = dynamic(() => import('@/components/sections/ContactSection'), { ssr: true });
export const DynamicTeamSection = dynamic(() => import('@/components/sections/TeamSection'), { ssr: true });
