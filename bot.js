const fs = require("fs");
const login = require("facebook-chat-api");
const Isp  = fs.readFileSync('commands/Isp.txt','utf8');
var request = require('request');
const Terrakion = fs.readFileSync('commands/Terrakion.txt','utf8');
const Venusaur = fs.readFileSync('commands/Venusaur.txt','utf8');
const Charizard = fs.readFileSync('commands/Charizard.txt','utf8');
const Hydreigon  = fs.readFileSync('commands/Hydreigon.txt','utf8');
const Heatmor  = fs.readFileSync('commands/Heatmor.txt','utf8');
const Golurk  = fs.readFileSync('commands/Golurk.txt','utf8');
const Chandelure  = fs.readFileSync('commands/Chandelure.txt','utf8');
const Klinklang  = fs.readFileSync('commands/Klinklang.txt','utf8');
const Amoonguss  = fs.readFileSync('commands/Amoonguss.txt','utf8');
const Excadrill  = fs.readFileSync('commands/Excadrill.txt','utf8');
const Mewtwo  = fs.readFileSync('commands/Mewtwo.txt','utf8');
const Regigigas  = fs.readFileSync('commands/Regigigas.txt','utf8');


const Exfree  = fs.readFileSync('quest/16ex.txt','utf8');

const Counters  = fs.readFileSync('teamrocket/Counters leader.txt','utf8');

const Stardust  = fs.readFileSync('quest/Stardust.txt','utf8');
const Unova  = fs.readFileSync('quest/Unova.txt','utf8');
const Trick1  = fs.readFileSync('quest/trick1.txt','utf8');
const Trick2  = fs.readFileSync('quest/trick2.txt','utf8');


var answeredThreads = {};
var botStatusThreads = {};
var isSimsimi = false;

const simsimi = require('simsimi')({
    key: 'CRCZieXoJfutDa5Nag0H9GleKpwzFFJDLI0OnOXC', //key get here: https://workshop.simsimi.com
    lang: "vn",
    atext_bad_prob_max: 0.0, // Chỉ số nói tục
    atext_bad_prob_min: 0.0,
});
useSimsimi = function (threadID, text, api) {
    (async () => {
        try {
            if (blockGroupChat(threadID)) {
                return;
            };
            if (blockUserChat(threadID)) {
                return;
            };
            const response = await simsimi(text);
            api.sendMessage(response, threadID);
        } catch {
            api.sendMessage("Rosse không hiểu bạn nói. Xin lỗi nha :(", threadID);
        }
    })();
}
useUndertheseanlp = function (threadID, text, user, api) {
    try {
        request.post({
            url: 'http://undertheseanlp.com:8000/chatbot',
            body: JSON.stringify({
                "text": text,
                "user": user
            }),
            contentType: 'application/json'
        }, function (error, response, body) {
            const rp = JSON.parse(body);
            if (rp != null && rp.output != undefined) {
                api.sendMessage(rp.output, threadID);
            }
        });

    } catch {
        api.sendMessage("Rosse không hiểu bạn nói. Xin lỗi nha :(", message.threadID);
    }
}


blockGroupChat = function (threadID) {
    var blockGroupIds = ["id gourup chat", "id gourup chat"];
    if (blockGroupIds.find(x => x == threadID)) {
        console.error("block GroupId: " + threadID);
        return true;
    }
    return false;
}

blockUserChat = function (threadID) {
    var blockUserIds = ["id user", "id user"];
    if (blockUserIds.find(x => x == threadID)) {
        console.error("block ID: " + threadID);
        return true;
    }
    return false;
}

login({
    appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))
}, (err, api) => {

    api.setOptions({
        selfListen: false,
        logLevel: "silent",
        updatePresence: false,
        userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36" //get cái này xem trong file login.js
    });

    if (err) return console.error(err);
    var yourId = api.getCurrentUserID(); //lấy Id người login hiện tại


    api.listenMqtt(function callback(err, message) {
        //block icon: fix bug khi nhận đc icon
        if (message.body == '') {
            api.sendMessage("Rosse không hiểu bạn nói. Xin lỗi nha :(", message.threadID);
            return;
        }
        if (message.body == "Check iv") { 

        
            api.sendMessage("Hãy Viết Đúng Tên Con Pokemon Để Mình Check Info và Move Của Nó",message.threadID); 
        }
        if (message.body === 'Isp') {
            api.sendMessage(Isp, message.threadID);
        }
        if (message.body === 'Terrakion') {
            api.sendMessage(Terrakion, message.threadID);
        }
        if (message.body === 'Venusaur') {
            api.sendMessage(Venusaur, message.threadID);
        } 
        if (message.body === 'Charizard') {
            api.sendMessage(Charizard, message.threadID);
        }
        if (message.body === 'Hydreigon ') {
            api.sendMessage(Hydreigon, message.threadID);
        } 
        if (message.body === 'Heatmor ') {
            api.sendMessage(Heatmor, message.threadID);
        }  
         if (message.body === 'Golurk') {
            api.sendMessage(Golurk, message.threadID);
        } 
        if (message.body === 'Chandelure') {
            api.sendMessage(Chandelure, message.threadID);
        }
        if (message.body === 'Klinklang') {
            api.sendMessage(Klinklang, message.threadID);
        }
        if (message.body === 'Amoonguss') {
            api.sendMessage(Amoonguss, message.threadID);
        }
        if (message.body === 'Excadrill') {
            api.sendMessage(Excadrill, message.threadID);
        }
        if (message.body === 'Mewtwo') {
            api.sendMessage(Mewtwo, message.threadID);
        }
        if (message.body === 'Regigigas') {
            api.sendMessage(Regigigas, message.threadID);
        }

        //img
        //quest 
        if (message.body === 'Stardust') {
            api.sendMessage(Stardust, message.threadID);
        }
        if (message.body === 'Unova') {
            api.sendMessage(Unova, message.threadID);
        }
        if (message.body === 'Trick catch pokemon') {
            api.sendMessage(Trick1, message.threadID);
        }
        if (message.body === 'Trick thẻ đen') {
            api.sendMessage(Trick2, message.threadID);
        }
        if (message.body === '16 thẻ') {
            api.sendMessage(Exfree, message.threadID);
        }

        //team rocket 
        if (message.body === 'Counter Team Rocket') {
        api.sendMessage(Counters, message.threadID);
    }
        // if (message.body === 'Charizard' || message.body === "Charizard"){
        //api.sendMessage("Cendz iv 100", message.threadID);
        //}
        //block all group : Chỗ này block all nhóm chát, k thíc thì comment lại
        if (message.isGroup) return console.log("Tin nhắn đã Được Phản Hồi!");
        //Simsimi


        if (message.body == "bot" || message.body == "bot") {
            botStatusThreads[message.threadID] = true;
            isSimsimi = true;
            api.sendMessage("Đã bật chế độ bot về Pokemon. Bắt đầu nào!", message.threadID);
            return console.log("On sim");
        } else if (message.body == "offbot" || message.body == "Offbot") {
            isSimsimi = false;
            botStatusThreads[message.threadID] = false;
            api.sendMessage("Đã tắt chế độ Bot.", message.threadID);
        }

        if (isSimsimi && botStatusThreads.hasOwnProperty(message.threadID)) {
            var user = yourId + "_" + message.threadID;
            console.log(user);
            //#1. use simsimi
            // useSimsimi(message.threadID,message.body,api); 
            //#2. use Undertheseanlp
            useUndertheseanlp(message.threadID, message.body, user,api);
            return console.log("Pet next");
        }

        if (!answeredThreads.hasOwnProperty(message.threadID)) {

            //Chức năng này dành cho người muốn bỏ qua ID nào đó
            // Tìm id ở đây https://findmyfbid.in/
            // Thêm 1 người vào chỉ cần thêm dấu ,"ID người"
            // Group cũng thế

            //if(blockGroupChat(message.threadID)){
            //	return;
            //};
            if (blockUserChat(message.threadID)) {
                return;
            };

            answeredThreads[message.threadID] = false;
            api.sendMessage("Tin nhắn trả lời tự động.\n- Trả lời `bot` để nói chuyện đỡ buồn.", message.threadID);
        }
    });

});
