"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLink = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

const AuthLayout = ({ children }) => {
  const [input, setInput] = useState("");
  const pathName = usePathname();
  return (
    <div>
      <input value={input} onChange={(e)=>setInput(e.target.value)} />
      <div>
        {navLink.map((link) => {
          const isActive = pathName.startsWith(link.href);
          return (
            <Link
              href={`${link.href}`}
              key={link.name}
              className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
            >
              {link.name}
            </Link>
          );
        })}
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
