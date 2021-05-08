import React from 'react';
import JobInfoCard from '../../components/Jobs/JobInfoCard';
const Vacancy = () => {
  const arrayLength = Array.from({ length: 6 });

  return (
    <div className="py-10">
      <h2 className="text-xl font-bold mb-5">職缺</h2>
      {arrayLength.map((length, idx) => (
        <div key={length}>
          <JobInfoCard />
        </div>
      ))}
    </div>
  );
};

export default Vacancy;
