'use client';

import {
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';

import SearchWithDropdown from '@/components/forms/searchWithDropdown';
import Button from '@/components/button';
import Logo from '@/components/logo';

const links = [
  { name: 'Courses', href: '/courses' },
  { name: 'Professors', href: '/professors' },
];

export default function Navbar() {
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  const [showSearch, setShowSearch] = React.useState(false);
  const toggleSearch = () => setShowSearch(!showSearch);
  return (
    <nav className="navbar">
      <Button
        variant={<MagnifyingGlassIcon />}
        className={clsx('lg:hidden', { hidden: showSearch })}
        onClick={toggleSearch}
      />
      <Button
        variant={<XMarkIcon />}
        className={clsx('lg:hidden', { hidden: !showSearch })}
        onClick={toggleSearch}
      />

      {/* Logo */}
      <Link
        className={clsx('lg:pr-[32px]', { 'max-lg:hidden': showSearch })}
        href="/"
      >
        <Logo />
      </Link>

      {/* Search Bar */}
      <SearchWithDropdown
        className={clsx('flex flex-1 max-lg:pl-[32px]', {
          'max-lg:hidden': !showSearch,
        })}
      />

      <Button
        variant={<Bars3Icon />}
        className={clsx('lg:hidden', { hidden: showSearch })}
        onClick={toggleMenu}
      />
      <div
        className={clsx(
          'flex items-center gap-[32px] p-[16px] text-button text-primary max-lg:fixed max-lg:left-0 max-lg:top-0 max-lg:h-full max-lg:w-full max-lg:flex-col-reverse max-lg:gap-[16px] max-lg:overflow-y-scroll max-lg:bg-background lg:pl-[32px]',
          {
            'max-lg:z-50': showMenu,
            'max-lg:z-0 max-lg:hidden': !showMenu,
          },
        )}
      >
        <ul className="flex gap-[32px] max-lg:flex-1 max-lg:flex-col max-lg:items-center">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>

        <hr className="w-full pb-[16px] text-border lg:hidden" />

        <div className="flex w-full items-center gap-[16px] max-lg:justify-between">
          <div className="h-[45px] w-[45px] lg:hidden" />
          <div className="flex items-center gap-[16px]">
            <Button variant="primary">Register</Button>
            <Button variant="ghost" className="border-primary text-primary">
              Sign In
            </Button>
          </div>
          <Button
            className="lg:hidden"
            variant={<XMarkIcon />}
            onClick={toggleMenu}
          />
        </div>
      </div>
    </nav>
  );
}
