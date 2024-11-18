import { companies, testimonials } from '@/data'
import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { div } from 'framer-motion/client'

const Clients = () => {
  return (
    <div className="py-10" id="testimonials">
      <h1 className="heading">
        Kind words{" "}
        <span className="text-purple">from colleagues</span>
      </h1>
      <div className="flex flex-col items-center mt-20">
        <div className='h-auto rounded-md flex flex-col antialiased items-center overflow-hidden relative'>
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
            <div className='flex flex-wrap py-10 items-center justify-center gap-5 md:gap-10 max-lg: mt-10'>
                {companies.map(({id, name, nameImg}) => (
                    <div key={id} className='flex flex-wrap items-center justify-center gap-6 md:gap-12'>
                        <img 
                            src={nameImg}
                            alt={name}
                            className='w-16 h-auto md:w-24 md:h-auto object-contain'
                        />
                    </div>
                ))}
            </div>
        </div>        
      </div>
    </div>
  )
}

export default Clients