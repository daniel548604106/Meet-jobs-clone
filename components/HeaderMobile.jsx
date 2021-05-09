import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDownIcon, SearchIcon } from '@heroicons/react/solid';
const HeaderMobile = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
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
    {
      title: 'Journal',
      href: '#',
    },
  ];
  return (
    <header className="h-60px flex items-center justify-between  z-50 align-middle bg-white fixed top-0 left-0 w-full sm:hidden px-5">
      <div onClick={() => setIsNavOpen(!isNavOpen)} className="flex items-center z-50">
        <Image src="/vercel.svg" className="w-100px h-40px" width={100} height={50} />
        <ChevronDownIcon
          className={`h-5 ml-2 text-gray-400 transform ease-in-out duration-75 transition-all ${
            isNavOpen && 'rotate-180'
          }`}
        />
      </div>
      <div className="z-50">
        <SearchIcon className="h-5" />
      </div>
      <ul
        className={`transform transition-all  ease-in-out duration-200 z-40 py-2 absolute left-0  top-60px px-5 bg-white w-full
          ${!isNavOpen && '-translate-y-full'}`}
      >
        {navList.map((item) => (
          <li key={item.title} className="py-1">
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default HeaderMobile;
