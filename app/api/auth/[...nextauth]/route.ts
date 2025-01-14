import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";


const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: "sad",
      clientSecret: "sda"
    })
  
  ,

    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'E-mail',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
       return {
        username : "Sayan",
        id:"1",
        name:"sayandip",
        email:"Sayan@mail.com"
        
       }
  
      
      }
    })
  ]
})

export const GET = handler;
export const POST = handler;