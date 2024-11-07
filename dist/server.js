"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const worker_threads_1 = require("worker_threads");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
// API 端點，接收計算密集型任務
app.post('/compute', (req, res) => {
    const { input } = req.body;
    if (typeof input !== 'number') {
        res.status(400).send('Input must be a number');
    }
    // 創建一個 Worker 來處理計算
    const worker = new worker_threads_1.Worker('./dist/worker.js'); // 使用編譯後的 worker.ts
    worker.postMessage(input);
    worker.on('message', (result) => {
        res.send({ result });
        worker.terminate(); // 計算完成後終止 worker
    });
    worker.on('error', (error) => {
        res.status(500).send({ error: error.message });
        worker.terminate();
    });
    worker.on('exit', (code) => {
        if (code !== 0) {
            console.error(`Worker stopped with exit code ${code}`);
        }
    });
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
