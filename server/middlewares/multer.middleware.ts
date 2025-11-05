import multer from "multer";
import path from "path";


const courseStorage = multer.diskStorage({
    destination(req, file, callback) {
        callback(null,'uploads/thumbnails/courses')
    },
    filename(req, file, callback) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random()*1e9)
        const ext = path.extname(file.originalname)
        callback(null, file.fieldname +'-'+ uniqueSuffix + ext )
    },
})

const lectureStorage = multer.diskStorage({
    destination(req, file, callback) {
        callback(null,'uploads/thumbnails/lectures')
    },
    filename(req, file, callback) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random()*1e9)
        const ext = path.extname(file.originalname)
        callback(null, file.fieldname +'-'+ uniqueSuffix + ext )
    },
})

const videoStorage = multer.diskStorage({
    destination(req, file, callback) {
        callback(null,'uploads/videos')
    },
    filename(req, file, callback) {
        const uniqueSuffix = Date.now() +'-'+ Math.round(Math.random()*1e9)
        const ext = path.extname(file.originalname)
        callback(null,file.fieldname +'-'+ uniqueSuffix + ext)
    },
})


const fileFilter = (req: any, file: Express.Multer.File, cb: multer.FileFilterCallback)=>{
    const allowdTypes = ['image/png', 'image/jpeg', 'image/webp']

    if(allowdTypes.includes(file.mimetype))
        cb(null,true)
    else 
        cb(new Error('Only .jpeg, .png, .webp files allowed!'))
}


export const courseThumbnailUpload = multer({ storage:courseStorage,fileFilter})
export const lectureThumbnailUpload = multer({ storage:lectureStorage,fileFilter})