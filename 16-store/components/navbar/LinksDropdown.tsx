import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import React from "react";
import { Button } from "../ui/button";
import { LuAlignLeft } from "react-icons/lu";
import { links } from "@/utils/links";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import Link from "next/link";

export default function LinksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className=" flex gap-4 max-w-[100px] cursor-pointer">
          <LuAlignLeft className=" w-6 h-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" w-40 bg-white shadow-2xl rounded-md" align="start" sideOffset={10} >
        {links.map((link) => {
          return (
            <DropdownMenuItem key={link.href} className="" >
              <Link href={link.href} className=" capitalize w-full">
                {link.label}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
