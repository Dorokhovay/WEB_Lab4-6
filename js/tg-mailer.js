let message = "Дорохова Єлизавета Владиславівна\nТР-12\nЛР4-6 JS2022\nРезультат: 12/12";

const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '5861040885:AAE2vtsdXQpE9NzRYLq6FqJ6C3737HPxExA';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

const chatId = -854736627;

bot.sendMessage(chatId, message);