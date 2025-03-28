import React from 'react';
import ShootingStars from './ShootingStars';
import { GiBookshelf } from "react-icons/gi";
import { DiGithubBadge } from "react-icons/di";
import { RiGlobalLine } from "react-icons/ri";
import { SiSlack, SiLinkedin } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Footer = () => {
  return (
    <footer className=' relative bg-gradient-to-b from-gray-900 to-blue-900/90 backdrop-blur-lg border-t border-t-blue-800'>
        {/* Shooting Stars */}
        <ShootingStars />

        <div className=' max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16'>
            <div className=' grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-10'>
                   {/* BRAND SECTION */}
                   <div className=' space-y-6 text-center sm:text-left'>
                        <div className=' flex justify-center sm:justify-start items-center space-x-2'>
                            <GiBookshelf className=' h-8 w-8 text-violet-400' />
                            <span className= ' text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400  to-cyan-400 bg-clip-text text-transparent'>
                                BLISSFUL BOOKS
                            </span>
                        </div>
                        <p className=' text-gray-400 text-sm'>
                            Your portal to magical worlds. Open a book. Find your pathway and follow a character into a world beyond.
                        </p>
                   </div>


                    {/* tech stack */}
                    <div className=' space-y text-center sm:text-left'>
                        <h3 className=' text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                            Powered By
                        </h3>
                        <div className=' mt-5 flex flex-wrap gap-5 justify-center sm:justify-start '>
                            {['React', 'Tailwind', 'Vite', 'GoogleAPI'].map((tech) => (
                                <span
                                    className=' px-3 py-1.5 cursor-pointer rounded-full bg-gray-800/50 text-gray-300 text-sm
                                    backdrop-blur-sm hover:bg-sky-200/10 hover:text-indigo-400 transition-all'
                                    key={tech}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className=' mt-4 space-y-2'>
                            <div className=' flex items-center justify-center sm:justify-start space-x-2 text-gray-400'>
                                <VscVscode  className=' h-5 w-5 '/>
                                <span className=' text-sm'>Developer-Friendly API</span>
                            </div>
                            <div className=' flex items-center justify-center sm:justify-start space-x-2 text-gray-400'>
                                <RiGlobalLine className=' h-5 w-5 '/>
                                <span className=' text-sm'>Global Book Database</span>
                            </div>
                        </div>
                    </div>

                    {/* SOCIAL LINKS */}
                    <div className=' space-y-4 text-center sm:text-left'>
                        <h3 className=' text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                            Connect
                        </h3>
                        <div className='flex justify-center sm:justify-start text-xl space-x-4'>
                            {[
                                 ['https://github.com/RavenclawRising', 'hover:text-pink-300', DiGithubBadge],
                                 ['https://www.linkedin.com/in/laura-duncan-b7089272', 'hover:text-blue-300', SiLinkedin],
                                 ['https://duncanwebdev.slack.com/ssb/', 'hover:text-indigo-400', SiSlack],
                             // eslint-disable-next-line no-unused-vars
                             ].map(([link, className, Icon]) => (
                                <a
                                    href={link}
                                    key={link}
                                    className={`text-blue-400 ${className}`}
                                    target="_blank"
                                    rel="noopener noreferrer" // Ensures safe linking
                                >
                                    <Icon size={34} />
                                </a>
                            ))}
                        </div>

                    </div>
            </div>

            {/* COPYRIGHT */}
            <div className=' border-t border-gray-400 mt-12 pt-8 text-center'>
                <p className=' text-sky-300 text-sm'>
                    &copy; {new Date().getFullYear()} Blissful Books. All content belongs to the author on this page.
                </p>
                <div className=' mt-2 flex flex-wrap justify-center space-x-4 text-gray-300 text-sm'>
                            <a href="#" className=' hover:text-cyan-300 transition-colors'>Contact</a>
                </div>
            </div>
        </div>
    </footer>
  )
};

export default Footer;