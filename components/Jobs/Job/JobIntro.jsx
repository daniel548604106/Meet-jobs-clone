import React from 'react';
import Tag from '../../../components/Global/Tag';
const JobIntro = () => {
  return (
    <div className="bg-white p-5 sm:p-10 rounded-lg shadow-xl mb-5 sm:mb-10">
      <h1 className="text-xl sm:text-3xl mb-2 sm:mb-5  font-bold ">Account Manager 客戶經理</h1>
      <p className="mb-3">
        Meet.jobs <span>Taiwan</span>
      </p>
      <hr className="mb-3" />
      <p className="text-md text-bold mb-2">薪資</p>
      <h2 className="text-blue-500 text-xl font-bold mb-3 ">420k - 2.1m TWD / 年薪</h2>
      <div className="flex mb-2">
        <div className="mr-6">
          <p className="font-semibold">工作類型</p>
          <p>全職</p>
        </div>
        <div>
          <p className="font-semibold">上次更新</p>
          <p>6小時前</p>
        </div>
      </div>
      <p className="font-semibold">職能</p>
      <p className="mb-2">業務開發</p>
      <p className="mb-2 font-semibold">技能需求</p>
      <div>
        <Tag text="js" />
      </div>
    </div>
  );
};

export default JobIntro;