import React from 'react';
import Link from 'next/link';

const links = [
  {
    id: 1,
    route: "/",
    title: "Home"
  },
  {
    id: 2,
    route: "/about",
    title: "About"
  },
  {
    id: 3,
    route: "/workshop",
    title: "Workshop"
  }
]

const NavLink = () => (
  <ul className="list-link">
    {links.map(({ id, route, title }) => (
      <Link href={route} key={id}>
        <a className="link-title">
          <li>{title}</li>
        </a>
      </Link>
    ))}
  </ul>
)

export default NavLink;