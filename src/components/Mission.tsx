import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
export function Mission() {
    return (
        <section id="mission" className="py-20 md:py-32 bg-stone-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                    {/* Image Grid */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -20,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.8,
                        }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl" id="usmore">
                            <img
                                src="https://gedae.ggpen.gov.ao/ferramenta-de-visualizacao/otchiva/images/DJI_20251031154422_0641_D.jpg"
                                alt="Angolan community near mangroves"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-2/3 aspect-square rounded-2xl overflow-hidden shadow-xl border-8 border-stone-50 hidden md:block">
                            <img src="/img5.jpeg" alt="Mangrove roots detail" className="w-full h-full object-cover" />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#c4703d]/10 rounded-full -z-10" />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                        }}
                    >
                        {/* <h2 className="text-[#1a4d2e] font-bold text-sm tracking-widest uppercase mb-4">About Us</h2> */}
                        <h3 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6 leading-tight">
                            Segurança Fronteiriça<span className="text-[#000047] hidden">Campo</span>:
                        </h3>
                        <p className="text-lg text-stone-600 mb-4 leading-relaxed">
                            Reforça a segurança das fronteiras nacionais com inteligência de satélite — identifica actividades ilegais,
                            passagens clandestinas e alterações no terreno em tempo quase real, garantindo vigilância contínua, resposta
                            rápida e controlo territorial eficaz.
                        </p>

                        <p className="text-lg text-stone-600 leading-relaxed">
                            &bull; Vigilância contínua de vastas áreas remotas da fronteira terrestre de Angola
                        </p>
                        <p className="text-lg text-stone-600 leading-relaxed">
                            &bull; Detecção automática de rotas clandestinas e actividades transfronteiriças
                        </p>
                        <p className="text-lg text-stone-600 leading-relaxed">
                            &bull; Plataforma de inteligência geoespacial e análise preditiva
                        </p>
                        <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                            &bull; Apoio estratégico à tomada de decisão e redução de custos operacionais
                        </p>

                        {/* <ul className="space-y-4 mb-10">
                            {[
                                "Protecting coastal communities from erosion and flooding",
                                "Supporting local fisheries and food security",
                                "Sequestering carbon to fight climate change",
                                "Preserving biodiversity unique to Angola",
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-[#c4703d] flex-shrink-0 mt-0.5" />
                                    <span className="text-stone-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul> */}

                        {/* <div className="p-6 bg-white rounded-xl border border-stone-100 shadow-sm">
                            <p className="text-stone-800 italic font-serif text-lg">
                                "A aplicação utiliza Inteligência Artificial em imagens de satélite para mapear e monitorar fronteiras
                                nacionais."
                            </p>
                        </div> */}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
