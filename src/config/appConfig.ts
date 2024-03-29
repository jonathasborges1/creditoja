import dotenv from 'dotenv';
dotenv.config();

const appConfig =  {
   site: {
      url: "https://creditoja.net/",
   },
   api: {
      url: "https://api.brevo.com/v3/smtp/email",
      urlOld: "https://api.sendinblue.com/v3/smtp/email",
      key: process.env.REACT_APP_API_KEY,
   },
   user: {
      name: "Jose Carlos",
      email: "creditoja@creditoja.net",
   },
   userSerasa: {
      name: "Jose Carlos",
      email: "creditoja.serasa@creditoja.net"
   },
   admin: {
      email: "jonathasborges0@gmail.com",
   }
}

export default appConfig;

 // https://jonathasborges1.github.io/creditoja/
console.log("App Running... v.0.0.3")
// console.log("[CRITICAL DEBUG]: ", process.env.REACT_APP_API_KEY)