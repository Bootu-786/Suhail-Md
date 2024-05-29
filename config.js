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


global.devs = "923184474176" // Developer Contact
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_53_05_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTE4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTA2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTEwLFxuICAgICAgICA0MixcbiAgICAgICAgNDgsXG4gICAgICAgIDAsXG4gICAgICAgIDE2LFxuICAgICAgICA5MixcbiAgICAgICAgMzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE1LFxuICAgICAgICA4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDYzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA3LFxuICAgICAgICA5MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjksXG4gICAgICAgIDM4LFxuICAgICAgICA3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDc3LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA0OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDg2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjMwLFxuICAgICAgICA3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDExLFxuICAgICAgICAxMTksXG4gICAgICAgIDExNixcbiAgICAgICAgMjMyLFxuICAgICAgICAwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE1MCxcbiAgICAgICAgODMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTAyLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTAxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzksXG4gICAgICAgIDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTM4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTYzLFxuICAgICAgICA5OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjksXG4gICAgICAgIDE5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2LFxuICAgICAgICAxLFxuICAgICAgICA5NixcbiAgICAgICAgMjA2LFxuICAgICAgICAzNSxcbiAgICAgICAgODksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSVI4WU5CMlo5dDlvcW5yUlZ1UVkrbFhSSEhRYmRZZ09YNjYzT05aSWpOcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNzFrd0dmZktSdHV2RGhISjBZS1J5Z1wiLFxuICBcInBob25lSWRcIjogXCJkMzBkNmZjNi03ZjQ0LTQ5ODUtODM4ZC02NWI2OGJiNDI4YzBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU1LFxuICAgICAgODUsXG4gICAgICAyNDIsXG4gICAgICAxMzEsXG4gICAgICAxMDgsXG4gICAgICAxOSxcbiAgICAgIDQ0LFxuICAgICAgMTE4LFxuICAgICAgMjE3LFxuICAgICAgMjksXG4gICAgICAyMDUsXG4gICAgICA4NyxcbiAgICAgIDIwMSxcbiAgICAgIDUyLFxuICAgICAgMTQ4LFxuICAgICAgMTgsXG4gICAgICAxNyxcbiAgICAgIDU5LFxuICAgICAgMjIyLFxuICAgICAgMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk0LFxuICAgICAgNTUsXG4gICAgICAxOTIsXG4gICAgICAyMixcbiAgICAgIDUyLFxuICAgICAgNDIsXG4gICAgICAxNjAsXG4gICAgICA0NyxcbiAgICAgIDIxOSxcbiAgICAgIDYyLFxuICAgICAgNDIsXG4gICAgICAxMTIsXG4gICAgICAzOCxcbiAgICAgIDIxOCxcbiAgICAgIDE0OCxcbiAgICAgIDgsXG4gICAgICAxNjIsXG4gICAgICAxOTEsXG4gICAgICAyNDQsXG4gICAgICAxOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOR3FxSlFIRU1YbTNMSUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImpUYzRjZmhPUWRHTDJmd0pCTnY4ZGdidnpOdDZtV2hIbnAzaU1sbUdwbkk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRWNTdzduejlCRDBVekRJbHIvQ09JZ1FsN1VYTGhtNU9vdFQ1WG92NDcwdEhrSllzbkxDTUkyVlZQQ1pVMjNQZXBOU3I1OGd5N0RNRjNIckp6aDJyQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibDBVUUlYNkRnd1JvYUlDa25SQWgxQmYvVWlqUlAzWVp2Ty9GbDA2RU1jUnJmRndrY0JjYXkvdzFyRlhEWlB1ZWJBa0F2ZUJUajdmS29waDIveE9iRFE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwNDkxMDg0MDg6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuqngeC8ulBSSU5DRVNT4Ly76qeCXCIsXG4gICAgXCJsaWRcIjogXCIxODg0NTA3NjY2MTA0NTQ6NUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA0OTEwODQwODo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTY5OTA3OTMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNNE1cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU00TC5qc29uIjogIntcImtleURhdGFcIjpcInVpdjNZWDBpejdqQk9JSHp0akxxUnRrR1ZkQkNRVXh4NXRhYmw5T0kyMlU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkyMTY1MjA0OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTTRNLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRTJvQVZSNzVGdS9ITHcyemZFTXljZjFnYU9rSGNObXg3U1FyY3J3NFlEZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTIxNjUyMDQ4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzE2NzkyMDY0MDQ0XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTTROLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUjcvS3Nia1BOR2d5aEhRcFI2T29xOW1pY2Z6ZTNQdGQyaEluTmV0aXdaST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTIxNjUyMDQ5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTY3OTM4NzUzMThcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNNE8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJCL0srZ2c5czdZK2V0czZwT29UMG1XQklxZ01IaVVOaWdhK3AyMi9Kc0hFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MjE2NTIwNDksXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTTRQLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRytnWWpoL01RNmZ3Uk5OdTkralFhMzFyazE1L0hEQ3l2TEl4b29tekViND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTIxNjUyMDQ5LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTY5NDQwMTk2OTVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
