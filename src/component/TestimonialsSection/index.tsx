import { JSX, useState } from 'react';
import { TESTIMONIALS } from 'src/utils/constants';

export const TestimonialsSection = (): JSX.Element => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className='relative flex min-h-screen w-screen flex-col items-center justify-start gap-8 bg-gradient-to-t from-[rgba(240,235,252,1)] to-white p-8 md:justify-center'>
      <h2 className='text-[40px] font-bold'>Testimonials</h2>
      <p className='mb-2 w-[280px] text-center text-base text-gray-600 md:w-[352px]'>
        See what our property managers, landlords, and tenants have to say
      </p>

      <div className='flex w-full flex-col items-center text-center md:mt-1 lg:mt-5'>
        <p className='mb-4 w-[95%] text-xl leading-[160%] md:h-[96px] md:w-[80%] lg:w-[65%]'>
          {TESTIMONIALS[activeTestimonial].testimonial}
        </p>
        <p className='md:mt-7'>
          <span className='font-semibold text-black'>
            {TESTIMONIALS[activeTestimonial].author},
          </span>
          <span className='text-base-600'>
            {' '}
            {TESTIMONIALS[activeTestimonial].authorRole}
          </span>
        </p>
      </div>

      <div className='bottom-[10%] left-1/2 flex gap-1 md:absolute md:-translate-x-1/2 md:gap-4'>
        {TESTIMONIALS.map((testimonial, index) => (
          <div
            key={`${testimonial.author}-${index}`}
            className='relative mx-3 flex h-[72px] w-[72px] cursor-pointer items-center justify-center transition-all duration-300'
            onClick={() => setActiveTestimonial(index)}
          >
            {activeTestimonial === index && (
              <div className='absolute top-0 left-0 h-[72px] w-[72px]'>
                <img
                  src='public/avatar-grey-ellipse.png'
                  alt='ellipse1'
                  className='absolute top-0 left-0 z-[4] min-h-[72px] min-w-[72px] object-contain'
                />
                <img
                  src='public/avatar-purple-ellipse.png'
                  alt='ellipse2'
                  className='absolute top-[-3.5px] left-[3px] z-[4] min-h-[72px] min-w-[72px] scale-[91.8%] object-contain'
                />
              </div>
            )}
            <img
              src={testimonial.authorImage}
              alt={testimonial.author}
              className='h-[60px] w-[60px] rounded-full object-cover shadow-lg'
            />
          </div>
        ))}
      </div>
    </div>
  );
};
