import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"


export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.ID,
      clientSecret: process.env.CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  
}

export const handler =  NextAuth(authOptions);

export {handler as GET, handler as POST};