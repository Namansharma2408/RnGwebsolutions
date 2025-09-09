import React from 'react'
import Image from 'next/image'
const servicesData = [
	{
		id: 1,
		title: 'Web Design',
		description:
			'Custom, responsive, and visually appealing websites designed to match your brand and convert visitors into customers.',
		image: 'https://res.cloudinary.com/duusmu38g/image/upload/v1757384670/z6hozwrhjoschjyso7bd.svg',
	},
	{
		id: 2,
		title: 'Hosting and Deployment',
		description:
			'Custom, responsive, and visually appealing websites designed to match your brand and convert visitors into customers.',
			image: 'https://res.cloudinary.com/duusmu38g/image/upload/v1757384670/ih3tdtaedizzs2lb8vzg.svg',
	},
	{
		id: 3,
		title: 'SEO Optimization',
		description:
			'Improve your search engine rankings and ensure customers can find you online.',
		image: 'https://res.cloudinary.com/duusmu38g/image/upload/v1757384670/woxiy0zygihdsmnnlrpq.svg',
	},
	{
		id: 4,
		title: 'AI Integration',
		description:
			'Prevent insider threat with visibility and alerts for anomalous activities in any SaaS app',
		image: 'https://res.cloudinary.com/duusmu38g/image/upload/v1757384670/vztdzgdwp9k0un7qagd4.svg',
	},
]
const termsandconditions = [
	{
		id: 1,
		title: 'Acceptance of Terms',
		description:
			'By accessing and using our services, you agree to comply with and be bound by these terms and conditions.',
	},
	{
		id: 2,
		title: 'Service Description',
		description:
			'We provide web design, hosting, SEO optimization, and AI integration services as described on our website.',
	},
	{
		id: 3,
		title: 'User Responsibilities',
		description:
			'You are responsible for providing accurate information and complying with all applicable laws while using our services.',
	},
	{
		id: 4,
		title: 'Payment Terms',
		description:
			'Payments for our services are due as per the agreed-upon schedule. Late payments may incur additional fees.',
	},
	{
		id: 5,
		title: 'Intellectual Property',
		description:
			'All content and materials provided by us are protected by intellectual property laws. You may not use them without our permission.',
	},
	{
		id: 6,
		title: 'Limitation of Liability',
		description:
			'We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.',
	},
	{
		id: 7,
		title: 'Termination',
		description:
			'We reserve the right to terminate or suspend your access to our services at any time without prior notice.',
	},
	{
		id: 8,
		title: 'Governing Law',
		description:
			'These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which we operate.',

	},
	{
		id: 9,
		title: 'Changes to Terms',
		description:
			'We may update these terms and conditions from time to time. Continued use of our services constitutes acceptance of the updated terms.',

	}
]
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

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mx-4 sm:mx-6 lg:mx-5 mt-20 sm:mt-30 lg:mt-40">
				{servicesData.map((service) => (
					<div
						key={service.id}
						className="relative flex flex-col items-center justify-start text-left shadow-lg glass-effect p-6 sm:p-8 pt-16 sm:pt-20 bg-foreground/60 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/20 mb-20"

					>
						{/* Floating image above card */}
						<div className="absolute -top-12 sm:-top-16 left-1/2 -translate-x-1/2 w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center z-10">
							<Image src={service.image} width={80} height={80} alt={service.title} className="object-contain drop-shadow-xl sm:w-[120px] sm:h-[120px]" />
						</div>
						<h2 className="text-xl sm:text-2xl font-bold mb-3 mt-2 text-sky text-center" >{service.title}</h2>
						<p className="mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed text-foreground/70 text-center">{service.description}</p>
						<button
							className="flex items-center gap-2 font-medium py-2 px-4 sm:px-6 rounded-lg transition-colors duration-200 shadow text-foreground"

						>
							Read more
							<span
								className="w-4 h-4 sm:w-5 sm:h-5 rounded-md flex items-center justify-center bg-foreground/30"
							>
								<svg width="12" height="12" fill="none" viewBox="0 0 24 24" className="sm:w-4 sm:h-4">
									<path stroke="var(--foreground)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
								</svg>
							</span>
						</button>
					</div>
				))}
			</div>

			{/* Render backgroundCloud image after all main content */}
			<div className="relative w-full h-[200px] mt-20">
				<Image src='https://res.cloudinary.com/duusmu38g/image/upload/v1757384679/w2qqi1u2s1vgwkyhvj3w' alt='Background Cloud' layout='fill' objectFit='cover' className='brightness-100' />
				<h1 className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-permanent-foreground">TERMS AND CONDITIONS</h1>
			</div>

			{/* Terms and Conditions Section */}
			<div className="max-w-[90%] mx-auto mt-12 px-4 py-10 ">
				{termsandconditions.map((item, idx) => (
					<div key={item.id} className="mb-8">
						<h2 className="font-bold text-lg mb-1 text-foreground">
							{`${item.id}. ${item.title}`}
						</h2>
						<p className="text-sky text-base leading-relaxed">
							{item.description}
						</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default page