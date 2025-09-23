import mongoose from "mongoose";
const databaseConnection = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log("mongodb connected!");
    }
    catch (error) {
        console.error(error);
    }
};
export default databaseConnection;
//# sourceMappingURL=db.js.map