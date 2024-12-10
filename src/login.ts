import { WebSocket } from 'ws';

// interface LoginData {
//   username: string;
//   password: string;
// }

// 處理登錄邏輯的函數
export const handleLogin = (ws: WebSocket, message: string): void => {
  try {
    //const data: LoginData = JSON.parse(message);

    // 使用 URLSearchParams 解析 URL 查詢參數
    const params = new URLSearchParams(message);

    const username = params.get('Userid');
    const nCreateTime = params.get('nCreateTime');
    const Token = params.get('Token');
    const Gameid = params.get('Gameid');
    const UIP = params.get('UIP');

    //驗證參數不得為空
    if (!username) {
      ws.send(JSON.stringify({ type: 'error', message: 'Username are required' }));
      return;
    }else if(!nCreateTime) {
      ws.send(JSON.stringify({ type: 'error', message: 'nCreateTime are required' }));
      return;
    }else if(!Token) {
      ws.send(JSON.stringify({ type: 'error', message: 'Token are required' }));
      return;
    }else if(!Gameid) {
      ws.send(JSON.stringify({ type: 'error', message: 'Gameid are required' }));
      return;
    }else if(!UIP) {
      ws.send(JSON.stringify({ type: 'error', message: 'UIP are required' }));
      return;
    }

    // 模擬驗證邏輯
    if (username === 'wideitel') {

      //回傳資料101
      let _data = {"BalanceAmount":157959000,"Level":271.9,"Http400Port":8092,"Http500Port":8093,
      "TotalTurnOver":27185900,"Daimonds":665,"success":true,"Message":null,"BGM_URL":"","BGP_URL":"",
      "Banner_URL":"","Banner_Redirect":"","ChatRoom":0,"nCreateTime":nCreateTime,"Token":Token};
      ws.send('101 ' + JSON.stringify(_data));

    } else {

      ws.send('900 ' + JSON.stringify({ type: 'error', message: 'Invalid credentials' }));

    }
  } catch (error) {

    ws.send('900 ' + JSON.stringify({ type: 'error', message: 'Invalid message format' }));
    
  }
};