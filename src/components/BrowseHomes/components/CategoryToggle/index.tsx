import { JSX } from 'react';

type Props = {
  isHousesCategorySelected: boolean;
  handleToggle: () => void;
};

export const CategoryToggle = ({
  isHousesCategorySelected,
  handleToggle,
}: Props): JSX.Element => {
  return (
    <div
      data-testid='category-toggle'
      className='bg-base-100 border-base-300 relative h-[64px] w-[280px] cursor-pointer rounded-lg border-[1px] p-1 sm:w-[352px]'
      onClick={handleToggle}
    >
      <div
        data-testid='category-slider'
        className={`border-base-300 hover:bg-secondary-0 active:border-accent-100 active:bg-secondary-300 absolute top-[50%] z-[3] h-[48px] w-[120px] translate-y-[-50%] rounded-lg border-[1px] bg-white shadow-md transition-transform duration-300 ease-in-out sm:w-[151px] ${
          isHousesCategorySelected
            ? 'translate-x-[6px]'
            : 'translate-x-[142px] sm:translate-x-[180px]'
        }`}
      />
      <div className='relative flex h-full'>
        <div
          data-testid='houses-category'
          className={`hover:text-accent-100 active:bg-secondary-300 transition-colorsx z-[4] flex flex-1 items-center justify-center rounded-lg text-lg duration-300 ${
            isHousesCategorySelected
              ? 'text-accent-100 active pointer-events-none font-bold'
              : 'text-base-600 font-medium'
          }`}
        >
          Houses
        </div>
        <div
          data-testid='apartments-category'
          className={`hover:text-accent-100 active:bg-secondary-300 z-[4] flex flex-1 items-center justify-center rounded-lg text-lg transition-colors duration-300 ${
            isHousesCategorySelected
              ? 'text-base-600 font-medium'
              : 'text-accent-100 active pointer-events-none font-bold'
          }`}
        >
          Apartments
        </div>
      </div>
    </div>
  );
};
