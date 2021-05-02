import React from 'react';
import Tag from '../Global/Tag';
import { useTranslation } from 'next-i18next';
import { SearchIcon } from '@heroicons/react/solid';
const Hero = () => {
  const { t } = useTranslation(['home', 'common']);
  const tags = ['software', 'web', 'app'];
  return (
    <div className="flex flex-col h-screen bg-hero-img bg-no-repeat bg-cover bg-center bg-gradient-to-b from-green-400 to-blue-500">
      <div className="w-full max-w-760px p-5 m-auto">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-semibold text-left text-white mb-30px sm:mb-60px">
          {t('maximizeValue')}
        </h1>
        <div className="w-full flex items-center rounded-t border-2 border-gray-200">
          <div className="relative flex-1">
            <SearchIcon className="h-5 text-gray-500 absolute top-1/2 transform -translate-y-1/2 left-0 translate-x-3 " />
            <input type="text" placeholder="工作、企業或關鍵字" className="p-5 pl-10 w-full " />
          </div>
          <div className="relative flex-1">
            <input type="text" placeholder="任何地點" className="p-5 pl-10 w-full" />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white rounded  px-10  py-3 hover:opacity-80">
              搜尋
            </button>
          </div>
        </div>
        <div className="bg-white p-5 rounded-b">
          {tags.map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
