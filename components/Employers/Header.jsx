import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LinkIcon, UserIcon, LocationMarkerIcon } from '@heroicons/react/solid';
const Header = () => {
  return (
    <div className="w-full p-10 rounded shadow-lg flex">
      <div className="mr-10">
        <Image src="/taiwzoo.svg" width="100px" height="100px" />
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-4 ">Meet.jobs</h1>
        <ul className="flex items-center">
          <li className="flex mr-5">
            <UserIcon className="h-6 mr-1" />
            <span>11-50</span>
          </li>
          <li className="flex mr-5">
            <LocationMarkerIcon className="h-6 mr-1" />
            <span>Taipei City, Taiwan</span>
          </li>
          <li className="flex ">
            <LinkIcon className="h-6 mr-1" />
            <Link href="https://hiskio.com" target="_blank">
              https:fsfnsknjk
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
