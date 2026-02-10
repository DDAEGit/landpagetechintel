import React from "react";
import { Shield } from "lucide-react";
export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-[#0d1117] py-12 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center space-x-3">
                    {/* <Shield className="w-6 h-6 text-[#00e5c7]" /> */}
                    <span className="text-lg font-bold text-white tracking-tight">
                        TechIntel<span className="text-[#00e5c7]">360</span>
                    </span>
                </div>

                <div className="flex space-x-6 text-sm text-[#8b949e]">
                    {/* <a href="#" className="hover:text-white transition-colors">
                        Privacy Policy
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                        Terms of Service
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                        Accessibility
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                        Contact
                    </a> */}
                </div>

                <div className="text-xs text-[#8b949e] font-mono">© 2026 Tech-Intel 360. Todos os direitos reservados.</div>
            </div>
        </footer>
    );
}
