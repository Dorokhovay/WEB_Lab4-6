const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  auth: {
    user: 'dorokhovalizard@gmail.com',
    pass: "sisfhgbmtigcbecf",
  },
});

let message = {
  from: '"LR JS2022" <dorokhovalizard@gmail.com>',
  to: 'dorokhova.yelyzaveta@lll.kpi.ua',
  subject: 'ЛР4-6 ТР-12 Дорохова Єлизавета',
  text: 'Дорохова Єлизавета Владиславівна\nТР-12\nЛР4-6 JS2022\nРезультат: 12/12',
};

transporter.sendMail(message, function (err, info) {
    if (err) {
        console.log(err);
    } else {
        console.log(info);
    }
})