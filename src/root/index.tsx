import { JSX } from 'react';
import { Header } from 'src/components/Header';
import { StartSection } from 'src/components/StartSection';
import { BrowseHomes } from 'src/components/BrowseHomes';
import { TestimonialsSection } from 'src/components/TestimonialsSection';
import { Footer } from 'src/components/Footer';
import LogRocket from 'logrocket';

LogRocket.init('p4ccjl/recruitment-task-vlayer');

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
