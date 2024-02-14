import React from "react";
import BottomBar from "@/components/helpers/BottomBar";
import Providers from "@/app/GlobalRedux/provider";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <div className="absolute h-full w-full bg-[#343632]">
            <Providers>
                {children}
            </Providers>
            <BottomBar/>
        </div>
        </body>
        </html>
    )
}
