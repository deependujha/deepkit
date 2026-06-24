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

export function Navbar() {
    const pathname = usePathname();
    const { resolvedTheme, setTheme } = useTheme();
    const [ mounted, setMounted ] = useState( false );

    useEffect( () => { setMounted( true ); }, [] );

    const currentTool = TOOLS_LIST.find( ( t ) => t.path === pathname );
    const pageName = pathname === "/"
        ? null
        : ( currentTool?.name ?? pathname.slice( 1 ).replace( /-/g, " " ) );

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
                    onClick={ () => setTheme( resolvedTheme === "dark" ? "light" : "dark" ) }
                    aria-label="Toggle theme"
                    className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors hover:cursor-pointer"
                >
                    { mounted
                        ? ( resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon /> )
                        : <span className="w-4.5 h-4.5" /> /* stable placeholder before hydration */
                    }
                </button>
            </div>
        </nav>
    );
}
