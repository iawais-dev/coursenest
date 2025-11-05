import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, BookOpen, BarChart } from 'lucide-react';

export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  students: number;
  lessons: number;
  progress: number;
  category: string;
}

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] bg-gradient-to-br from-card to-card border-border">
      <div className="aspect-video w-full overflow-hidden bg-muted">
        <img 
          src={course.image} 
          alt={course.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-xl font-bold text-foreground line-clamp-1">
            {course.title}
          </CardTitle>
          <Badge variant="secondary" className="shrink-0">
            {course.category}
          </Badge>
        </div>
        <CardDescription className="line-clamp-2">
          {course.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center gap-1">
            <Users className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">{course.students}</span>
            <span className="text-xs text-muted-foreground">Students</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <BookOpen className="h-4 w-4 text-accent" />
            <span className="text-sm font-semibold text-foreground">{course.lessons}</span>
            <span className="text-xs text-muted-foreground">Lessons</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <BarChart className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">{course.progress}%</span>
            <span className="text-xs text-muted-foreground">Complete</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
