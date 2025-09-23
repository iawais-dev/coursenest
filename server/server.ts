import express from 'express'
import databaseConnection from './config/db.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'

//routes
import user_route from './routes/user.route.js'


dotenv.config()

const port = 10000
const app = express()

app.use(cors({
    origin:'http://localhost:3000',
    credentials:true
}))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

databaseConnection()


app.use('/api/user',user_route)

app.get('/',(req,res)=>(
    res.send("hello testing asdsthe ts with node")
))
app.get('/hi',(req,res)=>(
    res.send("hi testing the ts with node")
))

app.listen(port,()=>console.log(`listening on port 10000`))

console.log("hello world")