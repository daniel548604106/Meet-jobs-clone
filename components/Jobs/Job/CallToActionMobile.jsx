import React from 'react';
import { BookmarkIcon, ShareIcon } from '@heroicons/react/outline';
const CallToActionMobile = () => {
  return (
    <div className="fixed bottom-0 sm:hidden left-0 w-screen border-t border-gray-200 bg-gray-100 px-5 py-3 flex justify-between items-center ">
      <button className="bg-blue-600 w-full min-w-200px text-white px-5 py-3 rounded">應徵</button>
      <BookmarkIcon className="h-8 ml-3" />
      <ShareIcon className="h-8 ml-3 mr-3" />
    </div>
  );
};

export default CallToActionMobile;
