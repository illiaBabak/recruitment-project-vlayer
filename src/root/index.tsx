import { JSX } from 'react';
import { Header } from 'src/component/Header';
import { StartSection } from 'src/component/StartSection';

export const App = (): JSX.Element => {
  return (
    <div className='flex w-screen flex-col items-center justify-center'>
      <Header />
      <StartSection />
    </div>
  );
};
