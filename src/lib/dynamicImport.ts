import dynamic from 'next/dynamic'

// Specific dynamic imports for components
export const DynamicServicesGrid = dynamic(() => import('@/components/sections/ServicesGrid'));
export const DynamicTermsSection = dynamic(() => import('@/components/sections/TermsSection'));
export const DynamicHomeServicesSection = dynamic(() => import('@/components/sections/HomeServicesSection'));
export const DynamicContactSection = dynamic(() => import('@/components/sections/ContactSection'));
export const DynamicTeamSection = dynamic(() => import('@/components/sections/TeamSection'));
