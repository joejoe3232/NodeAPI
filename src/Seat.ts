import { WebSocket } from 'ws';

// 處理大廳資訊的函數
export const handleSeat = (ws: WebSocket, message: string): void => {
    try {
        //const data: LoginData = JSON.parse(message);

        // 使用 URLSearchParams 解析 URL 查詢參數
        const params = new URLSearchParams(message);

        const Hall = params.get('Hall');
        const username = params.get('Userid');
        const nCreateTime = params.get('nCreateTime');
        const Token = params.get('Token');
        const Gameid = params.get('Gameid');
        const UIP = params.get('UIP');
        const Balance = params.get('Balance');

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
        }else if(!Hall) {
            ws.send(JSON.stringify({ type: 'error', message: 'Hall are required' }));
            return;
        }else if(!Balance) {
            ws.send(JSON.stringify({ type: 'error', message: 'Balance are required' }));
            return;
        }

        //回傳資料301
        let _data = {"success":true,"user":["3-1-wideitel","1-1-wideitel123"]};
        ws.send('301 ' + JSON.stringify(_data));

    } catch (error) {
        ws.send('900 ' + JSON.stringify({ type: 'error', message: 'Invalid message format' }));
    }
};