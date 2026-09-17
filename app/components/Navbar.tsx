import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-4">
                <li>
                    <a href="/" className="text-white hover:text-gray-300">Home</a>
                </li>
                <li>
                    <a href="/about" className="text-white hover:text-gray-300">About</a>
                </li>
                <li>
                    <a href="/communities" className="text-white hover:text-gray-300">Communities</a>
                </li>
                <li>
                    <a href="/topics" className="text-white hover:text-gray-300">Topics</a>
                </li>
                <li>
                    <a href="/developers" className="text-white hover:text-gray-300">Developers</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar