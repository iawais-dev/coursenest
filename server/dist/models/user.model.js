import mongoose, { Document } from "mongoose";
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['student', 'teacher'],
        default: "student"
    }
});
export const UserModel = mongoose.model('UserModel', UserSchema);
//# sourceMappingURL=user.model.js.map