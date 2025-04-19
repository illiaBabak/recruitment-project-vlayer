import { JSX, useState } from 'react';
import { motion, MotionProps } from 'framer-motion';

type Props = {
  img: string;
  title: string;
  location: string;
  price: string;
  shouldBeLiked: boolean;
  className?: string;
  category?: 'House' | 'Apartment';
  animation?: MotionProps;
};

export const Card = ({
  img,
  title,
  location,
  price,
  shouldBeLiked,
  className,
  category,
  animation,
}: Props): JSX.Element => {
  const [isHoveredHeart, setIsHoveredHeart] = useState(false);
  const [isPressedHeart, setIsPressedHeart] = useState(false);

  // Helper function to determine heart icon source based on state
  const getHeartIconSrc = (): string => {
    if (isPressedHeart) return '/pressed-heart.png';
    if (isHoveredHeart) return '/hovered-heart.png';

    return '/heart-icon.png';
  };

  return (
    <motion.div
      {...animation}
      className={`group flex h-[200px] max-w-[230px] min-w-[230px] flex-col items-center justify-center rounded-lg hover:shadow-2xl lg:h-[290px] lg:max-w-[300px] lg:min-w-[300px] xl:h-[345px] xl:max-w-[352px] xl:min-w-[352px] ${className}`}
    >
      <img
        className='max-h-[125px] min-h-[125px] w-full lg:max-h-[165px] lg:min-h-[165px] xl:max-h-[200px] xl:min-h-[200px]'
        src={img}
        alt='card-icon'
      />
      {category === 'House' && (
        <img
          src='/house-tag.png'
          className='absolute top-[45%] left-[-6px] z-[3] h-[32px] w-[76px] md:left-[-8px] md:h-[40px] md:w-[96px] lg:top-[50%]'
          alt='category-tag'
        />
      )}

      {category === 'Apartment' && (
        <img
          src='/apartment-tag.png'
          className='absolute top-[45%] left-[-6px] z-[3] h-[32px] w-[100px] md:left-[-8px] md:h-[40px] md:w-[135px] lg:top-[50%]'
          alt='category-tag'
        />
      )}

      <div className='relative flex h-full w-[calc(100%-2px)] flex-col justify-between rounded-b-lg bg-white p-5 outline outline-black/10 group-hover:outline-none'>
        {shouldBeLiked && (
          <button
            className={`hover:border-secondary-100 absolute top-5 right-5 flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full border-[1.5px] hover:border-[1px] xl:h-[48px] xl:w-[48px] ${isPressedHeart ? 'bg-accent-100 border-secondary-100' : 'focus:border-secondary-100 focus:bg-secondary-300 border-neutral-200 bg-white'}`}
            onMouseEnter={() => setIsHoveredHeart(true)}
            onMouseLeave={() => setIsHoveredHeart(false)}
            onClick={({ currentTarget }) => {
              setIsPressedHeart((prev) => {
                if (!prev) return true;

                currentTarget.blur();
                return false;
              });
            }}
          >
            <img
              src={getHeartIconSrc()}
              className='max-h-[20px] min-h-[20px] max-w-[20px] min-w-[20px] xl:max-h-[24px] xl:min-h-[24px] xl:max-w-[24px] xl:min-w-[24px]'
              alt='heart-icon'
            />
          </button>
        )}

        <p className='text-accent-100 flex items-center text-2xl font-extrabold'>
          ${price}
          <span className='text-base-1000 ms-1 text-sm font-medium'>
            /month
          </span>
        </p>
        <p className='leading-[150%] font-bold text-black md:text-lg lg:text-2xl'>
          {title}
        </p>
        <p className='text-base-1000 mt-2 truncate text-base leading-[150%] font-medium'>
          {location}
        </p>
      </div>
    </motion.div>
  );
};
