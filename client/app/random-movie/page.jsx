"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
export default function randomMovie() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const controller = new AbortController()
    axios
      .get(`http://localhost:3001/random-movie`, {signal: controller.signal})
      
      .then((response) => setMovie(response.data))
      .catch((err) => console.log(err));
      return () => controller.abort()
  }, [setMovie]);

  return (
    <div className="grid grid-cols-4 gap-5">
      {movie.img && (
        <Image
          src={`/images/${movie.img}`}
          width={700}
          height={700}
          alt="Film"
          className="rounded-xl"
          priority={true}
        />
      )}

      <div className="p-4 font-bol text-xl">
        <p className="mb-10">{movie.name}</p>
        <p className="mb-1 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-slate-100 to-neutral-950">
          Duration of the movie
        </p>
        <p className="mb-10 text-slate-400">{movie.dotm}</p>
        <p className="text-xl font-bold bg-clip-text text-transparent mb-2 bg-gradient-to-t from-slate-100 to-neutral-950">
          About the movie
        </p>
        <span className="text-slate-400 w-150px">{movie.desc}</span>
      </div>
    </div>
  );
}
