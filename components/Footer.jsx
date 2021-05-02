import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Footer = () => {
  const footerListItem = [
    {
      name: '關於我們',
      href: '/about-us',
    },
    {
      name: '全球工作',
      href: '/jobs',
    },
    {
      name: '職涯專欄',
      href: '#',
    },
    {
      name: '企業徵才',
      href: '/employer-landing',
    },
    {
      name: '聯絡我們',
      href: '/contact-us',
    },
    {
      name: '我要推薦',
      href: '/referrer-landing',
    },
    {
      name: '條款及政策',
      href: '/privacy-and-terms?type=user-agreement',
    },
    {
      name: '徵才企業條款',
      href: '/privacy-and-terms?type=employer-agreement',
    },
  ];
  return (
    <div className="bg-black text-white p-10">
      <div className="flex justify-between ">
        <div className="flex flex-col sm:flex-row">
          <Image
            src="https://meet.jobs/static/media/logo_meetjobs_standard_white.bd5c1195.svg"
            width="200"
            height="60"
            alt="logo"
          />
          <ul className="grid grid-cols-2 max-w-300px sm:ml-60px md:ml-100px">
            {footerListItem.map((item) => (
              <li key={item.name} className="py-2">
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Link href="/" locale="en">
            English
          </Link>
          <Link href="/" locale="tw">
            中文
          </Link>
        </div>
      </div>
      <p className="text-center mt-10">Copyright © Meet.jobs 2021</p>
    </div>
  );
};

export default Footer;
