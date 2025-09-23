'use client'
import { LMS_NAME } from '@/constants/constants';
import { BookOpen, Menu, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'

function Navbar() {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
     <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? ' backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 text-2xl font-bold text-primary">
                {LMS_NAME}
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className=" hover:text-primary font-medium">Courses</a>
              <a href="#" className=" hover:text-primary font-medium">Features</a>
              <a href="#" className=" hover:text-primary font-medium">Pricing</a>
              <a href="#" className=" hover:text-primary font-medium">About</a>
              <button className="bg-primary text-white px-6 py-2 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                Sign In
              </button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-6 py-4 space-y-4">
              <a href="#" className="block text-gray-700 font-medium">Courses</a>
              <a href="#" className="block text-gray-700 font-medium">Features</a>
              <a href="#" className="block text-gray-700 font-medium">Pricing</a>
              <a href="#" className="block text-gray-700 font-medium">About</a>
              <button className="w-full bg-primary text-white px-6 py-2 rounded-lg">
                Sign In
              </button>
            </div>
          </div>
        )}
      </nav>
  )
}

export default Navbar