import React from "react";
import Link from "next/link"; //crucial for next.js routing

const Header: React.FC = ()=>{
 return (
  <header className="bg-gray-800 text-white p-4 shadow-md">
    <nav className="container mx-auto flex justify-between items-center">
      {/**Site Logo/Title - link to the root */}
      <Link href="/">My Lsting App
      </Link>

      {/*Navigation Links */}
      <div className="space-x-4">
        <Link href="/home" className="hover:text-gray-300
         transition-colors duration-200">Home
        </Link>
        <Link href="/about" className="hover:text-gray-300
         transition-colors duration-200">About
        </Link>
        <Link href="/posts" className="hover:text-gray-300
         transition-colors duration-200">Posts
        </Link>
        <Link href="/users" className="hover:text-gray-300
         transition-colors duration-200">Users
        </Link>
      </div>
    </nav>
  </header>
 );
};


export default Header;
 