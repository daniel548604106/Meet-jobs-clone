import React from 'react';
import JobIntro from '../../components/Jobs/Job/JobIntro';
import JobDescription from '../../components/Jobs/Job/JobDescription';
import CallToAction from '../../components/Jobs/Job/CallToAction';
import CompanyInfo from '../../components/Jobs/Job/CompanyInfo';
import Vacancies from '../../components/Jobs/Job/Vancancies';
import Event from '../../components/Global/Event';
const Job = () => {
  return (
    <div className="mx-auto max-w-6xl py-10 px-5">
      <p className="mb-5">總覽 / Meet.Jobs / Account Manager 客戶經理</p>
      <div className="flex ">
        <div>
          <JobIntro />
          <JobDescription />
          <CompanyInfo />
          <Vacancies />
        </div>
        <div className="ml-5">
          <div className="mb-5">
            <Event />
          </div>
          <div>
            <CallToAction />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
