import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { checkUser } from "../../../helper/index";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  /*
  callbacks: {
    async signIn(user, account, metadata) {
      console.log('User signed in:',user.user.email);

      const res = await checkUser(user?.user?.email);
      console.log(res)
      if (res?.error) {
        console.log('Error checking user:', res.error);


      } else {
        console.log('User checked successfully:', res);
        if (res.isAdmin) {
          console.log('User is an admin!');
        } else {
          console.log('User is not an admin.');
        }
      }

      return true; 
  }}
  */
};
export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
