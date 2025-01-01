import React, { ReactNode } from "react";
import PromoBanner from "../PromoBanner"
import HeaderTop from "../HeaderTop";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <PromoBanner />
            <HeaderTop/>
            {children}
        </>
    );
}
