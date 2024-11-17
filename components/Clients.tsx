import { companies, testimonials } from '@/data'
import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { div } from 'framer-motion/client'

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Kind words{" "}
        <span className="text-purple">from colleagues</span>
      </h1>
      <div className="flex flex-col items-center mt-20">
        <div className='h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center overflow-hidden relative'>
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
            <div className='flex flex-wrap items-center justify-center gap-3 md:gap-14 max-lg: mt-10'>
                {companies.map(({id, img, name, nameImg}) => (
                    <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
                        <img 
                            src={img}
                            alt={name}
                            className='md:w-10 w-5'
                        />
                        <img 
                            src={nameImg}
                            alt={name}
                            className='md:w-14 w-10' 
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