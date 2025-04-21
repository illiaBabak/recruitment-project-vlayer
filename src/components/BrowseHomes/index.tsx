import { JSX, useState } from 'react';
import { CONSTRUCTIONS } from 'src/utils/constants';
import { ConstructionCard } from 'src/components/ConstructionCard';
import { ConstructionCategory } from 'src/types';
import { CategoryToggle } from './components/CategoryToggle';

export const BrowseHomes = (): JSX.Element => {
  const [currentCategory, setCurrentCategory] =
    useState<ConstructionCategory>('House');

  const handleToggle = () =>
    setCurrentCategory((prev) => (prev === 'House' ? 'Apartment' : 'House'));

  return (
    <div className='mt-12 flex min-h-screen w-full flex-col items-center p-0 sm:px-4 sm:pt-12 md:p-12'>
      <CategoryToggle
        isHousesCategorySelected={currentCategory === 'House'}
        handleToggle={handleToggle}
      />
      <div className='mt-10 w-[300px] md:w-[544px]'>
        <h2 className='text-center text-[28px] font-bold md:text-[40px]'>
          We make it easy for houses and apartments.
        </h2>
        <p className='text-base-600 mt-8 text-center text-base'>
          Whether it's selling your current home, getting financing, or buying a
          new home, we make it easy and efficient. The best part? you'll save a
          bunch of money and time with our services.
        </p>

        <div className='-mx-1 mt-12 flex h-[300px] flex-row items-center justify-start gap-4 overflow-x-auto overflow-y-hidden px-4 md:justify-center md:overflow-visible lg:gap-8'>
          {CONSTRUCTIONS.filter(
            (construction) => currentCategory === construction.type
          ).map((el, index) => (
            <ConstructionCard
              key={`construction-${el.name}-${index}-${el.type}`}
              construction={el}
              shouldShowLikeButton={true}
              className='relative w-[260px] flex-shrink-0 md:w-auto'
              animation={{
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 1, delay: 0.2 },
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
