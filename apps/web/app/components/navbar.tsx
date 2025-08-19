import React from 'react'

const Navbar = () => {
  return (
   
      <header className="w-full bg-blue-600 text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">My Website</h1>
          <nav className="space-x-4">
            <a href="/" className="hover:text-gray-200">Home</a>
            <a href="/about" className="hover:text-gray-200">About</a>
            <a href="/contatc" className="hover:text-gray-200">Contact</a>
          </nav>
        </div>
      </header>
  )
}

export default Navbar