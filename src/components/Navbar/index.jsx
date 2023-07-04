import React from 'react'
import { Link } from './link'

export const Navbar = () => {
  return (
    <nav id="navbar" className="fixed top-0 bg-pink-300 z-30 w-full py-6">
      <div className="bg-blue-200 w-5/6 flex justify-between  flex-row mx-auto">
        <div>
          Favicon
        </div>
        <div>
          <Link/>
        </div>
      </div>

    </nav>
  )
}
