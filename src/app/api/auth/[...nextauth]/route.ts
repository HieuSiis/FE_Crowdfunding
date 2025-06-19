import axios from "axios";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Ensure env is not undefined
if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
  throw new Error(
    "Missing GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET in environment variables"
  );
}

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user }: any) {
      console.log("Google SignIn callback triggered:", user);
      try {
        await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/auth/google`,
          {
            fullName: user.name,
            email: user.email,
            photo: user.image,
          }
        );
      } catch (err) {
        console.error("Error sending user to backend:", err);
      }
      return true;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
