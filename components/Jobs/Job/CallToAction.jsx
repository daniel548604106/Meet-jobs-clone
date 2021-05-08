import React from 'react';
import { BookmarkIcon } from '@heroicons/react/outline';
const CallToAction = () => {
  return (
    <div className="p-5 rounded-lg shadow-lg bg-white">
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
    </div>
  );
};

export default CallToAction;
