"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const worker_threads_1 = require("worker_threads");
// 模擬一個計算密集型的任務
function heavyComputation(input) {
    let result = 0;
    for (let i = 0; i < input; i++) {
        result += Math.sqrt(i);
    }
    return result;
}
// 監聽來自主線程的消息
worker_threads_1.parentPort === null || worker_threads_1.parentPort === void 0 ? void 0 : worker_threads_1.parentPort.on('message', (input) => {
    const result = heavyComputation(input);
    worker_threads_1.parentPort === null || worker_threads_1.parentPort === void 0 ? void 0 : worker_threads_1.parentPort.postMessage(result); // 發送計算結果回主線程
});
