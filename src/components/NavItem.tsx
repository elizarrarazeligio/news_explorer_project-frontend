"use client";

import "@/styles/nav.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  title: string;
  link: string;
}

export default function NavItem(props: NavItemProps) {
  const { title, link } = props;
  const pathname = usePathname();

  return (
    <li
      className={`navigation__list_item text-center ${
        pathname === link ? "navigation__list_item-active" : ""
      }`}
    >
      <Link href={link}>{title}</Link>
    </li>
  );
}
