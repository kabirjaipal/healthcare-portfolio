import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const navigation = [
  { name: "Home", href: "#" },
  { name: "About US", href: "#aboutus" },
  { name: "Services", href: "#services" },
  { name: "Specialties", href: "#specialties" },
  { name: "Team Members", href: "#teammembers" },
  { name: "Patient Testimonials", href: "#patienttestimonials" },
  { name: "Facilities Gallery", href: "#facilitiesgallery" },
  { name: "Contact", href: "#contact" },
  { name: "FAQs", href: "#faqs" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(navigation[0].name);

  const toggleMobileMenu = () => {
    setOpen((prev) => !prev);
  };

  const handleActiveLink = (linkname) => {
    setActiveLink(linkname);
    setOpen(false);
  };

  return (
    <>
      <div className="mx-auto px-2 sm:px-6 lg:px-8 sticky top-0 left-0 right-0 z-50 bg-white shadow-sm shadow-gray-900">
        <div className="relative flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            {/* Logo */}
            <a href="/" className="flex-shrink-0">
              <img
                className="h-16 w-auto"
                src="https://img.freepik.com/free-vector/hospital-logo-design-vector-medical-cross_53876-136743.jpg"
                alt="Your Company"
              />
            </a>
          </div>

          <div className="hidden lg:flex lg:items-center lg:ml-6">
            {/* Links on the right */}
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <a
                  onClick={() => handleActiveLink(item.name)}
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    activeLink == item.name
                      ? "bg-gray-900 text-white"
                      : "text-gray-900 hover:bg-gray-700 hover:text-white",
                    "rounded-md px-3 py-2 text-sm font-medium"
                  )}
                  aria-current={activeLink ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div
            className={`absolute inset-y-0 right-0 flex items-center sm:hidden md:flex lg:hidden`}
          >
            <button
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleMobileMenu}
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              {open ? (
                <RxCross1 className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <CiMenuFries className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => handleActiveLink(item.name)}
              className={classNames(
                activeLink == item.name
                  ? "bg-gray-900 text-white"
                  : "text-gray-900 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
              aria-current={activeLink ? "page" : undefined}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
