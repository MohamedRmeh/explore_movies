"use client";
import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

import { LoginContext } from "@/context/LoginContext";
import { useRouter } from "next/navigation";

export default function submit() {
  const [cookies] = useCookies(["userId"]);
  const router = useRouter();
  const { isLoggedIn } = useContext(LoginContext);

  const [post, setPost] = useState({
    name: "",
    desc: "",
    dotm: "",
    categ: "",
    img: "",
    userId: "",
  });

  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleFileInput = (event) => {
    setPost({ ...post, img: event.target.files[0] });
  };

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", post.name);
    formData.append("desc", post.desc);
    formData.append("dotm", post.dotm);
    formData.append("categ", post.categ);
    formData.append("img", post.img);
    formData.append("userId", cookies.userId);

    axios
      .post("http://localhost:3001/submit", formData)
      .then((response) => {
        router.push("/");
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/auth/login");
    }
  }, [isLoggedIn]);

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl  font-bold  text-slate-300 ">
            Post your favorite movie
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6" method="POST">
            <div>
              <label
                htmlFor="email"
                className="bg-clip-text text-transparent bg-gradient-to-b from-slate-100 to-neutral-900"
              >
                Movie Name
              </label>
              <div className="mt-2">
                <label className="relative block ">
                  <input
                    className="placeholder:italic placeholder:text-lime-700 block bg-black w-full border border-none rounded-md py-3 pl-5 pr-3 focus:outline-none focus:border-lime-500 focus:ring-lime-500 focus:ring-1 sm:text-sm"
                    type="name"
                    name="name"
                    required
                    onChange={handleInput}
                  />
                </label>
              </div>
            </div>

            <div>
              <label className="bg-clip-text text-transparent bg-gradient-to-b from-slate-100 to-neutral-900">
                Movie Story
              </label>
              <textarea
                className="placeholder:italic placeholder:text-lime-700 block bg-black w-full border border-none rounded-md mt-2 py-3 pl-5 pr-3 focus:outline-none focus:border-lime-500 focus:ring-lime-500 focus:ring-1 sm:text-sm"
                onChange={handleInput}
                rows={4} // عدد الصفوف المرغوبة
                cols={10} // عدد الأحرف في الصف الواحد
                type="desc"
                name="desc"
                required
              />
            </div>

            <div>
              <label className="bg-clip-text text-transparent bg-gradient-to-b from-slate-100 to-neutral-900 ">
                Duration of the movie:
                <select
                  className="mt-2 placeholder:italic placeholder:text-lime-700 block text-white bg-black w-full border border-none rounded-md py-3 pl-5 pr-3 focus:outline-none focus:border-lime-500 focus:ring-lime-500 focus:ring-1 sm:text-sm"
                  onChange={handleInput}
                  name="dotm"
                  type="dotm"
                  required
                >
                  <option value="">Choose...</option>
                  <option value="60 min">60 min</option>
                  <option value="120 min">120 min</option>
                  <option value="180 min">180 min</option>
                  <option value="240 min">240 min</option>
                  <option value="300 min">300 min</option>
                  <option value="360 min">360 min</option>
                </select>
              </label>
            </div>

            <div>
              <label className="bg-clip-text text-transparent bg-gradient-to-b from-slate-100 to-neutral-900 ">
                Film Category
                <select
                  className="mt-2 placeholder:italic placeholder:text-lime-700 block text-white bg-black w-full border border-none rounded-md py-3 pl-5 pr-3 focus:outline-none focus:border-lime-500 focus:ring-lime-500 focus:ring-1 sm:text-sm"
                  onChange={handleInput}
                  name="categ"
                  type="categ"
                  required
                >
                  <option value="">Choose...</option>
                  <option value="action">action</option>
                  <option value="drama">drama</option>
                  <option value="comedy">comedy</option>
                </select>
              </label>
            </div>

            <div className="mb-3">
              <label className="bg-clip-text text-transparent bg-gradient-to-b from-slate-100 to-neutral-900 ">
                Default file input example
              </label>
              <input
                className="border-lime-300 border-2 p-1 mt-2 w-full rounded-md bg-black "
                type="file"
                onChange={handleFileInput}
                name="img"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-lime-500 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-smfocus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
