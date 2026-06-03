"use client";
import { SessionProvider } from "next-auth/react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <PayPalScriptProvider
        options={{
          clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "test",
          currency: "USD",
        }}
      >
        {children}
      </PayPalScriptProvider>
    </SessionProvider>
  );
}
