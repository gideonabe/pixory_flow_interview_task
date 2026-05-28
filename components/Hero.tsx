'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion, Variants } from 'framer-motion'

const lines = Array.from({ length: 5 })

// Strictly typing the animation variants
const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const Hero: React.FC = () => {
  return (
    <section className="relative h-[calc(100svh-80px)] w-full overflow-hidden bg-primary">
      
      {/* BACKGROUND - Subtle scale-in effect */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/herobg.gif"
          alt="hero background"
          fill
          priority
          className="object-cover object-center opacity-90 will-change-transform"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* GRID LINES - Staggered fade and slide down */}
      <div className="absolute inset-0 flex justify-between px-4 md:px-10 pointer-events-none z-0">
        {lines.map((_, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, height: "0%" }}
            animate={{ opacity: 1, height: "96%" }}
            transition={{ duration: 1.2, delay: i * 0.15, ease: "easeInOut" }}
            className={`relative w-px bg-white/10 animate-pulse ${
              i % 2 !== 0 ? 'hidden md:block' : 'block'
            }`}
          >
            {/* Plus sign */}
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: (i * 0.15) + 0.8, duration: 0.5 }}
              className="absolute top-[30%] left-1/2 -translate-x-1/2 text-white/50 text-[10px] md:text-[11px]"
            >
              +
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* MAIN CONTENTS CONTAINER */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className='relative z-10 flex flex-col justify-between min-h-full w-full max-w-360 mx-auto px-4 md:px-8 lg:px-10 md:py-8'
      >

        {/* TOP FLOATING ELEMENTS */}
        <div className="flex justify-between items-start gap-6 w-full md:px-6 pt-3">
          
          {/* Info Box - Slides in from left */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className='hidden lg:block bg-white/10 backdrop-blur-md p-4 w-full max-w-sm md:w-64 lg:w-67.5 rounded-xl border-l border-t border-white/30 shadow-2xl transition-transform duration-500 hover:scale-[1.02]'
          >
            <p className='text-[13px] md:text-[15px] leading-relaxed md:leading-tight font-mono text-white/90 uppercase'>
              A powerful Web3 infrastructure that allows you to create, trade, and manage digital assets with full transparency and security.
            </p>
          </motion.div>

          {/* Play CTA - Slides in from right */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className='flex items-center gap-1 group cursor-pointer ml-0.5 md:ml-0 pt-4 md:pt-0'
          >
            <img src="/play.svg" alt="Play icon" className="w-4.75 h-4.75 ml-1 animate-pulse" />
            <p className='font-mono text-xs md:text-sm tracking-tight md:tracking-[-0.56px] text-white/90 group-hover:text-white transition-colors duration-300'>
              Fast. Secure. Permissionless.
            </p>
          </motion.div>
        </div>

        {/* BOTTOM TEXT SECTION */}
        <div className='flex flex-col justify-end w-full pb-4 md:pb-0'>
          
          {/* Decentralize */}
          <div className="overflow-hidden">
            <motion.h1 
              variants={fadeUpVariant}
              className='text-[16vw] lg:text-[140px] xl:text-[162px] text-white font-medium tracking-tighter leading-[0.85] md:tracking-[-13px]'
            >
              Decentralize
            </motion.h1>
          </div>
          
          {/* Paragraph, Button, and "Everything" */}
          <div className='flex flex-col-reverse lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-4 mt-1 lg:mt-3'>
            
            {/* Left side (Text + CTA) */}
            <div className='flex flex-col gap-2 w-full lg:w-[45%] xl:w-1/2'>
              <motion.p 
                variants={fadeUpVariant}
                className='font-light text-lg md:text-xl lg:text-[24px] leading-5.5 tracking-[-1.62px] italic lg:leading-[1.4] text-white/90'
              >
                Build, scale, and innovate with blockchain technology. Our platform enables secure, transparent, and permissionless digital experiences for the future of the internet.
              </motion.p>

              {/* Enhanced CTA button */}
              <motion.div variants={fadeUpVariant}>
                <Link
                  href="/connect"
                  className="
                    group relative flex h-14 md:h-16 w-44 sm:w-60 items-center justify-center
                    overflow-hidden rounded-full bg-white text-black
                    font-medium text-sm md:text-base tracking-tight
                    transition-all duration-300 ease-out
                    hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:-translate-y-1
                    active:scale-95
                  "
                >
                  <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                    Connect Wallet
                  </span>
                </Link>
              </motion.div>
            </div>
            
            {/* Right side ("Everything") */}
            <div className="w-full lg:w-auto">
              <motion.h1 
                variants={fadeUpVariant}
                className='text-[14vw] lg:text-[130px] xl:text-[150px] text-white font-medium leading-[0.85] lg:text-right tracking-tight md:tracking-[-13px] w-full lg:w-auto'
              >
                Everything
              </motion.h1>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero