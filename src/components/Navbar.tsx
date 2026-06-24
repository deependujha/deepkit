"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { TOOLS_LIST } from "./constants";

function SunIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
    );
}

function MoonIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
    );
}

function MonitorIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <path d="M8 21h8M12 17v4" />
        </svg>
    );
}

const THEME_CYCLE: Record<string, string> = {
    light: "dark",
    dark: "system",
    system: "light",
};

const THEME_LABEL: Record<string, string> = {
    light: "Light — click for Dark",
    dark: "Dark — click for System",
    system: "System — click for Light",
};

export function Navbar() {
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();
    const [ mounted, setMounted ] = useState( false );

    useEffect( () => { setMounted( true ); }, [] );

    const currentTool = TOOLS_LIST.find( ( t ) => t.path === pathname );
    const pageName = pathname === "/"
        ? null
        : ( currentTool?.name ?? pathname.slice( 1 ).replace( /-/g, " " ) );

    const ThemeIcon = !mounted ? null
        : theme === "light" ? <SunIcon />
            : theme === "dark" ? <MoonIcon />
                : <MonitorIcon />;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm">
            <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between gap-4">

                {/* Left: logo + breadcrumb */ }
                <div className="flex items-center gap-2 min-w-0">
                    <Link href="/" className="text-lg font-bold tracking-tight shrink-0 text-gray-900 dark:text-white hover:opacity-80 transition-opacity">
                        DeepKit
                    </Link>
                    { pageName && (
                        <>
                            <span className="text-gray-400 dark:text-gray-600 select-none">/</span>
                            <span className="text-sm text-gray-500 dark:text-gray-400 truncate capitalize">
                                { pageName }
                            </span>
                        </>
                    ) }
                </div>

                {/* Right: theme toggle */ }
                <button
                    onClick={ () => setTheme( THEME_CYCLE[ theme ?? "system" ] ) }
                    aria-label={ THEME_LABEL[ theme ?? "system" ] }
                    title={ THEME_LABEL[ theme ?? "system" ] }
                    className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors hover:cursor-pointer"
                >
                    { ThemeIcon ?? <span className="w-4.5 h-4.5" /> }
                </button>
            </div>
        </nav>
    );
}
