"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useTheme } from '@/contexts/ThemeContext'
import { DynamicHomeServicesSection, DynamicContactSection } from '@/lib'
import { FloatingIcon } from '@/components'


const Page = () => {
	const { theme: contextTheme } = useTheme();
	const [theme, setTheme] = useState(contextTheme);

	useEffect(() => {
		setTheme(contextTheme);
	}, [contextTheme]);

	return (
		<div>
			<div className="relative flex flex-col min-h-screen  overflow-hidden">
				{/* Top Section */}
				<div className="flex-1 flex-shrink-0">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 px-4 sm:px-6 lg:px-16  pb-8 h-full relative z-10">

						{/* Left Side - Logo with floating icons */}
						<div className="flex justify-center items-center relative mb-8 lg:mb-0">

							{/* Floating Icons */}
							<div className="absolute inset-0 pointer-events-none">
								{/* Green Check */}
								<FloatingIcon className="top-[10%] left-[5%] w-14 h-14 sm:w-16 sm:h-16 bg-green-600 rounded-2xl flex items-center justify-center shadow-lg rotate-12" delay={0}>
									<svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
									</svg>
								</FloatingIcon>

								{/* Orange Analytics */}
								<FloatingIcon className="top-[8%] right-[5%] w-14 h-14 sm:w-16 sm:h-16 bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg -rotate-6" delay={1}>
									<svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
									</svg>
								</FloatingIcon>

								{/* Purple Chat */}
								<FloatingIcon className="top-1/2 left-[5%] w-12 h-12 sm:w-14 sm:h-14 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg rotate-45 -translate-y-1/2" delay={2}>
									<svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
									</svg>
								</FloatingIcon>

								{/* Red Chart */}
								<FloatingIcon className="top-1/2 right-[5%] w-12 h-12 sm:w-14 sm:h-14 bg-red-500 rounded-xl flex items-center justify-center shadow-lg -rotate-30 translate-y-6" delay={3}>
									<svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
									</svg>
								</FloatingIcon>
							</div>

							{/* Logo */}
							<div className="relative w-[90%] max-w-[700px] aspect-square">
								<Image
									src={
										theme === "dark"
										? "v1757449474/tpspdxr8czvdzmvvepau.svg"
										: "v1757449475/gimfgzszdu8ugegnszzv.svg"
									}
									alt="R&G Web Solutions"
									fill
									priority
									className="object-contain"
									sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 40vw"
								/>
							</div>
						</div>

						{/* Right Side - Headline */}
						<div className="flex flex-col justify-center text-center lg:text-left">
							<h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight px-4 lg:px-0 xl:pr-40">
								Helping Local Businesses Succeed Online
							</h1>
							<div className="flex justify-center lg:justify-start mt-4">
								<svg viewBox="0 0 600 80" className="w-[280px] sm:w-[380px] lg:w-[440px] h-[40px] sm:h-[50px] lg:h-[70px]">
									<path
										d="M 10 60 Q 300 10 590 60"
										stroke="currentColor"
										strokeWidth="10"
										fill="transparent"
										strokeLinecap="round"
										className="text-blue-500"
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="flex-shrink-0 py-12 px-4 sm:px-6 lg:px-16">
					<div className="w-full max-w-7xl mx-auto flex flex-col items-center">
						<p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl opacity-75 max-w-4xl text-center mb-8">
							Professional Web Design And Development, SEO, hosting, and AI solutions built for growth
						</p>
						<div className="flex flex-col sm:flex-row gap-6 lg:gap-10">
							<button className="group bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center px-8 py-4 text-lg text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl active:scale-95 shadow-xl">
								Book your <span className="font-bold mx-2">Free Consultation</span>
								<svg className="w-6 h-6 text-white ml-2 transition-all duration-300 ease-in-out group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
								</svg>
							</button>
							<button className="group border-2 border-blue-500 hover:bg-blue-500 hover:text-white rounded-full flex items-center justify-center px-8 py-4 text-lg text-foreground transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-xl">
								Get my <span className="font-bold mx-2">Free Website Audit</span>
								<svg className="w-6 h-6 text-blue-500 group-hover:text-white ml-2 transition-all duration-300 ease-in-out group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
			<DynamicHomeServicesSection />

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
							<div className='relative w-full max-w-lg aspect-square group'>
								{/* Decorative background elements */}
								<div className='absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl transform rotate-3 opacity-50 hover:scale-105 hover:rotate-6 hover:opacity-70 group-hover:scale-105 group-hover:rotate-6 group-hover:opacity-70 transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-blue-500/30 group-hover:shadow-2xl group_hover:shadow-blue-500/30'></div>
								<div className='absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-3xl transform -rotate-3 opacity-50 hover:scale-105 hover:-rotate-6 hover:opacity-70 group-hover:scale-105 group_hover:opacity-70 transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-orange-500/30 group-hover:shadow-2xl group_hover:shadow-orange-500/30'></div>

								{/* Main image container */}
								<div className='relative w-full h-full rounded-3xl  shadow-2xl border border-permanent-foreground/10 '>
									<Image
										src='v1757449474/lg0redk3yovoiwvn8dhr.png'
										alt='About Us - Two entrepreneurs working together'
										fill
										className='object-cover hover:scale-110 duration-400 ease-in-out rounded-3xl '
										sizes="(max-width: 768px) 100vw, 50vw"
										loading='eager'
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
									<div className='w-12 h-12 bg-purple-500  rounded-2xl flex items-center justify-center shadow-lg'>
										<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
										</svg>
									</div>

									{/* Title */}
									<h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-purple-500 text-center lg:text-left drop-shadow-lg'>
										Who We Are
									</h2>
								</div>
								<div className='flex justify-center lg:justify-start'>
									<svg width="200" height="8" viewBox="0 0 200 8" className="overflow-visible">
										<path
											d="M 5 4 Q 100 0 195 4"
											stroke="currentColor"
											strokeWidth="3"
											fill="transparent"
											strokeLinecap="round"
											className="text-purple-400 drop-shadow-sm"
										/>
									</svg>
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
								<button className='group relative inline-flex items-center gap-3 px-8 py-4 text-foreground/80 font-semibold rounded-full transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 border border-blue-400/30 hover:border-blue-400/50 active:scale-95'>
									<span className='text-lg transition-all duration-300 ease-in-out group-hover:text-foreground'>Know more</span>
									<div className='w-6 h-6 rounded-full bg-gray/30 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 ease-in-out group'>
										<svg className="w-4 h-4 text-foreground group-hover:translate-x-0.5 transition-all duration-300 ease-in-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
										</svg>
									</div>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='relative py-20 px-6 sm:px-8 lg:px-16 min-h-[80vh] flex items-center'>
				{/* Background Image - Blue Cloudy Sky */}
				<div className='absolute inset-0 -z-10'>
					<Image
						src='v1757449482/z7tk1xr6w5lwt4w6z22s.png'
						alt='Blue sky with clouds background'
						fill
						className="object-cover"
						loading='eager'
						
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
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
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
						<div className='flex items-center justify-center w-full relative order-2 lg:order-1'>
							<div className='relative w-full max-w-lg aspect-square group'>
								{/* Decorative background elements */}
								<div className='absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-orange-500/30 to-yellow-500/40 rounded-3xl transform -rotate-3 opacity-50 hover:scale-105 hover:-rotate-6 hover:opacity-70 group-hover:scale-105 group_hover:opacity-70 transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-orange-500/30 group-hover:shadow-2xl group_hover:shadow-orange-500/30'></div>
								<div className='absolute -bottom-4 -left-4 w-full h-full bg-gradient-to-br from-blue-500/60 to-cyan-500/30 rounded-3xl transform rotate-3 opacity-50 hover:scale-105 hover:rotate-6 hover:opacity-70 group-hover:scale-105 group_hover:rotate-6 group_hover:opacity-70 transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-blue-500/30 group-hover:shadow-2xl group_hover:shadow-blue-500/30'></div>

								{/* Main image container */}
								<div className='relative w-full h-full  shadow-2xl  '>
									<Image
										src='v1757449473/zapif77gqlqtsvsasxwq.png'
										alt='Our Mission - Business Growth and Success'
										fill
										className='object-cover hover:scale-110 duration-400 ease-in-out rounded-3xl'
										sizes="(max-width: 768px) 100vw, 50vw"
										loading='eager'
									/>



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
							<div className='relative w-full max-w-lg aspect-square group'>
								{/* Decorative background elements */}
								<div className='absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl transform rotate-3 opacity-50 hover:scale-105 hover:rotate-6 hover:opacity-70 group-hover:scale-105 group-hover:rotate-6 group_hover:opacity-70 transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-green-500/30 group-hover:shadow-2xl group_hover:shadow-green-500/30'></div>
								<div className='absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl transform -rotate-3 opacity-50 hover:scale-105 hover:-rotate-6 hover:opacity-70 group-hover:scale-105 group_hover:opacity-70 transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-blue-500/30 group-hover:shadow-2xl group_hover:shadow-blue-500/30'></div>

								{/* Main image container */}
								<div className='relative w-full h-full  shadow-2xl border border-permanent-foreground/10 '>
									<Image
										src='v1757449471/iunadcac7gaaxbdzoo8u.png'
										alt='Why Local Business Trust Us'
										fill
										className='object-cover hover:scale-110 duration-400 ease-in-out rounded-3xl'
										sizes="(max-width: 768px) 100vw, 50vw"
										loading='eager'
									/>


								</div>
							</div>
						</div>

						{/* Right Side - Content */}
						<div className='space-y-8 order-1 lg:order-2'>

							{/* Section Header */}
							<div className='space-y-6'>
								<div className='flex items-center gap-4 justify-center lg:justify-start'>
									{/* Icon */}
									<div className='w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg'>
										<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
										</svg>
									</div>

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
									<div className='flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20'>
										<div className='w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1'>
											<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
											</svg>
										</div>
										<div>
											<h4 className='font-semibold text-foreground text-base sm:text-lg'>We listen to your needs</h4>
											<p className='text-foreground/70 text-sm mt-1'>Understanding your unique requirements and goals</p>
										</div>
									</div>

									<div className='flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20'>
										<div className='w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1'>
											<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
											</svg>
										</div>
										<div>
											<h4 className='font-semibold text-foreground text-base sm:text-lg'>We deliver on our promises</h4>
											<p className='text-foreground/70 text-sm mt-1'>Reliable execution and timely project completion</p>
										</div>
									</div>

									<div className='flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20'>
										<div className='w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1'>
											<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
											</svg>
										</div>
										<div>
											<h4 className='font-semibold text-foreground text-base sm:text-lg'>We provide ongoing support</h4>
											<p className='text-foreground/70 text-sm mt-1'>Continuous maintenance and technical assistance</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<DynamicContactSection />
		</div>
	)
}

export default Page