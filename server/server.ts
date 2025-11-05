import express from 'express'
import databaseConnection from './config/db.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'

//routes
import userRoutes from './routes/user.route.js'
import courseRoutes from './routes/course.route.js'
import path from 'path'
// import lectureRoutes from './routes/lecture.route.js'


dotenv.config()

const port = 10000
const app = express()

console.log("Loaded URI:", process.env.MONGODB_URI);



app.use(cors({
    origin:'http://localhost:3000',
    credentials:true
}))
app.use('/uploads',express.static(path.join(process.cwd(),'uploads')))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

databaseConnection()


app.use('/api/user',userRoutes)
app.use('/api/course',courseRoutes)
// app.use('/api/lecture',lectureRoutes)

app.get('/',(req,res)=>(
    res.send("hello testing asdsthe ts with node")
))
app.get('/hi',(req,res)=>(
    res.send("hi testing the ts with node")
))

app.listen(port,()=>console.log(`listening on port 10000`))

console.log("hello world")