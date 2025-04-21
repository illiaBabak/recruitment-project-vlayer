import { createContext, JSX, useEffect, useState } from 'react';
import { Header } from 'src/components/Header';
import { StartSection } from 'src/components/StartSection';
import { BrowseHomes } from 'src/components/BrowseHomes';
import { TestimonialsSection } from 'src/components/TestimonialsSection';
import { Footer } from 'src/components/Footer';
import LogRocket from 'logrocket';
import { Alert, AlertProps } from 'src/components/Alert';

LogRocket.init('p4ccjl/recruitment-task-vlayer');

type GlobalContextType = {
  setAlertProps: React.Dispatch<React.SetStateAction<AlertProps | null>>;
};

export const GlobalContext = createContext<GlobalContextType>({
  setAlertProps: () => {
    throw new Error('GlobalContext is not initialized');
  },
});

export const App = (): JSX.Element => {
  const [alertProps, setAlertProps] = useState<AlertProps | null>(null);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const startAlertTimer = () => {
    const id = setTimeout(() => {
      setAlertProps(null);
    }, 5000);

    setTimeoutId(id);

    return id;
  };

  const handleMouseEnter = () => {
    if (!timeoutId) return;

    clearTimeout(timeoutId);
    setTimeoutId(null);
  };

  useEffect(() => {
    const id = startAlertTimer();

    return () => clearTimeout(id);
  }, [alertProps]);

  return (
    <GlobalContext.Provider value={{ setAlertProps }}>
      <div className='flex w-screen flex-col items-center justify-center'>
        <Header />
        <StartSection />
        <BrowseHomes />
        <TestimonialsSection />
        <Footer />

        {alertProps && (
          <Alert
            onClose={() => setAlertProps(null)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={startAlertTimer}
            {...alertProps}
          />
        )}
      </div>
    </GlobalContext.Provider>
  );
};
