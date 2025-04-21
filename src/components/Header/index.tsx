import { JSX, useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from 'src/utils/animations';
import { SECTIONS } from 'src/utils/constants';
import { signInWithGoogle, auth } from 'src/api/firebase';
import { UserAvatar } from 'src/components/Header/components/UserAvatar';
import { GlobalContext } from 'src/root';
import { MobileMenu } from 'src/components/Header/components/MobileMenu';

export const Header = (): JSX.Element => {
  const { setAlertProps } = useContext(GlobalContext);

  const [isPopoverMenuOpen, setIsPopoverMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) =>
      setIsAuthenticated(!!user)
    );

    return () => unsubscribe();
  }, []);

  const handleGoogleAuth = async () => {
    try {
      await signInWithGoogle();
    } catch {
      setAlertProps({
        text: 'Failed to sign in',
        type: 'error',
        position: 'top',
      });
    }
  };

  return (
    <motion.header
      variants={{
        show: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      initial='hidden'
      animate='show'
      className='border-base-100 fixed top-0 z-10 flex h-[72px] w-screen flex-row items-center justify-around border-[1.5px] bg-white md:h-[96px] lg:px-3 xl:px-8'
    >
      {/* Logo section */}
      <motion.div
        variants={fadeInUp}
        className='absolute left-[28px] flex flex-row items-center md:static'
      >
        <img
          src='/frame.png'
          alt='header-logo'
          className='h-[32px] w-[32px] md:h-[28px] md:w-[28px] xl:h-[32px] xl:w-[32px]'
        />
        <h2 className='ms-1 text-xl leading-[140%] font-bold md:text-[18px] lg:text-xl'>
          Estatery
        </h2>
      </motion.div>

      {/* Desktop navigation */}
      <div className='hidden flex-row items-center leading-[150%] font-medium md:flex md:gap-[32px] md:text-sm lg:text-base xl:gap-[58px]'>
        {SECTIONS.map((section, index) => (
          <motion.div
            key={`${section}-${index}`}
            variants={fadeInUp}
            className='hover:bg-purple-94 cursor-pointer rounded-lg px-1 py-2 transition-colors duration-300 lg:px-3'
          >
            {section}
          </motion.div>
        ))}
      </div>

      {/* Desktop auth buttons or user avatar */}
      <div className='hidden w-[148px] flex-row items-center gap-[10px] md:flex lg:w-[256px] lg:gap-[18px]'>
        {isAuthenticated ? (
          <motion.div
            className='absolute right-[28px] flex h-[48px] w-[48px] items-center justify-center'
            variants={fadeInUp}
          >
            <UserAvatar />
          </motion.div>
        ) : (
          <>
            <motion.button
              variants={fadeInUp}
              className={`active:border-secondary-1000 active:text-secondary-1000 border-base-300 hover:border-accent-100 focus:border-accent-100 focus:text-accent-100 disabled:bg-paragraph disabled:border-paragraph h-[38px] w-[69px] cursor-pointer rounded-lg border-2 text-sm leading-[150%] font-bold md:text-base lg:h-[48px] lg:w-[119px]`}
              onClick={handleGoogleAuth}
            >
              Login
            </motion.button>
            <motion.button
              variants={fadeInUp}
              className={`active:bg-secondary-600 active:border-secondary-600 border-accent-100 bg-accent-100 hover:bg-secondary-100 focus:bg-accent-100 focus:border-secondary-800 hover:border-secondary-100 disabled:text-disabled-text disabled:bg-paragraph h-[38px] w-[69px] cursor-pointer rounded-lg border-2 text-sm leading-[150%] font-bold text-white md:text-base lg:h-[48px] lg:w-[119px]`}
              onClick={handleGoogleAuth}
            >
              Sign Up
            </motion.button>
          </>
        )}
      </div>

      {/* Mobile menu button */}
      <motion.div className='absolute right-[28px] z-10 flex h-[34px] w-[34px] cursor-pointer items-center justify-center md:hidden'>
        <button
          className='absolute h-[34px] w-[34px] cursor-pointer rounded-md bg-white text-black focus:outline-none'
          onClick={() => setIsPopoverMenuOpen((prev) => !prev)}
        >
          <div className='absolute top-1/2 left-1/2 block w-5 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer'>
            <span
              className={`absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out ${
                isPopoverMenuOpen ? 'rotate-45' : '-translate-y-1'
              }`}
            />
            <span
              className={`absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out ${
                isPopoverMenuOpen ? '-rotate-45' : 'translate-y-1'
              }`}
            />
          </div>
        </button>
      </motion.div>

      {isPopoverMenuOpen && (
        <MobileMenu
          isAuthenticated={isAuthenticated}
          setIsPopoverMenuOpen={setIsPopoverMenuOpen}
          handleGoogleAuth={handleGoogleAuth}
        />
      )}
    </motion.header>
  );
};
