import React, { useEffect } from 'react';
import Image from 'next/image';
import { BookmarkIcon } from '@heroicons/react/solid';
const JobInfoCard = ({ job }) => {
  useEffect(() => {
    console.log(job);
  }, []);
  return (
    <div className="bg-white rounded px-5 pt-10 pb-5 cursor-pointer hover:shadow-xl hover:scale-150 shadow-lg flex w-full relative mb-5 ">
      <div className="absolute top-0 left-0 bg-red-500 px-2 py-1  rounded-br-md text-white ">
        超時空快速面試 2021
      </div>
      <div className="mr-6">
        <Image src="/taiwzoo.svg" width="60px" height="60px" />
      </div>
      <div className="w-full">
        <div className="mb-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold mb-1">Account Manager</h2>
            <BookmarkIcon className="w-8 h-6" />
          </div>
          <p className="text-sm mb-1 text-gray-600">{'Meet'}</p>
          <p>Taipei, Taiwan</p>
        </div>
        <hr className="my-4" />
        <div className="flex items-center justify-between">
          <h2 className="text-md font-semibold text-blue-500">4,000,0000</h2>
          <span className="text-sm text-gray-600">4h</span>
        </div>
      </div>
    </div>
  );
};

export default JobInfoCard;
