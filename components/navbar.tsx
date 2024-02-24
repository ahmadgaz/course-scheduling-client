'use client';

import Button from '@/components/button';
import Logo from '@/components/logo';
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';

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

      <Button
        variant={<Bars3Icon />}
        className={clsx('lg:hidden', { hidden: showSearch })}
        onClick={toggleMenu}
      />
      <ul
        className={clsx('navlinks navlinks-mobile', {
          'navlinks-mobile-menu-open': showMenu,
          'navlinks-mobile-menu-closed': !showMenu,
        })}
      >
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
        <Button
          className="lg:hidden"
          variant={<XMarkIcon />}
          onClick={toggleMenu}
        />
      </ul>
    </nav>
  );
}
