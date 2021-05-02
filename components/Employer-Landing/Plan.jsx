import React from 'react';
import PlanCard from './PlanCard';
const Plan = () => {
  const plans = [
    {
      title: 'Social',
      price: '8% Annual Salary',
      service: [
        'Community Referral , Quick and Precise!',
        'Employer Branding and Dynamic Promotion',
        'Integrated Marketing and Speed Interview Event',
      ],
    },
    {
      title: 'Social',
      price: '8% Annual Salary',
      service: [
        'Community Referral , Quick and Precise!',
        'Employer Branding and Dynamic Promotion',
        'Integrated Marketing and Speed Interview Event',
      ],
    },
  ];
  return (
    <div className="p-20 text-center bg-gray-100 bg-opacity-300">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-20">Our Plans</h1>
      <div className=" w-full flex overflow-auto ">
        {plans.map((plan) => (
          <PlanCard plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default Plan;
