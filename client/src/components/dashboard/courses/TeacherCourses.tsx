import ContainerLayout from '@/components/layout/ContainerLayout';
import CourseCard, { Course } from './CourseCard';

const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Advanced React Development',
    description: 'Master modern React patterns, hooks, and best practices for building scalable applications.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
    students: 1243,
    lessons: 48,
    progress: 85,
    category: 'Development'
  },
  {
    id: '2',
    title: 'UI/UX Design Fundamentals',
    description: 'Learn the principles of user interface and user experience design from scratch.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    students: 892,
    lessons: 32,
    progress: 100,
    category: 'Design'
  },
  {
    id: '3',
    title: 'TypeScript Mastery',
    description: 'Deep dive into TypeScript features and learn to write type-safe applications.',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80',
    students: 2156,
    lessons: 56,
    progress: 65,
    category: 'Development'
  },
  {
    id: '4',
    title: 'Modern CSS & Tailwind',
    description: 'Master CSS Grid, Flexbox, and Tailwind CSS for beautiful responsive designs.',
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80',
    students: 1567,
    lessons: 40,
    progress: 92,
    category: 'Design'
  },
  {
    id: '5',
    title: 'Node.js Backend Development',
    description: 'Build robust backend APIs with Node.js, Express, and modern database solutions.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    students: 934,
    lessons: 44,
    progress: 78,
    category: 'Backend'
  },
  {
    id: '6',
    title: 'Mobile App Development',
    description: 'Create cross-platform mobile applications with React Native and modern tools.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    students: 756,
    lessons: 52,
    progress: 45,
    category: 'Mobile'
  }
];

function TeacherCourse() {
  return (
    <div className="min-h-screen bg-background">
      <ContainerLayout>
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-extrabold text-foreground md:text-6xl">
            Your Courses
          </h1>
          <p className="text-lg text-muted-foreground">
            Manage and track your teaching portfolio
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-20">
          {mockCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </ContainerLayout>
    </div>
  );
}

export default TeacherCourse;
