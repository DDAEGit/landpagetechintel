import React from "react";
import { motion } from "framer-motion";
import { Check, FileText } from "lucide-react";
const documents = [
    {
        // name: "Valid Passport",
        desc: "Aumentar a capacidade de resposta a imigração ilegal e o contrabando nas regiões fronteiriças",
    },
    {
        // name: "Visa / ESTA",
        desc: "Georreferenciar Postos fronteiriços e aduaneiros, visualizando os mesmos numa imagem de satélite de alta resolução actualizada",
    },
    {
        // name: "Travel Insurance",
        desc: "Localizar pontos e vias de acesso ilegais (presume-se passagens não autorizadas ou vulgos caminhos fiotes na jurisdição fronteiriça terreste)",
    },
    {
        // name: "Vaccination Record",
        desc: "Georreferenciar infra-estruturas identificadas durante o levantamento de campo para possível armazenamento de contrabando nas zonas fronteiriças",
    },
    {
        // name: "Customs Declaration",
        desc: "Solução baseada em inteligência artificial",
    },
    {
        // name: "Return Ticket",
        desc: "Uso de imagens de satélite atualizadas e de alta resolução",
    },
    // {
    //     name: "Hotel Reservation",
    //     desc: "Confirmed booking address for immigration forms.",
    // },
    // {
    //     name: "Travel Itinerary",
    //     desc: "Detailed plan of activities and locations.",
    // },
];

export function Documents() {
    return (
        <section className="py-20 bg-[#0d1117] relative">
            {/* Background Texture */}
            <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                }}
            />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">Principais Características</h2>
                    {/* <p className="text-[#8b949e] max-w-2xl mx-auto">
                        Ensure smooth processing by having these essential documents ready for inspection.
                    </p> */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {documents.map((doc, index) => (
                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                y: 10,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                delay: index * 0.05,
                            }}
                            className="flex items-start p-4 rounded-lg bg-[#161b22] border border-[#30363d] hover:border-[#00e5c7]/30 transition-colors"
                        >
                            <div className="flex-shrink-0 mt-1 mr-4">
                                <div className="w-5 h-5 rounded bg-[#00e5c7]/10 flex items-center justify-center border border-[#00e5c7]/30">
                                    <Check className="w-3.5 h-3.5 text-[#00e5c7]" />
                                </div>
                            </div>
                            <div>
                                {/* <h3 className="text-white font-medium mb-1 flex items-center">
                                    {doc.name}
                                    <FileText className="w-3 h-3 ml-2 text-[#8b949e] opacity-50" />
                                </h3> */}
                                <p className="text-sm text-[#8b949e]">{doc.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
