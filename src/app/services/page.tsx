import React from 'react'
import Image from 'next/image'
import { DynamicServicesGrid, DynamicTermsSection } from '@/lib'

const page = () => {
	return (
		<div className='min-h-screen py-12'>
			<div className='relative z-10 w-full px-4 sm:px-6 lg:px-8 mb-16'>
				<div className='text-center'>
					<h1 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-sky mb-4'>
						WHAT WE OFFER
					</h1>
				</div>
			</div>

			<DynamicServicesGrid />

			{/* Render backgroundCloud image after all main content */}
			<div className='relative w-full h-[200px] mt-20'>
				<Image
					src='v1757449482/z7tk1xr6w5lwt4w6z22s.png'
					alt='Background Cloud'
					fill
					className='brightness-100 object-cover'
					loading='eager'
				/>
				<h1 className='absolute inset-0 flex items-center justify-center text-6xl font-bold text-permanent-foreground'>
					TERMS AND CONDITIONS
				</h1>
			</div>

			{/* Terms and Conditions Section */}
			<DynamicTermsSection />
		</div>
	)
}

export default page