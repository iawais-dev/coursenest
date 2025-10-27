import mongoose from "mongoose";


const databaseConnection = async ()=>{
try {
   await mongoose.connect(`${process.env.MONGODB_URI}/coursenest`)
   console.log("mongodb connected!")
} catch (error) {
    console.error(error)
}
}

export default databaseConnection