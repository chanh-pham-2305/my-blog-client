"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
const Register = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/v1/auth/register", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200 || response.status === 201) {
      router.push("/auth/login");
      alert("registration successful");
    } else {
      alert("registration failed");
    }
  };
  return (
    <div className="flex flex-col justify-center items-center max-w-[1200px] mx-auto">
      <h1 className="text-3xl font-bold text-center">Register</h1>
      <form
        className="flex flex-col items-center w-[500px] gap-5 text-md"
        onSubmit={handleSubmitRegister}
      >
        <div className="w-full">
          <label
            htmlFor="username"
            className="font-medium leading-6 text-gray-900"
          >
            Username
          </label>
          <div className="mt-2">
            <input
              name="username"
              type="text"
              required
              placeholder="Enter username..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="w-full ">
          <label
            htmlFor="email"
            className="font-medium leading-6 text-gray-900"
          >
            Email
          </label>
          <div className="mt-2">
            <input
              name="email"
              type="email"
              required
              placeholder="Enter email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="text-md">
              <Link
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </Link>
            </div>
          </div>
          <div className="mt-2">
            <input
              type="password"
              required
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="w-full ">
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Register
          </button>
        </div>
      </form>
      <p className="mt-10 text-center text-sm text-gray-500">
        Already have an account?{" "}
        <Link
          href="/auth/login"
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          Login here
        </Link>
      </p>
    </div>
  );
};

export { Register };
