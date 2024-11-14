"use strict";
// test.ts
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
const axios_1 = __importDefault(require("axios"));
const API_URL = 'http://localhost:3000/compute'; // 高併發測試端點
const REQUESTS = 100; // 並發請求數量
// 發送請求的函數
const sendRequest = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(API_URL);
        console.log(`Request ${id}:`, response.data);
    }
    catch (error) {
        console.error(`Request ${id} failed:`, error);
    }
});
// 執行高併發測試
const runTest = () => __awaiter(void 0, void 0, void 0, function* () {
    const promises = [];
    for (let i = 0; i < REQUESTS; i++) {
        promises.push(sendRequest(i + 1));
    }
    yield Promise.all(promises);
    console.log('All requests completed');
});
runTest().catch((error) => console.error('Test failed:', error));
