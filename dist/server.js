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
const worker_threads_1 = require("worker_threads");
// 初始化 Express 應用程式
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// 中介軟體設置，使用 JSON 格式
app.use(express_1.default.json());
// 函數來創建 Worker 並處理運算
function runWorker(operation, params) {
    return new Promise((resolve, reject) => {
        const worker = new worker_threads_1.Worker('./worker.ts');
        worker.postMessage({ operation, params });
        worker.on('message', (message) => {
            if (message.error) {
                reject(message.error);
            }
            else {
                resolve(message.result);
            }
        });
        worker.on('error', (error) => {
            reject(error);
        });
        worker.on('exit', (code) => {
            if (code !== 0) {
                reject(new Error(`Worker stopped with exit code ${code}`));
            }
        });
    });
}
// API 1: 登入
app.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Uid, GameID, Time, Token } = req.body;
    if (typeof Uid !== 'string' || typeof GameID !== 'string' || typeof Time !== 'string' || typeof Token !== 'string') {
        res.status(400).send('Must be string');
    }
    try {
        const result = yield runWorker('login', [Uid, GameID, Time, Token]);
        res.json({ result });
    }
    catch (error) {
        res.status(500).send(error);
        if (isError(error)) {
            res.status(500).send(error.message);
        }
        else {
            console.error('發生了未知的錯誤');
        }
    }
}));
// API 2: 大廳
app.post('/Hall', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Uid, GameID, Time, Token } = req.body;
    if (typeof Uid !== 'string' || typeof GameID !== 'string' || typeof Time !== 'string' || typeof Token !== 'string') {
        res.status(400).send('Must be string');
    }
    try {
        const result = yield runWorker('Hall', [Uid, GameID, Time, Token]);
        res.json({ result });
    }
    catch (error) {
        res.status(500).send(error);
        if (isError(error)) {
            res.status(500).send(error.message);
        }
        else {
            console.error('發生了未知的錯誤');
        }
    }
}));
// API 3: Jackpot
app.post('/Jackpot', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Uid, GameID, Time, Hall, Token } = req.body;
    if (typeof Uid !== 'string' || typeof GameID !== 'string' || typeof Hall !== 'string' || typeof Time !== 'string' || typeof Token !== 'string') {
        res.status(400).send('must be numbers');
    }
    try {
        const result = yield runWorker('Jackpot', [Uid, GameID, Hall, Time, Token]);
        res.json({ result });
    }
    catch (error) {
        res.status(500).send(error);
        if (isError(error)) {
            res.status(500).send(error.message);
        }
        else {
            console.error('發生了未知的錯誤');
        }
    }
}));
// API 4: Level
app.post('/Level', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { a, b } = req.body;
    if (typeof a !== 'number' || typeof b !== 'number') {
        res.status(400).send('Both a and b must be numbers');
    }
    try {
        const result = yield runWorker('Level', [a, b]);
        res.json({ result });
    }
    catch (error) {
        //res.status(500).send(error.toString());
        res.status(500).send(error);
        if (isError(error)) {
            res.status(500).send(error.message);
        }
        else {
            console.error('發生了未知的錯誤');
        }
    }
}));
// 簡單的路由
app.get('/', (req, res) => {
    res.send('Hello, high concurrency API!');
});
// 高併發測試的示範端點
app.get('/compute', (req, res) => {
    const start = Date.now();
    // 模擬一個計算密集的任務
    while (Date.now() - start < 1000) { } // 停滯1秒
    res.send('Computation finished');
});
// 啟動伺服器
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
function isError(error) {
    return error instanceof Error;
}
