import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Lucas - Personal Website",
    description:
        "A showcase of my work and developing my interest in technology",
};

export default function RootLayout({ children }) {
    return (
        <html>
            <body className={"${fontVariables.barlow.variable"}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
