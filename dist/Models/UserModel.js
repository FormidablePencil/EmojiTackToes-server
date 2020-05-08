"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
// ! why we clutter the router wiith if statements when use model a type similarly the same as TypeScript.
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    }
});
const UserModel = mongoose_1.default.model('user', UserSchema);
exports.default = UserModel;
//# sourceMappingURL=UserModel.js.map