import React from "react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center justify-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity duration-200">
      {/* Icon */}
      <div className="relative">
        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center transform rotate-12 shadow-lg">
          <span className="text-white font-bold text-xl transform -rotate-12">
            T
          </span>
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-orange-400 to-red-400 rounded-full animate-pulse"></div>
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Tphilus
        </span>
        <span className="text-sm font-medium text-gray-600 tracking-widest uppercase">
          Store
        </span>
      </div>
    </Link>
  );
}