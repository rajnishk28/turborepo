import React from 'react'

const Footer = () => {
  return (
   <>
      <footer className="w-full bg-gray-100 py-4 mt-20">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          © {new Date().getFullYear()} My Website. All rights reserved.
        </div>
      </footer>
      </>
  )
}

export default Footer