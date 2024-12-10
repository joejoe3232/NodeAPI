import { WebSocket } from 'ws';

// 處理大廳資訊的函數
export const handleTakeASeat = (ws: WebSocket, message: string): void => {
    try {
        //const data: LoginData = JSON.parse(message);

        // 使用 URLSearchParams 解析 URL 查詢參數
        const params = new URLSearchParams(message);

        const username = params.get('Userid');
        const Gameid = params.get('Gameid');
        const nCreateTime = params.get('nCreateTime');
        const Token = params.get('Token');
        const Hall = params.get('Hall');
        const Balance = params.get('Balance');
        const Table = params.get('Table');
        const Seat = params.get('Seat');
        const Daimonds = params.get('Daimonds');
        const Level = params.get('Level');
        const Turnover = params.get('Turnover');
        

        //驗證參數不得為空
        let msg:string = "";
        if (!username) {
            msg = 'Username are required';
            return;
        }else if(!nCreateTime) {
            msg = 'nCreateTime are required';
            return;
        }else if(!Token) {
            msg = 'Token are required';
            return;
        }else if(!Gameid) {
            msg = 'Gameid are required';
            return;
        }else if(!Table) {
            msg = 'Table are required';
            return;
        }else if(!Hall) {
            msg = 'Hall are required';
            return;
        }else if(!Balance) {
            msg = 'Balance are required';
            return;
        }

        if(msg !== ""){
            ws.send(JSON.stringify({ type: 'error', message: msg }));
        }

        //回傳資料361
        let _data = {"success":true,"hall":1,"table":2,"seat":1,"gamestate":3,"user1":"wideitel","user2":"","user3":"","user4":"","gun1":1,"gun2":1,"gun3":1,"gun4":1,"balance1":157959000,"balance2":0,"balance3":0,"balance4":0,"daimonds1":665,"daimonds2":0,"daimonds3":0,"daimonds4":0,"level1":271,"level2":0,"level3":0,"level4":0,"needwait":0};
        ws.send('361 ' + JSON.stringify(_data));

    } catch (error) {
        ws.send('900 ' + JSON.stringify({ type: 'error', message: 'Invalid message format' }));
    }
};