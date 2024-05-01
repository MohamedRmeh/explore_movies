"use client";
import React, { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useRouter } from "next/navigation";
export const LoginContext = createContext(null);

export const LoginProvider = ({ children }) => {
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState("");
  const [post, setPost] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userIdt, setUserId] = useState("");

  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/auth/login", post)
      .then((response) => {
        const { data } = response;
        setCookie("token", data.token, { path: "/" });
        setCookie("userId", data._id, { path: "/" }); // تحديث هنا

        // setUserId(data._id)
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage("Incorrect password or username");
      });
  };

  useEffect(() => {
    setIsLoggedIn(!!cookies.token);
    setUserId(cookies.userId);
  }, [cookies]);

  const handleLogout = () => {
    removeCookie("token", { path: "/" });
    removeCookie("userId", { path: "/" });
    router.push("/");
  };

  return (
    <LoginContext.Provider
      value={{
        handleLogout,
        isLoggedIn,
        errorMessage,
        userIdt,
        handleSubmit,
        handleInput,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
