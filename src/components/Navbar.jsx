import React from 'react'
import { useState, useEffect } from 'react';
import ShootingStars from './ShootingStars';
import { GiBookshelf, GiMagnifyingGlass } from "react-icons/gi";
import { PiFlowerLotusDuotone } from "react-icons/pi";


const Navbar = ({handleSearch}) => {

  const [isHovered, setIsHovered] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchTerm);
  }

  //Dynamic Effects like hovering, glowing, color changes, and floating effects
  useEffect(() => {
    const handleMouseMove = (e) => {
        const cards = document.querySelectorAll('.dynamic-gradient');
        cards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y= e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`)
            card.style.setProperty('--mouse-y', `${y}px`)
        })
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <nav className=' sticky top-0 z-50 bg-gray-900/95 backdrop-blur-2xl border-b
    border-blue-800 shadow-[0_0_60px_-15px_rgba(96,165,250,0.3)]' >
        <div className=' mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>

            <div className=' flex min-h-[4rem] md:min-h-[5rem] items-center justify-between flex-wrap
            gap-y-3 gap-x-4 py-2'>
                { /* LOGO Section - App Name Hovers on mouse enter as do books and lotus*/ }
                <div className=' dynamic-gradient relative overflow-hidden rounded-2xl p-1 hover:scale-105
                transition-transform duration-300 oder-1 md:order-none'
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)}
                style={{
                    '--mouse-x': '0px',
                    '--mouse-y': '0px',
                    background: isHovered ? `radial-gradient(400px circle at var (--mouse-x) var(--mouse-y),
                    rgba(59,130,246,0.4), transparent 40%)` : 'transparent'
                }}>

                    <div className=' bg-gray-900/80 backdrop-blur-sm rounded-xl p-2'>
                        <h1 className=' text-lg md:text-2xl font-bold bg-gradient-to-r from-cyan-400
                        via-blue-400 to-purple-400 bg-clip-text text-transparent animate-text-shine'>
                            <GiBookshelf className=' w-7 h-7 md:h-9 md:w-9 inline-block
                            animate-float text-violet-400 mr-2 md:mr-2 stroke-[2.5]'/>
                            <a href="/" className=' ml-1
                            md:ml-2 text-shadow-[0_0_10px_rgba(96,165,250,0.5)]'>
                                BLISSFUL BOOKS
                            </a>
                        </h1>

                    </div>

                </div>

                { /*SEARCH BAR - glows when moused over and changes color */ }
                <div className=' w-full md:flex-1 md:max-w-2xl order-3 md:order-2 lg:ml-6 md:mx-4'>
                    <form onSubmit={handleSubmit} className='w-full'>
                        <div className=' relative group'>
                            <div className=' absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl
                            blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500
                            animate-pulse-slow'/>

                            <div className='relative dynamic-gradient'>
                                <div className=' pointer-events-none absolute inset-y-0 left-0 flex items-center
                                pl-3 md;pl-4'>
                                    <GiMagnifyingGlass className=' h-5 w-5 md:h-6 md:w-6 text-sky-400 z-10'/>

                                </div>
                                <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                                 placeholder='Explore your magic...' className=' block
                                 w-full rounded-2xl border border-violet-500/50 bg-blue-970/60 py-2 md:py-3 pl-10
                                 md:pl-12 pr-4 pr-6 text-sm md:text-base text-gray-100 placeholder-gray-400
                                 focus:outline-none focus:border-sky-500/50 focus:ring-2 focus:ring-sky-400/40
                                 backdrop-blur-xl shadow-xl transition-all duration-300 hover:bg-sky-900/80'/>
                            </div>

                        </div>
                    </form>
                </div>

                {/* AVATAR SECTION - lotus glows and glow intensifies when hovered over */}
                <div className=' flex items-center space-x-4 order-2 md:order-3 ml-auto md:ml-0'>
                    <button className=' relative p-1 group hover:scale-105 transition-transform'>
                        <div className=' absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full
                         blur opacity-30 group-hover:opacity-50 transition-opacity'/>
                         <div className=' relative flex items-center justify-center h-10 w-10 md:h-15 md:w-15
                          rounded-full bg-blue-900/80 border-2 border-sky-300/20 group-hover:border-sky-300/40
                          backdrop-blur-sm overflow-hidden'>

                            <PiFlowerLotusDuotone className=' text-2xl text-fuchsia-400 md:text-4xl animate-holo'/>                          
                           
                          
                           
                        </div>
                       
                    </button>
                </div>

            </div>

        </div>
        {/* Shooting stars are created by a component designed to look like stars in a night sky. */}       
        <ShootingStars />

    </nav>
  )
};

export default Navbar;