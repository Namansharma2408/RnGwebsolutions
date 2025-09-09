"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useTheme } from '@/contexts/ThemeContext'

const servicesData = [
  {
    id: 1,
    title: 'Web Design',
    description:
      'Custom, responsive, and visually appealing websites designed to match your brand and convert visitors into customers.',
    image: '/im-service1.svg',
  },
  {
    id: 2,
    title: 'Hosting and Deployment',
    description:
      'Custom, responsive, and visually appealing websites designed to match your brand and convert visitors into customers.',
    image: '/im-service2.svg',
  },
  {
    id: 3,
    title: 'SEO Optimization',
    description:
      'Improve your search engine rankings and ensure customers can find you online.',
    image: '/im-service3.svg',
  },
  {
    id: 4,
    title: 'AI Integration',
    description:
      'Prevent insider threat with visibility and alerts for anomalous activities in any SaaS app',
    image: '/im-service4.svg',
  },
]
const Page = () => {
  const { theme: contextTheme } = useTheme();
  const [theme, setTheme] = useState(contextTheme);

  useEffect(() => {
    setTheme(contextTheme);
    console.log('Current theme:', contextTheme);
  }, [contextTheme]);

  return (
    <div>
      <div className="h-[80vh] relative overflow-hidden flex flex-col mt-16">

        {/* Top 75% - Two Column Layout (60vh out of 80vh) */}
        <div className='h-[60vh] flex-shrink-0'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 h-full px-6 sm:px-8 lg:px-16 pt-2 pb-4 relative z-10'>

            {/* Left Side - Logo with floating icons */}
            <div className='flex justify-center w-full relative'>

              {/* Floating Icons - positioned relative to logo container */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Green checkmark icon - top left of logo area */}
                <div className="absolute top-16 left-16 w-12 h-12 bg-green-600 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                {/* Orange analytics icon - top right of logo area */}
                <div className="absolute top-12 right-12 w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>

                {/* Additional floating icons for cinematic effect */}
                {/* Blue gear icon - left middle of logo area */}
                <div className="absolute top-1/2 left-8 w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg transform rotate-45 -translate-y-1/2">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>

                {/* Teal lightning icon - right middle of logo area */}
                <div className="absolute top-1/2 right-8 w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center shadow-lg transform -rotate-30 translate-y-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
              </div>

              {/* Logo container */}
              <div className='relative flex items-center justify-center h-full'>
                {/* Logo container with subtle glow */}
                <div className='relative rounded-3xl h-[350px] w-[450px] p-6 flex overflow-hidden'>
                  <div className='flex items-center justify-center'>
                    <Image
                      src={theme === 'dark' ? '/logoDark.svg' : '/logoLight.svg'}
                      alt='R&G Web Solutions'
                      width={450}
                      height={350}
                      priority
                      className=""
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Main Headline */}
            <div className='flex flex-col justify-center text-center lg:text-left'>
              <div className='space-y-4 relative'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold leading-tight px-6 xl:pr-40'>
                  Helping Local Businesses Succeed Online
                </h1>

                {/* Blue underline accent - centered relative to text */}
                <div className='flex justify-center lg:justify-start'>
                  <svg width="400" height="60" viewBox="0 0 600 80" className="overflow-visible">
                    {/* Clean arc path - centered to align with text width */}
                    <path
                      d="M 10 60 Q 300 10 590 60"
                      stroke="currentColor"
                      strokeWidth="12"
                      fill="transparent"
                      strokeLinecap="round"
                      className="text-blue-500"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 25% - Full Width Section (20vh out of 80vh) */}
        <div className='h-[20vh] w-full py-6 px-6 sm:px-8 lg:px-16 flex-shrink-0'>
          <div className='w-full max-w-7xl mx-auto h-full flex flex-col justify-center'>
            <div className='text-center mb-6'>
              <p className='text-lg sm:text-xl lg:text-2xl opacity-75 max-w-4xl mx-auto text-foreground'>
                Professional web design, SEO, hosting, and AI solutions built for growth
              </p>
            </div>

            <div className='flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8'>
              <button className='bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center px-6 py-3 text-base text-white transition-all duration-300 hover:scale-105 shadow-xl'>
                Book your <span className='font-bold mx-2'>Free Consultation</span>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>

              <button className='border-3 border-blue-500 hover:bg-blue-500 hover:text-white rounded-full flex items-center justify-center px-6 py-3 text-base text-foreground transition-all duration-300 hover:scale-105'>
                Get my <span className='font-bold mx-2'>Free Website Audit</span>
                <svg className="w-6 h-6 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path d="M2 12h20" strokeWidth="2" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeWidth="2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className='relative py-24 px-6 sm:px-8 lg:px-16'>
        {/* Background Cloud */}
        <div className='absolute inset-0 -z-10'>
          <Image
            src='/backgroundCloud.png'
            alt='Background Cloud'
            fill
            className="object-cover"
          />
        </div>

        {/* Services Content */}
        <div className='max-w-7xl mx-auto'>
          {/* Section Header */}
          <div className='text-center mb-20'>
            {/* Section Label */}
            <div className='flex items-center justify-center gap-3 mb-6'>
              <Image
                src='/our-vision-yellow.svg'
                alt='Service Icon'
                width={40}
                height={40}
                className='opacity-90'
              />
              <h3 className='text-lg font-semibold text-permanent-foreground/80 tracking-wide uppercase'>
                Our Services
              </h3>
            </div>

            {/* Main Title */}
            <h2 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-permanent-foreground leading-tight max-w-5xl mx-auto'>
              We design, develop and scale digital solutions that turn visitors into customers
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                className="relative flex flex-col items-center text-left shadow-xl glass-effect p-6 pt-24 pb-8 bg-permanent-background/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 rounded-2xl border border-permanent-foreground/10"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                {/* Floating image above card */}
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-fit h-fit flex items-center justify-center z-10   p-4  ">
                  <Image
                    src={service.image}
                    width={200}
                    height={200}
                    alt={service.title}
                    className="object-contain "
                  />
                </div>

                {/* Card Content */}
                <div className="text-center space-y-4 flex-1 flex flex-col">
                  <h4 className="text-xl font-bold text-permanent-foreground mt-4">
                    {service.title}
                  </h4>

                  <p className="text-sm leading-relaxed text-permanent-foreground/75 flex-1 max-w-xs mx-auto">
                    {service.description}
                  </p>

                  <button className="flex items-center justify-center gap-2 font-medium py-3 px-6 rounded-full bg-permanent-foreground/10 hover:bg-permanent-foreground/20 transition-all duration-300 text-permanent-foreground border border-permanent-foreground/20 hover:border-permanent-foreground/40 mt-6 group">
                    <span>Read more</span>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center bg-permanent-foreground/20 group-hover:bg-permanent-foreground/30 transition-all duration-300">
                      <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                        <path
                          stroke="var(--color-permanent-foreground)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12h14m-7-7l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className='relative py-20 px-6 sm:px-8 lg:px-16 bg-gradient-to-br from-background via-background to-blue-50/30 dark:to-purple-950/20'>
        {/* Background decorative elements */}
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl'></div>
          <div className='absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl'></div>
        </div>

        <div className='max-w-7xl mx-auto relative'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>

            {/* Left Side - Image */}
            <div className='flex items-center justify-center w-full relative order-2 lg:order-1'>
              <div className='relative w-full max-w-lg aspect-square'>
                {/* Decorative background elements */}
                <div className='absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl transform rotate-3 opacity-50'></div>
                <div className='absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-3xl transform -rotate-3 opacity-50'></div>

                {/* Main image container */}
                <div className='relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-permanent-foreground/10 '>
                  <Image
                    src='/whoweare.png'
                    alt='About Us - Two entrepreneurs working together'
                    fill
                    className='object-cover'
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />


                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className='space-y-8 order-1 lg:order-2'>

              {/* Section Header */}
              <div className='space-y-4'>
                <div className='flex items-center gap-4 justify-center lg:justify-start'>
                  {/* Icon */}


                  {/* Title */}
                  <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent text-center lg:text-left'>
                    WHO WE ARE
                  </h2>
                </div>
              </div>

              {/* Description */}
              <div className='space-y-6'>
                <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-foreground/80 text-center lg:text-left max-w-2xl mx-auto lg:mx-0'>
                  R&G Web Solutions was founded by two passionate entrepreneurs committed to helping local businesses thrive online. We believe in delivering quality, building long-term relationships, and exceeding our clients&apos; expectations.
                </p>
              </div>

              {/* Call to Action Button */}
              <div className='flex justify-center lg:justify-start pt-4'>
                <button className='group relative inline-flex items-center gap-3 px-8 py-4  text-foreground/80 font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 border border-blue-400/30'>
                  <span className='text-lg'>Know more</span>
                  <div className='w-6 h-6 rounded-full bg-gray/60 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300'>
                    <svg className="w-4 h-4 text-foreground group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>


                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className='relative py-20 px-6 sm:px-8 lg:px-16 min-h-[80vh] flex items-center'>
        {/* Background Image - Blue Cloudy Sky */}
        <div className='absolute inset-0 -z-10'>
          <Image
            src='/backgroundCloud.png'
            alt='Blue sky with clouds background'
            fill
            className="object-cover"
            priority
          />
          {/* Blue overlay to enhance the blue sky effect */}
          <div className='absolute inset-0 bg-gradient-to-br from-blue-600/30 via-blue-500/20 to-cyan-400/30'></div>
        </div>

        <div className='max-w-7xl mx-auto relative w-full'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
            
            {/* Left Side - Content */}
            <div className='space-y-8 order-2 lg:order-1'>
              
              {/* Section Header */}
              <div className='space-y-6'>
                <div className='flex items-center gap-4 justify-center lg:justify-start'>
                  {/* Icon */}
                  <div className='w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg'>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  
                  {/* Title */}
                  <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-orange-400 text-center lg:text-left drop-shadow-lg'>
                    Our Mission
                  </h2>
                </div>

                {/* Decorative underline */}
                <div className='flex justify-center lg:justify-start'>
                  <svg width="200" height="8" viewBox="0 0 200 8" className="overflow-visible">
                    <path
                      d="M 5 4 Q 100 0 195 4"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="transparent"
                      strokeLinecap="round"
                      className="text-orange-400 drop-shadow-sm"
                    />
                  </svg>
                </div>
              </div>

              {/* Description */}
              <div className='space-y-6'>
                <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-white/90 text-center lg:text-left max-w-2xl mx-auto lg:mx-0 drop-shadow-md'>
                  To provide reliable, modern, and effective web solutions that help local businesses compete and grow in the digital landscape.
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className='flex items-center justify-center w-full relative order-1 lg:order-2'>
              <div className='relative w-full max-w-lg aspect-square'>
                {/* Decorative background elements */}
                <div className='absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-3xl transform -rotate-3 opacity-50'></div>
                <div className='absolute -bottom-4 -left-4 w-full h-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl transform rotate-3 opacity-50'></div>
                
                {/* Main image container */}
                <div className='relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-white/10 backdrop-blur-sm'>
                  <Image
                    src='/mission.png'
                    alt='Our Mission - Business Growth and Success'
                    fill
                    className='object-cover'
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  
                  {/* Subtle overlay for better contrast */}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Local Business Trust Us Section */}
      <div className='relative py-20 px-6 sm:px-8 lg:px-16 bg-gradient-to-br from-background via-background to-green-50/30 dark:to-green-950/20'>
        {/* Background decorative elements */}
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-3xl'></div>
          <div className='absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl'></div>
        </div>

        <div className='max-w-7xl mx-auto relative'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
            
            {/* Left Side - Image */}
            <div className='flex items-center justify-center w-full relative order-2 lg:order-1'>
              <div className='relative w-full max-w-lg aspect-square'>
                {/* Decorative background elements */}
                <div className='absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl transform rotate-3 opacity-50'></div>
                <div className='absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl transform -rotate-3 opacity-50'></div>
                
                {/* Main image container */}
                <div className='relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-permanent-foreground/10 bg-white dark:bg-gray-900'>
                  <Image
                    src='/local.png'
                    alt='Why Local Business Trust Us'
                    fill
                    className='object-cover'
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  
                  
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className='space-y-8 order-1 lg:order-2'>
              
              {/* Section Header */}
              <div className='space-y-6'>
                <div className='flex items-center gap-4 justify-center lg:justify-start'>
                  
                  {/* Title */}
                  <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-green-800 dark:from-green-400 dark:via-emerald-400 dark:to-green-600 bg-clip-text text-transparent text-center lg:text-left'>
                    Why Local Business Trust Us
                  </h2>
                </div>

                {/* Decorative underline */}
                <div className='flex justify-center lg:justify-start'>
                  <svg width="250" height="8" viewBox="0 0 250 8" className="overflow-visible">
                    <path
                      d="M 5 4 Q 125 0 245 4"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="transparent"
                      strokeLinecap="round"
                      className="text-green-500"
                    />
                  </svg>
                </div>
              </div>

              {/* Trust Points */}
              <div className='space-y-6'>
                <div className='grid grid-cols-1 gap-4'>
                  <div className='flex items-start gap-4 p-4 rounded-xl  '>
                    <div className='w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1'>
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className='font-semibold text-foreground text-lg'>We listen to your needs</h4>
                      <p className='text-foreground/70 text-sm mt-1'>Understanding your unique requirements and goals</p>
                    </div>
                  </div>
                  
                  <div className='flex items-start gap-4 p-4 rounded-xl '>
                    <div className='w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1'>
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className='font-semibold text-foreground text-lg'>We deliver on our promises</h4>
                      <p className='text-foreground/70 text-sm mt-1'>Reliable execution and timely project completion</p>
                    </div>
                  </div>
                  
                  <div className='flex items-start gap-4 p-4 rounded-xl  '>
                    <div className='w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1'>
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className='font-semibold text-foreground text-lg'>We provide ongoing support</h4>
                      <p className='text-foreground/70 text-sm mt-1'>Continuous maintenance and technical assistance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     <div className='min-h-screen relative flex items-center py-8 sm:py-16'>
           <div className='absolute inset-0'>
             <Image src='/backgroundCloud.png' alt='Contact Us' layout='fill' objectFit='cover' className='brightness-100' />
             <div className='absolute inset-0 '></div>
           </div>
           <div className='relative z-10 w-full px-4 sm:px-6 lg:px-8'>
             <h1 className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-permanent-foreground mb-8 sm:mb-12'>&ldquo;Let&rsquo;s Build Something Great Together&rdquo;</h1>
             <div className='bg-permanent-foreground/20 backdrop-blur-md max-w-xs sm:max-w-lg lg:max-w-3xl xl:max-w-4xl mx-auto p-6 sm:p-8 lg:p-10 rounded-2xl shadow-2xl border border-foreground/10 '>
               <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-lg xl:max-w-2xl h-32 sm:h-40 lg:h-48 xl:h-64 mx-auto overflow-hidden rounded-xl mb-6 sm:mb-8">
                 <Image src='/contactLogo.png' alt='Contact Us' layout='fill' objectFit='cover' objectPosition='center' />
               </div>
               <form action="" className="space-y-4 sm:space-y-6">
                 <div>
                   <label className='block text-permanent-foreground text-lg font-medium mb-2' htmlFor='email'>Email</label>
                   <input className='w-full p-3 sm:p-4 rounded-lg bg-background/80 text-permanent-foreground placeholder:text-foreground/60 border border-foreground/20 focus:outline-none focus:ring-2 focus:ring-sky focus:border-sky transition-all duration-200' type='email' id='email' name='email' placeholder='Enter your email' />
                 </div>
                 <div>
                   <label className='block text-permanent-foreground text-lg font-medium mb-2' htmlFor='message'>Message</label>
                   <textarea className='w-full p-3 sm:p-4 rounded-lg bg-background/80 text-permanent-foreground placeholder:text-foreground/60 border border-foreground/20 focus:outline-none focus:ring-2 focus:ring-sky focus:border-sky transition-all duration-200 resize-none' id='message' name='message' placeholder='What are you say ?' rows={4}></textarea>
                 </div>
                 <button type='submit' className='w-full bg-blue-500  text-permanent-foreground font-bold py-3 sm:py-4 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl'>
                   Book your free consultation
                 </button>
               </form>
             </div>
             
             {/* Contact Information Footer */}
             <div className="max-w-xs sm:max-w-lg lg:max-w-3xl xl:max-w-4xl mx-auto mt-8 backdrop-blur-xl rounded-2xl p-6 sm:p-8">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
                 {/* Phone Numbers */}
                 <div className="flex flex-col items-center md:items-start space-y-2">
                   <div className="flex items-center space-x-3">
                     <div className="w-10 h-10 bg-permanent-foreground rounded-full flex items-center justify-center">
                       <svg className="w-5 h-5 text-sky" fill="currentColor" viewBox="0 0 20 20">
                         <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                       </svg>
                     </div>
                     <div className="text-permanent-foreground">
                       <div className="font-medium">+1(647)-986-2677</div>
                       <div className="text-sm">+1(437)-667-5323</div>
                     </div>
                   </div>
                 </div>
     
                 {/* Email */}
                 <div className="flex flex-col items-center md:items-start space-y-2">
                   <div className="flex items-center space-x-3">
                     <div className="w-10 h-10 bg-permanent-foreground rounded-full flex items-center justify-center">
                       <svg className="w-5 h-5 text-sky" fill="currentColor" viewBox="0 0 20 20">
                         <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                         <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                       </svg>
                     </div>
                     <div className="text-permanent-foreground font-medium">
                       rngwebsolutions@gmail.com
                     </div>
                   </div>
                 </div>
     
                 {/* Location */}
                 <div className="flex flex-col items-center md:items-start space-y-2">
                   <div className="flex items-center space-x-3">
                     <div className="w-10 h-10 bg-permanent-foreground rounded-full flex items-center justify-center">
                       <svg className="w-5 h-5 text-sky" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                       </svg>
                     </div>
                     <div className="text-permanent-foreground font-medium">
                       Servicing all of the GTA
                     </div>
                   </div>
                 </div>
               </div>
     
               {/* Social Media */}
               <div className="mt-8 pt-6 border-t border-background/20">
                 <div className="text-center">
                   <p className="text-permanent-foreground/90 text-lg font-medium mb-4">Follow us on</p>
                   <div className="flex justify-center space-x-4">
                     <div className="w-12 h-12 bg-permanent-foreground rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                       <svg className="w-6 h-6 text-sky" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                       </svg>
                     </div>
                     <div className="w-12 h-12 bg-permanent-foreground rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                       <svg className="w-6 h-6 text-sky" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                       </svg>
                     </div>
                     <div className="w-12 h-12 bg-permanent-foreground rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                       <svg className="w-6 h-6 text-sky" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.163-1.507-.7-2.448-2.893-2.448-4.658 0-3.778 2.745-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                       </svg>
                     </div>
                     <div className="w-12 h-12 bg-permanent-foreground rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                       <svg className="w-6 h-6 text-sky" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                       </svg>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
     
           </div>
         </div>
      
    </div>
  )
}

export default Page