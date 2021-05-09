import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SearchIcon } from '@heroicons/react/outline';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const Header = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  const checkAuth = (page) => {
    isUserLoggedIn ? console.log('login') : router.push(page);
  };
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
    {
      name: '日誌',
      href: '#',
    },
  ];
  return (
    <>
      <header className="hidden sm:block px-10 fixed top-0 left-0 w-full bg-white z-50 ">
        <div className=" sm:flex justify-between items-center  w-full  h-60px  max-w-1200px mx-auto">
          <div className="flex items-center justify-between w-full">
            <Link href="/" className="cursor-pointer">
              <Image src="/vercel.svg" alt="logo" width="100" height="50" />
            </Link>
            <SearchIcon className="h-7 text-gray-300 sm:hidden" />
          </div>
          <nav className="w-full sm:flex sm:items-center hidden ">
            <SearchIcon className="h-7 text-gray-300" />
            <ul className="flex flex-col sm:flex-row sm:items-center  bg-white  h-full">
              {navListItems.map((item) => (
                <li key={item.name} className="  px-4 ">
                  <Link href={item.href} className="text-md font-bold hover:bg-gray-200 ">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
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
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
