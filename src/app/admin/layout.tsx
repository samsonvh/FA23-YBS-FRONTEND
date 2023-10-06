import { Metadata } from "next"
import Navbar from "@/components/Navbar"

export const metadata: Metadata = {
    title: 'YBS - Admin Portal',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="flex w-screen">
                <div id="navbar" className="w-1/5">
                    <Navbar></Navbar>
                </div>
                <main className="w-4/5">
                    {children}
                </main>
            </body>
        </html>
    )
}