"use client";
import useSite from "@/hooks/use-site";
import { ChevronRight, Soup } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { DropDownMenu } from "./dropdown-menu";

export default function Header() {

  const { metadata, headerMenu } = useSite();
  const pathname = usePathname();


  return (
    <header className="relative w-full border-b bg-white py-2">
      <div className="container flex items-center justify-between px-4 py-2">
        <Link href="/" className="inline-flex items-center space-x-2">
          <Soup className="text-themePrimary" width={30} height={30} />
          <span className="font-bold">{metadata?.title}</span>
        </Link>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            {headerMenu.map((menu) => (
              <li key={menu.id}>
                <Link
                  href={menu.path}
                  className={`text-sm font-semibold text-gray-800 hover:text-themePrimary ${pathname === menu.path ? 'text-themePrimary' : ''}`}
                >
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <Button size={"sm"}>
            Order Now <ChevronRight className="ml-2" size={16} />
          </Button>
        </div>
        <div className="lg:hidden">
          <DropDownMenu menuItems={headerMenu} />
        </div>
      </div>
    </header>
  );
}
