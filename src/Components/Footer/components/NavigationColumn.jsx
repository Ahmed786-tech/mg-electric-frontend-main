import * as React from "react";
import { Link } from "react-router-dom";

export function NavigationColumn({ title, links }) {
  return (
    <div className="flex flex-col">
      <div className="text-[22px] font-bold text-white">{title}</div>
      <div className="flex flex-col self-start mt-9 text-base tracking-wide text-stone-50">
        {links.map((link, index) => (
          <Link
            to={link.href}
            key={index}
            className={`${
              index > 0 ? "mt-4" : ""
            } hover:text-gray-300 focus:text-gray-300 transition-colors`}
            tabIndex="0"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
