import React from 'react'
import Image from 'next/image'
import { DynamicTeamSection } from '@/lib'

const page = () => {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-screen px-4 sm:px-6 lg:px-8 py-16 sm:py-24'>
        <div className='space-y-6'>
          <div className='flex items-center justify-center w-full space-x-4 '>
            <h1 className='text-3xl  md:text-5xl font-bold text-blue text-center'>
              {' '}
              ~ WHO WE ARE
            </h1>
          </div>
          <p className='font-normal text-lg md:text-3xl text-center w-3/4 md:w-1/2 mx-auto'>
            R&G Web Solutions was founded by two passionate entrepreneurs committed
            to helping local businesses thrive online. We believe in delivering
            quality, building long-term relationships, and exceeding our client&apos;s
            expectations.
          </p>
        </div>
        <div className='flex items-center justify-center w-full relative'>
          <div className='w-[529px] h-[529px] rounded-2xl flex items-center justify-center  relative'>
            <Image
              src='v1757449474/lg0redk3yovoiwvn8dhr.png'
              alt='About Us'
              layout='responsive'
              width={529}
              height={529}
              className='rounded-2xl'
              loading='eager'
              
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

      <DynamicTeamSection />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-screen px-4 sm:px-6 lg:px-8 py-16 sm:py-24'>
        <div className='flex items-center justify-center w-full relative'>
          <div className='w-[529px] h-[529px] rounded-2xl flex items-center justify-center  relative'>
            <Image
              src='v1757449473/zapif77gqlqtsvsasxwq.png'
              alt='About Us'
              layout='responsive'
              width={529}
              height={529}
              className='rounded-4xl hover:scale-105 transition-all duration-300 ease-in-out'
              loading='eager'
            />
          </div>
        </div>
        <div className='space-y-6'>
          <div className='flex items-center justify-center w-full space-x-4 '>
            <h1 className='text-3xl  md:text-5xl font-bold text-blue text-center'>
              {' '}
              ~ OUR MISSION
            </h1>
          </div>
          <p className='font-normal text-lg md:text-3xl text-center w-3/4 md:w-1/2 mx-auto'>
            To provide reliable, modern, and effective web solutions that help local businesses compete and grow.
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-screen px-4 sm:px-6 lg:px-8 py-16 sm:py-24'>
        <div className='space-y-6'>
          <div className='flex items-center justify-center w-full space-x-4 '>
            <h1 className='text-3xl md:text-5xl font-bold text-blue text-center'>
              {' '}
              ~ WHY LOCAL BUSSINESS TRUST US
            </h1>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <ul className='font-normal text-lg md:text-3xl w-3/4 md:w-1/2 mx-auto list-disc list-inside '>
              <li>We listen to your needs</li>
              <li>We deliver on our promises</li>
              <li>We provide ongoing support</li>
            </ul>
          </div>
        </div>
        <div className='flex items-center justify-center w-full relative'>
          <div className='w-[529px] h-[529px] rounded-2xl flex items-center justify-center  relative'>
            <Image
              src='v1757449471/iunadcac7gaaxbdzoo8u.png'
              alt='About Us'
              layout='responsive'
              width={529}
              height={529}
              className='rounded-4xl hover:scale-105 transition-all duration-300 ease-in-out'
              loading='eager'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page