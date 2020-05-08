"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const port = 4003;
require("dotenv/config");
const login_1 = __importDefault(require("./routes/authentication/login"));
const server = express_1.default();
server.use(cors_1.default());
server.use(express_1.default.json());
server.use('/', login_1.default);
// mongoose.set('useCreateIndex', true);
// mongoose.connect(process.env.USERR, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('connected to db'))
mongoose_1.default.connect(process.env.USERR, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('connected to db'));
mongoose_1.default.connection
    .once('open', () => console.log('connection to mongoDb succesful'))
    .on('error', (err) => {
    console.log(err, 'err in connecting to mongoDb');
});
server.listen(port, () => {
    console.log(`server at ${port}`);
});
//# sourceMappingURL=server.js.map