/* eslint-disable react-refresh/only-export-components */

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import logo from "../../../assets/image/Untitled design (1).png";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../redux/app/hook";
import { useCurrnetUser } from "../../../redux/features/auth/authSlice";
import { Button } from "antd";

export const navigation = [
  { name: "Home", href: "/" },
  { name: "Car List", href: "/car-listing" },
  { name: "Contact", href: "/contact-us" },
  { name: "About Us", href: "/about-us" },
];
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const user = useAppSelector(useCurrnetUser);

  return (
    <div className="bg-white">
      <header className=" inset-x-0 w-11/12 mx-auto border-b top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between   lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Rental Car</span>
              <img alt="" src={logo} className="h-16  w-auto" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {user ? (
              <>
                <Link to={`${user?.role}/dashboard`}>
                  <Button className="text-sm bg-primary-color font-semibold leading-6 text-white px-3 py-1 rounded-lg">
                    Dashboard
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  {" "}
                  <button className="text-sm bg-primary-color font-semibold leading-6 text-white px-3 py-1 rounded-lg">
                    Log in <span aria-hidden="true">&rarr;</span>
                  </button>
                </Link>
              </>
            )}
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img alt="" src={logo} className="h-8 w-auto" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                {user ? (
                  <>
                    <div className="py-6">
                      <Link
                        to={`${user?.role}/dashboard`}
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Dashboard
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="py-6">
                      <Link
                        to="/login"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Log in
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
};
export default Header;
