import Link from "next/link";
import React from "react";
import ProfileIcon from "./ProfileIcon";

function Navbar() {
  return (
    <nav className="flex item-center justify-between fixed left-0 right-0 px-8 h-14 bg-purple-400 ">
      <Link className="font-bold" href={"/"}>N:O-Thentication</Link>
      <ProfileIcon />
    </nav>
  );
}

export default Navbar;
