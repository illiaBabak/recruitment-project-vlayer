import { JSX } from 'react';
import { capitalize } from 'src/utils/capitalize';
import { FOOTER_LINKS, SOCIAL_MEDIA } from 'src/utils/constants';

export const Footer = (): JSX.Element => {
  return (
    <div className='flex h-[344px] w-screen flex-col justify-between bg-white px-12 py-2 md:h-[226px] md:px-16 md:py-12'>
      <div className='relative flex w-[full] flex-col justify-between md:flex-row'>
        <div className='absolute left-0 flex flex-row items-center justify-center md:static'>
          <img
            src='/frame.png'
            alt='header-logo'
            className='h-[32px] w-[32px]'
          />
          <h2 className='ms-1 text-xl leading-[140%] font-bold'>Estatery</h2>
        </div>
        <div className='mt-14 flex h-[60px] flex-row flex-wrap justify-center text-base md:mt-1 md:flex-nowrap md:justify-stretch'>
          {FOOTER_LINKS.map((link, index) => (
            <p
              key={`footer-${link}-${index}`}
              className='text-base-600 mx-5 mt-2 h-[28px] cursor-pointer hover:underline md:mx-7 md:mt-0'
            >
              {link}
            </p>
          ))}
        </div>
      </div>

      <hr className='border-purple-94 w-full' />

      <div className='relative mb-8 flex w-[full] flex-col justify-center md:mb-0 md:flex-row md:justify-between'>
        <p className='text-base-600 text-center'>
          ©{new Date().getFullYear()} Estatery. All rights reserved
        </p>
        <div className='mt-7 flex flex-row justify-center gap-12 text-base md:mt-1 md:justify-normal'>
          {SOCIAL_MEDIA.map((social) => (
            <img
              key={social}
              src={`/${social}.png`}
              alt={capitalize(social)}
              className='h-[20px] w-[20px] cursor-pointer'
            />
          ))}
        </div>
      </div>
    </div>
  );
};
