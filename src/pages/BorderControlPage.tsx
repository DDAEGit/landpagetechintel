import React from "react";
import { HeroMap } from "../components/HeroMap";
import { LiveTicker } from "../components/LiveTicker";
import { QuickActions } from "../components/QuickActions";
import { Advisories } from "../components/Advisories";
import { Documents } from "../components/Documents";
import { Footer } from "../components/Footer";

export function BorderControlPage() {
    return (
        <div className="min-h-screen bg-[#0d1117] text-white selection:bg-[#00e5c7] selection:text-[#0d1117]">
            {/* Navigation Bar (Simple) */}
            <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    {/* <div className="w-2 h-2 bg-[#00e5c7] rounded-full animate-pulse" />
                    <span className="font-mono text-xs text-[#00e5c7] tracking-widest uppercase">System Online</span> */}
                    <img src={"/assets/logo.png"} alt="" width={100} height={"auto"} />
                </div>
                <div className="hidden md:flex space-x-6 text-sm font-medium text-[#8b949e]">
                    <a
                        href="https://gedae.ggpen.gov.ao/ferramenta-de-visualizacao/tech-intel/login.php"
                        className="hover:text-white transition-colors"
                    >
                        <span className="text-white cursor-pointer">Login</span>
                    </a>
                    {/* <span className="hover:text-white cursor-pointer transition-colors">Map View</span>
                    <span className="hover:text-white cursor-pointer transition-colors">Analytics</span>
                    <span className="hover:text-white cursor-pointer transition-colors">Settings</span> */}
                </div>
            </nav>

            <main>
                <HeroMap />
                <LiveTicker />
                <QuickActions />

                <div className="bg-gradient-to-b from-[#0d1117] to-[#161b22]">
                    <Advisories />
                    <Documents />
                </div>
            </main>

            <Footer />
        </div>
    );
}
