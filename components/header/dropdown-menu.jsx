"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function DropDownMenu({ menuItems }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleMenuClick = () => setOpen(!open);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Menu className="h-6 w-6 cursor-pointer" />
      </SheetTrigger>
      <SheetContent side={"right"}>
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>
        <div className="mt-6">
          <nav className="grid gap-y-4">
            {menuItems.map((menu) => (
              <Link
                key={menu.id}
                href={menu.path}
                className={`-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50`}
                onClick={handleMenuClick}
              >
                <span className={`text-base font-medium text-gray-900 ${pathname === menu.path ? 'text-themePrimary' : ''}`}>
                  {menu.label}
                </span>
              </Link>
            ))}
          </nav>
          <Button className="mt-4 w-full">Order Now</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
