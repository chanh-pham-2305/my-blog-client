import Link from "next/link";
import React from "react";
import { cookies } from "next/headers";

const Header = () => {
  const cookieStore = cookies();
  const authorization = cookieStore.get("Authorization");
  console.log(authorization);

  return (
    <header className="flex flex-row justify-between items-center max-w-6xl mx-auto px-4 py-2">
      <Link href="#" className="font-bold text-4xl">
        My blog
      </Link>
      <div className="flex gap-8 text-xl font-semibold">
        <Link href="/auth/login">Login</Link>
        <Link href="/auth/register">Register</Link>
      </div>
      {/* <div className="flex gap-8 text-xl font-semibold">
        <Link href={"/p/create"}>Create post</Link>
        <Link href={"#"}>Adam</Link>
        <Link href={"/auth/logout"}>Logout</Link>
      </div> */}
    </header>
  );
};

export { Header };
