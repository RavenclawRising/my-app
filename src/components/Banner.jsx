import React from 'react';
import img from '../assets/magick.png'
import ShootingStars from './ShootingStars';
import { motion } from 'framer-motion';


const Banner = () => {
  return (
    <div className=' min-h-screen bg-gradient-to-br from-gray-900 to-blue-900/30 relative overflow-hidden '>

        <div className=' container mx-auto px-4 h-screen flex items-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full'>
                {/* TEXT CONTENT - Blissful Shelves appears and rises by adjusting the opacity and the y-axis. */}
                <div className=' lg:col-span-1 flex flex-col justify-center space-y-6'>
                    {motion}
                    <motion.h1 
                        initial={{ opacity: 0, y: 30}}
                        animate={{ opacity: 1, y: 0}}
                        className=' text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-violet-400
                        via-sky-500 to-fuchsia-400 bg-clip-text text-transparent pb-[10px]'>
                           Blissful Shelves
                    </motion.h1>

                    {/* TEXT CONTENT - The paragraph text is brought in using shifts in opacity and a short delay */}
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{delay: 0.7}}
                        className=' text-lg text-cyan-100/80'>
                            Materialize your next read with our dynamic previews and immersive interaction   
                    </motion.p>

                    {/* TEXT CONTENT - The button zooms in when hovered and out when tapped. */}
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => document.getElementById('hero').scrollIntoView({ behavior: 'smooth' })}
                        className=' bg-gradient-to-r from-indigo-600 via-fuchsia-400 to-sky-500 w-fit px-8 py-3
                        rounded-full font-bold text-white shadow-lg hover:shadow-cyan500/30 transition-all'>
                          Magic Awaits  
                    </motion.button>
                </div>

                { /* IMAGE - The image floats by adjusting the y-axis and rotateY parameters. */}
                <div className=' md:col-span-1 lg:col-span-2 h-64 sm:h-80 md:h-[600px] lg:h-[700px] relative 
                 flex items-center justify-center'>
                    <motion.div 
                        className=' relative w-full h-full'
                        animate={{
                            y: [0, -20, 0],
                            rotateY: [0, 5, 0]
                        }}
                        transition={{
                            duration:6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}>
                            <div className=' absolute inset-0 rounde-3xl backdrop-blur-xl overflow-hidden'>
                                <img src={img} alt="Magic Book" className=' w-full h-full object-contain
                                p-8' />
                            </div>
                    </motion.div>
                </div>
            </div>
        </div>

        {/* Shooting Stars - The ShootingStars component is reused throughout the site.*/}                    
        <ShootingStars />
    </div>
    
  )
}

export default Banner;