"use client";
import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  CustomButtonGreen,
  CustomButtonaBlack,
  links,
} from "@/components/data";
import { LoginContext } from "@/context/LoginContext";

export default function Navbar() {
  const { handleLogout, isLoggedIn } = useContext(LoginContext);

  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    // إرسال طلب البحث إلى صفحة النتائج
    router.push(`/search?term=${searchTerm}`);
  };

  return (
    <header className="grid grid-cols-3 p-10 items-center">
      <Link
        href="/"
        className="font-medium text-xl md:text:sm italic bg-clip-text text-transparent bg-gradient-to-t from-slate-100 to-lime-400"
      >
        MOX MOVIES
      </Link>
      <div className=" flex justify-center md:gap-9 items-center">
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={link.class}>
            {link.title}
          </Link>
        ))}
      </div>
      <div className="flex justify-end gap-3 items-center">
        <form onSubmit={handleSearch}>
          <label className="relative block ">
            <input
              className="placeholder:italic placeholder:text-lime-700 block bg-black w-full border border-none rounded-md py-3 pl-5 pr-3 focus:outline-none focus:border-lime-500 focus:ring-lime-500 focus:ring-1 sm:text-sm"
              placeholder="Search For Movie..."
              type="search"
              name="searchTerm"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </label>
        </form>

        {isLoggedIn ? (
          <button
            type="submit"
            className="bg-lime-500 text-black p-t-3 rounded-md px-3 py-2 font-medium"
            onClick={handleLogout}
          >
            Log Out
          </button>
        ) : (
          <>
            <CustomButtonGreen href="/auth/login">Sign In</CustomButtonGreen>
            <CustomButtonaBlack href="/auth/register">
              Sign Up
            </CustomButtonaBlack>
          </>
        )}
      </div>
    </header>
  );
}
