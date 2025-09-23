import { Star } from 'lucide-react';
import React from 'react'

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}


export const Testimonials_card:React.FC<TestimonialProps> = ({ name, role, content, rating, avatar }) => {
  return (
     <div className="bg-card text-card-foreground rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border">
      <div className="flex items-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="mb-6 italic">"{content}"</p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-card-foreground font-bold text-lg mr-4">
          {avatar}
        </div>
        <div>
          <h4 className="font-bold ">{name}</h4>
          <p className=" text-sm">{role}</p>
        </div>
      </div>
    </div>
  )
}

