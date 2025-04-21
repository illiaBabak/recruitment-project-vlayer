import { JSX } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from 'src/utils/animations';
import { ConstructionCard } from 'src/components/ConstructionCard';
import { FEATURED_CONSTRUCTION } from 'src/utils/constants';

export const StartSection = (): JSX.Element => {
  return (
    <motion.section
      variants={{
        show: {
          transition: {
            staggerChildren: 0.3,
          },
        },
      }}
      initial='hidden'
      animate='show'
      className='mt-[96px] flex min-h-[calc(100vh-96px)] w-full flex-col overflow-hidden md:flex-row'
    >
      <aside className='bg-start-section relative flex w-full flex-col items-start justify-center md:w-[50%]'>
        {/* Gradient overlay with blur effect */}
        <div className='absolute z-[2] h-full w-full backdrop-blur-[2px]'>
          <div className='absolute bottom-0 left-0 h-full w-full rounded-full bg-[radial-gradient(ellipse_at_center,rgba(139,138,255,0.25)_0%,rgba(139,138,255,0.2)_5%,rgba(114,53,229,0.15)_15%,rgba(114,53,229,0.1)_25%,rgba(61,30,254,0.08)_35%,rgba(61,30,254,0.05)_45%,rgba(61,30,254,0.03)_55%,rgba(61,30,254,0.02)_65%,rgba(255,255,255,0.1)_75%,rgba(255,255,255,0.05)_85%,rgba(255,255,255,0.02)_95%,rgba(255,255,255,0)_100%)] backdrop-blur-[6px] md:h-[60%] md:w-[70%]'></div>
        </div>

        {/* Main content container with title, description and statistics */}
        <div className='z-[3] flex w-full flex-col items-center justify-center py-8 md:items-stretch md:justify-normal md:py-10 md:ps-14 lg:ps-20'>
          <motion.h1
            variants={fadeInUp}
            className='text-center text-4xl leading-[110%] font-bold md:text-justify lg:text-5xl xl:text-6xl 2xl:text-7xl'
          >
            Buy, rent, or sell <br />
            your property <br /> easily
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className='mt-6 w-[290px] text-center text-base leading-[160%] tracking-[-0.5%] md:text-justify xl:w-[350px]'
          >
            A great platform to buy, sell, or even rent your properties without
            any commisions.
          </motion.p>

          <div className='mt-12 flex flex-row gap-16 lg:gap-24'>
            <motion.div
              variants={fadeInUp}
              className='flex flex-row items-center'
            >
              <hr className='bg-base-300 me-5 h-[68px] w-[3px] border-none' />
              <div className='flex flex-col'>
                <p className='text-accent-100 text-[32px] font-bold'>50k+</p>
                <p className='text-base-600 mb-3 text-base'>renters</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className='flex flex-row items-center'
            >
              <hr className='bg-base-300 me-5 h-[68px] w-[3px] border-none' />
              <div className='flex flex-col'>
                <p className='text-accent-100 text-[32px] font-bold'>10k+</p>
                <p className='text-base-600 mb-3 text-base'>properties</p>
              </div>
            </motion.div>
          </div>
        </div>
      </aside>

      <aside className='relative flex h-full w-full items-center justify-center md:w-[50%] md:items-stretch md:justify-normal'>
        <motion.div
          className='absolute top-[50%] left-[-9%] z-[3] translate-y-[-50%] sm:left-[-3%] md:top-[42%] md:left-[-24px] lg:left-[-42px]'
          initial={{ opacity: 0, x: '100vw' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <ConstructionCard
            className='scale-[50%] sm:scale-[60%] md:scale-none'
            construction={FEATURED_CONSTRUCTION}
          />
        </motion.div>

        <img
          className='h-[75%] w-[75%] object-cover md:h-screen md:w-full'
          src='src/images/map.png'
          alt='map-logo'
        />
      </aside>
    </motion.section>
  );
};
