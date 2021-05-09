import React from 'react';
import Tag from '../../../components/Global/Tag';
const JobIntro = () => {
  return (
    <div className="bg-white p-4 sm:p-10 rounded-lg shadow-xl mb-5 sm:mb-10">
      <h1 className="text-lg sm:text-3xl mb-2 sm:mb-5  font-bold ">Account Manager 客戶經理</h1>
      <p className="mb-3 text-sm sm:text-md text-gray-400">
        Meet.jobs <span>Taiwan</span>
      </p>
      <hr className="mb-3" />
      <p className="text-sm  sm:text-md font-bold mb-2">薪資</p>
      <h2 className="text-blue-500 text-md sm:text-xl font-bold mb-3 ">420k - 2.1m TWD / 年薪</h2>
      <div className="flex flex-col sm:flex-row  mb-2">
        <div className="mr-6 mb-2 sm:mb-0">
          <p className="mb-1 text-sm sm:text-md font-semibold">工作類型</p>
          <p className="text-sm">全職</p>
        </div>
        <div>
          <p className="mb-1 text-sm sm:text-md  font-semibold">上次更新</p>
          <p className="text-sm">6小時前</p>
        </div>
      </div>
      <p className="mb-1 text-sm sm:text-md  font-semibold">職能</p>
      <p className="text-sm mb-2">業務開發</p>
      <p className="text-sm mb-2 font-semibold">技能需求</p>
      <div>
        <Tag text="js" />
      </div>
    </div>
  );
};

export default JobIntro;
