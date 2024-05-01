"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  
  useEffect(() => {
    axios
      .get(`http://localhost:3001/movies`)
      .then((response) => setMovies(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="lg:py-1 py-10">
      <div>
        <span className="p-3 text-4xl flex justify-center lg:justify-start font-bold bg-clip-text text-transparent bg-gradient-to-t from-slate-100 to-neutral-950">
          Latest Movies
        </span>
      </div>

      <div className="py-1 flex flex-col ">
        <p className="font-bold text-xl p-4 my-5 bg-clip-text text-transparent lg:justify-start flex justify-center bg-gradient-to-b from-slate-100 to-neutral-900">
          Action
        </p>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2  lg:gap-5 gap-20 justify-center">
          {movies.action &&
            movies.action.map((movie) => {
              return (
                <Link key={movie._id} href={`/movie/${movie._id}`}>
                  <Image
                    src={`/images/${movie.img}`}
                    width={700}
                    height={700}
                    alt="Film"
                    className="lg:images lg:object-cover rounded-xl"
                    priority={true}
                    loading="eager"
                  />
                  <div className="p-3 font-bol text-xl">
                    <span>{movie.name}</span>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>

      <div className="lg:py-1 py-10">
        <p className="font-bold text-xl p-4 my-5 bg-clip-text text-transparent lg:justify-start flex justify-center bg-gradient-to-b from-slate-100 to-neutral-900">
          Drama
        </p>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2  lg:gap-5 gap-20 justify-center">
          {movies.drama &&
            movies.drama.map((movie) => {
              return (
                <Link key={movie._id} href={`/movie/${movie._id}`}>
                  <Image
                    src={`/images/${movie.img}`}
                    width={700}
                    height={700}
                    alt="Film"
                    className="lg:images lg:object-cover rounded-xl"
                    priority={true}
                    loading="eager"
                  />
                  <div className="p-3 font-bol text-xl">
                    <span>{movie.name}</span>
                    
                  </div>
                </Link>
              );
            })}
        </div>
      </div>

      <div className="lg:py-1 py-10">
        <p className="font-bold text-xl p-4 my-5 bg-clip-text text-transparent lg:justify-start flex justify-center bg-gradient-to-b from-slate-100 to-neutral-900">
          Comedy
        </p>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2  lg:gap-5 gap-20 justify-center">
          {movies.comedy &&
            movies.comedy.map((movie) => {
              return (
                <Link key={movie._id} href={`/movie/${movie._id}`}>
                  <Image
                    src={`/images/${movie.img}`}
                    width={700}
                    height={700}
                    alt="Film"
                    className="lg:images lg:object-cover rounded-xl"
                    priority={true}
                    loading="eager"
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
}