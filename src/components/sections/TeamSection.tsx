import React from 'react';
import Image from 'next/image';

const Team = [
  {
    id: 1,
    name: 'Raymond Shaw',
    role: 'Co-Founder & CEO',
    image: '/team1.jpg',
  },
  {
    id: 2,
    name: 'Gurjant Singh',
    role: 'Co-Founder & CTO',
    image: '/team2.jpg',
  },
  {
    id: 3,
    name: 'Naman Sharma',
    role: 'Lead Designer',
    image: '/team3.jpg',
  },
];

const TeamSection = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center w-full'>
        <div className='flex items-center justify-center w-fit px-12 space-x-4 py-16 bg-blue rounded-4xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl'>
          <h1 className='text-3xl md:text-5xl font-bold text-permanent-foreground text-center transition-all duration-300 ease-in-out'>
            MEET OUR TEAM
          </h1>
        </div>
        <div className='h-32 w-full' />
        <div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
            {Team.map(member => (
              <div
                key={member.id}
                className='group relative rounded-2xl shadow-md overflow-hidden flex flex-col items-center justify-center h-[402px] w-[402px] mx-auto transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30'
              >
                {/* Background image */}
                <div className='absolute inset-0 w-full h-full z-0 transition-all duration-500 ease-in-out group-hover:scale-110'>
                  <Image
                    src='v1757449482/z7tk1xr6w5lwt4w6z22s.png'
                    alt='Background'
                    fill
                    className='object-cover transition-all duration-500 ease-in-out group-hover:brightness-110'
                    loading='lazy'
                  />
                </div>
                {/* Member image */}
                <div className='relative z-10 flex flex-col items-center justify-center transition-all duration-300 ease-in-out group-hover:-translate-y-2'>
                  <div className='transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-3'>
                    <Image
                      src='v1757449476/qwi3sqtmygll4mezx8va.png'
                      alt={member.name}
                      layout='responsive'
                      width={300}
                      height={300}
                      className='object-cover rounded-full shadow-lg transition-all duration-500 ease-in-out group-hover:shadow-2xl'
                      loading='lazy'
                    />
                  </div>
                  <div className='p-4 text-center transition-all duration-300 ease-in-out group-hover:transform group-hover:translate-y-1'>
                    <h3 className='text-xl font-semibold text-permanent-foreground transition-all duration-300 ease-in-out group-hover:text-sky group-hover:scale-105'>
                      {member.name}
                    </h3>
                    <p className='text-sm text-permanent-foreground transition-all duration-300 ease-in-out group-hover:text-permanent-foreground/80'>
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
