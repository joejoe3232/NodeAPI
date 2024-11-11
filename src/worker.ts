// worker.ts - 計算任務的 Worker
import { parentPort } from 'worker_threads';

parentPort?.on('message', (data) => {
  const { operation, params } = data;
  let result;

  switch (operation) {
    case 'login':

      result = 
           {"Result":{
               "AutoReserve":0,
               "BalanceAmount":"595444.00000",
               "Daimonds":18921,
               "Get_Hall_Detail":5,
               "Get_Jackpot":10,
               "Get_Level":60,
               "Get_New_Token":30000000,
               "Get_Prize_Show":30,
               "Get_Rolling_Text":120,
               "Level":1.3,
               "LowAction":0,
               "Quit":null,
               "TotalTurnOver":"133360.0000",
               "hall_1_bet":10,
               "hall_2_bet":5,
               "hall_3_bet":2,
               "last_gameID":"1",
               "last_hall":"3",
               "last_machine":"1",
               "BGM_URL":"",
               "BGP_URL":"",
               "ChatRoom":0

           },
           "success":true,"Message":null};

      break;
    case 'subtract':
      
      break;
    case 'multiply':
      
      break;
    case 'divide':
      // if (b === 0) {
      //   parentPort?.postMessage({ error: 'Cannot divide by zero' });
      //   return;
      // }
      // result = a / b;
      break;
    default:
      parentPort?.postMessage({ error: 'Invalid operation' });
      return;
  }

  // 回傳結果給父線程（主線程）
  parentPort?.postMessage({ result });
});
