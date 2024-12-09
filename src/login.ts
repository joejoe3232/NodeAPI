import { WebSocket } from 'ws';

interface LoginData {
  username: string;
  password: string;
}

// 處理登錄邏輯的函數
export const handleLogin = (ws: WebSocket, message: string): void => {
  try {
    // 使用 URLSearchParams 解析 URL 查詢參數
    const params = new URLSearchParams(message);

    const username = params.get('username');
    const password = params.get('password');

    if (!username || !password) {
      ws.send(JSON.stringify({ type: 'error', message: 'Username and password are required' }));
      return;
    }

    // 模擬驗證邏輯
    if (username === 'admin' && password === 'password') {
      ws.send(JSON.stringify({ type: 'success', message: 'Login successful', token: '123456' }));
    } else {
      ws.send(JSON.stringify({ type: 'error', message: 'Invalid credentials' }));
    }
  } catch (error) {
    ws.send(JSON.stringify({ type: 'error', message: 'Invalid message format' }));
  }
};