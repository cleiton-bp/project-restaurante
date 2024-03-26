import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
const router = useRouter;

const CustomLink = ({ href, title, className = "" }) => {
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300" ${
          router.asPath === href ? "w-full" : "w:0"
        } `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <Logo />
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/products" title="Products" className="mr-4" />
        <CustomLink href="/cart" title="Cart" className="mr-4" />
        <CustomLink href="/payment" title="Payment" className="mr-4" />
      </nav>
    </header>
  );
};
export default Navbar;
