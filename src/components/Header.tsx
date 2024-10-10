import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex gap-8 p-4 border-b">
      <Link
        href="/"
        className="cursor-pointer hover:text-zinc-700 duration-500 ease-in-out transition-colors"
      >
        Logo
      </Link>
      <ul className="flex gap-4">
        <li>
          <Link
            href="/about"
            className="cursor-pointer hover:text-zinc-700 duration-500 ease-in-out transition-colors"
          >
            Sobre
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="cursor-pointer hover:text-zinc-700 duration-500 ease-in-out transition-colors"
          >
            Contato
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            className="cursor-pointer hover:text-zinc-700 duration-500 ease-in-out transition-colors"
          >
            Servicos
          </Link>
        </li>
      </ul>
    </header>
  );
}
