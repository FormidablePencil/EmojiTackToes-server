"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const login = express_1.default.Router();
const UserModel_1 = __importDefault(require("../../Models/UserModel"));
const types_1 = require("../../types");
login.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { password, username, email } = req.body;
    const user = yield UserModel_1.default.findOne({ username });
    if (user)
        res.status(201).send({ message: types_1.serverResponses });
}));
exports.default = login;
//# sourceMappingURL=login.js.map