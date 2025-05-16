//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c21ae479aab857b4f8006.jpg";
global.devs = "2349067458490";
global.sudo = process.env.SUDO || "2349067458490";
global.owner = process.env.OWNER_NUMBER || "2349067458490";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/84a935261759d92084744.mp4";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUE0S29BWjNlMGpUVExaRDVnNzZUN1E4Q3Z4NG9PNHhlZUJ2TDljRVJXTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZFZwRTVLWFRwZ2xpTEFhRVVjTHkzNWhpeStUUFVab0JBeEV3L2hnNEJBOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlSE8rK1JrT0JidGdQcEtMTlV3QVNjRGdHNHdtWDZaNTF6Rk5qT2trajJRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSc1JoNkxHUDgxY0JWcW1reVZPMVhjaFdVN2xNeWE4TE0wSTJ2VFk1UFM4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldGeDBFc3lwNWdJY2FNLzNpQ1NmUDJmN1lMdHA4eWtzV0RXK1BiOW5Zbmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVqSUUxaGFjZ3M2MWpUMG9ZREt1dVA5dHZGaG5hL0dyVFVvcE5MSDArSGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUYxRDdBNjhYdEQ2dmdVRFhoRW4zYWFBdk93V0dvUWpuemMvNGJiK3VtWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRWtxenpZMWRrLzZJNmFtbkIrbUZuNitQQkhmR25WdzhqSjBTTnFSRGRUST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktiWE1Pb2cvK0Z4aGdCNmJUTkJGbnpTbzlCVlUrNWtsRW1wbkxSNE0yeVNodmpIYjZTSFNHYUdIYmlidW1wdGVLT29EN1djRzRka2VRL3c3YTYvMERBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAyLCJhZHZTZWNyZXRLZXkiOiJmb2pIRmhOVi9iekl5R0EzTFUzU2dNR1QzMGp0emo2MHYva2owR3RsSkJrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwNjc0NTg0OTBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDczMTc5QkZGOEU1MEVBMTlCRUZDQTQ3MTQ5QzcyQzMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NzM3ODczOH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoibXppVTltc1lTTlMwcFl6WlBibnVnQSIsInBob25lSWQiOiIxODBiZmJkMC01ZGYzLTQ2ZTktOTcxMC1kYzE5MjY1M2RjNmUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHJxbVMxTm9ldEdURXlPeDZUekZFeHRTNXVBPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvVWZkSndJQ0tHVFBMYUJ5Y2RlZlAvWmM0ZGs9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNNMmtnSklGRUtERW04RUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJXaEYyNXE2S0F4WVNKbDdDYWFsL0dOWTluZTVNblJOMTh5akt3bmpqYUhjPSIsImFjY291bnRTaWduYXR1cmUiOiI3YktMMmRyc0N2d2ZuVjEyRUJzRnR3c2h5am5Xd210QzhaWHEvalo4WjkrZzQ0L0QzUmpSL0hmWEt5SkFWMURmRlJNZHVqc0o2OWtNNHpVUG1uUzdBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoicXE3MSthcmxCY1d6MjlXYWR6QVBXMWQ5WERVVTlQcENIQVRrVmdzSWk1NEtYS0IyNTVZMGJWSzliNWp0NDZUWG5hSytJSW41ZW1sK3pqYTl6WDJ4RGc9PSJ9LCJtZSI6eyJpZCI6IjIzNDkwNjc0NTg0OTA6MTFAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI4Mjk5NjExNTgyNDc4MzoxMUBsaWQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTA2NzQ1ODQ5MDoxMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWb1JkdWF1aWdNV0VpWmV3bW1wZnhqV1BaM3VUSjBUZGZNb3lzSjQ0MmgzIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDczNzg3MzQsImxhc3RQcm9wSGFzaCI6IjJHNEFtdSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR25DIn0=
  process.env.SESSION_ID ||eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUE0S29BWjNlMGpUVExaRDVnNzZUN1E4Q3Z4NG9PNHhlZUJ2TDljRVJXTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZFZwRTVLWFRwZ2xpTEFhRVVjTHkzNWhpeStUUFVab0JBeEV3L2hnNEJBOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlSE8rK1JrT0JidGdQcEtMTlV3QVNjRGdHNHdtWDZaNTF6Rk5qT2trajJRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSc1JoNkxHUDgxY0JWcW1reVZPMVhjaFdVN2xNeWE4TE0wSTJ2VFk1UFM4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldGeDBFc3lwNWdJY2FNLzNpQ1NmUDJmN1lMdHA4eWtzV0RXK1BiOW5Zbmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVqSUUxaGFjZ3M2MWpUMG9ZREt1dVA5dHZGaG5hL0dyVFVvcE5MSDArSGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUYxRDdBNjhYdEQ2dmdVRFhoRW4zYWFBdk93V0dvUWpuemMvNGJiK3VtWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRWtxenpZMWRrLzZJNmFtbkIrbUZuNitQQkhmR25WdzhqSjBTTnFSRGRUST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktiWE1Pb2cvK0Z4aGdCNmJUTkJGbnpTbzlCVlUrNWtsRW1wbkxSNE0yeVNodmpIYjZTSFNHYUdIYmlidW1wdGVLT29EN1djRzRka2VRL3c3YTYvMERBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAyLCJhZHZTZWNyZXRLZXkiOiJmb2pIRmhOVi9iekl5R0EzTFUzU2dNR1QzMGp0emo2MHYva2owR3RsSkJrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwNjc0NTg0OTBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDczMTc5QkZGOEU1MEVBMTlCRUZDQTQ3MTQ5QzcyQzMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NzM3ODczOH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoibXppVTltc1lTTlMwcFl6WlBibnVnQSIsInBob25lSWQiOiIxODBiZmJkMC01ZGYzLTQ2ZTktOTcxMC1kYzE5MjY1M2RjNmUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHJxbVMxTm9ldEdURXlPeDZUekZFeHRTNXVBPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvVWZkSndJQ0tHVFBMYUJ5Y2RlZlAvWmM0ZGs9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNNMmtnSklGRUtERW04RUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJXaEYyNXE2S0F4WVNKbDdDYWFsL0dOWTluZTVNblJOMTh5akt3bmpqYUhjPSIsImFjY291bnRTaWduYXR1cmUiOiI3YktMMmRyc0N2d2ZuVjEyRUJzRnR3c2h5am5Xd210QzhaWHEvalo4WjkrZzQ0L0QzUmpSL0hmWEt5SkFWMURmRlJNZHVqc0o2OWtNNHpVUG1uUzdBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoicXE3MSthcmxCY1d6MjlXYWR6QVBXMWQ5WERVVTlQcENIQVRrVmdzSWk1NEtYS0IyNTVZMGJWSzliNWp0NDZUWG5hSytJSW41ZW1sK3pqYTl6WDJ4RGc9PSJ9LCJtZSI6eyJpZCI6IjIzNDkwNjc0NTg0OTA6MTFAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI4Mjk5NjExNTgyNDc4MzoxMUBsaWQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTA2NzQ1ODQ5MDoxMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWb1JkdWF1aWdNV0VpWmV3bW1wZnhqV1BaM3VUSjBUZGZNb3lzSjQ0MmgzIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDczNzg3MzQsImxhc3RQcm9wSGFzaCI6IjJHNEFtdSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR25DIn0=
  ""
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗧𝗢𝗫𝗫𝗜𝗖 𝗕𝗢𝗬",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "𝗥𝗜𝗔𝗦 𝗠𝗗",
  botname: process.env.BOT_NAME || "𝗥𝗜𝗔𝗦 𝗚𝗥𝗘𝗠𝗢𝗥𝗬",
  ownername: process.env.OWNER_NAME || "ᴛᴏxxɪᴄ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
