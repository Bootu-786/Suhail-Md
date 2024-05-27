const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923145269482" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923145269482";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_25_05_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDYyLFxuICAgICAgICAxMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDgyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzLFxuICAgICAgICAxNyxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTMzLFxuICAgICAgICA4NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzQsXG4gICAgICAgIDc0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjksXG4gICAgICAgIDIyMCxcbiAgICAgICAgODEsXG4gICAgICAgIDI2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDMsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDgxLFxuICAgICAgICAxODksXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDczLFxuICAgICAgICAxNTksXG4gICAgICAgIDI0LFxuICAgICAgICAxMixcbiAgICAgICAgMTAyLFxuICAgICAgICAzNSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzksXG4gICAgICAgIDYzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTksXG4gICAgICAgIDkzLFxuICAgICAgICA5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDk1LFxuICAgICAgICA3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjU1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU4LFxuICAgICAgICA1NixcbiAgICAgICAgNDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE0LFxuICAgICAgICA4OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMSxcbiAgICAgICAgODYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxODgsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDkyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjIzLFxuICAgICAgICA3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjAsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjUxLFxuICAgICAgICA2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTgyLFxuICAgICAgICA2NSxcbiAgICAgICAgODMsXG4gICAgICAgIDk0LFxuICAgICAgICAzOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiU0xlOFNXSFVnRkhsdzRTTnFDU20rbnQ2eFRBVTdNcytRK1pqUk9nc2FZdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM0MTUyOTc0MDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkVBMDUxNTMwNDVBNDU0QzI2NUE2Qjg5RURFMTRGMzBBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjgwMTkyMVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzQxNTI5NzQwNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNENEQzc1QTFGMUUzNDVGOTczNDU1ODgwNUMwMjJBNzBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2ODAxOTIxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlRLYmd4R1ZFVGxPWERCVldaRUs2Q2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzBmZTE2MzktNTdiZi00NzU1LTg1ZWEtM2ZmZGY5OGI5ZGFhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NSxcbiAgICAgIDEzOCxcbiAgICAgIDUsXG4gICAgICAxODIsXG4gICAgICAxMzUsXG4gICAgICAxOTksXG4gICAgICAxMCxcbiAgICAgIDE3OSxcbiAgICAgIDQwLFxuICAgICAgMjAsXG4gICAgICA4LFxuICAgICAgMTQ2LFxuICAgICAgNTAsXG4gICAgICAyNTEsXG4gICAgICAxNDYsXG4gICAgICAyNDMsXG4gICAgICAyMixcbiAgICAgIDEyMixcbiAgICAgIDE3MyxcbiAgICAgIDI1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MixcbiAgICAgIDE0NSxcbiAgICAgIDIzNyxcbiAgICAgIDE2MSxcbiAgICAgIDIyMyxcbiAgICAgIDIzNyxcbiAgICAgIDE4MCxcbiAgICAgIDEzNCxcbiAgICAgIDExOCxcbiAgICAgIDI0OSxcbiAgICAgIDE5LFxuICAgICAgMjgsXG4gICAgICA5MixcbiAgICAgIDM3LFxuICAgICAgMTgxLFxuICAgICAgMTY4LFxuICAgICAgMjEsXG4gICAgICAxNDAsXG4gICAgICAxMjEsXG4gICAgICAxOTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWUg5MUJON0NcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQxNTI5NzQwNDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2MjIzMDIwMDU5MDQ2NToyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIuKYheW9oVsgTUFOTyBd5b2h4piFXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTDN6anZJRUVQcWkwYklHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI4ZTJFZHNTZmhSZnhiL2FjeU9GWVlpaDFNejZkZ2lRQUtQMVUzekQ2WlVFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkdXR0dGSlAwalgwWmkrcFZTbk1nRmNKUElwclZQZGdtRVNZL3RlN1EzWXBpcFZ5b3JtVkNiUk1ldllpU1VBNS9ubWFBOThGSlBWNTdDYzJTT21UbUNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjB3ek1MeFNrV0NGTUNIVmhtZjl5WENUU1o0TXM4ZFk1dkx6dW5CVXVoU2ZvWitXOFZvdmpUenQveFV4QVI4R3VDWnJpVmg0dlFldVczVmdpNXBRQmlnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQxNTI5NzQwNDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTY4MDE5MTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCTDNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJMMy5qc29uIjogIntcImtleURhdGFcIjpcIlBTUGpzQXREWXpuNERwVXhzN29BT05abkwwU3c1eVIyam44R2tWb3hqUHM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTMxMzA2MTMwOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE2Nzk1NTc5NzAyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "$",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Princess",
  ownername:process.env.OWNER_NAME|| "prince",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
