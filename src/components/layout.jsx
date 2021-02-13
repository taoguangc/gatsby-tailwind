import React from 'react'
import { Link } from 'gatsby'

const ListLink = props => (
  <li className="px-4 py-2">
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div className="max-w-screen-md m-auto">
      <header className="flex">
        <ul className="flex lg:flex-row ml-auto p-6 list-none">
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}
