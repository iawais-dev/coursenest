import React from 'react'
import { Button } from '../../ui/button';
import { Card } from '../../ui/card';
import { Badge, Calendar, PlayCircle } from 'lucide-react';
import { Progress } from '../../ui/progress';
// import { Progress } from '@radix-ui/react-progress';

function ActiveCourses() {
    const activeCourses = [
    { id: 1, title: 'Advanced React Patterns', progress: 65, instructor: 'Sarah Johnson', nextLesson: 'Tomorrow, 2:00 PM', thumbnail: 'bg-gradient-to-br from-blue-400 to-blue-600' },
    { id: 2, title: 'UI/UX Design Fundamentals', progress: 40, instructor: 'Mike Chen', nextLesson: 'Today, 4:30 PM', thumbnail: 'bg-gradient-to-br from-purple-400 to-purple-600' },
    { id: 3, title: 'JavaScript Masterclass', progress: 80, instructor: 'Alex Turner', nextLesson: 'Friday, 10:00 AM', thumbnail: 'bg-gradient-to-br from-green-400 to-green-600' },
  ];
  return (
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
                              <Badge fontVariant="secondary" className="text-xs font-semibold">{course.progress}%</Badge>
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
    
  )
}

export default ActiveCourses