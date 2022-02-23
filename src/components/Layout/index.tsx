import { Kbd } from '@chakra-ui/react';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { SearchIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router';
import React, { Fragment }  from "react";
import { useHotkeys } from 'react-hotkeys-hook';
import { useDebouncedCallback } from 'use-debounce';
import Footer from '../Footer';
import CommandPalette from '@/components/CommandPalette';
import { mockNavigation, mockUser, mockUserNavigation  } from '@/components/Layout/mock';
import { toggleCommandPalette } from '@/features/blog';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useDarkMode } from '@/hooks/useDarkMode';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import Branding from 'components/Branding';
import EmptyState from "components/EmptyState";
import ErrorBoundary from 'components/ErrorBoundary';
import { classNames } from "lib/utils";


export interface UserDetailProps {
  name: string;
  email: string;
  profileImg: string;
}

export interface MenuProps {
  name: string;
  href: string;
  current: boolean;
}


export interface LayoutProps {
  pageTitle: string;
  showSearch?: boolean;
  showBackButton?: boolean;
  userMenuItems?: Omit<MenuProps, 'current'>[];
  userDetails?: UserDetailProps;
  navigation?: MenuProps[];
}



const Layout:React.FC<LayoutProps> = ({navigation, pageTitle, userMenuItems, userDetails, children}) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isError, isLoading, pageTitle: setPageTitle, error, darkMode } = useTypedSelector((s) => s.app);

  const [user, setUser] = React.useState<UserDetailProps>(() => userDetails ?? mockUser)
  const [userNavigation, setUserNavigation] = React.useState<Omit<MenuProps, "current">[]>(() => userMenuItems ?? mockUserNavigation)

  const debounced = useDebouncedCallback(
    (value) => {
      dispatch(toggleCommandPalette(true))
    },
    20,
    { maxWait: 40 }
  );

  const dm = useDarkMode();

  const debouncedDarkMode = useDebouncedCallback(
    (value) => {useDarkMode()
    }
  )
  useHotkeys('ctrl+k', () => debounced(true));
  useHotkeys('ctrl+l', () =>{
    console.log(dm);
    console.dir(dm);
    dm.setColorMode(dm.colorMode === 'light' ? 'dark' : 'light')
  })

  return (
    <>
      <div className="min-h-full">
        <div className="bg-indigo-600 pb-32">
          <Disclosure as="nav" className="bg-indigo-600 border-b border-indigo-300 border-opacity/25 lg:border-none">
            {({ open }) => (
              <>
                <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                  <div className="relative h-16 flex items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity/25">
                    <div className="px-2 flex items-center lg:px-0">
                      <div className="shrink-0">
                        <Branding height={48} />
                      </div>
                      <div className="hidden lg:block lg:ml-10">
                        <div className="flex space-x-4">
                          <Navbar navigation={navigation ?? mockNavigation} />
                        </div>
                      </div>
                    </div>
                    <div className="flex lg:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="bg-indigo-600 p-2 rounded-md inline-flex items-center justify-center text-indigo-200 hover:text-white hover:bg-indigo-500 hover:bg-opacity/75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                          <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                        )}
                      </Disclosure.Button>
                    </div>
                    <div className="hidden lg:block lg:ml-4">
                      <div className="flex items-center">
                        <button
                          type="button"
                          className="bg-indigo-600 shrink-0 rounded-full p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-0 focus:ring-offset-0"
                        >
                          <span className="sr-only">View notifications</span>
                          <SearchIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                        <div className="max-w-lg w-full lg:max-w-xs mx-2">
                        <span>
                          <Kbd>ctrl</Kbd> + <Kbd>k</Kbd>
                        </span>
                        </div>
                        {user && (
                          <Menu as="div" className="ml-3 relative shrink-0">
                            <div>
                              <Menu.Button className="bg-indigo-600 rounded-full flex text-sm text-white focus:ring-0 focus:ring-offset-0">
                                <span className="sr-only">Open user menu</span>
                                <img className="rounded-full h-8 w-8" src={user.profileImg} alt="" />
                              </Menu.Button>
                            </div>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity/5 focus:outline-none">
                                {userNavigation && userNavigation.map((item) => (
                                  <Menu.Item key={item.name}>
                                    {({ active }) => (
                                      <a
                                        href={item.href}
                                        className={classNames(
                                          active ? 'bg-gray-100' : '',
                                          'block py-2 px-4 text-sm text-gray-700'
                                        )}
                                      >
                                        {item.name}
                                      </a>
                                    )}
                                  </Menu.Item>
                                ))}
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        )}

                      </div>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="lg:hidden">
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    <Navbar navigation={navigation ?? mockNavigation} />
                  </div>
                  {user && (
                    <div className="pt-4 pb-3 border-t border-indigo-700">
                      <div className="px-5 flex items-center">
                        <div className="shrink-0">
                          <img className="rounded-full h-10 w-10" src={user.profileImg} alt={user.name ?? ""} />
                        </div>
                        <div className="ml-3">
                          <div className="text-base font-medium text-white">{user.name ?? "John Doe"}</div>
                          <div className="text-sm font-medium text-indigo-300">{user.email ?? "john@john.com"}</div>
                        </div>
                        <div className="flex-1 px-2 flex justify-center lg:ml-6 lg:justify-end">
                          <div className="max-w-lg w-full lg:max-w-xs">
                        <span>
                          <Kbd>ctrl</Kbd> + <Kbd>k</Kbd>
                        </span>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="ml-auto bg-indigo-600 shrink-0 rounded-full p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
                        >
                          <span className="sr-only">Search</span>
                          <SearchIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                      <div className="mt-3 px-2 space-y-1">
                        {userNavigation && userNavigation.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity/75"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </div>
                    </div>
                  )}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <header className="py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-white">
                {pageTitle ?? "Home"}
              </h1>
            </div>
          </header>
        </div>

        <main className="-mt-32">
          <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
            <ErrorBoundary>
              {children ?? <EmptyState />}
            </ErrorBoundary>
          </div>
        </main>
      </div>
      <Footer />
      <Dialog open={isError} onClose={() => router?.push("/")}>
        <Dialog.Overlay />

        <Dialog.Title>Error!</Dialog.Title>
        <Dialog.Description>
          An error has occurred. Please try again.
        </Dialog.Description>

        {error && (
          <p>{error}</p>
        )}
        {!error && (
          <p>
            Unable to get error reason. Please try refreshing the page and trying again.
          </p>
        )}

        <button onClick={() => window?.location?.reload()}>Refresh</button>
      </Dialog>
      <CommandPalette />
    </>
  )
}
function Navbar({asDisclosure, navigation}: {asDisclosure?: boolean, navigation: MenuProps[]}) {
  const router = useRouter();

  if(asDisclosure) {
    return (
      <>
        {navigation && navigation.map((item) => (
          <Disclosure.Button
            key={item.name}
            as="a"
            href={item.href}
            className={classNames(
      item.href === router?.pathname
                ? 'bg-indigo-700 text-white'
                : 'text-white hover:bg-indigo-500 hover:bg-opacity-75',
              'block rounded-md py-2 px-3 text-base font-medium'
            )}
            aria-current={item.current ? 'page' : undefined}
          >
            {item.name}
          </Disclosure.Button>
        ))}
      </>
    )
  }else {
  return (
    <>
      {navigation && navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={classNames(
  item.href === router?.pathname
              ? 'bg-indigo-700 text-white'
              : 'text-white hover:bg-indigo-500 hover:bg-opacity-75',
            'rounded-md py-2 px-3 text-sm font-medium'
          )}
          aria-current={item.current ? 'page' : undefined}
        >
          {item.name}
        </a>
      ))}
    </>
  )
  }

}


export default Layout
