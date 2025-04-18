import { JSX, useState } from 'react';
import { CONSTRUCTIONS } from 'src/utils/constants';
import { Card } from '../Card';

export const BrowseHomes = (): JSX.Element => {
  const [currentCategory, setCurrentCategory] = useState<
    'Houses' | 'Apartments'
  >('Houses');

  const handleToggle = () =>
    setCurrentCategory(currentCategory === 'Houses' ? 'Apartments' : 'Houses');

  return (
    <div className='mt-12 flex flex-col items-center p-0 sm:px-4 sm:py-12 md:p-12'>
      <div
        data-testid='category-toggle'
        className='bg-secondary-0 border-base-300 relative h-[64px] w-[280px] cursor-pointer rounded-lg border-[1px] p-1 sm:w-[352px]'
        onClick={handleToggle}
      >
        <div
          data-testid='category-slider'
          className={`border-base-300 absolute top-[50%] h-[48px] w-[120px] translate-y-[-50%] rounded-lg border-[1px] bg-white shadow-md transition-transform duration-300 ease-in-out sm:w-[151px] ${
            currentCategory === 'Houses'
              ? 'translate-x-[6px]'
              : 'translate-x-[142px] sm:translate-x-[180px]'
          }`}
        />
        <div className='relative flex h-full'>
          <div
            data-testid='houses-category'
            className={`z-[3] flex flex-1 items-center justify-center text-lg transition-colors duration-300 ${
              currentCategory === 'Houses'
                ? 'text-accent-100 font-bold'
                : 'text-base-600 font-medium'
            }`}
          >
            Houses
          </div>
          <div
            data-testid='apartments-category'
            className={`z-[3] flex flex-1 items-center justify-center text-lg transition-colors duration-300 ${
              currentCategory === 'Apartments'
                ? 'text-accent-100 font-bold'
                : 'text-base-600 font-medium'
            }`}
          >
            Apartments
          </div>
        </div>
      </div>

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
            (construction) => construction.type === currentCategory.slice(0, -1)
          ).map((el, index) => (
            <Card
              key={`construction-${el.name}-${index}-${el.type}`}
              img={el.image}
              title={el.name}
              location={el.location}
              price={el.price}
              shouldBeLiked={true}
              category={el.type}
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
