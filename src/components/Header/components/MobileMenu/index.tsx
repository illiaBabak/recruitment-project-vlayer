import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { signInWithGoogle } from 'src/api/firebase';
import { UserAvatar } from 'src/components/Header/components/UserAvatar';
import { SECTIONS } from 'src/utils/constants';
import { GlobalContext } from 'src/root';
import { useContext } from 'react';

type Props = {
  isAuthenticated: boolean;
  setIsPopoverMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MobileMenu = ({
  isAuthenticated,
  setIsPopoverMenuOpen,
}: Props) => {
  const { setAlertProps } = useContext(GlobalContext);

  return (
    <AnimatePresence>
      {/* Dynamic key ensures correct animation reset on re-render */}
      <motion.div
        key={`mobile-menu-${new Date().getTime()}`}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className='fixed top-[50%] left-[50%] flex h-screen w-screen translate-x-[-50%] translate-y-[-50%] transform flex-col justify-around gap-2.5 rounded-md bg-white/80 px-7 py-2 backdrop-blur-md'
      >
        {/* Mobile menu header with close button and user avatar */}

        {isAuthenticated && (
          <div className='flex items-center justify-between'>
            <div className='absolute top-[80px] right-[-7px]'>
              <UserAvatar />
            </div>
          </div>
        )}

        {/* Mobile navigation links */}
        <div>
          {SECTIONS.map((section, index) => (
            <motion.div
              key={`section-${section}-${index}`}
              className='my-6 text-[26px] text-black'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              onClick={() => setIsPopoverMenuOpen(false)}
            >
              {section}
            </motion.div>
          ))}
        </div>

        {/* Mobile auth buttons */}
        {!isAuthenticated && (
          <div className='flex flex-col items-center gap-6'>
            <motion.button
              key='login-button'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2, delay: 0.5 }}
              className={`active:border-secondary-1000 active:text-secondary-1000 border-base-300 hover:border-accent-100 focus:border-accent-100 focus:text-accent-100 disabled:bg-paragraph disabled:border-paragraph h-[48px] w-full cursor-pointer rounded-lg border-2 text-base leading-[150%] font-bold`}
              onClick={async () => await signInWithGoogle(setAlertProps)}
            >
              Login
            </motion.button>
            <motion.button
              key='signup-button'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2, delay: 0.6 }}
              className={`active:bg-secondary-600 active:border-secondary-600 border-accent-100 bg-accent-100 hover:bg-secondary-100 focus:bg-accent-100 focus:border-secondary-800 hover:border-secondary-100 disabled:text-disabled-text disabled:bg-paragraph h-[48px] w-full cursor-pointer rounded-lg border-2 text-base leading-[150%] font-bold text-white`}
              onClick={async () => await signInWithGoogle(setAlertProps)}
            >
              Sign Up
            </motion.button>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
