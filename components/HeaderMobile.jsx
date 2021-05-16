import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { ChevronDownIcon, SearchIcon, ChevronRightIcon } from '@heroicons/react/solid';
import SubMenuMobile from './SubMenuMobile';
const HeaderMobile = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const router = useRouter();
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const userInfo = useSelector((state) => state.user.userInfo);
  const checkAuth = (page) => {
    isUserLoggedIn ? console.log('login') : router.push(page);
  };
  const navList = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Jobs',
      href: '/jobs',
    },
    {
      title: 'Referral',
      href: '/referral-landing',
    },
    {
      title: 'Employers',
      href: '/employer-landing',
    },
  ];
  return (
    <header className="h-60px flex items-center justify-between  z-50 align-middle bg-white fixed top-0 left-0 w-screen sm:hidden px-5">
      <div
        onClick={() => setIsNavOpen(!isNavOpen)}
        className="flex items-center z-50 bg-white w-screen"
      >
        <Image src="/vercel.svg" className="w-100px h-40px " width={100} height={50} />
        <ChevronDownIcon
          className={`h-5 ml-2 text-gray-400 transform ease-in-out duration-75 transition-all ${
            isNavOpen && 'rotate-180'
          }`}
        />
      </div>
      <div className="z-50 ">
        <SearchIcon className="h-5" />
      </div>
      <div
        className={`border-b transform transition-all  ease-in-out duration-200 z-40 py-2 absolute left-full  top-60px px-5 bg-white w-full
          ${!isNavOpen && '-translate-y-full'} ${isSubMenuOpen && '-translate-x-full'}`}
      >
        <SubMenuMobile setIsSubMenuOpen={setIsSubMenuOpen} isSubMenuOpen={isSubMenuOpen} />
      </div>
      <ul
        className={`border-b transform transition-all  ease-in-out duration-200 z-40 py-2 absolute left-0  top-60px px-5 bg-white w-full
          ${!isNavOpen && '-translate-y-full'} ${isSubMenuOpen && '-translate-x-full'}`}
      >
        {isUserLoggedIn && (
          <div className="flex items-center justify-between py-3">
            <div onClick={() => setIsSubMenuOpen(!isSubMenuOpen)} className="flex items-center">
              <Image src={userInfo.picture} width={50} height={50} className="rounded-full" />
              <span className="ml-5 text-gray-700 text-lg">{userInfo.name}</span>
            </div>
            <ChevronRightIcon className="h-5 text-gray-400" />
          </div>
        )}
        {navList.map((item) => (
          <li key={item.title} className="py-5">
            <Link target={item.href.includes('http') && '_blank'} href={item.href}>
              {item.title}
            </Link>
          </li>
        ))}
        <li className="py-5">
          <a href="https://www.taiwzoo.com" target="_blank">
            日誌
          </a>
        </li>
        {!isUserLoggedIn && (
          <>
            <hr className="my-3" />
            <div className="py-3 w-full flex items-center justify-between">
              <button onClick={() => checkAuth('log-in')}>登入</button>
              <button
                onClick={() => checkAuth('sign-up')}
                className="rounded w-100px py-2 border border-blue-500 text-blue-500"
              >
                註冊
              </button>
            </div>
          </>
        )}
      </ul>
    </header>
  );
};

export default HeaderMobile;
