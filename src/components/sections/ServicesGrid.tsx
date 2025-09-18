import React from 'react';
import Image from 'next/image';
import CustomButton from './CustomButton';


const servicesData = [
    {
        id: 1,
        title: 'Web Design',
        description:
            'Custom, responsive, and visually appealing websites designed to match your brand and convert visitors into customers.',
        image: 'v1757449470/kevgx1qfxxoaiod9lofx.svg',
        route: 'web-design',
    },
    {
        id: 2,
        title: 'Hosting and Deployment',
        description:
            'Custom, responsive, and visually appealing websites designed to match your brand and convert visitors into customers.',
        image: 'v1757449471/jcugksw0rzywexxpn6ej.svg',
        route: 'hosting-and-deployment',
    },
    {
        id: 3,
        title: 'SEO Optimization',
        description:
            'Improve your search engine rankings and ensure customers can find you online.',
        image: 'v1757449470/bhk4gezjc223vzqlulfv.svg',
        route: 'seo-optimization',
    },
    {
        id: 4,
        title: 'AI Integration',
        description:
            'Prevent insider threat with visibility and alerts for anomalous activities in any SaaS app',
        image: 'v1757449470/ajyv9r4limpawovkpcni.svg',
        route: 'ai-integration',
    },
];

const ServicesGrid = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mx-4 sm:mx-6 lg:mx-5 mt-20 sm:mt-30 lg:mt-40">
            {servicesData.map((service) => (
                <div
                    key={service.id}
                    className="group relative flex flex-col  justify-start text-left shadow-lg p-6 sm:p-8 pt-16 sm:pt-20 bg-sky/15  border border-foreground/10 rounded-2xl transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 hover:border-blue-400/30 mb-20"
                >
                    {/* Floating image above card */}
                    <div className="absolute -top-12 sm:-top-16 left-1/2 -translate-x-1/2 w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center z-10 transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-rotate-6 ">
                        <Image src={service.image} width={80} height={80} alt={service.title} className="object-contain drop-shadow-xl sm:w-[120px] sm:h-[120px] transition-all duration-500 ease-in-out" loading='lazy' />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold mb-3 mt-2 text-foreground  transition-all duration-300 ease-in-out group-hover:text-blue-500 " >{service.title}</h2>
                    <p className="mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed text-foreground/60  transition-all duration-300 ease-in-out group-hover:text-foreground/80 ">{service.description}</p>
                    <div className='w-fit'>
                        <CustomButton
                            className="flex items-center gap-2 font-medium py-2 px-4 sm:px-6 rounded-lg transition-all duration-300 ease-in-out shadow-sm text-foreground/90 hover:text-foreground  hover:scale-105 hover:shadow-md active:scale-95 border border-foreground/20 hover:border-blue-400/50"
                            route={service.route}
                            trackClick
                        >
                            Read more
                            <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-md flex items-center justify-center transition-all duration-300 ease-in-out">
                                <div className='bg-sky/20 p-1 rounded-md'>
                                    <svg width="12" height="12" fill="none" viewBox="0 0 24 24" className="sm:w-4 sm:h-4 transition-all duration-300 ease-in-out">
                                        <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
                                    </svg>
                                </div>
                            </span>
                        </CustomButton>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ServicesGrid;
