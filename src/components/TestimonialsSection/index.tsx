import { motion } from 'framer-motion';
import { JSX, useState } from 'react';
import { TESTIMONIALS } from 'src/utils/constants';
import { TestimonialAuthor } from './components/TestimonialAuthor';

export const TestimonialsSection = (): JSX.Element => {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

  const currentTestimonial = TESTIMONIALS[activeTestimonialIndex];

  return (
    <div className='relative flex h-auto w-screen flex-col items-center justify-start gap-8 bg-gradient-to-t from-[rgba(240,235,252,1)] to-white px-8 pt-10 pb-8 md:min-h-screen md:justify-center md:pt-0'>
      <h2 className='text-[40px] font-bold'>Testimonials</h2>
      <p className='mb-2 w-[280px] text-center text-base text-gray-600 md:w-[352px]'>
        See what our property managers, landlords, and tenants have to say
      </p>

      <motion.div
        key={`testimonial-${activeTestimonialIndex}`}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }}
        className='flex w-full flex-col items-center text-center md:mt-1 lg:mt-5'
      >
        <p
          data-testid='testimonial-text'
          className='mb-4 w-[95%] text-xl leading-[160%] md:min-h-[96px] md:w-[80%] lg:w-[65%]'
        >
          {currentTestimonial.testimonial}
        </p>
        <p data-testid='testimonial-author'>
          <span className='font-semibold text-black'>
            {currentTestimonial.authorName},
          </span>
          <span className='text-base-600'>
            {' '}
            {currentTestimonial.authorRole}
          </span>
        </p>
      </motion.div>

      <div className='bottom-[10%] left-1/2 flex gap-1 md:absolute md:-translate-x-1/2 md:gap-4'>
        {TESTIMONIALS.map((testimonial, index) => (
          <TestimonialAuthor
            data-testid={`testimonial-${index}`}
            key={`${testimonial.authorName}-${index}`}
            testimonial={testimonial}
            isSelectedAuthor={activeTestimonialIndex === index}
            setActiveTestimonialIndex={() => setActiveTestimonialIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
