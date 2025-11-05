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

// const lectureStorage = multer.diskStorage({
//     destination(req, file, callback) {
//         callback(null,'uploads/thumbnails/lectures')
//     },
//     filename(req, file, callback) {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random()*1e9)
//         const ext = path.extname(file.originalname)
//         callback(null, file.fieldname +'-'+ uniqueSuffix + ext )
//     },
// })

// const videoStorage = multer.diskStorage({
//     destination(req, file, callback) {
//         callback(null,'uploads/videos')
//     },
//     filename(req, file, callback) {
//         const uniqueSuffix = Date.now() +'-'+ Math.round(Math.random()*1e9)
//         const ext = path.extname(file.originalname)
//         callback(null,file.fieldname +'-'+ uniqueSuffix + ext)
//     },
// })

const lectureStorage = multer.diskStorage({
    destination(req, file, callback) {
        if(file.fieldname === 'thumbnail')
            callback(null,'uploads/thumbnails/lectures')
        else if(file.fieldname === 'videoUrl')
            callback(null,'uploads/videos')
    },
    filename(req, file, callback) {
        const uniqueSuffix = Date.now() +'-'+ Math.round(Math.random()*1e9)
        const ext = path.extname(file.originalname)
        callback(null,file.fieldname +'-'+ uniqueSuffix + ext)
    },

})

const lectureFilter = (req:any, file:Express.Multer.File, cb:multer.FileFilterCallback)=>{
    const allowdTypes = file.fieldname === 'videoUrl' ? ['video/mp4', 'video/webm', 'video/ogg'] : ['image/png', 'image/jpeg', 'image/webp']

    if(allowdTypes.includes(file.mimetype))
        cb(null,true)
    else
        cb(new Error(file.fieldname === 'videoUrl' ? 'only .mp4 is allowed!' : 'Only .jpeg, .png, .webp files allowed!'))
}


const fileFilter = (req: any, file: Express.Multer.File, cb: multer.FileFilterCallback)=>{
    const allowdTypes = ['image/png', 'image/jpeg', 'image/webp']

    if(allowdTypes.includes(file.mimetype))
        cb(null,true)
    else 
        cb(new Error('Only .jpeg, .png, .webp files allowed!'))
}


export const courseThumbnailUpload = multer({ storage:courseStorage,fileFilter})
// export const lectureThumbnailUpload = multer({ storage:lectureStorage,fileFilter})
// export const videoUpload = multer({storage:videoStorage, fileFilter:videoFilter})
export const lectureUpload = multer({storage:lectureStorage, fileFilter: lectureFilter})