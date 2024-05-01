"use client";

import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LoginContext } from "@/context/LoginContext";

export default function register() {
  const router = useRouter();

  const { isLoggedIn } = useContext(LoginContext);

  const [post, setPost] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3001/auth/register", post)
      .then((response) => {
        console.log(response);
        router.push("/auth/login");
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn]);

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl  font-bold  text-slate-300 ">
            Create an account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6" method="POST">
            <div>
              <label
                htmlFor="email"
                className="bg-clip-text text-transparent bg-gradient-to-b from-slate-100 to-neutral-900"
              >
                User name
              </label>

              <div className="mt-2">
                <input
                  required
                  className="block bg-black w-full border border-none rounded-md py-3 pl-5 pr-3 focus:outline-none focus:border-lime-500 focus:ring-lime-500 focus:ring-1 sm:text-sm"
                  type="text"
                  name="username"
                  onChange={handleInput}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="bg-clip-text text-transparent bg-gradient-to-b from-slate-100 to-neutral-900"
              >
                Email address
              </label>

              <div className="mt-2">
                <input
                  required
                  className="placeholder:text-lime-700 block bg-black w-full border border-none rounded-md py-3 pl-5 pr-3 focus:outline-none focus:border-lime-500 focus:ring-lime-500 focus:ring-1 sm:text-sm"
                  type="email"
                  name="email"
                  onChange={handleInput}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="bg-clip-text text-transparent bg-gradient-to-b from-slate-100 to-neutral-900"
                >
                  Password
                </label>
              </div>

              <div className="mt-2">
                <input
                  required
                  className="bg-black w-full border border-none rounded-md py-3 pl-5 pr-3 focus:outline-none focus:border-lime-500 focus:ring-lime-500 focus:ring-1 sm:text-sm"
                  type="password"
                  name="password"
                  onChange={handleInput}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-lime-500 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-smfocus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
