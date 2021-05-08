import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SearchIcon } from '@heroicons/react/outline';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const MobileHeader = () => {
  const navListItems = [
    {
      name: 'home',
      href: '/',
    },
    {
      name: 'jobs',
      href: '/jobs',
    },
    {
      name: 'referrer',
      href: '/referrer-landing',
    },
    {
      name: 'employer',
      href: '/employer-landing',
    },
    {
      name: 'journal',
      href: '#',
    },
  ];
  return (
    <header className="relative sm:hidden">
      <div className="flex items-center h-60px justify-between">
        <Image src="/vercel.svg" alt="logo" width="100" height="50" />
        <SearchIcon className="h-7 text-gray-300 sm:hidden" />
      </div>
      <ul className="z-0 absolute bg-white w-screen left-0 transform -translate-y-full sm:hidden">
        {navListItems.map((item) => (
          <li className="py-2">
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

const Header = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  const checkAuth = (page) => {
    isUserLoggedIn ? console.log('login') : router.push(page);
  };
  const navListItems = [
    {
      name: 'jobs',
      href: '/jobs',
    },
    {
      name: 'referrer',
      href: '/referrer-landing',
    },
    {
      name: 'employer',
      href: '/employer-landing',
    },
    {
      name: 'journal',
      href: '#',
    },
  ];
  return (
    <>
      <header className="px-10 fixed top-0 left-0 w-full bg-white z-50 ">
        <MobileHeader />
        <div className="hidden  sm:flex justify-between items-center  w-full  h-60px  max-w-1200px mx-auto">
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
            <div>
              <span className="mr-3" onClick={() => checkAuth('log-in')}>
                登入
              </span>
              <span onClick={() => checkAuth('sign-up')}>註冊</span>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
