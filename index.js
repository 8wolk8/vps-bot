process.env.NTBA_FIX_319 = 1;



const TelegramBot = require ("node-telegram-bot-api");
Cron = require("cron").CronJob;
const fs = require("fs");
const token = "463718698:AAHAZ6H7TXUWCIE9PaLXvsaRd5LrQB71s1k";





const bot = new TelegramBot(token, {
    polling:true
});



const KB = {
    uslug: "Наши услуги👩🏻‍💻💼",
    zapros:"Отправить нам запрос📩",
    interesant:"Вы ищете помещение🏢🏠",
    sobstv:"Вы хотите найти арендаторов🕵🏼️‍♀️💼",
    back:"Назад↩️"
};

const PicScrs = {
[KB.interesant]:[
"1.jpg"
],
    [KB.sobstv]:[
"2.jpeg"
    ]
}
bot.onText(/\/start/, msg => {

   const text = `Добрый день, ${msg.from.first_name}\n
 Чем мы можем вам помочь?`
    bot.sendMessage(msg.chat.id, text,{
        reply_markup:{
            keyboard: [
               [KB.uslug,KB.zapros]
            ]
        }
    } )
})
bot.on("message", msg=>{
switch (msg.text) {
    case KB.uslug:
        sendPictureScreen(msg.chat.id)
        break
    case KB.zapros:
        sendZaprosByName(msg.chat.id,msg.text)
        break
    case KB.back:
        bot.sendMessage(msg.chat.id,"Что вы хотите сделать?", {
        reply_markup:{
            keyboard: [
                [KB.uslug,KB.zapros]
            ]
        }
    })
        break
    case KB.interesant:
        sendInteresantByName(msg.chat.id,msg.text)
        break
    case KB.sobstv:
        sendSobstvByName(msg.chat.id,msg.text)
        break
}
})


function sendPictureScreen(chatId) {
    bot.sendMessage(chatId,"Выбирите тип услуги:", {
        reply_markup: {
        keyboard: [
            [KB.interesant, KB.sobstv],
            [KB.back]
        ]
    }
    })
}




function sendInteresantByName(chatId) {
    bot.sendMessage (chatId,"Мы предоставляем брокерские услуги АБСОЛЮТНО БЕСПЛАТНО!!!💸\n" +
        "--------------------------------------------------------------------------------------------\n"+
        "В наши услуги входит поиск помещения под ваш бизнес🏢, личный менеджер🕵🏼️‍♀️, который будет вас консультировать📈 и сопровождать на показах🔏 + обеспечение юридической поддержки во время оформления и подписания договоров📝🖨. \n" +
        "Свяжитесь с нами и уже сегодня мы подберем вам несколько объектов☎️.\n" +
        "--------------------------------------------------------------------------------------------\n"+
        "Телефон ️📞: +7 (977) 409-57-33\n" +
        "Почта 📬: info@realti4bisness.ru\n" +
        "Наш сайт 💻📲 www.realty4bisness.ru \n "+{
        reply_markup: {
            keyboard: [
                [KB.back],]
        }
    }
    )
}

function sendSobstvByName(chatId) {
    bot.sendMessage (chatId,"Наша профессиональная команда брокеров предоставляет услугу \n" +
        "поиска арендаторов на коммерческую недвижимость.\n"+
    "Свяжитесь с нами, и мы выстроим маркетинговую компанию, привлечем наш отдел менеджеров, \n" +
    "свяжемся с потенциальными арендаторами из нашей базы, сделаем все чтобы ваш объект не простаивал,\n" +
    " а приносил прибыль как можно быстрее."+
        "За свою работу мы берем 10% от средне годовой арендной платы, можем обговаривать и индивидуальные\n " +
        "условия. Ждем вашего звонка!!!\n"
        +
        "Телефон: +7 (977) 409-57-33\n" +
        "Почта: info@realti4bisness.ru\n" +
        "Наш сайт www.realty4bisness.ru \n ",{
            reply_markup: {
                keyboard: [
                    [KB.back],]
            }
        }
    )
}
function sendZaprosByName(chatId) {
    bot.sendMessage (chatId,
        "Телефон: +7 (977) 409-57-33\n" +
        "Почта: info@realti4bisness.ru\n" +
        "Наш сайт www.realty4bisness.ru \n ",{
            reply_markup: {
                keyboard: [
                    [KB.back],]
            }
        }
    )
}


