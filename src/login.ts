import { Request, Response } from 'express';

interface LoginData {
  username: string;
  password: string;
}

// 模擬驗證邏輯
export const handleLogin = (req: Request, res: Response): void => {
  const { username, password }: LoginData = req.body;

  if (!username || !password) {
    res.status(400).json({ error: 'Username and password are required' });
    return;
  }

  // 模擬驗證邏輯
  if (username === 'admin' && password === 'password') {
    res.json({ message: 'Login successful', token: '123456' });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
};