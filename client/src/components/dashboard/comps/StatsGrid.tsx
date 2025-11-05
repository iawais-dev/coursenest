import { Award, BookOpen, Clock, FileQuestion, TrendingUp, Users } from 'lucide-react';
import React from 'react'
import { Card } from '../../ui/card';


  const studentStats = [
    { label: 'Courses Enrolled', value: '8', icon: BookOpen, color: 'from-primary/20 to-primary/10' },
    { label: 'Hours Learned', value: '124', icon: Clock, color: 'from-secondary/20 to-secondary/10' },
    { label: 'Current Streak', value: '12 days', icon: TrendingUp, color: 'from-orange-500/20 to-orange-500/10' },
  ];

   const teacherStats = [
    { label: 'Courses Created', value: '5', icon: BookOpen, color: 'from-primary/20 to-primary/10' },
    { label: 'Total Students', value: '142', icon: Users, color: 'from-green-500/20 to-green-500/10' },
    { label: 'Quizzes Published', value: '18', icon: FileQuestion, color: 'from-purple-500/20 to-purple-500/10' }
  ]

function StatsGrid({role = 'teacher'}) {

  const stats = role === 'student' ? studentStats : teacherStats
  return (
       <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 mb-8">
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
  )
}

export default StatsGrid