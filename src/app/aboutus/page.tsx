import React from 'react'
import Image from 'next/image'
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
]
const page = () => {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-screen px-4 sm:px-6 lg:px-8 py-16 sm:py-24'>
        <div className='space-y-6'>
          <div className='flex items-center justify-center w-full space-x-4 '>
            <h1 className='text-5xl font-bold text-blue text-center'>
              {' '}
              ~ WHO WE ARE
            </h1>
          </div>
          <p className='font-normal text-3xl text-center w-1/2 mx-auto'>
            R&G Web Solutions was founded by two passionate entrepreneurs committed
            to helping local businesses thrive online. We believe in delivering
            quality, building long-term relationships, and exceeding our client&apos;s
            expectations.
          </p>
        </div>
        <div className='flex items-center justify-center w-full relative'>
          <div className='w-[529px] h-[529px] rounded-2xl flex items-center justify-center  relative'>
            <Image
              src='https://res.cloudinary.com/duusmu38g/image/upload/v1757384673/mac2yqzkhvjjpxnmxbzb.png'
              alt='About Us'
              layout='responsive'
              width={529}
              height={529}
              className='rounded-2xl'
              priority
            />
            <div className='absolute -bottom-8 left-1/2 -translate-x-1/2 w-[400px] px-6 py-6 bg-slate rounded-2xl shadow-xl flex flex-col items-center justify-center text-center '>
              <h2 className='text-2xl font-semibold mb-2 text-foreground'>
                Looking for help?
              </h2>
              <p className='text-foreground/80 mb-2 text-base'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <a
                href='#'
                className='text-blue font-medium hover:underline'
              >
                Lorem Ipsum is simply dummy
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='flex flex-col items-center justify-center w-full'>
          <div className='flex items-center justify-center w-fit px-12 space-x-4 py-16 bg-blue rounded-4xl'>
            <h1 className='text-5xl font-bold text-permanent-foreground  text-center'>
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
                      src='https://res.cloudinary.com/duusmu38g/image/upload/v1757384679/w2qqi1u2s1vgwkyhvj3w.png'
                      alt='Background'
                      layout='fill'
                      objectFit='cover'
                      className='object-cover'
                      priority
                    />
                  </div>
                  {/* Member image */}
                  <div className='relative z-10 flex flex-col items-center justify-center'>
                    <Image
                      src='https://res.cloudinary.com/duusmu38g/image/upload/v1757384674/w4nyde3zb3zcpogqzvvd'
                      alt={member.name}
                      layout='responsive'
                      width={300}
                      height={300}
                      className='object-cover rounded-full  shadow-lg'
                      priority
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


      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-screen px-4 sm:px-6 lg:px-8 py-16 sm:py-24'>
        <div className='flex items-center justify-center w-full relative'>
          <div className='w-[529px] h-[529px] rounded-2xl flex items-center justify-center  relative'>
            <Image
              src='https://res.cloudinary.com/duusmu38g/image/upload/v1757384673/gzybvo6saqmamwxekhz8.png'
              alt='About Us'
              layout='responsive'
              width={529}
              height={529}
              className='rounded-2xl'
              priority
            />

          </div>
        </div>
        <div className='space-y-6'>
          <div className='flex items-center justify-center w-full space-x-4 '>
            <h1 className='text-5xl font-bold text-blue text-center'>
              {' '}
              ~ OUR MISSION
            </h1>
          </div>
          <p className='font-normal text-3xl text-center w-1/2 mx-auto'>
            To provide reliable, modern, and effective web solutions that help local businesses compete and grow.
          </p>
        </div>

      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-screen px-4 sm:px-6 lg:px-8 py-16 sm:py-24'>

        <div className='space-y-6'>
          <div className='flex items-center justify-center w-full space-x-4 '>
            <h1 className='text-5xl font-bold text-blue text-center'>
              {' '}
              ~ WHY LOCAL BUSSINESS TRUST US
            </h1>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <ul className='font-normal text-3xl w-1/2 mx-auto list-disc list-inside '>
              <li>We listen to your needs</li>
              <li>We deliver on our promises</li>
              <li>We provide ongoing support</li>
            </ul>
          </div>

        </div>
        <div className='flex items-center justify-center w-full relative'>
          <div className='w-[529px] h-[529px] rounded-2xl flex items-center justify-center  relative'>
            <Image
              src='https://res.cloudinary.com/duusmu38g/image/upload/v1757384671/njhmtioplriwztcdds5b.png'
              alt='About Us'
              layout='responsive'
              width={529}
              height={529}
              className='rounded-2xl'
              priority
            />

          </div>
        </div>
      </div>
    </div>
  )
}

export default page