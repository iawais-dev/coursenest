import mongoose, { Document } from "mongoose";
type UserModelType = {
    username: string;
    email: string;
    password: string;
    role: 'student' | 'teacher';
};
interface UserDocument extends UserModelType, Document {
}
export declare const UserModel: mongoose.Model<UserDocument, {}, {}, {}, mongoose.Document<unknown, {}, UserDocument, {}, {}> & UserDocument & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export {};
//# sourceMappingURL=user.model.d.ts.map