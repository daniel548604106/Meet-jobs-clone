import Hero from '../components/Home/Hero';
import Advantage from '../components/Home/Advantage.jsx';
import HowWeWork from '../components/Home/HowWeWork.jsx';
import CallToAction from '../components/Home/CallToAction.jsx';
import Referral from '../components/Home/Referral.jsx';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect } from 'react';
export default function Home() {
  useEffect(() => {
    const getJobs = async () => {
      try {
        const data = await fetch('http://localhost:3000/v1/jobs');
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getJobs();
  }, []);
  return (
    <div>
      <Hero />
      <Advantage />
      <HowWeWork />
      <CallToAction />
      <Referral />
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'home'])),
  },
});
