import React from 'react';
import Tag from '../Global/Tag';
import { useTranslation } from 'next-i18next';
import { SearchIcon } from '@heroicons/react/solid';
const Hero = () => {
  const { t } = useTranslation(['home', 'common']);
  const tags = ['software', 'web', 'app'];
  return (
    <div className="flex flex-col h-90vh sm:h-screen  bg-hero-img bg-no-repeat bg-cover bg-center bg-gradient-to-b from-green-400 to-blue-500">
      <div className="w-full max-w-760px p-5 mt-30px sm:m-auto">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-semibold text-left text-white mb-30px sm:mb-60px">
          {t('maximizeValue')}
        </h1>
        <div className="z-0 w-full">
          <div className="px-3 py-5 sm:px-0 bg-white flex-col w-full flex sm:flex-row items-center rounded-t-lg border-2 border-gray-200">
            <div className="relative w-full flex-1 mb-2 sm:mb-0">
              <SearchIcon className="hidden sm:block h-5 text-gray-500 absolute top-1/2 transform -translate-y-1/2 left-0 translate-x-3 " />
              <input
                type="text"
                placeholder="工作、企業或關鍵字"
                className="border sm:border-none rounded-xl p-3 pl-5 sm:pl-10 w-full "
              />
            </div>
            <div className="relative w-full flex-1 mb-2 sm:mb-0">
              <input
                type="text"
                placeholder="任何地點"
                className="border sm:border-none rounded-xl p-3 pl-5 w-full"
              />
              <button className="hidden sm:block absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white rounded  px-10  py-3 hover:opacity-80">
                搜尋
              </button>
            </div>
            <button className="block sm:hidden bg-blue-500 text-white py-3 w-full rounded-xl">
              搜尋
            </button>
          </div>
          <div className="bg-white p-5 rounded-b-lg">
            {tags.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
