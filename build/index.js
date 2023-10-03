"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const options = { origin: "*" };
const app = (0, express_1.default)();
const port = 3001;
app.use((0, cors_1.default)(options));
app.get("/", (req, res) => {
    res.send("<h1>Testing the FCM Endpoint on Typescript</h1>");
});
app.listen(port, () => {
    console.log("Application listening on port" + port);
});
