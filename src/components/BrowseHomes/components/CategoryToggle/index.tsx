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
      className='bg-base-100 border-base-300 relative w-[280px] cursor-pointer rounded-lg border-[1px] p-2 sm:w-[352px]'
      onClick={handleToggle}
    >
      <div
        data-testid='category-slider'
        className={`border-base-300 hover:bg-secondary-0 active:border-accent-100 active:bg-secondary-300 absolute top-[50%] z-[3] h-[48px] w-[120px] translate-y-[-50%] rounded-lg border-[1px] bg-white shadow-md transition-transform duration-300 ease-in-out sm:w-[165px] ${
          isHousesCategorySelected
            ? 'translate-x-[1px]'
            : 'translate-x-[145px] sm:translate-x-[171px]'
        }`}
      />
      <div className='relative flex h-[48px] gap-[12px]'>
        <div
          data-testid='houses-category'
          className={`hover:text-accent-100 hover:bg-secondary-300 z-[4] flex h-[48px] w-[120px] flex-1 items-center justify-center rounded-lg text-center text-lg transition-colors duration-300 sm:w-[151px] ${
            isHousesCategorySelected
              ? 'text-accent-100 active pointer-events-none font-bold'
              : 'text-base-600 font-medium'
          }`}
        >
          Houses
        </div>
        <div
          data-testid='apartments-category'
          className={`hover:text-accent-100 hover:bg-secondary-300 z-[4] flex h-[48px] w-[120px] flex-1 items-center justify-center rounded-lg text-center text-lg transition-colors duration-300 sm:w-[151px] ${
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
