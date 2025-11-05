import express from 'express'
import { newCourse } from '../controllers/course/newCourse.js'
import { allCourses } from '../controllers/course/allCourses.js'
import { deleteCourse } from '../controllers/course/deleteCourse.js'
import { updateCourse } from '../controllers/course/updateCourse.js'
import { courseThumbnailUpload, lectureThumbnailUpload } from '../middlewares/multer.middleware.js'
import { tokenVerify } from '../middlewares/tokenVerify.js'
import { allLectures } from '../controllers/lecture/allLectures.js'
import { newLecture } from '../controllers/lecture/newLecture.js'


const router = express.Router()


router.post('/', courseThumbnailUpload.single('thumbnail') , tokenVerify ,newCourse)
router.get('/',allCourses)
router.delete('/:id',deleteCourse)
router.put('/:id',updateCourse)



// lecture routes

router.get('/:id/lectures', tokenVerify ,allLectures)
router.post('/:id/lectures',lectureThumbnailUpload.single('thumbnail'),tokenVerify,newLecture)




export default router