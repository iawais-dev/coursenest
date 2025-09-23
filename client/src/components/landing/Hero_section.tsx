import React from 'react';
import {Play, ArrowRight, CheckCircle } from 'lucide-react';


const Hero_section = () => {
  return (
      <section className="pt-24 pb-20 px-6 sm:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl  mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 mt-10 lg:mt-0  items-center">
            <div className="text-center lg:text-left">          
              <h1 className="text-4xl lg:text-6xl font-bold  mb-6 leading-tight">
                Transform Your
                <span className="text-primary  block">
                  Learning Journey
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl  mb-8 leading-relaxed">
                Unlock your potential with our comprehensive learning management <br /> system. 
                Access thousands of courses, track progress, and achieve <br /> your goals with personalized learning paths.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="group bg-primary text-white px-8 py-4 rounded-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group  px-8 py-4 rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center justify-center lg:justify-start mt-8 space-x-6">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="">Free 14-day trial</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="">No credit card required</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 bg-background rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl mb-6 flex items-center justify-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded-full"></div>
                  <div className="h-4 bg-gray-200 rounded-full w-3/4"></div>
                  <div className="h-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full w-1/2"></div>
                </div>
              </div>
              <div className="absolute top-8 left-8 w-full h-full bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Hero_section;