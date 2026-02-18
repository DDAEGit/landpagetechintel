import React from "react";
import { Leaf, Mail, Phone, MapPin } from "lucide-react";
export function Footer() {
    return (
        <footer className="bg-[#02022d] text-white pt-20 pb-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            {/* <Leaf className="w-6 h-6 text-[#c4703d]" /> #F5F5F4 */}
                            <div className="bg-white rounded p-1">
                                <img
                                    src={"/logo.png"}
                                    alt=""
                                    width={200}
                                    height={"auto"}
                                    // className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            <span className="font-title font-bold text-xl tracking-tight">
                                Tech-Intel <span className="text-[#3d9ec4]">360</span>
                            </span>
                        </div>
                        <p className="text-stone-400 max-w-md mb-8 leading-relaxed">
                            Iniciativa nacional, combinando tecnologia de satélite, inteligência artificial e dados operacionais, garante
                            fronteiras mais seguras e a integridade do território nacional
                        </p>
                        <div className="flex gap-4">
                            {/* Placeholder Social Icons */}
                            {/* {[1, 2, 3].map((i) => (
                                <div
                                    key={i}
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#c4703d] transition-colors cursor-pointer"
                                >
                                    <div className="w-5 h-5 bg-current rounded-sm opacity-50" />
                                </div>
                            ))} */}
                        </div>
                    </div>

                    {/* <div>
                        <h4 className="font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-stone-400">
                            <li>
                                <a href="#" className="hover:text-[#c4703d] transition-colors">
                                    About the Project
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#c4703d] transition-colors">
                                    Methodology
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#c4703d] transition-colors">
                                    Impact Reports
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#c4703d] transition-colors">
                                    Partner With Us
                                </a>
                            </li>
                        </ul>
                    </div> */}

                    <div className="flex items-center">
                        <p className="ms-4 font-mono text-blue-300">Powered By </p>
                        <div className="bg-white rounded-3xl px-3 py-1 ms-3">
                            <img src={"/GGPEN_LOGO-scaled.png"} alt="" width={70} height={"auto"} />
                        </div>
                        {/* <h4 className="font-title font-bold text-lg mb-6">Contactos</h4>
                        <ul className="space-y-4 text-stone-400">
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-[#3d9ec4]" />
                                <span>info@otchiva.ao</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-[#3d9ec4]" />
                                <span>+244 925 421 644</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <MapPin className="w-5 h-5 text-[#3d9ec4]" />
                                <span>Luanda, Angola</span>
                            </li>
                        </ul> */}
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-stone-500 text-sm">
                    <p>&copy; 2026 Tech-Intel 360. Todos os direitos reservados.</p>
                    {/* <div className="flex items-center gap-2">
                        <span>Built with pride in</span>
                        <span className="font-bold text-white">Angola</span>
                        <div className="flex h-3 w-4 border border-white/20">
                            <div className="w-1/2 bg-[#CD2A3E]"></div>
                            <div className="w-1/2 bg-black"></div>
                        </div>
                    </div> */}
                </div>
            </div>
        </footer>
    );
}
