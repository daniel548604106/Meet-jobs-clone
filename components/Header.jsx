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
      name: '職涯專欄',
      href: '#',
    },
  ];
  return (
    <header className="px-10 fixed top-0 left-0 w-full bg-white z-50 ">
      <div className="flex h-60px justify-between max-w-1200px mx-auto">
        <Link href="/" className="cursor-pointer">
          <Image src="/vercel.svg" alt="logo" width="100" height="50" />
        </Link>
        <nav className="flex items-center">
          <ul className="flex items-center h-full">
            <li>
              <SearchIcon className="h-7 text-gray-300" />
            </li>
            {navListItems.map((item) => (
              <li key={item.name} className="inline-block  px-4 ">
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
  );
};

export default Header;
