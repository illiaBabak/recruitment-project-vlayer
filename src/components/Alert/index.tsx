import { JSX } from 'react';
import { AlertProps } from 'src/types';
import { motion } from 'framer-motion';

type AlertComponentProps = AlertProps & {
  onClose: () => void;
  onMouseLeave: () => void;
  onMouseEnter: () => void;
};

export const Alert = ({
  text,
  type,
  onClose,
  position,
  onMouseEnter,
  onMouseLeave,
}: AlertComponentProps): JSX.Element => (
  <motion.div
    data-testid='alert'
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 1.3, ease: 'easeInOut' }}
    className={`animate-fadeIn fixed left-1/2 flex h-[65px] w-auto max-w-[90vw] min-w-[230px] -translate-x-1/2 transform flex-row items-center justify-center rounded-lg p-2 text-center text-gray-600 ${
      type === 'success' ? 'bg-success-alert success' : 'bg-error-alert error'
    } ${position === 'top' ? 'top-6' : 'bottom-6'}`}
    onMouseLeave={onMouseLeave}
    onMouseEnter={onMouseEnter}
  >
    <div
      className={`h-[50px] w-[50px] bg-contain bg-center bg-no-repeat ${
        type === 'success'
          ? "bg-[url('https://static-00.iconduck.com/assets.00/success-icon-512x512-qdg1isa0.png')]"
          : "bg-[url('https://www.freeiconspng.com/thumbs/error-icon/error-icon-4.png')]"
      }`}
    />
    <p className='m-1 mx-3 ms-4 text-lg text-white'>{text}</p>
    <button
      className='absolute top-1 right-1 h-5 w-5 cursor-pointer text-xl font-bold text-white hover:scale-105'
      onClick={onClose}
    >
      x
    </button>
  </motion.div>
);
