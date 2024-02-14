import React from "react";
import BottomBar from "@/components/helpers/BottomBar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <div className="absolute h-full w-full bg-[#343632]">
            {children}
            <BottomBar/>
        </div>
        </body>
        </html>
    )
}
