import { JSX } from 'react';
import { Header } from 'src/component/Header';
import { StartSection } from 'src/component/StartSection';
import { BrowseHomes } from 'src/component/BrowseHomes';
import { TestimonialsSection } from 'src/component/TestimonialsSection';
import { Footer } from 'src/component/Footer';

export const App = (): JSX.Element => {
  return (
    <div className='flex w-screen flex-col items-center justify-center'>
      <Header />
      <StartSection />
      <BrowseHomes />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};
