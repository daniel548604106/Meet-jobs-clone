import React from 'react';
import Image from 'next/image';
const CompanyInfo = () => {
  return (
    <div className="mb-10">
      <h2 className="mb-2 text-xl font-semibold text-gray-700">企業資訊</h2>
      <div className="p-5 flex bg-white rounded-lg shadow-xl">
        <div className="mr-5 ">
          <Image
            width="200px"
            height="200px"
            src="https://images.unsplash.com/photo-1620451955631-9a2ba4736e56?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          />
        </div>
        <div className="w-full h-full">
          <h2 className="text-2xl font-semibold mb-2">Meet.jobs</h2>
          <div className="h-full p-3 bg-blue-300 text-blue-900 text-center">
            Meet.jobs is a social platform foxuing sdlfjsdjf asdjalsdjlk qwjelqkwje lqjelkqwjel
            kqjwelkqj w sdfjsjdfoisjdfoijsdof sjdoijsodijfsdo
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
