use dioxus::prelude::*;
use crate::icons::{CpuIcon, ServerIcon, LayersIcon, GlobeIcon, WrenchIcon};

struct SkillItem {
    name: &'static str,
    note: &'static str,
}

struct SkillCategory {
    title: &'static str,
    group: &'static str,
    skills: Vec<SkillItem>,
}

#[component]
pub fn Skills() -> Element {
    let mut active_tab = use_signal(|| "All".to_string());

    let categories = vec![
        SkillCategory {
            title: "Systems & Low-Level",
            group: "Systems",
            skills: vec![
                SkillItem { name: "Rust", note: "Memory Safety & Wasm" },
                SkillItem { name: "C (C99/C11)", note: "Firmware & Drivers" },
                SkillItem { name: "C++ (C++17/20)", note: "Client Libs & Systems" },
                SkillItem { name: "POSIX & Syscalls", note: "Linux Internals" },
                SkillItem { name: "RISC-V / x86", note: "ISA & Emulators" },
            ],
        },
        SkillCategory {
            title: "Embedded & Hardware",
            group: "Embedded",
            skills: vec![
                SkillItem { name: "FreeRTOS", note: "Tasks & IPC" },
                SkillItem { name: "ESP32 / ESP8266", note: "SoC & WiFi Stack" },
                SkillItem { name: "SystemVerilog / VHDL", note: "FPGA & ALU Design" },
                SkillItem { name: "Embedded Linux", note: "Kernel & Device Trees" },
                SkillItem { name: "Protocols", note: "UART, SPI, I2C" },
            ],
        },
        SkillCategory {
            title: "Networking & Protocols",
            group: "Networking",
            skills: vec![
                SkillItem { name: "Netty Framework", note: "Async Non-blocking I/O" },
                SkillItem { name: "Wire Protocols", note: "Custom Binary Framing" },
                SkillItem { name: "WebSockets & TCP", note: "Persistent Streams" },
                SkillItem { name: "TLS / SSL", note: "Secure Handshakes" },
            ],
        },
        SkillCategory {
            title: "Web & Full-Stack",
            group: "Web",
            skills: vec![
                SkillItem { name: "Dioxus / Rust Web", note: "Reactive Wasm UI" },
                SkillItem { name: "TypeScript & React", note: "Full-Stack Frontends" },
                SkillItem { name: "Tailwind CSS", note: "Systems Aesthetics" },
                SkillItem { name: "PostgreSQL", note: "Relational Schemas" },
            ],
        },
        SkillCategory {
            title: "Tooling & Diagnostics",
            group: "Tools",
            skills: vec![
                SkillItem { name: "GDB & Valgrind", note: "Memory Debugging" },
                SkillItem { name: "Wireshark", note: "Packet Analysis" },
                SkillItem { name: "CMake & Cargo", note: "Cross-Compilation" },
                SkillItem { name: "Git & Linux CLI", note: "Daily Workflow" },
            ],
        },
    ];

    let tabs = vec!["All", "Systems", "Embedded", "Networking", "Web"];

    rsx! {
        section {
            id: "skills",
            class: "py-20 relative z-10 border-t border-slate-800/80",
            div { class: "max-w-6xl mx-auto px-4 sm:px-6",
                // Header
                div { class: "flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4",
                    div {
                        div { class: "font-mono text-xs text-cyan-400 mb-1 uppercase tracking-widest",
                            "02 // Technical Stack"
                        }
                        h2 { class: "text-3xl sm:text-4xl font-bold text-white tracking-tight",
                            "Skills & Technologies"
                        }
                    }

                    div { class: "flex flex-wrap gap-1 p-1 bg-[#0d121c] border border-slate-800 rounded-xl",
                        for tab in tabs {
                            {
                                let is_active = *active_tab.read() == tab;
                                rsx! {
                                    button {
                                        key: "{tab}",
                                        onclick: move |_| active_tab.set(tab.to_string()),
                                        class: if is_active {
                                            "px-3 py-1 rounded-lg text-xs font-mono transition-colors bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-medium"
                                        } else {
                                            "px-3 py-1 rounded-lg text-xs font-mono transition-colors text-slate-400 hover:text-slate-200"
                                        },
                                        "{tab}"
                                    }
                                }
                            }
                        }
                    }
                }

                // Grid
                div { class: "grid md:grid-cols-2 lg:grid-cols-3 gap-5",
                    for cat in categories.into_iter().filter(|c| {
                        let cur = active_tab.read().clone();
                        cur == "All" || c.group == cur
                    }) {
                        div {
                            key: "{cat.title}",
                            class: "rounded-2xl bg-[#0d121c] border border-slate-800 p-5 hover:border-slate-700 transition-colors shadow-lg",
                            div { class: "flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-800",
                                div { class: "p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400",
                                    match cat.group {
                                        "Systems" => rsx! { ServerIcon { class: "w-4 h-4" } },
                                        "Embedded" => rsx! { CpuIcon { class: "w-4 h-4" } },
                                        "Networking" => rsx! { LayersIcon { class: "w-4 h-4" } },
                                        "Web" => rsx! { GlobeIcon { class: "w-4 h-4" } },
                                        _ => rsx! { WrenchIcon { class: "w-4 h-4" } },
                                    }
                                }
                                h3 { class: "text-sm font-bold text-white", "{cat.title}" }
                            }

                            div { class: "space-y-2",
                                for skill in cat.skills {
                                    div {
                                        key: "{skill.name}",
                                        class: "flex items-center justify-between p-2 rounded-lg bg-[#111724]/60 border border-slate-800/50 text-xs",
                                        span { class: "font-mono font-medium text-slate-200", "{skill.name}" }
                                        span { class: "text-[11px] font-mono text-cyan-400/80", "{skill.note}" }
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
