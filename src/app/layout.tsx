"use client";
import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import { Provider } from "react-redux";
import store from "@/store";
import Mayapp from "./Myapp";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body className={inter.className}>
          <Header />
          <Mayapp>{children}</Mayapp>
          <Footer />
        </body>
      </Provider>
    </html>
  );
}
