import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Page Not Found | RnG Web Solutions',
  description: 'The page you are looking for could not be found. Return to RnG Web Solutions homepage or explore our services.',
}

export default function NotFound() { 
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4  ">
            {/* Background decorative elements */}
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                <div className='absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue/10 to-purple/10 rounded-full blur-3xl'></div>
                <div className='absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-orange/10 to-teal/10 rounded-full blur-3xl'></div>
            </div>

            <div className="text-center space-y-8 relative z-10">
                {/* Large 404 Number */}
                <div className="relative">
                    <h1 className="text-8xl sm:text-9xl lg:text-[12rem] font-bold ">
                        404
                    </h1>
                    {/* Floating elements around 404 */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-red rounded-lg rotate-12 animate-bounce"></div>
                    <div className="absolute -top-2 -right-8 w-6 h-6 bg-yellow rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-4 left-1/4 w-4 h-4 bg-green rounded-full animate-ping"></div>
                    <div className="absolute top-1/2 -right-6 w-6 h-6 bg-purple rounded-lg -rotate-12 animate-bounce delay-100"></div>
                </div>

                {/* Error Message */}
                <div className="space-y-4">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                        Oops! Page Not Found
                    </h2>
                    <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                        The page you're looking for seems to have wandered off into the digital void. 
                        Don't worry, it happens to the best of us!
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                    <Link 
                        href="/" 
                        className="group bg-blue hover:bg-sky text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl active:scale-95 flex items-center gap-2"
                    >
                        <svg className="w-5 h-5 transition-all duration-300 ease-in-out group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </Link>

                    <Link 
                        href="/services" 
                        className="group border-2 border-blue hover:bg-blue hover:text-white text-blue px-8 py-4 rounded-full font-semibold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 flex items-center gap-2"
                    >
                        Explore Services
                        <svg className="w-5 h-5 transition-all duration-300 ease-in-out group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>

                {/* Quick Links */}
                <div className="pt-8 border-t border-foreground/10 mt-12">
                    <p className="text-sm text-foreground/60 mb-4">Quick Links:</p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        <Link href="/aboutus" className="text-blue hover:text-sky hover:underline transition-colors">
                            About Us
                        </Link>
                        <Link href="/contactus" className="text-blue hover:text-sky hover:underline transition-colors">
                            Contact
                        </Link>
                        <Link href="/services" className="text-blue hover:text-sky hover:underline transition-colors">
                            Services
                        </Link>
                    </div>
                </div>

                {/* Fun Message */}
                <div className="pt-6">
                    <p className="text-sm text-foreground/50 italic">
                        "Not all those who wander are lost... but this page definitely is!" 🚀
                    </p>
                </div>
            </div>
        </div>
    )
}
