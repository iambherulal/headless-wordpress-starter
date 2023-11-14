"use client";
import useSite from "@/hooks/use-site";
import { Soup } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {

  const { metadata, footerMenu: { companyMenu, storesMenu, socialLinks, legalMenu, servicesMenu } } = useSite();

  const pathname = usePathname();
  const year = new Date().getFullYear();

  return (
    <div className="container">
      <footer className="px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center">
          <Soup className="text-themePrimary" width={40} height={40} />
          <div className="mt-4 grow md:ml-4 md:mt-0">
            <p className="text-base font-semibold text-gray-700">&copy;{` ${year} ${metadata?.title}`}</p>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div className="mb-8 lg:mb-0">
            <p className="mb-6 text-lg font-semibold text-gray-700">Company</p>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
              {companyMenu?.map(menu => (
                <li key={menu.id}>
                  <Link
                    href={menu.path}
                    className={`text-sm hover:text-themePrimary ${pathname === menu.path ? 'text-themePrimary' : ''}`}
                  >
                    {menu.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-8 lg:mb-0">
            <p className="mb-6 text-lg font-semibold text-gray-700">
              Our Stores
            </p>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
              {storesMenu?.map(menu => (
                <li key={menu.id}>
                  <Link
                    href={menu.path}
                    className={`text-sm hover:text-themePrimary ${pathname === menu.path ? 'text-themePrimary' : ''}`}
                  >
                    {menu.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-8 lg:mb-0">
            <p className="mb-6 text-lg font-semibold text-gray-700">Services</p>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
              {servicesMenu?.map(menu => (
                <li key={menu.id}>
                  <Link
                    href={menu.path}
                    className={`text-sm hover:text-themePrimary ${pathname === menu.path ? 'text-themePrimary' : ''}`}
                  >
                    {menu.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-8 lg:mb-0">
            <p className="mb-6 text-lg font-semibold text-gray-700">Legal</p>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
              {legalMenu?.map(menu => (
                <li key={menu.id}>
                  <Link
                    href={menu.path}
                    className={`text-sm hover:text-themePrimary ${pathname === menu.path ? 'text-themePrimary' : ''}`}
                  >
                    {menu.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-8 lg:mb-0">
            <p className="mb-6 text-lg font-semibold text-gray-700">
              Social Links
            </p>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
              {socialLinks?.map(menu => (
                <li key={menu.id}>
                  <Link
                    href={menu.path}
                    className={`text-sm hover:text-themePrimary`}
                  >
                    {menu.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
