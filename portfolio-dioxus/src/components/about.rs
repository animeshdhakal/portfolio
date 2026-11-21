use dioxus::prelude::*;
use crate::icons::{GraduationCapIcon, MapPinIcon};

struct EducationItem {
    degree: &'static str,
    institution: &'static str,
    period: &'static str,
    location: &'static str,
    current: bool,
}

#[component]
pub fn About() -> Element {
    let education = vec![
        EducationItem {
            degree: "B.E. in Electronics, Communication & Information Engineering",
            institution: "Pulchowk Campus (IOE), Tribhuvan University",
            period: "2024 — Present",
            location: "Lalitpur, Nepal",
            current: true,
        },
        EducationItem {
            degree: "High School (+2 Science)",
            institution: "Valmiki Shiksha Sadan",
            period: "2022 — 2024",
            location: "Chitwan, Nepal",
            current: false,
        },
        EducationItem {
            degree: "Secondary Education Exam (SEE)",
            institution: "Gyan Jyoti English School",
            period: "2022",
            location: "Nepal",
            current: false,
        },
    ];

    rsx! {
        section {
            id: "about",
            class: "py-20 relative z-10 border-t border-slate-800/80",
            div { class: "max-w-6xl mx-auto px-4 sm:px-6",
                div { class: "mb-10",
                    div { class: "font-mono text-xs text-cyan-400 mb-1 uppercase tracking-widest",
                        "01 // About"
                    }
                    h2 { class: "text-3xl sm:text-4xl font-bold text-white tracking-tight",
                        "Background & Education"
                    }
                }

                div { class: "grid lg:grid-cols-12 gap-8 items-start",
                    // Bio text
                    div { class: "lg:col-span-6 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed",
                        p {
                            "Engineering undergraduate at "
                            strong { class: "text-white", "Pulchowk Campus (IOE)" }
                            ". I build software ranging from bare-metal microcontrollers and custom network protocols to high-throughput servers and compiled web apps in Rust."
                        }
                        p { class: "text-slate-400 text-sm",
                            "Experienced with C, C++, Rust, FreeRTOS, Java (Netty), FPGA digital logic, and modern WebAssembly architectures."
                        }
                    }

                    // Education Timeline
                    div { class: "lg:col-span-6",
                        div { class: "rounded-2xl bg-[#0d121c] border border-slate-800 p-6 space-y-6 shadow-xl",
                            div { class: "flex items-center gap-2 pb-3 border-b border-slate-800 text-white font-semibold text-sm",
                                GraduationCapIcon { class: "w-4 h-4 text-cyan-400" }
                                span { "Education" }
                            }

                            div { class: "relative border-l border-slate-800 ml-2 space-y-6 pl-5",
                                for item in education {
                                    div { key: "{item.degree}", class: "relative",
                                        div {
                                            class: if item.current {
                                                "absolute -left-[27px] top-1 w-3 h-3 rounded-full border-2 bg-cyan-400 border-[#0d121c]"
                                            } else {
                                                "absolute -left-[27px] top-1 w-3 h-3 rounded-full border-2 bg-slate-700 border-[#0d121c]"
                                            }
                                        }

                                        div { class: "flex items-center justify-between text-xs font-mono text-cyan-400 mb-0.5",
                                            span { "{item.period}" }
                                            if item.current {
                                                span { class: "px-2 py-0.5 rounded bg-cyan-500/10 text-[10px] text-cyan-300 border border-cyan-500/20",
                                                    "Active"
                                                }
                                            }
                                        }

                                        h4 { class: "text-sm font-semibold text-white", "{item.degree}" }
                                        p { class: "text-xs text-slate-400 mt-0.5", "{item.institution}" }

                                        div { class: "flex items-center gap-1 text-[11px] text-slate-500 mt-1",
                                            MapPinIcon { class: "w-3 h-3" }
                                            span { "{item.location}" }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
