import React from 'react';

const Banner = () => {
  return (
    <div className="py-10 sm:py-20 px-5 text-center bg-referrer-banner-img text-white">
      <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-3">
        Efficient Recruitment with <br /> Social Referral
      </h1>
      <h2 className="text-lg sm:text-xl md:text-2xl mb-10">
        Speed of internet startup and quality of headhunter service. To leverage on professional
        social networks, let the whole world get you right talent!
      </h2>
      <button className="text-white rounded py-3 px-5 bg-blue-600">Refer a Job</button>
    </div>
  );
};

export default Banner;
