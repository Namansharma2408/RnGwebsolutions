import React from 'react';
import Image from 'next/image';

const Team = [
	{
		id: 1,
		name: 'Raymond Shaw',
		role: 'Co-Founder & CEO',
		image: '/team1.jpg',
		description:
			'Raymond Shaw is a visionary entrepreneur with over 10 years of experience in digital transformation. As Co-Founder and CEO, he leads strategic initiatives that drive innovation and growth for local businesses across Canada.',
	},
	{
		id: 2,
		name: 'Gurjant Singh',
		role: 'Co-Founder & CTO',
		image: '/team2.jpg',
		description:
			'Gurjant Singh brings deep technical expertise in web development and AI integration. As Co-Founder and CTO, he architect solutions that combine cutting-edge technology with practical business applications.',
	},
	{
		id: 3,
		name: 'Naman Sharma',
		role: 'Lead Designer',
		image: '/team3.jpg',
		description:
			'Naman Sharma is a creative design professional specializing in user experience and brand identity. His designs create intuitive, visually appealing interfaces that enhance user engagement and business success.',
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
								className='group relative rounded-3xl shadow-lg overflow-hidden flex flex-col h-fit w-[380px] mx-auto transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40 bg-white dark:bg-gray-800'
							>
								{/* Background image */}
								<div className='absolute inset-0 w-full h-full z-0 transition-all duration-500 ease-in-out group-hover:scale-110'>
									<Image
										src='v1757449482/z7tk1xr6w5lwt4w6z22s.png'
										alt='Background'
										fill
										className='object-cover transition-all duration-500 ease-in-out group-hover:brightness-110 opacity-60'
										loading='lazy'
									/>
									<div className='absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10'></div>
								</div>
								{/* Member image */}
								<div className='relative z-10 flex flex-col items-center justify-center pt-8 pb-4'>
									<div className='relative mb-6'>
										<div className='w-64 h-48 rounded-full overflow-hidden  shadow-xl transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:shadow-2xl group-hover:ring-blue-400/50'>
											<Image
												src='v1757449476/qwi3sqtmygll4mezx8va.png'
												alt={member.name}
												layout='responsive'
												width={128}
												height={128}
												className='object-cover transition-all duration-500 ease-in-out group-hover:brightness-110'
												loading='lazy'
											/>
										</div>
									</div>
									<div className='px-6 pb-6 text-center space-y-3'>
										<div className='space-y-2'>
											<h3 className='text-2xl font-bold text-gray-900 dark:text-white transition-all duration-300 ease-in-out group-hover:text-blue-600 dark:group-hover:text-blue-400'>
												{member.name}
											</h3>
											<p className='text-sm font-medium text-permanent-foreground uppercase tracking-wide'>
												{member.role}
											</p>
										</div>
										<div className='w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full'></div>
										<p className='text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-xs mx-auto transition-all duration-300 ease-in-out group-hover:text-gray-800 dark:group-hover:text-gray-200'>
											{member.description}
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
