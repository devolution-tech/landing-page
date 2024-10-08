'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { usePathname } from 'next/navigation';

const navigation = [
  { label: 'Home', link: '/' },
  { label: 'About Us', link: '#' },
  { label: 'Service', link: '#' },
  { label: 'Contact', link: '#' },
];

export const Navbar = () => {
  const pathName = usePathname();

  return (
    <div className="dark:bg-trueGray-800 sticky top-0 z-50 w-full bg-gray-50 bg-opacity-95 dark:bg-opacity-95">
      <nav className="container relative mx-auto flex flex-wrap items-center p-4 px-6 lg:justify-between lg:px-4">
        <div className="flex w-full flex-row justify-between space-x-10 lg:w-auto">
          {/* Logo  */}
          <Disclosure>
            {({ open }) => (
              <>
                <div className="flex w-full flex-wrap items-center justify-between lg:w-auto">
                  <Link href="/">
                    <span className="flex items-center space-x-3 text-2xl font-medium text-[#070f74] dark:text-gray-100">
                      <span>
                        <Image src="/img/logo-devolution.png" alt="kjmis-logo" width="38" height="38" />
                      </span>
                      <span>Devolution</span>
                    </span>
                  </Link>

                  <DisclosureButton
                    aria-label="Toggle Menu"
                    className="ml-auto rounded-md px-2 py-1 text-gray-500 hover:text-[#070f74] focus:bg-gray-200 focus:text-[#070f74] focus:outline-none lg:hidden dark:text-gray-300 dark:focus:bg-white dark:focus:text-[#070f74]"
                  >
                    <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      {open && (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      )}
                      {!open && (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </DisclosureButton>

                  <DisclosurePanel className="my-5 flex w-full flex-wrap lg:hidden">
                    {navigation.map((item, index) => (
                      <Link
                        key={index}
                        href={item.link}
                        className={`-ml-4 w-full rounded-md px-4 py-2 hover:text-[#070f74] dark:hover:text-[#070f74] ${
                          pathName === item.link
                            ? 'bg-gray-200 text-[#070f74] dark:bg-white'
                            : 'text-gray-800 dark:text-gray-200'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </DisclosurePanel>
                </div>
              </>
            )}
          </Disclosure>

          {/* menu  */}
          <div className="hidden text-center lg:flex lg:items-center">
            <ul className="flex-1 list-none items-center justify-end pt-6 lg:flex lg:pt-0">
              {navigation.map((menu, index) => (
                <li className="nav__item mr-2" key={index}>
                  <Link
                    href={menu.link}
                    className={`inline-block rounded-md px-4 py-2 text-lg font-normal no-underline hover:text-[#070f74] lg:px-3 dark:hover:text-[#070f74] ${
                      pathName === menu.link
                        ? 'bg-gray-200 text-[#070f74] dark:bg-white'
                        : 'text-gray-800 dark:text-gray-200'
                    }`}
                  >
                    {menu.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Link
          href="#"
          target={'_blank'}
          className="hidden rounded-md bg-[#070f74] px-2 py-1 text-center text-base font-medium text-white md:text-lg lg:flex lg:px-6 lg:py-2"
        >
          Get Started
        </Link>
      </nav>
    </div>
  );
};
