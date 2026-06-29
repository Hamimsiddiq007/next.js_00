"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Login", href: "/login" },
  { name: "Register", href: "/register" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <>
      <h1>Auth Layout</h1>
      <ul>
        {navLinks.map((link) => (
          <li
            key={link.href}
            className={
              pathname === link.href || pathname.startsWith(`${link.href}/`)
                ? "text-blue-500 font-bold"
                : "text-red-300"
            }
          >
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
      {children}
    </>
  );
}
