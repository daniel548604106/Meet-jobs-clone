import React from 'react';
import JobIntro from '../../components/Jobs/Job/JobIntro';
import JobDescription from '../../components/Jobs/Job/JobDescription';
import CallToAction from '../../components/Jobs/Job/CallToAction';
import CallToActionMobile from '../../components/Jobs/Job/CallToActionMobile';
import CompanyInfo from '../../components/Jobs/Job/CompanyInfo';
import Vacancies from '../../components/Jobs/Job/Vancancies';
import Recommendation from '../../components/Jobs/Job/Recommendation';
import Event from '../../components/Global/Event';
const Job = () => {
  return (
    <div className="mx-auto max-w-6xl py-5 sm:py-10 px-5  ">
      <div className="bg-gradient-to-br from-blue-700   to-blue-light h-200px w-full -z-10 absolute top-0 left-0"></div>
      <p className="mb-5 text-sm sm:text-md text-white">
        <span className="hidden sm:inline-block">總覽 /</span> Meet.Jobs / Account Manager 客戶經理
      </p>
      <div className="flex flex-col md:flex-row">
        <div className="w-full">
          <div className="w-full mb-2 sm:mb-6 md:hidden">
            <Event />
          </div>
          <JobIntro />
          <JobDescription />
          <CompanyInfo />
          <Vacancies />
        </div>
        <div className="md:ml-5 ">
          <div className="mb-5 hidden md:block">
            <Event />
          </div>
          <div className="mb-5">
            <CallToAction />
          </div>
          <div className="mb-10">
            <Recommendation />
          </div>
        </div>
        <CallToActionMobile />
      </div>
    </div>
  );
};

export default Job;
