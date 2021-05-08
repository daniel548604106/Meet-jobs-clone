import React from 'react';
import Header from '../../components/Employers/Header';
import Info from '../../components/Employers/Info';
import Event from '../../components/Global/Event';
import Vacancy from '../../components/Employers/Vacancy';
const Employer = () => {
  return (
    <div className="relative">
      {/* <div className="w-full h-100px bg-gradient-to-tr transform -translate-z-10 absolute bg-blue-400 "></div> */}
      <div className=" mx-auto max-w-6xl px-5 py-10 sm:px-10 ">
        <div className="mb-10 ">
          <Header />
        </div>
        <div className="flex">
          <div>
            <Info />
            <Vacancy />
          </div>
          <Event />
        </div>
      </div>
    </div>
  );
};

export default Employer;
