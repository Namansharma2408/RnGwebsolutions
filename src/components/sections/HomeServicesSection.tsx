import Image from 'next/image';
import CustomButton from './CustomButton';

const servicesData = [
  {
    id: 1,
    title: 'Web Design And Development',
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

const HomeServicesSection = () => {
  return (
    <div className='relative py-12 px-6 sm:px-8 lg:px-16 '>
      {/* Background Cloud */}
      <div className='absolute inset-0 -z-10 max-h-full overflow-auto'>
        <Image
          src='v1757449482/z7tk1xr6w5lwt4w6z22s.png'
          alt='Background Cloud'
          fill
          priority
          className="object-cover max-h-full overflow-auto"
        />
      </div>

      {/* Services Content */}
      <div className='max-w-7xl mx-auto max-h-full'>
        {/* Section Header */}
        <div className='text-center mb-12'>
          {/* Section Label */}
          <div className='flex items-center justify-center gap-3 mb-4'>
            <Image
              src='v1757449472/l81bzetoh63reo15qgmb.svg'
              alt='Service Icon'
              width={40}
              height={40}
              className='opacity-90'
              loading='lazy'
            />
            <h3 className='text-lg font-semibold text-permanent-foreground/80 tracking-wide uppercase'>
              Our Services
            </h3>
          </div>

          {/* Main Title */}
          <h2 className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-permanent-foreground leading-tight max-w-5xl mx-auto mb-24 '>
            We design, develop and scale digital solutions that turn visitors into customers
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mx-4 sm:mx-6 lg:mx-5  mt-4 sm:mt-6 lg:mt-8 xl:mt-10">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="animated-border group relative flex flex-col items-center justify-start text-left shadow-xl bg-gradient-to-tr from-teal/40 via-blue/40 to-purple/50 backdrop-blur-xl border border-white/30 p-6 sm:p-8 pt-16 sm:pt-20 transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-blue/60 hover:border-white/50 hover:from-teal/50 hover:via-blue/50 hover:to-purple/60 mb-20"
            >
              {/* Animated border lights */}
              <div className="border-light-top"></div>
              <div className="border-light-bottom"></div>
              
              {/* Floating image above card */}
              <div className="absolute -top-12 sm:-top-16 left-1/2 -translate-x-1/2 w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center z-[100] transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-rotate-6">
                <Image src={service.image} width={80} height={80} alt={service.title} className="object-contain drop-shadow-xl sm:w-[120px] sm:h-[120px] transition-all duration-500 ease-in-out" loading='lazy'/>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mb-3 mt-2 text-permanent-foreground/90 text-center transition-all duration-300 ease-in-out group-hover:text-permanent-foreground group-hover:scale-105" >{service.title}</h2>
              <p className="mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed text-permanent-foreground/80 text-center transition-all duration-300 ease-in-out group-hover:text-permanent-foreground/95">{service.description}</p>
              <CustomButton
                className="flex items-center gap-2 font-medium py-2 px-4 sm:px-6 rounded-lg transition-all duration-300 ease-in-out shadow text-permanent-foreground hover:bg-white/20 hover:scale-105 hover:shadow-lg active:scale-95"
                route={service.route}
                trackClick
              >
                Read more
                <span
                  className="w-4 h-4 sm:w-5 sm:h-5 rounded-md flex items-center justify-center bg-white/30 transition-all duration-300 ease-in-out group-hover:bg-white/50 "
                >
                  <svg width="12" height="12" fill="none" viewBox="0 0 24 24" className="sm:w-4 sm:h-4 transition-all duration-300 ease-in-out">
                    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </span>
              </CustomButton>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-center'>
        <button className='bg-permanent-foreground hover:bg-permanent-foreground/90 rounded-full flex items-center justify-center px-8 py-4 text-lg text-permanent-background font-semibold transition-all duration-300 hover:scale-105 shadow-xl border border-permanent-foreground/20'>
          Get Started
          <span className='font-bold mx-2'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-rocket"
            >
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
              <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
              <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
            </svg>
          </span>
        </button>
      </div>
    </div>
    
  );
};

export default HomeServicesSection;


