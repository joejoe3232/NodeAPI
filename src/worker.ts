// worker.ts - 計算任務的 Worker
import { parentPort } from 'worker_threads';

parentPort?.on('message', (data) => {
  const { operation, a, b } = data;
  let result;

  switch (operation) {
    case 'add':
      result = a + b;
      break;
    case 'subtract':
      result = a - b;
      break;
    case 'multiply':
      result = a * b;
      break;
    case 'divide':
      if (b === 0) {
        parentPort?.postMessage({ error: 'Cannot divide by zero' });
        return;
      }
      result = a / b;
      break;
    default:
      parentPort?.postMessage({ error: 'Invalid operation' });
      return;
  }

  // 回傳結果給父線程（主線程）
  parentPort?.postMessage({ result });
});
