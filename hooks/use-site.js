"use client";
import { ThemeContext } from "@/providers/theme-provider";
import { useContext } from "react";

export default function useSite() {
    const site = useContext(ThemeContext);
    if (!site) {
        throw new Error("useSite must be used within a SiteProvider");
    }
    return site;
}