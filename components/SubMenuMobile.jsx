import React from 'react';
import { ChevronLeftIcon } from '@heroicons/react/solid';
import { setUserLogOut } from '../redux/actions/userAction';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
const SubMenuMobile = ({ setIsSubMenuOpen, isSubMenuOpen }) => {
  const subMenuList = [
    {
      title: 'Account setting',
      href: '/userpanel',
    },
    {
      title: 'My applications',
      href: '/userpanel/my-applications',
    },
    {
      title: 'Saved jobs',
      href: '/userpanel/saved-jobs',
    },
  ];

  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(setUserLogOut());
  };
  return (
    <div>
      <ul className="w-full ">
        <li
          onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
          className="flex items-center py-5 text-gray-600"
        >
          <ChevronLeftIcon className="h-5 " />
          <span className="ml-2 ">Back</span>
        </li>
        <hr className="my-2" />
        {subMenuList.map((list) => (
          <li key={list.title} className="py-5">
            <Link href={list.href}>{list.title}</Link>
          </li>
        ))}
        <li className="py-2 flex items-center justify-between">
          <Link href="/userpanel/my-referrals?type=ongoing-referrals">My referrals</Link>
          <button className="bg-blue-600 rounded-lg py-3  h-full px-4 text-white">
            Get reward
          </button>
        </li>
        <li className="py-5" onClick={() => logOut()}>
          Log out
        </li>
      </ul>
    </div>
  );
};

export default SubMenuMobile;
