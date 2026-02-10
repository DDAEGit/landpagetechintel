import React from "react";
import { motion } from "framer-motion";
import { Clock, Map, AlertTriangle, Phone, Globe, TowerControl, Wifi } from "lucide-react";
const actions = [
    {
        title: "Geo-Inteligência (GEOINT)",
        description: "Georeferenciação de pontos  e vias de acesso ilegais",
        icon: Globe,
        color: "text-[#00e5c7]",
    },
    {
        title: "Inteligência de sinais (SIGINT)",
        description: "Detecção, rastreamento e intercepção de comunicações",
        icon: TowerControl,
        color: "text-[#0ea5e9]",
    },
    {
        title: "Inteligência de código aberto (OSINT) ",
        description: "Análise e perfis detalhado de alvos a partir de dados da internet",
        icon: Wifi,
        color: "text-amber-400",
    },
    // {
    //     title: "Emergency Contact",
    //     description: "Direct line to border control assistance.",
    //     icon: Phone,
    //     color: "text-red-400",
    // },
];

export function QuickActions() {
    return (
        <section className="py-20 px-4 max-w-7xl mx-auto">
            <div className="flex items-center space-x-4 mb-10">
                <div className="h-px bg-gradient-to-r from-transparent via-[#00e5c7] to-transparent flex-1 opacity-30" />
                <h2 className="text-2xl font-bold text-white tracking-tight uppercase">Módulos</h2>
                <div className="h-px bg-gradient-to-r from-transparent via-[#00e5c7] to-transparent flex-1 opacity-30" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {actions.map((action, index) => (
                    <motion.div
                        key={action.title}
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            delay: index * 0.1,
                            duration: 0.5,
                        }}
                        className="glass-panel p-6 rounded-xl group cursor-pointer transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className={`p-3 rounded-lg bg-white/5 w-fit mb-4 group-hover:bg-white/10 transition-colors ${action.color}`}>
                            <action.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#00e5c7] transition-colors">
                            {action.title}
                        </h3>
                        <p className="text-sm text-[#8b949e] leading-relaxed">{action.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
