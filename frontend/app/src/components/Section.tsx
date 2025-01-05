import React, { ReactNode } from "react"


interface SetionProps {
    children: ReactNode;
}


export default function Section({ children } : SetionProps) {
    return (
        <div className="w-full h-screen">
            { children }
        </div>
    )
}