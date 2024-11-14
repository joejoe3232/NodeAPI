// test.ts

import axios from 'axios';

const API_URL = 'http://localhost:3000/compute'; // 高併發測試端點
const REQUESTS = 100; // 並發請求數量

// 發送請求的函數
const sendRequest = async (id: number) => {
  try {
    const response = await axios.get(API_URL);
    console.log(`Request ${id}:`, response.data);
  } catch (error) {
    console.error(`Request ${id} failed:`, error);
  }
};

// 執行高併發測試
const runTest = async () => {
  const promises = [];
  for (let i = 0; i < REQUESTS; i++) {
    promises.push(sendRequest(i + 1));
  }
  await Promise.all(promises);
  console.log('All requests completed');
};

runTest().catch((error) => console.error('Test failed:', error));
