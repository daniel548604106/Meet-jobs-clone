import React from 'react';
import Banner from '../../components/Employer-Landing/Banner';
import CallToAction from '../../components/Employer-Landing/CallToAction';
import Advantage from '../../components/Employer-Landing/Advantage';
import Plan from '../../components/Employer-Landing/Plan';
const index = () => {
  return (
    <div>
      <Banner />
      <Plan />
      <Advantage />
      <CallToAction />
    </div>
  );
};

export default index;
