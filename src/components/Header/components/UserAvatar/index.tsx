import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { logout } from 'src/api/firebase';
import { auth } from 'src/api/firebase';
import ClickAwayListener from 'react-click-away-listener';

export const UserAvatar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { currentUser } = auth;
  const { email = '' } = currentUser || {};
  const firstLetter = email?.charAt(0).toUpperCase();

  const handleLogout = async () => {
    await logout();
    setIsMenuOpen(false);
  };

  return (
    <div className='absolute right-[28px]'>
      <button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className='flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full border-2 border-gray-200 bg-white hover:border-gray-300 focus:outline-none'
      >
        <span className='text-lg font-bold text-gray-700'>{firstLetter}</span>
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <ClickAwayListener onClickAway={() => setIsMenuOpen(false)}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className='absolute top-[80px] right-0 w-64 rounded-lg bg-white p-4 shadow-lg'
            >
              <div className='mb-4'>
                <p className='text-sm text-gray-500'>Email</p>
                <p className='text-base font-medium text-gray-900'>{email}</p>
              </div>
              <button
                onClick={handleLogout}
                className='bg-accent-100 hover:bg-secondary-100 w-full cursor-pointer rounded-lg px-4 py-2 text-white focus:outline-none'
              >
                Logout
              </button>
            </motion.div>
          </ClickAwayListener>
        )}
      </AnimatePresence>
    </div>
  );
};
