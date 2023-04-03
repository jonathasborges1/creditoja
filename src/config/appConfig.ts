import dotenv from 'dotenv';
dotenv.config();

const appConfig =  {
   site: {
      url: "https://creditoja.net/",
   },
   api: {
      url: "https://api.sendinblue.com/v3/smtp/email",
      key: process.env.API_KEY,
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

console.log("debug -> appConfig ", appConfig.api.key);