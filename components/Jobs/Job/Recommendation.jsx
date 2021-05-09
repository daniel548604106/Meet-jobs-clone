import React from 'react';
import { ReplyIcon } from '@heroicons/react/solid';
const Recommendation = () => {
  return (
    <div className="relative text-center bg-gradient-to-bl from-blue-dark to-blue-light rounded w-full px-2 py-3 ">
      <ReplyIcon className="top-3 right-3 hover:scale-110 transition-all duration-200 text-white transform rotate-180 cursor-pointer absolute h-5" />
      <h2 className="text-xl font-semibold mb-2 text-white">推薦感謝金</h2>

      <p className="mb-5 text-md text-white">
        將這份工作推薦給朋友，順利就職後可獲得 16.8k TWD 的推薦感謝金。
      </p>
      <button className="py-2 px-5 rounded text-blue-dark bg-white">分享職缺</button>
    </div>
  );
};

export default Recommendation;
