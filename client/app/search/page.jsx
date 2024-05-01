"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

export default function SearchResults () {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // استرجاع نتائج البحث عن طريق استخدام useRouter
    const searchTerm = new URLSearchParams(window.location.search).get("term");

    // إرسال طلب إلى خادم الويب باستخدام axios أو أي مكتبة أخرى
    axios
      .post("http://localhost:3001/search", { term: searchTerm })
      .then((response) => {
        setSearchResults(response.data);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  }, []);
  return (
    <div className="my-4">
      <div>
        <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-slate-100 to-neutral-950 flex justify-center">
          Search Result
        </span>
      </div>
      <div className="py-1">
        <div className="grid grid-cols-4 gap-5 justify-center">
          {searchResults.map((movie) => {
            return (
              <Link key={movie._id} href={`/movie/${movie._id}`}>
                <Image
                  src={`/images/${movie.img}`}
                  width={700}
                  height={700}
                  alt="Film"
                  className="images object-cover rounded-xl"
                  priority={true}
                />
                <div className="p-3 font-bol text-xl">
                  <span>{movie.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

