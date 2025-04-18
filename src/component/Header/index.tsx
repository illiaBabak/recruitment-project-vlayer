import { JSX, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp } from 'src/utils/animations';
import { SECTIONS } from 'src/utils/constants';

export const Header = (): JSX.Element => {
  // State for button interactions and mobile menu
  const [isPressedSignUpBtn, setIsPressedSignUpBtn] = useState(false);
  const [isPressedLoginBtn, setIsPressedLoginBtn] = useState(false);
  const [isOpenedMenu, setIsOpenedMenu] = useState(false);

  return (
    <motion.header
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      initial='hidden'
      animate='show'
      className='border-base-100 fixed top-0 z-10 flex h-[72px] w-full flex-row items-center justify-around border-[1.5px] bg-white md:h-[96px]'
    >
      {/* Logo section */}
      <motion.div
        variants={fadeInUp}
        className='absolute left-[28px] flex flex-row items-center md:static'
      >
        <img
          src='/public/frame.png'
          alt='header-logo'
          className='h-[32px] w-[32px]'
        />
        <h2 className='ms-1 text-xl leading-[140%] font-bold'>Estatery</h2>
      </motion.div>

      {/* Desktop navigation */}
      <div className='hidden flex-row items-center leading-[150%] font-medium md:flex md:gap-[32px] md:text-sm lg:gap-[58px] lg:text-base'>
        {SECTIONS.map((section, index) => (
          <motion.div
            key={`${section}-${index}`}
            variants={fadeInUp}
            className='cursor-pointer'
          >
            {section}
          </motion.div>
        ))}
      </div>

      {/* Desktop auth buttons */}
      <div className='hidden flex-row items-center gap-[18px] md:flex'>
        <motion.button
          variants={fadeInUp}
          className={`${isPressedLoginBtn ? 'border-secondary-1000 text-secondary-1000' : 'border-base-300 hover:border-accent-100 focus:border-accent-100 focus:text-accent-100'} disabled:bg-paragraph disabled:border-paragraph h-[48px] w-[89px] cursor-pointer rounded-lg border-2 text-base leading-[150%] font-bold lg:w-[119px]`}
          onClick={() => setIsPressedLoginBtn(true)}
        >
          Login
        </motion.button>
        <motion.button
          variants={fadeInUp}
          className={`${isPressedSignUpBtn ? 'bg-secondary-600 border-secondary-600' : 'border-accent-100 bg-accent-100 hover:bg-secondary-100 focus:bg-accent-100 focus:border-secondary-800 hover:border-secondary-100'} disabled:text-disabled-text disabled:bg-paragraph h-[48px] w-[89px] cursor-pointer rounded-lg border-2 text-base leading-[150%] font-bold text-white lg:w-[119px]`}
          onClick={() => setIsPressedSignUpBtn(true)}
        >
          Sign Up
        </motion.button>
      </div>

      {/* Mobile menu button */}
      <motion.div className='absolute right-[28px] z-10 flex h-[34px] w-[34px] cursor-pointer items-center justify-center md:hidden'>
        <button
          className='absolute h-[34px] w-[34px] cursor-pointer rounded-md bg-white text-black focus:outline-none'
          onClick={() => setIsOpenedMenu((prev) => !prev)}
        >
          <div className='absolute top-1/2 left-1/2 block w-5 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer'>
            <span
              className={`absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out ${
                isOpenedMenu ? 'rotate-45' : '-translate-y-1'
              }`}
            />
            <span
              className={`absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out ${
                isOpenedMenu ? '-rotate-45' : 'translate-y-1'
              }`}
            />
          </div>
        </button>
      </motion.div>

      {/* Mobile menu with animations */}
      <AnimatePresence>
        {isOpenedMenu && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className='fixed top-[50%] left-[50%] flex h-screen w-screen translate-x-[-50%] translate-y-[-50%] transform flex-col justify-around gap-2.5 rounded-md bg-white/80 px-7 py-2 backdrop-blur-md'
          >
            {/* Mobile navigation links */}
            <div>
              {SECTIONS.map((section, index) => (
                <motion.div
                  key={`section-${section}-${index}`}
                  className='my-9 text-[26px] text-black'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                  onClick={() => setIsOpenedMenu(false)}
                >
                  {section}
                </motion.div>
              ))}
            </div>

            {/* Mobile auth buttons */}
            <div className='flex flex-col items-center gap-6'>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.2, delay: 0.5 }}
                className={`${isPressedLoginBtn ? 'border-secondary-1000 text-secondary-1000' : 'border-base-300 hover:border-accent-100 focus:border-accent-100 focus:text-accent-100'} disabled:bg-paragraph disabled:border-paragraph h-[48px] w-full cursor-pointer rounded-lg border-2 text-base leading-[150%] font-bold`}
                onClick={() => setIsPressedLoginBtn(true)}
              >
                Login
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.2, delay: 0.6 }}
                className={`${isPressedSignUpBtn ? 'bg-secondary-600 border-secondary-600' : 'border-accent-100 bg-accent-100 hover:bg-secondary-100 focus:bg-accent-100 focus:border-secondary-800 hover:border-secondary-100'} disabled:text-disabled-text disabled:bg-paragraph h-[48px] w-full cursor-pointer rounded-lg border-2 text-base leading-[150%] font-bold text-white`}
                onClick={() => setIsPressedSignUpBtn(true)}
              >
                Sign Up
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
