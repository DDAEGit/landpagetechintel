import React from "react";
import { motion } from "framer-motion";
interface CrossingPoint {
    id: string;
    x: number;
    y: number;
    name: string;
    status: "open" | "busy" | "closed";
    delay: string;
}
const crossings: CrossingPoint[] = [
    {
        id: "1",
        x: 25,
        y: 35,
        name: "Noqui",
        status: "busy",
        delay: "0s",
    },
    {
        id: "2",
        x: 32,
        y: 28,
        name: "Luvo",
        status: "open",
        delay: "0.5s",
    },
    {
        id: "3",
        x: 45,
        y: 25,
        name: "Naxili",
        status: "open",
        delay: "1.2s",
    },
    {
        id: "4",
        x: 75,
        y: 22,
        name: "Cambulo",
        status: "open",
        delay: "0.8s",
    },
    {
        id: "5",
        x: 68,
        y: 28,
        name: "Furi 3",
        status: "busy",
        delay: "1.5s",
    },
    {
        id: "6",
        x: 15,
        y: 20,
        name: "Yema",
        status: "open",
        delay: "2s",
    },
    {
        id: "7",
        x: 82,
        y: 18,
        name: "Luau",
        status: "closed",
        delay: "0.3s",
    },
    {
        id: "8",
        x: 55,
        y: 85,
        name: "Katuiti",
        status: "open",
        delay: "1.8s",
    },
];

export function HeroMap() {
    return (
        <div className="relative w-full h-[600px] overflow-hidden bg-[#0d1117] flex items-center justify-center">
            {/* Background Grid */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(#00e5c7 1px, transparent 1px), linear-gradient(90deg, #00e5c7 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Radial Gradient Overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117] via-transparent to-[#0d1117] pointer-events-none z-10" />
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#0d1117] opacity-80 pointer-events-none z-10" />

            {/* Map Container */}
            <div className="relative w-full max-w-6xl aspect-[16/9] px-4">
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_15px_rgba(0,229,199,0.1)]" preserveAspectRatio="none">
                    {/* Abstract Landmasses */}
                    <path
                        d="M05,30 Q10,10 30,25 T70,20 T90,30 T95,60 T70,80 T40,85 T10,60 Z"
                        // d="M10,30 Q20,10 40,15 T70,10 T90,30 T95,60 T70,80 T40,85 T10,60 Z"
                        fill="#161b22"
                        stroke="#30363d"
                        strokeWidth="0.5"
                        className="opacity-60"
                    />

                    <path
                        d="M5,40 Q15,30 25,35 T35,50 T25,70 T5,60 Z"
                        fill="#161b22"
                        stroke="#30363d"
                        strokeWidth="0.5"
                        className="opacity-40"
                    />

                    {/* Connecting Lines */}
                    <path
                        d="M25,35 L32,28 L45,25 L68,28 L75,22"
                        fill="none"
                        stroke="#00e5c7"
                        strokeWidth="0.2"
                        strokeDasharray="1 1"
                        className="opacity-30"
                    />
                </svg>

                {/* Crossing Points */}
                {crossings.map((point) => (
                    <div
                        key={point.id}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2"
                        style={{
                            left: `${point.x}%`,
                            top: `${point.y}%`,
                        }}
                    >
                        {/* Pulse Effect */}
                        <div
                            className="absolute inset-0 rounded-full bg-[#00e5c7] animate-pulse-ring"
                            style={{
                                animationDelay: point.delay,
                            }}
                        />

                        {/* Core Dot */}
                        <div
                            className={`relative w-3 h-3 rounded-full border-2 border-[#0d1117] ${point.status === "open" ? "bg-[#00e5c7]" : point.status === "busy" ? "bg-amber-400" : "bg-red-500"} shadow-[0_0_10px_rgba(0,229,199,0.5)]`}
                        />

                        {/* Label (only visible on larger screens) */}
                        <div className="hidden md:block absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
                            <span className="text-[10px] font-mono text-[#00e5c7] bg-[#0d1117]/80 px-1.5 py-0.5 rounded border border-[#00e5c7]/20 backdrop-blur-sm">
                                {point.name}
                            </span>
                        </div>
                    </div>
                ))}

                {/* Hero Text Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4 drop-shadow-lg">
                            Monitor. Cross.{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5c7] to-[#0ea5e9]">Travel Safe.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-[#8b949e] font-mono max-w-2xl mx-auto px-4">
                            Real-time border crossing intelligence at your fingertips
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
