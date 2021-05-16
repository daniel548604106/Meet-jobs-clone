import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SearchIcon, ChevronDownIcon } from '@heroicons/react/outline';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
const Header = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  const userInfo = useSelector((state) => state.user.userInfo);
  const checkAuth = (page) => {
    isUserLoggedIn ? console.log('login') : router.push(page);
  };
  const [isDropDownOpen, setDropDownOpen] = useState(false);
  const navListItems = [
    {
      name: '全球工作',
      href: '/jobs',
    },
    {
      name: '推薦',
      href: '/referrer-landing',
    },
    {
      name: '企業徵才',
      href: '/employer-landing',
    },
  ];
  return (
    <>
      <header className="hidden sm:block px-10 fixed top-0 left-0 w-full bg-white z-100 ">
        <div className=" bg-white sm:flex justify-between items-center  w-full  h-60px  max-w-1200px mx-auto">
          <div className="flex items-center justify-between w-full ">
            <Link href="/" className="cursor-pointer">
              <Image
                className="cursor-pointer"
                src="/taiwzoo.svg"
                alt="logo"
                width="100"
                height="50"
              />
            </Link>
            <SearchIcon className="h-7 text-gray-300 sm:hidden" />
          </div>
          <nav className="w-full sm:flex sm:items-center hidden ">
            <SearchIcon className="h-7 text-gray-300" />
            <ul className="flex flex-col sm:flex-row sm:items-center  bg-white  h-full">
              {navListItems.map((item) => (
                <li key={item.name} className="  px-4 ">
                  <Link
                    href={item.href}
                    target={'_blank'}
                    className="text-md whitespace-nowrap font-bold hover:bg-gray-200 "
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="px-4">
                <a href="https://www.taiwzoo.com" target="_blank">
                  日誌
                </a>
              </li>
            </ul>
            {isUserLoggedIn ? (
              <div
                onClick={() => setDropDownOpen(!isDropDownOpen)}
                className="flex items-center cursor-pointer"
              >
                <Image
                  className="w-50px h-50px  rounded-full"
                  src={userInfo.picture || '/../public/taiwzoo.svg'}
                  width="40"
                  height="40"
                />
                <span className="ml-3  whitespace-nowrap">{userInfo.name}</span>
                <ChevronDownIcon
                  className={`h-4 ml-2 font-bold transition-all transform duration-200 ease-in-out ${
                    isDropDownOpen && 'rotate-180'
                  }`}
                />
              </div>
            ) : (
              <div className="ml-2">
                <span
                  className="px-4 py-2 mr-4 rounded bg-blue-500 text-white cursor-pointer "
                  onClick={() => checkAuth('log-in')}
                >
                  登入
                </span>
                <span
                  className="px-4 py-2 text-blue-500 cursor-pointer rounded border border-blue-500"
                  onClick={() => checkAuth('sign-up')}
                >
                  註冊
                </span>
              </div>
            )}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
