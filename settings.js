const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'FLASH-MD-WA-BOT;;;=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMERBNzYvUmFhbHlMRmJyd0IzVnRLV0s0bWJBVG40aUZkWXIzNEFud3VIQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVSt3YUh3Z2k3YW5UNzhobzlEdXBOaFhPTzh4RElOSzZYeU5mVFN1a0tnND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVSFpXN3MvZW1CaVM0WkgwMzNzSitLa3NDczV5dnNWU09MSkpPTGZYckhFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQalV3TFJBdVg1djhadHdyMlFZRjlVdVFTZS9QZHFORlY2TkEzSmpCVXdvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBBRjN2RENWbndFVi9pc2xMVkMwVlAyaEYvdDIzcTJ3dU9DM2hXeFF6Mlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRXVk0rdUQvMUYrc09XYU9Ib3kzaE5tUFlmMmlic3FJdWkxcVlGZ2VaUWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU5PcDQyZnhCZUx0eXdDSVdrM0trYzJEUld4bDVwVGFueVpJaUVVLzZGcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU0xRlhvT2tWZ3BYWEwvWEtOY2tFMXgyU2tjb2hkU01NbDdXZklJREZqZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjEzcmpKS25oLy9QNU1PbVdBeXQrdW5Xb3lkSHd6OTJ1RDZ5SGozUEdzVzN4a2NVVVllSkhQczFHRGJXOUpvZkVMZTFSRkRwM2Y5MWx5ZkkveGVlaWlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg3LCJhZHZTZWNyZXRLZXkiOiJmc1hmVnhmQWVRYkF2MEJpbDRCeitUaTQ0dmJFZ29haDQ0T2VVNW9ya2R3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2MzcxNTUxMTQzNEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2NjFDMzFGRkE5QkNGMDcyQzA3QUUxOTAzQ0EzOTAyMiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI1MTU0MTk3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNjM3MTU1MTE0MzRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMTk4NEVEOERCOUM3RDZFOEQ1MUU4OEY2RTYyNzI3NEQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNTE1NDE5OH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiN1NKQUxIM3pRcktjdDMyZ1R5TXB2ZyIsInBob25lSWQiOiI3YzdmOTFhYS01NmVlLTQwN2EtOGYxZi1iNjg4NWQ4NDY2YjkiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoick81ZXRKVm1vSkg1OUdqeTdYOWFvV2p3dVJJPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFveVp4cGExSTZ3OFdBc0pSY2xnTE45N1BFWT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJaU1k5RzRGWCIsIm1lIjp7ImlkIjoiMjYzNzE1NTExNDM0OjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQ1lCRVJfRkxBVyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS2FYMThrSEVQMkd6N1lHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTURnTnpINjVocmRqYk5HN2JRUXF0SFJqVDlMSUFQOXloMTZoVy9tMnBWWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWWhVNFFLTWY1eW83TUZGalloTnNieTgvTVdZdjlpa1JPbzBmV0VxL2J3SjVXNEg2R0F1T2ppVzIxdWdnZlpVNVFCdnVoTWJudWJybTJvMC9WUnRTQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6ImY0Z2FMY0ZYZGxhU0g3MkVOQy80a3QzR0JrNHZJR3dUcmdST3o1M2xnRzljOWZ4WTJWZzFiaUdFbkhxNXZsRmFnajNoelZHbVdCSmxRR3AwNHNlZWlBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzE1NTExNDM0OjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVEE0RGN4K3VZYTNZMnpSdTIwRUtyUjBZMC9TeUFEL2NvZGVvVnY1dHFWVyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTE1NDE4NiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPYTYifQ==' : process.env.SESSION_ID,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '+263715511434' : process.env.OWNER_NUMBER,   
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'false' : process.env.ONLY_GROUP,
ONLY_ME: process.env.ONLY_ME === undefined ? 'false' : process.env.ONLY_ME,
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || false  ,    
PREFIX: process.env.PREFIX || '.' ,
FOOTER: process.env.FOOTER=== undefined ? '‌👨‍💻 ᴠᴀᴊɪʀᴀ ᴍᴅ ʙʏ ᴛᴄ ᴛᴇᴀᴍ 👨‍💻': process.env.FOOTER,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://vajiratech_user:oSIFl2xmSojMZ0rkzdd0g0W6msuVTpNN@dpg-cpd7fjv109ks73e5gtig-a.frankfurt-postgres.render.com/vajiratech' : process.env.POSTGRESQL_URL,
MAX_SIZE: 500, 
ALIVE:  process.env.ALIVE  || ''  ,    
OWNER_REACT:  process.env.OWNER_REACT  || true  ,
ADMIN_EVENT:  process.env.ADMIN_EVENT  || true  ,   
AUTO_BLOCK:  process.env.AUTO_BLOCK  || false  ,        
AUTO_VOICE:  process.env.AUTO_VOICE  || false  ,
AUTO_STICKER: process.env.AUTO_STICKER || false  ,    
ANTI_BAD: process.env.ANTI_BAD || false  ,
AUTO_REACT:  process.env.AUTO_REACT  || false  ,    
AUTO_TYPING:  process.env.AUTO_TYPING  || false  ,
AUTO_RECORDING:  process.env.AUTO_RECORDING  || false  ,
AUTO_READ:  process.env.AUTO_READ  || false  ,
READ_CMD_ONLY:  process.env.READ_CMD_ONLY  || false  ,
AUTO_BIO:  process.env.AUTO_BIO  || false  ,       
ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || false  ,
WORK_TYPE: process.env.WORK_TYPE || 'private' ,
ANTI_LINK: process.env.ANTI_LINK || false  ,
ANTI_BOT: process.env.ANTI_BOT || false  ,
ANTI_CALL: process.env.ANTI_CALL || false  ,
AI_CHATBOT: process.env.AI_CHATBOT || false  ,
AI_IMAGE: process.env.AI_IMAGE || false  ,
MATHS_AI: process.env.MATHS_AI || false  ,    
WELCOME: process.env.WELCOME || false  ,    
HEROKU_API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,    
HEROKU_APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME,         
LOGO: process.env.LOGO || `https://telegra.ph/file/cce13b56a460afc9f4139.jpg` ,
COMMAND_TYPE: process.env.COMMAND_TYPE || 'button' ,    
ANTI_DELETE : process.env.ANTI_DELETE || false ,
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO        
};
