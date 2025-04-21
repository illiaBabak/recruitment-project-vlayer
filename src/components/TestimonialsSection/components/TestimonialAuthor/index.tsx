import { JSX } from 'react';
import { Testimonial } from 'src/types';

type Props = {
  testimonial: Testimonial;
  isSelectedAuthor: boolean;
  setActiveTestimonialIndex: () => void;
};

export const TestimonialAuthor = ({
  testimonial,
  isSelectedAuthor,
  setActiveTestimonialIndex,
}: Props): JSX.Element => {
  return (
    <div
      className='relative mx-3 flex h-[72px] w-[72px] cursor-pointer items-center justify-center transition-all duration-300'
      onClick={() => setActiveTestimonialIndex()}
    >
      {isSelectedAuthor && (
        <div className='absolute top-0 left-0 h-[72px] w-[72px]'>
          <img
            src='/avatar-grey-ellipse.png'
            alt='ellipse1'
            className='absolute top-0 left-0 z-[4] min-h-[72px] min-w-[72px] object-contain'
          />
          <img
            src='/avatar-purple-ellipse.png'
            alt='ellipse2'
            className='absolute top-[-3.5px] left-[3px] z-[4] min-h-[72px] min-w-[72px] scale-[91.8%] object-contain'
          />
        </div>
      )}

      <img
        src={testimonial.authorImage}
        alt={testimonial.authorName}
        className='h-[60px] w-[60px] rounded-full object-cover shadow-lg'
      />
    </div>
  );
};
