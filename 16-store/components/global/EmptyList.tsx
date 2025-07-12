import { cn } from "@/lib/utils";
import React from "react";

type EmptyListType = {
  heading: string;
  className?: string;
};

export default function EmptyList({
  heading = "No items found.",
  className,
}: EmptyListType) {
  return <div className={cn("text-xl", className)}>{heading}</div>;
}
