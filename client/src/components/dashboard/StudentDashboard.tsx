'use client'
import React, { useState } from 'react';
import { BookOpen, Clock, Award, TrendingUp, PlayCircle, CheckCircle, Calendar, Users, Home, FileQuestion, User, GraduationCap, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('home');

  const stats = [
    { label: 'Courses Enrolled', value: '8', icon: BookOpen, color: 'from-primary/20 to-primary/10' },
    { label: 'Hours Learned', value: '124', icon: Clock, color: 'from-secondary/20 to-secondary/10' },
    { label: 'Certificates', value: '3', icon: Award, color: 'from-green-500/20 to-green-500/10' },
    { label: 'Current Streak', value: '12 days', icon: TrendingUp, color: 'from-orange-500/20 to-orange-500/10' },
  ];

  const bottomNavItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'quiz', label: 'Quiz', icon: FileQuestion },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  const activeCourses = [
    { id: 1, title: 'Advanced React Patterns', progress: 65, instructor: 'Sarah Johnson', nextLesson: 'Tomorrow, 2:00 PM', thumbnail: 'bg-gradient-to-br from-blue-400 to-blue-600' },
    { id: 2, title: 'UI/UX Design Fundamentals', progress: 40, instructor: 'Mike Chen', nextLesson: 'Today, 4:30 PM', thumbnail: 'bg-gradient-to-br from-purple-400 to-purple-600' },
    { id: 3, title: 'JavaScript Masterclass', progress: 80, instructor: 'Alex Turner', nextLesson: 'Friday, 10:00 AM', thumbnail: 'bg-gradient-to-br from-green-400 to-green-600' },
  ];

  const upcomingAssignments = [
    { id: 1, title: 'React Component Project', course: 'Advanced React', dueDate: 'Due in 2 days', priority: 'high' },
    { id: 2, title: 'Design System Presentation', course: 'UI/UX Design', dueDate: 'Due in 5 days', priority: 'medium' },
    { id: 3, title: 'JavaScript Quiz', course: 'JS Masterclass', dueDate: 'Due in 1 week', priority: 'low' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background pb-24">
      {/* Top Bar */}
      <div className="border-b border-border bg-card/50 backdrop-blur-md sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-foreground">Alex Johnson</h2>
                <p className="text-xs text-muted-foreground">Student ID: #2024-1156</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>
              <Button className="hidden sm:flex bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground">
                <Users className="w-4 h-4 mr-2" />
                Become a Teacher
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Welcome back! 👋</h1>
          <p className="text-muted-foreground">Continue your learning journey and achieve your goals</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.label} className="p-4 sm:p-6 border-0 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 bg-card">
              <div className="flex flex-col gap-3">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Active Courses */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">Continue Learning</h2>
              <Button variant="ghost" className="text-primary text-sm">View All</Button>
            </div>
            
            <div className="space-y-4">
              {activeCourses.map((course) => (
                <Card key={course.id} className="p-4 sm:p-6 border-0 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 bg-card">
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <div className={`w-full sm:w-24 h-32 sm:h-24 rounded-2xl ${course.thumbnail} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <PlayCircle className="w-10 h-10 text-white" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-3">
                        <div className="flex-1">
                          <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1">{course.title}</h3>
                          <p className="text-xs sm:text-sm text-muted-foreground">by {course.instructor}</p>
                        </div>
                        <Button size="sm" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-md">
                          Continue
                        </Button>
                      </div>
                      
                      <div className="mt-3 sm:mt-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs sm:text-sm text-muted-foreground">Progress</span>
                          <Badge variant="secondary" className="text-xs font-semibold">{course.progress}%</Badge>
                        </div>
                        <Progress value={course.progress} className="h-2.5" />
                      </div>
                      
                      <div className="flex items-center mt-3 text-xs sm:text-sm text-muted-foreground">
                        <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2" />
                        Next: {course.nextLesson}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 sm:space-y-8">
            {/* Upcoming Assignments */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Upcoming Deadlines</h2>
              <Card className="p-4 sm:p-6 border-0 shadow-md bg-card">
                <div className="space-y-4">
                  {upcomingAssignments.map((assignment) => (
                    <div key={assignment.id} className="pb-4 border-b border-border last:border-0 last:pb-0">
                      <div className="flex items-start justify-between mb-2 gap-2">
                        <h3 className="font-semibold text-foreground text-sm flex-1">{assignment.title}</h3>
                        <Badge variant={assignment.priority === 'high' ? 'destructive' : 'secondary'} className="text-xs capitalize">
                          {assignment.priority}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-1.5">{assignment.course}</p>
                      <p className="text-xs text-muted-foreground flex items-center">
                        <Clock className="w-3 h-3 mr-1.5" />
                        {assignment.dueDate}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Quick Actions */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Quick Actions</h2>
              <Card className="p-4 sm:p-6 border-0 shadow-md bg-card">
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="h-auto py-4 flex-col gap-2 border-2 hover:border-primary hover:bg-primary/5">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <span className="text-xs font-medium">Browse</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-4 flex-col gap-2 border-2 hover:border-primary hover:bg-primary/5">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="text-xs font-medium">Certificates</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-4 flex-col gap-2 border-2 hover:border-primary hover:bg-primary/5">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-xs font-medium">Assignments</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-4 flex-col gap-2 border-2 hover:border-primary hover:bg-primary/5">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-xs font-medium">Schedule</span>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-border bg-card/95 backdrop-blur-xl shadow-2xl">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex justify-around items-center h-20">
            {bottomNavItems.map((item) => (
              <button
                key={item.id}
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
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;