import React from 'react';
import JobInfoCard from '../JobInfoCard';
const Vancancies = () => {
  const arrayLength = Array.from({ length: 6 });
  return (
    <div>
      <h2 className="text-gray-700 text-xl mb-5 font-semibold">此企業其他職缺</h2>
      {arrayLength.map((array) => (
        <JobInfoCard key={array} />
      ))}
    </div>
  );
};

export default Vancancies;
