import Link from 'next/link'
import React from 'react'

const Navbar = () => {

  const LINKS = [
    {href: "/description/description-a", text:"Description-a" },
    {href: "/description/description-b", text:"Description-b" },
    {href: "/description/description-c", text:"Description-c" },
  ];
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
      <Link className="btn btn-ghost text-xl" href="/">HEALTH BALANCE</Link>
      </div>
      <div className="flex-2">
        <ul className="menu menu-horizontal px-1 overflow">
          <li>
            <details>
              <summary className="btn btn-ghost text-xl">
                DESCRIPTION
              </summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
              {LINKS.map(x => <NavbarLink key={x.href} {...x}/>)}
              </ul>
            </details>
          </li>
          <li><Link className="btn btn-ghost text-xl" href="/description/contact">CONTACT</Link></li>
        </ul>
      </div>
    </div>
  )
}
interface NavInterFace {
  href: string;
  text: string;
}

export default Navbar

const NavbarLink: React.FC<NavInterFace> = ({href, text}) => {
  return (
    <Link href={href}>
      <h2 className="btn-ghost rounded-lg font-bold block p-1 m-4">
        {text} 
      </h2>
    </Link>
  )
}