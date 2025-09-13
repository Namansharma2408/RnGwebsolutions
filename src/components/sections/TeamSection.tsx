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
        <div className='flex items-center justify-center w-fit px-12 space-x-4 py-16 bg-blue rounded-4xl'>
          <h1 className='text-3xl  md:text-5xl font-bold text-permanent-foreground  text-center'>
            MEET OUR TEAM
          </h1>
        </div>
        <div className='h-32 w-full' />
        <div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
            {Team.map(member => (
              <div
                key={member.id}
                className='relative rounded-2xl shadow-md overflow-hidden flex flex-col items-center justify-center h-[402px] w-[402px] mx-auto'
              >
                {/* Background image */}
                <div className='absolute inset-0 w-full h-full z-0'>
                  <Image
                    src='v1757449482/z7tk1xr6w5lwt4w6z22s.png'
                    alt='Background'
                    fill

                    className='object-cover'
                    loading='lazy'
                  />
                </div>
                {/* Member image */}
                <div className='relative z-10 flex flex-col items-center justify-center'>
                  <Image
                    src='v1757449476/qwi3sqtmygll4mezx8va.png'
                    alt={member.name}
                    layout='responsive'
                    width={300}
                    height={300}
                    className='object-cover rounded-full  shadow-lg'
                    loading='lazy'
                  />
                  <div className='p-4 text-center'>
                    <h3 className='text-xl font-semibold text-permanent-foreground'>
                      {member.name}
                    </h3>
                    <p className='text-sm text-permanent-foreground'>
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
