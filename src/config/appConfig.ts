import dotenv from 'dotenv';
dotenv.config();

const appConfig =  {
   site: {
      url: "https://creditoja.net/",
   },
   api: {
      url: "https://api.sendinblue.com/v3/smtp/email",
      key: process.env.REACT_APP_API_KEY,
   },
   user: {
      name: "Jose Carlos",
      email: "creditoja@creditoja.net",
   },
   admin: {
      email: "jonathasborges0@gmail.com",
   }
}

export default appConfig;

console.log("App Running...")
console.log("[CRITICAL DEBUG]: ", process.env.REACT_APP_API_KEY)