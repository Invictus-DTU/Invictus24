import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"


export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: "1010618076889-08tjso93glf22tik2okuvcic621u0l8k.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    // ...add more providers here
  ],
  
}

export const handler =  NextAuth(authOptions);

export {handler as GET, handler as POST};