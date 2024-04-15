"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = [
  { id: 1, name: "Home", path: "/homepage" },
  { id: 2, name: "Blog", path: "/blog" },
  { id: 3, name: "About", path: "/about" },
];

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (path) => path === pathname;

  return (
    <nav>
      <ul>
        {NavLinks.map((link) => {
          return (
            <li key={link.id} className={isActive(link.path) ? "active" : ""}>
              {link.name}
              {/* <Link
                href={""}
                
              >
              </Link> */}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
