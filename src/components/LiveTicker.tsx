import React from "react";
import { Clock, AlertCircle, CheckCircle2 } from "lucide-react";
interface TickerItem {
    id: string;
    name: string;
    wait: string;
    status: "open" | "busy" | "closed";
}

const tickerData: TickerItem[] = [
    {
        id: "1",
        name: "Yema",
        wait: "0 pts.",
        status: "open",
    },
    {
        id: "2",
        name: "Nóqui",
        wait: "1 pts.",
        status: "busy",
    },
    {
        id: "3",
        name: "Luvo",
        wait: "5 pts.",
        status: "closed",
    },
    {
        id: "4",
        name: "Tchicolondo",
        wait: "0 pts.",
        status: "open",
    },
    {
        id: "5",
        name: "Furi",
        wait: "3 pts.",
        status: "closed",
    },
    {
        id: "6",
        name: "Marco 25",
        wait: "1 pts.",
        status: "busy",
    },
    {
        id: "7",
        name: "Tambué",
        wait: "2 pts.",
        status: "closed",
    },
    {
        id: "8",
        name: "Marco 27",
        wait: "0 pts.",
        status: "open",
    },
    {
        id: "9",
        name: "Itanda",
        wait: "0 pts.",
        status: "open",
    },
    {
        id: "10",
        name: "Chissanda",
        wait: "0 pts.",
        status: "open",
    },
];

export function LiveTicker() {
    // Duplicate data for seamless loop
    const displayData = [...tickerData, ...tickerData];
    return (
        <div className="w-full bg-black/40 border-y border-[#00e5c7]/10 overflow-hidden relative z-30 backdrop-blur-sm">
            <div className="flex whitespace-nowrap animate-scroll-ticker py-3">
                {displayData.map((item, index) => (
                    <div key={`${item.id}-${index}`} className="flex items-center space-x-3 px-8 border-r border-white/5 last:border-r-0">
                        <div
                            className={`w-2 h-2 rounded-full ${item.status === "open" ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" : item.status === "busy" ? "bg-amber-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]" : "bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]"}`}
                        />

                        <span className="text-sm font-medium text-white tracking-wide">{item.name}</span>
                        <span className="text-xs font-mono text-[#00e5c7] bg-[#00e5c7]/10 px-2 py-0.5 rounded">{item.wait}</span>
                    </div>
                ))}
            </div>

            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0d1117] to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0d1117] to-transparent pointer-events-none" />
        </div>
    );
}
