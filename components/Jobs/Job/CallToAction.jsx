import React from 'react';
import { BookmarkIcon, CurrencyDollarIcon } from '@heroicons/react/outline';
const CallToAction = () => {
  return (
    <div className="w-full p-5 pb-10 rounded-lg shadow-lg bg-white relative group">
      <div className="flex items-center w-full justify-around mb-2">
        <button className="mr-2 flex-1 px-3 py-2 border rounded text-blue-500 border-blue-500 ">
          應徵
        </button>
        <button className="flex-1 justify-center flex items-center rounded bg-blue-500 text-white px-3 py-2">
          <BookmarkIcon className="h-5" />
          儲存
        </button>
      </div>
      <p className="text-sm text-center">
        順利就職，Meet.jobs 就提供 <span class="reward">100 USD</span> 的獎金。
      </p>
      <CurrencyDollarIcon className="absolute bottom-2 right-2 h-5 delay-150 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out text-yellow-500" />
      <CurrencyDollarIcon className="absolute bottom-5 right-5 h-5 delay-75  opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out text-yellow-500" />
      <CurrencyDollarIcon className="absolute bottom-1 right-6 h-5 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out text-yellow-500" />
    </div>
  );
};

export default CallToAction;
