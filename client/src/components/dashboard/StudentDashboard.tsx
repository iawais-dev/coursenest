// 'use client'
// import React, { useState } from 'react';
// import { BookOpen, Clock, Award, TrendingUp, PlayCircle, CheckCircle, Calendar, Users, Home, FileQuestion, User, GraduationCap, Bell } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Card } from '@/components/ui/card';
// import { Progress } from '@/components/ui/progress';
// import { Badge } from '@/components/ui/badge';

// const StudentDashboard = () => {

//   const activeCourses = [
//     { id: 1, title: 'Advanced React Patterns', progress: 65, instructor: 'Sarah Johnson', nextLesson: 'Tomorrow, 2:00 PM', thumbnail: 'bg-gradient-to-br from-blue-400 to-blue-600' },
//     { id: 2, title: 'UI/UX Design Fundamentals', progress: 40, instructor: 'Mike Chen', nextLesson: 'Today, 4:30 PM', thumbnail: 'bg-gradient-to-br from-purple-400 to-purple-600' },
//     { id: 3, title: 'JavaScript Masterclass', progress: 80, instructor: 'Alex Turner', nextLesson: 'Friday, 10:00 AM', thumbnail: 'bg-gradient-to-br from-green-400 to-green-600' },
//   ];

//   const upcomingAssignments = [
//     { id: 1, title: 'React Component Project', course: 'Advanced React', dueDate: 'Due in 2 days', priority: 'high' },
//     { id: 2, title: 'Design System Presentation', course: 'UI/UX Design', dueDate: 'Due in 5 days', priority: 'medium' },
//     { id: 3, title: 'JavaScript Quiz', course: 'JS Masterclass', dueDate: 'Due in 1 week', priority: 'low' },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background pb-24">
      

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
//         {/* Welcome Section */}
//         <div className="mb-8">
//           <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Welcome back! 👋</h1>
//           <p className="text-muted-foreground">Continue your learning journey and achieve your goals</p>
//         </div>


//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Active Courses */}
//           <div className="lg:col-span-2">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-xl sm:text-2xl font-bold text-foreground">Continue Learning</h2>
//               <Button variant="ghost" className="text-primary text-sm">View All</Button>
//             </div>
            
//             <div className="space-y-4">
//               {activeCourses.map((course) => (
//                 <Card key={course.id} className="p-4 sm:p-6 border-0 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 bg-card">
//                   <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
//                     <div className={`w-full sm:w-24 h-32 sm:h-24 rounded-2xl ${course.thumbnail} flex items-center justify-center flex-shrink-0 shadow-lg`}>
//                       <PlayCircle className="w-10 h-10 text-white" />
//                     </div>
                    
//                     <div className="flex-1 min-w-0">
//                       <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-3">
//                         <div className="flex-1">
//                           <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1">{course.title}</h3>
//                           <p className="text-xs sm:text-sm text-muted-foreground">by {course.instructor}</p>
//                         </div>
//                         <Button size="sm" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-md">
//                           Continue
//                         </Button>
//                       </div>
                      
//                       <div className="mt-3 sm:mt-4">
//                         <div className="flex justify-between items-center mb-2">
//                           <span className="text-xs sm:text-sm text-muted-foreground">Progress</span>
//                           <Badge variant="secondary" className="text-xs font-semibold">{course.progress}%</Badge>
//                         </div>
//                         <Progress value={course.progress} className="h-2.5" />
//                       </div>
                      
//                       <div className="flex items-center mt-3 text-xs sm:text-sm text-muted-foreground">
//                         <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2" />
//                         Next: {course.nextLesson}
//                       </div>
//                     </div>
//                   </div>
//                 </Card>
//               ))}
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-6 sm:space-y-8">
//             {/* Upcoming Assignments */}
//             <div>
//               <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Upcoming Deadlines</h2>
//               <Card className="p-4 sm:p-6 border-0 shadow-md bg-card">
//                 <div className="space-y-4">
//                   {upcomingAssignments.map((assignment) => (
//                     <div key={assignment.id} className="pb-4 border-b border-border last:border-0 last:pb-0">
//                       <div className="flex items-start justify-between mb-2 gap-2">
//                         <h3 className="font-semibold text-foreground text-sm flex-1">{assignment.title}</h3>
//                         <Badge variant={assignment.priority === 'high' ? 'destructive' : 'secondary'} className="text-xs capitalize">
//                           {assignment.priority}
//                         </Badge>
//                       </div>
//                       <p className="text-xs text-muted-foreground mb-1.5">{assignment.course}</p>
//                       <p className="text-xs text-muted-foreground flex items-center">
//                         <Clock className="w-3 h-3 mr-1.5" />
//                         {assignment.dueDate}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </Card>
//             </div>

//             {/* Quick Actions */}
//             <div>
//               <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Quick Actions</h2>
//               <Card className="p-4 sm:p-6 border-0 shadow-md bg-card">
//                 <div className="grid grid-cols-2 gap-3">
//                   <Button variant="outline" className="h-auto py-4 flex-col gap-2 border-2 hover:border-primary hover:bg-primary/5">
//                     <BookOpen className="w-5 h-5 text-primary" />
//                     <span className="text-xs font-medium">Browse</span>
//                   </Button>
//                   <Button variant="outline" className="h-auto py-4 flex-col gap-2 border-2 hover:border-primary hover:bg-primary/5">
//                     <Award className="w-5 h-5 text-primary" />
//                     <span className="text-xs font-medium">Certificates</span>
//                   </Button>
//                   <Button variant="outline" className="h-auto py-4 flex-col gap-2 border-2 hover:border-primary hover:bg-primary/5">
//                     <CheckCircle className="w-5 h-5 text-primary" />
//                     <span className="text-xs font-medium">Assignments</span>
//                   </Button>
//                   <Button variant="outline" className="h-auto py-4 flex-col gap-2 border-2 hover:border-primary hover:bg-primary/5">
//                     <Calendar className="w-5 h-5 text-primary" />
//                     <span className="text-xs font-medium">Schedule</span>
//                   </Button>
//                 </div>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </div>


//     </div>
//   );
// };

// export default StudentDashboard;


import React from 'react'
import TopBar from './comps/TopBar'
import StatsGrid from './comps/StatsGrid'
import ActiveCourses from './comps/ActiveCourses'
import BottomNav from './comps/BottomNav'

function StudentDashboard() {
  return (
    <div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8'>
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Welcome back! 👋</h1>
          <p className="text-muted-foreground">Continue your learning journey and achieve your goals</p>
        </div>
        <StatsGrid />
        <ActiveCourses />
        <BottomNav />
    </div>
    </div>
  )
}

export default StudentDashboard