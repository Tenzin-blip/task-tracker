import React from 'react'
import '../index.css'

const Header = () => {
  return (
    <header className = "bg-gray-800 text-white p-4 shadow-md">
      <div className = "container mx-auto flex justify-between items-center">
        <h1 className = "text-2xl font-bold">Task Tracker</h1>
        <nav>
          <ul className = "flex space-x-4">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
