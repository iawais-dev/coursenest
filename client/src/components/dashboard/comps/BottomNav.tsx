'use client'
import { BookOpen, FileQuestion, Home, User } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react'




function BottomNav() {
      const [activeTab, setActiveTab] = useState('home');



  const bottomNavItems = [
    { id: 'home', label: 'Home', icon: Home, href:'/dashboard' },
    { id: 'courses', label: 'Courses', icon: BookOpen ,href:'/dashboard/courses' },
    { id: 'quiz', label: 'Quiz', icon: FileQuestion, href:'/dashboard' },
    { id: 'profile', label: 'Profile', icon: User, href:'/dashboard' },
  ];

  return (
      <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-border bg-card/95 backdrop-blur-xl shadow-2xl">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex justify-around items-center h-20">
            {bottomNavItems.map((item) => (
              <Link
              key={item.id}
              href={item.href} >
              <button
        
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-xl transition-all ${
                  activeTab === item.id
                    ? 'text-primary scale-105'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                }`}
              >
                <div className={`relative ${activeTab === item.id ? 'animate-bounce-subtle' : ''}`}>
                  <item.icon className={`w-6 h-6 ${activeTab === item.id ? 'stroke-[2.5]' : 'stroke-2'}`} />
                  {activeTab === item.id && (
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
                  )}
                </div>
                <span className={`text-xs font-medium ${activeTab === item.id ? 'font-semibold' : ''}`}>
                  {item.label}
                </span>
              </button>  
              </Link>
            ))}
          </nav>
        </div>
      </div>
  )
}

export default BottomNav