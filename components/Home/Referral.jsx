import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const Referral = () => {
  const { t } = useTranslation('home');
  const referrals = [
    {
      title: '我是企業要徵才',
      bgImg:
        'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1267&q=80',
      href: '/employer-landing',
    },
    {
      title: '推薦朋友找工作',
      bgImg:
        'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
      href: '/referrer-landing',
    },
  ];
  return (
    <div className="px-5 py-10">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {referrals.map((referral) => (
          <div
            key={referral.title}
            style={{ backgroundImage: `url(${referral.bgImg})` }}
            className="flex rounded w-auto h-300px  items-center justify-center bg-cover"
          >
            <button className="rounded p-3 text-blue-500 border-2 border-blue-500 bg-white">
              <Link href={referral.href}>{referral.title}</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Referral;
