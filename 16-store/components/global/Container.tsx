import { cn } from "@/lib/utils";
import React from "react";

type ContainerType = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerType) {
  return (
    <div className={cn(" mx-auto max-w-6xl xl:max-w-7xl px-8", className)}>
      {children}
    </div>
  );
}
