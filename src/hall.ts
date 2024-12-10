import { WebSocket } from 'ws';

// 處理大廳資訊的函數
export const handleHall = (ws: WebSocket, message: string): void => {
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

        //回傳資料161
        let _data = {
            "hall1":{"minbalanceneed":100000,"totalminbet":1000,"totalmaxbet":100000,"chip1":1000,"chip2":5000,"chip3":10000,"chip4":50000,"chip5":100000},
            "hall2":{"minbalanceneed":50000,"totalminbet":500,"totalmaxbet":50000,"chip1":500,"chip2":1000,"chip3":5000,"chip4":10000,"chip5":50000},
            "hall3":{"minbalanceneed":10000,"totalminbet":100,"totalmaxbet":10000,"chip1":100,"chip2":500,"chip3":1000,"chip4":5000,"chip5":10000}
        };
        ws.send('161 ' + JSON.stringify(_data));
        
    } catch (error) {
        ws.send('900 ' + JSON.stringify({ type: 'error', message: 'Invalid message format' }));
    }
};