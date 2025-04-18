import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { logout } from 'src/utils/firebase';
import { auth } from 'src/utils/firebase';

export const UserAvatar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = auth.currentUser;
  const userEmail = user?.email || '';
  const firstLetter = userEmail.charAt(0).toUpperCase();

  const handleLogout = async () => {
    try {
      await logout();
      setIsMenuOpen(false);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className='absolute right-[28px]'>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className='flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full border-2 border-gray-200 bg-white hover:border-gray-300 focus:outline-none'
      >
        <span className='text-lg font-bold text-gray-700'>{firstLetter}</span>
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className='absolute top-[80px] right-0 w-64 rounded-lg bg-white p-4 shadow-lg'
          >
            <div className='mb-4'>
              <p className='text-sm text-gray-500'>Email</p>
              <p className='text-base font-medium text-gray-900'>{userEmail}</p>
            </div>
            <button
              onClick={handleLogout}
              className='w-full rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600 focus:outline-none'
            >
              Logout
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
