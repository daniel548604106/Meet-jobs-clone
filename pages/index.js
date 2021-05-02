import Hero from '../components/Home/Hero';
import Advantage from '../components/Home/Advantage.jsx';
import HowWeWork from '../components/Home/HowWeWork.jsx';
import CallToAction from '../components/Home/CallToAction.jsx';
import Referral from '../components/Home/Referral.jsx';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
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
