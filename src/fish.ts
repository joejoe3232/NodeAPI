import { WebSocket } from 'ws';

// 處理大廳資訊的函數
export const handleFish = (ws: WebSocket, message: string): void => {
    try {
        //const data: LoginData = JSON.parse(message);

        // 使用 URLSearchParams 解析 URL 查詢參數
        const params = new URLSearchParams(message);

        const username = params.get('Userid');
        const Gameid = params.get('Gameid');
        const nCreateTime = params.get('nCreateTime');
        const Token = params.get('Token');
        const Hall = params.get('Hall');
        const Table = params.get('Table');
        const Seat = params.get('Seat');
                

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
        }

        if(msg !== ""){
            ws.send(JSON.stringify({ type: 'error', message: msg }));
        }

        //回傳資料999-4000
        let dataGroup:string[] = [];
        dataGroup.push('{"hall":1,"table":3,"fishsn":13169232570131892,"fishtypeid":"I","swimmingspeed":90,"path":["350,409,0.00","400,327,1.10","460,248,2.20","530,184,3.30","620,145,4.40","710,156,5.40","790,207,6.50","860,283,7.60","920,373,8.80","970,464,10.00","1010,547,11.00","1050,641,12.10","1090,743,13.30","1130,847,14.50","1170,951,15.70"],"gamestate":1}');
        dataGroup.push('{"hall":1,"table":3,"fishsn":13169232569541174,"fishtypeid":"J","swimmingspeed":70,"path":["578,54,0.00","618,57,0.60","658,84,1.30","698,136,2.20","718,172,2.80","738,213,3.50","758,261,4.20","778,315,5.00","798,374,5.90","818,441,6.90","838,513,8.00","858,591,9.20","878,675,10.40","898,759,11.60","918,843,12.80","938,927,14.00"],"gamestate":1}');
        dataGroup.push('{"hall":1,"table":3,"fishsn":13169232570132536,"fishtypeid":"I","swimmingspeed":90,"path":["650,569,0.00","700,487,1.10","760,408,2.20","830,344,3.30","920,305,4.40","1010,316,5.40","1090,367,6.50","1160,443,7.60","1220,533,8.80","1270,624,10.00","1310,707,11.00","1350,811,12.20","1390,915,13.40"],"gamestate":1}');
        dataGroup.push('{"hall":1,"table":3,"fishsn":13169232570133972,"fishtypeid":"I","swimmingspeed":90,"path":["50,569,0.00","100,487,1.10","160,408,2.20","230,344,3.30","320,305,4.40","410,316,5.40","490,367,6.50","560,443,7.60","620,533,8.80","670,624,10.00","710,707,11.00","750,801,12.10","790,905,13.30","830,1009,14.50"],"gamestate":1}');
        dataGroup.push('{"hall":1,"table":3,"fishsn":1316923257013475,"fishtypeid":"L","swimmingspeed":90,"path":["650,729,0.00","700,647,1.10","760,568,2.20","830,504,3.30","920,465,4.40","1010,476,5.40","1090,527,6.50","1160,603,7.60","1220,693,8.80","1270,784,10.00","1310,888,11.20","1350,992,12.40"],"gamestate":1}');
        dataGroup.push('{"hall":1,"table":3,"fishsn":13169232569542737,"fishtypeid":"J","swimmingspeed":70,"path":["733,209,0.00","773,212,0.60","813,239,1.30","853,291,2.20","873,327,2.80","893,368,3.50","913,416,4.20","933,470,5.00","953,529,5.90","973,596,6.90","993,668,8.00","1013,746,9.20","1033,830,10.40","1053,914,11.60"],"gamestate":1}');
        dataGroup.push('{"hall":1,"table":3,"fishsn":1316923256954310,"fishtypeid":"J","swimmingspeed":70,"path":["423,209,0.00","463,212,0.60","503,239,1.30","543,291,2.20","563,327,2.80","583,368,3.50","603,416,4.20","623,470,5.00","643,529,5.90","663,596,6.90","683,668,8.00","703,746,9.20","723,830,10.40","743,914,11.60"],"gamestate":1}');
        dataGroup.push('{"hall":1,"table":3,"fishsn":13169232570135830,"fishtypeid":"L","swimmingspeed":90,"path":["50,729,0.00","100,647,1.10","160,568,2.20","230,504,3.30","320,465,4.40","410,476,5.40","490,527,6.50","560,603,7.60","620,693,8.80","670,784,10.00","710,888,11.20","750,992,12.40"],"gamestate":1}');
        dataGroup.push('{"hall":1,"table":3,"fishsn":13169232570136553,"fishtypeid":"L","swimmingspeed":90,"path":["650,884,0.00","700,802,1.10","760,723,2.20","830,659,3.30","920,620,4.40","1010,631,5.40","1090,682,6.50","1160,758,7.60","1200,862,8.80","1240,966,10.00"],"gamestate":1}');
        dataGroup.push('{"hall":1,"table":3,"fishsn":13169232570137299,"fishtypeid":"L","swimmingspeed":90,"path":["50,884,0.00","100,802,1.10","160,723,2.20","230,659,3.30","320,620,4.40","410,631,5.40","490,682,6.50","560,758,7.60","600,862,8.80","640,966,10.00"],"gamestate":1}');
        dataGroup.push('{"hall":1,"table":3,"fishsn":13169232570171999,"fishtypeid":"D","swimmingspeed":65,"path":["80,384,0.00","120,400,0.00","160,410,0.60","200,416,1.20","240,418,1.80","280,415,2.40","320,408,3.00","360,396,3.60","400,380,4.30","440,359,5.00","480,334,5.70","520,304,6.50","560,270,7.30","612,242,8.20","652,251,8.80","692,263,9.40","732,279,10.10","772,299,10.80","812,322,11.50","852,349,12.20","892,380,13.00","932,414,13.80","972,452,14.60","1012,494,15.50","1052,539,16.40","1092,588,17.40","1112,614,17.90","1132,640,18.40","1152,668,18.90","1172,697,19.40","1192,726,19.90","1212,755,20.40","1232,784,20.90","1252,813,21.40","1272,842,21.90","1292,871,22.40","1312,900,22.90","1332,929,23.40","1352,958,23.90","1372,987,24.40","1392,1016,24.90","1412,1045,25.40","1432,1074,25.90","1452,1103,26.40","1472,1132,26.90"],"gamestate":1}');
        dataGroup.push('{"hall":1,"table":3,"fishsn":13169232569544750,"fishtypeid":"H","swimmingspeed":70,"path":["578,364,0.00","618,367,0.60","658,394,1.30","698,446,2.20","718,482,2.80","738,523,3.50","758,571,4.20","778,625,5.00","798,684,5.90","818,751,6.90","838,835,8.10","858,919,9.30","878,1003,10.50","898,1087,11.70"],"gamestate":1}');
        dataGroup.push('{"hall":1,"table":3,"fishsn":1353625261171,"fishtypeid":"D1","swimmingspeed":110,"path":["370,542,0.00","270,475,1.10","180,397,2.20","100,317,3.20","20,237,4.20","-60,157,5.20","-140,77,6.20"],"gamestate":1}');
        dataGroup.push('{"hall":1,"table":3,"fishsn":1348625162210,"fishtypeid":"D2","swimmingspeed":110,"path":["360,161,0.00","260,220,1.10","170,287,2.10","220,372,3.10","300,456,4.20","390,525,5.20","500,572,6.30","610,579,7.30","720,545,8.40","820,480,9.50","900,403,10.50","970,318,11.50","1040,217,12.60","1100,118,13.70","1160,6,14.90","1220,-108,16.10","1280,-222,17.20"],"gamestate":1}');
        dataGroup.push('{"hall":1,"table":3,"fishsn":1318974962900,"fishtypeid":"D3","swimmingspeed":110,"path":["300,205,0.00","190,245,1.10","190,320,2.10","260,406,3.10","340,482,4.10","440,544,5.20","550,569,6.20","660,549,7.20","760,492,8.30","850,409,9.40","920,324,10.40","990,220,11.50","1050,117,12.60","1110,0,13.80","1160,-100,14.80","1210,-200,15.80","1260,-300,16.80"],"gamestate":1}');
        dataGroup.push('{"hall":1,"table":3,"fishsn":13169232568336943,"fishtypeid":"L","swimmingspeed":90,"path":["125,49,0.00","45,-7,1.10","-35,-63,2.20"],"gamestate":1}');
        dataGroup.push('{"hall":1,"table":3,"fishsn":13169155161221656,"fishtypeid":"A","swimmingspeed":60,"path":["980,145,0","1000,103,0.40","1020,60,1.20","1040,14,2.00","1060,-32,2.80","1080,-78,3.60","1100,-124,4.40"],"gamestate":3}');
        dataGroup.push('{"hall":1,"table":3,"fishsn":13169200772072626,"fishtypeid":"B","swimmingspeed":80,"path":["216,537,0.00","176,506,0.60","136,471,1.30","106,442,1.80","76,411,2.30","76,367,2.90","96,303,3.70","116,242,4.50","136,184,5.30","156,130,6.00","176,79,6.70","196,31,7.40","216,-15,8.00","236,-61,8.60","256,-107,9.20","276,-153,9.80","296,-199,10.40","316,-245,11.00","336,-291,11.60","356,-337,12.20","376,-383,12.80","396,-429,13.40"],"gamestate":2}');
        dataGroup.push('{"hall":1,"table":3,"fishsn":13169218044871888,"fishtypeid":"C","path":["572,16,0.0","602,30,0.7","632,44,1.4","662,57,2.1","692,69,2.7","722,81,3.3","752,91,3.9","782,101,4.5","812,109,5.1","842,117,5.7","872,124,6.3","902,131,6.9","932,136,7.5","962,141,8.1","992,144,8.7","1022,147,9.3","1052,149,9.9","1082,150,10.5","1112,151,11.1","1142,150,11.7","1112,231,13.4","1082,304,15.0","1052,370,16.4","1022,429,17.7","992,480,18.9","962,525,20.0","932,562,21.0","902,592,21.8","872,615,22.6","842,630,23.3","812,638,23.9","782,639,24.5","752,633,25.1","722,633,25.7","692,633,26.3","662,631,26.9","632,628,27.5","602,624,28.1","572,618,28.7","542,612,29.3","512,604,29.9","482,596,30.5","452,586,31.1","422,575,31.7","392,563,32.3","362,550,33.0","332,535,33.7","302,520,34.4","272,504,35.1","242,486,35.8","212,467,36.5","182,447,37.2","152,426,37.9","122,404,38.6","92,381,39.4","122,249,42.1","152,138,44.4","182,47,46.3","212,-44,48.2","242,-135,50.0","272,-226,51.9","302,-317,53.8","332,-408,55.7","362,-499,57.6"],"swimmingspeed":50}');
        dataGroup.push('{"hall":1,"table":3,"fishsn":13169232716351689,"fishtypeid":"P3","path":["1275,284,0.0","1260,293,0.3","1245,301,0.6","1230,310,0.9","1215,318,1.2","1200,327,1.5","1185,335,1.8","1170,343,2.1","1155,351,2.4","1140,358,2.7","1125,366,3.0","1110,374,3.3","1095,381,3.6","1080,388,3.9","1065,395,4.2","1050,402,4.5","1035,409,4.8","1020,415,5.0","1005,422,5.3","990,428,5.5","975,434,5.7","960,440,5.9","945,446,6.1","930,452,6.3","915,458,6.5","900,463,6.7","885,469,6.9","870,474,7.1","855,479,7.3","840,484,7.5","825,489,7.7","810,493,7.9","795,498,8.1","780,502,8.3","765,507,8.5","750,511,8.7","735,515,8.9","720,518,9.1","708,509,9.3","698,499,9.5","688,489,9.7","678,480,9.9","668,471,10.1","653,458,10.4","638,446,10.7","623,434,11.0","608,423,11.3","593,413,11.6","578,403,11.9","563,394,12.2","548,386,12.5","533,378,12.8","518,371,13.1","503,364,13.4","488,359,13.6","473,353,13.8","458,349,14.0","443,345,14.2","428,342,14.4","413,339,14.6","398,337,14.8","383,336,15.0","368,335,15.2","353,335,15.4","338,336,15.6","323,337,15.8","308,339,16.0","293,342,16.2","278,345,16.4","263,349,16.6","248,353,16.8","233,359,17.0","218,364,17.2","203,371,17.5","188,378,17.8","173,386,18.1","158,394,18.4","143,403,18.7","128,413,19.0","113,423,19.3","98,434,19.6","83,446,19.9","68,458,20.2","58,467,20.4","48,476,20.6","38,485,20.8","28,494,21.0","18,504,21.2","8,514,21.4","-2,524,21.6","-12,534,21.8","-22,544,22.0","-32,554,22.2","-42,564,22.4","-52,574,22.6","-62,584,22.8","-72,594,23.0","-82,604,23.2","-92,614,23.4","-102,624,23.6","-112,634,23.8","-122,644,24.0","-132,654,24.2","-142,664,24.4","-152,674,24.6","-162,684,24.8","-172,694,25.0","-182,704,25.2","-192,714,25.4","-202,724,25.6","-212,734,25.8","-222,744,26.0","-232,754,26.2","-242,764,26.4","-252,774,26.6","-262,784,26.8","-272,794,27.0","-282,804,27.2","-292,814,27.4","-302,824,27.6","-312,834,27.8"],"swimmingspeed":65}');
        dataGroup.push('{"hall":1,"table":1,"fishsn":"1185148461900","fishtypeid":"D1","path":["1580,231,0.0","1520,233,1.1","1460,236,2.2","1400,240,3.3","1340,246,4.4","1280,253,5.5","1220,261,6.6","1160,271,7.7","1100,283,8.8","1040,295,9.9","980,309,11.0","920,325,12.1","860,342,13.2","800,360,14.3","740,379,15.4","680,400,16.6","620,423,17.8","560,446,19.0","500,472,20.2","440,498,21.4","390,521,22.4","340,545,23.4","290,570,24.4","240,596,25.4","190,623,26.4","140,651,27.4","90,680,28.5","40,710,29.6","-10,740,30.7","-60,770,31.7","-110,800,32.8","-160,830,33.9","-210,860,35.0"],"swimmingspeed":55}');
        
        for (let i = 0; i < dataGroup.length; i++) {
            let _data = JSON.parse(dataGroup[i]);
            ws.send('wi999 4000 ' + JSON.stringify(_data));
        }

    } catch (error) {
        ws.send('900 ' + JSON.stringify({ type: 'error', message: 'Invalid message format' }));
    }
};