import React from 'react';
import { BookmarkIcon, ShareIcon } from '@heroicons/react/outline';
const CallToActionMobile = () => {
  return (
    <div className="fixed bottom-0 sm:hidden left-0 w-screen bg-gray-500 p-2 flex justify-between items-center ">
      <button className="bg-blue-600  text-white px-5 py-3 rounded">應徵</button>
      <BookmarkIcon className="h-5" />
      <ShareIcon className="h-5" />
    </div>
  );
};

export default CallToActionMobile;
