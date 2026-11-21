use dioxus::prelude::*;
use crate::icons::{GithubIcon, ArrowUpRightIcon};

struct ProjectItem {
    title: &'static str,
    category: &'static str,
    description: &'static str,
    tech: Vec<&'static str>,
    github: &'static str,
}

#[component]
pub fn Projects() -> Element {
    let mut active_cat = use_signal(|| "All".to_string());

    let projects = vec![
        ProjectItem {
            title: "riscv-emulator",
            category: "Systems",
            description: "Modular 32-bit RISC-V (RV32I base instruction set) processor emulator written in Rust.",
            tech: vec!["Rust", "RISC-V", "Emulation", "Computer Architecture"],
            github: "https://github.com/animeshdhakal/riscv-emulator",
        },
        ProjectItem {
            title: "animesh-os",
            category: "Systems",
            description: "Hobby operating system kernel implementing core boot stages, memory management, and hardware interrupts.",
            tech: vec!["C", "x86 Assembly", "OS Dev", "Kernel"],
            github: "https://github.com/animeshdhakal/animesh-os",
        },
        ProjectItem {
            title: "post-quantum-cryptography-fpga",
            category: "Hardware",
            description: "Hardware implementation of NIST Post-Quantum Crystals-Kyber cryptographic lattice algorithm.",
            tech: vec!["SystemVerilog", "FPGA", "Cryptography", "Digital Design"],
            github: "https://github.com/animeshdhakal/post-quantum-cryptography-fpga",
        },
        ProjectItem {
            title: "SocketIoT",
            category: "IoT",
            description: "High-throughput IoT message broker built with Netty, custom binary wire framing, and automated SSL.",
            tech: vec!["Java", "Netty", "Custom Protocol", "WebSockets"],
            github: "https://github.com/animeshdhakal/SocketIoT",
        },
        ProjectItem {
            title: "dhakal-lang",
            category: "Systems",
            description: "Custom interpreted programming language featuring lexer, AST parser, and tree-walk runtime engine in Rust.",
            tech: vec!["Rust", "Compilers", "AST", "Language Design"],
            github: "https://github.com/animeshdhakal/dhakal-lang",
        },
        ProjectItem {
            title: "SocketIoTLibRTOS",
            category: "Hardware",
            description: "Memory-optimized C client library (<4KB RAM) for ESP8266 and FreeRTOS microcontrollers.",
            tech: vec!["C99", "FreeRTOS", "ESP8266", "Embedded"],
            github: "https://github.com/animeshdhakal/SocketIoTLibRTOS",
        },
        ProjectItem {
            title: "8-bit-cpu",
            category: "Hardware",
            description: "Basic 8-bit CPU architecture designed and simulated with ALU, registers, and microcode instructions.",
            tech: vec!["VHDL", "Digital Logic", "CPU Design"],
            github: "https://github.com/animeshdhakal/8-bit-cpu",
        },
        ProjectItem {
            title: "dns-server",
            category: "Systems",
            description: "Lightweight authoritative and recursive DNS server handling UDP packet queries written in Rust.",
            tech: vec!["Rust", "DNS", "UDP", "Networking"],
            github: "https://github.com/animeshdhakal/dns-server",
        },
        ProjectItem {
            title: "6502Emulator",
            category: "Systems",
            description: "Cycle-accurate emulator of the classic MOS Technology 6502 8-bit microprocessor in C.",
            tech: vec!["C", "Emulation", "6502", "Microprocessors"],
            github: "https://github.com/animeshdhakal/6502Emulator",
        },
        ProjectItem {
            title: "SocketIoTLib",
            category: "IoT",
            description: "High-performance, zero-overhead C++ client library for embedded Linux and desktop IoT targets.",
            tech: vec!["C++17", "Asynchronous I/O", "Networking", "CMake"],
            github: "https://github.com/animeshdhakal/SocketIoTLib",
        },
    ];

    let categories = vec!["All", "Systems", "Hardware", "IoT"];

    rsx! {
        section {
            id: "projects",
            class: "py-20 relative z-10 border-t border-slate-800/80",
            div { class: "max-w-6xl mx-auto px-4 sm:px-6",
                // Header
                div { class: "flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4",
                    div {
                        div { class: "font-mono text-xs text-cyan-400 mb-1 uppercase tracking-widest",
                            "03 // Repositories"
                        }
                        h2 { class: "text-3xl sm:text-4xl font-bold text-white tracking-tight",
                            "Featured Projects"
                        }
                    }

                    div { class: "flex flex-wrap items-center gap-2 p-1 bg-[#0d121c] border border-slate-800 rounded-xl",
                        for cat in categories {
                            {
                                let is_active = *active_cat.read() == cat;
                                rsx! {
                                    button {
                                        key: "{cat}",
                                        onclick: move |_| active_cat.set(cat.to_string()),
                                        class: if is_active {
                                            "px-3 py-1 rounded-lg text-xs font-mono transition-colors bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-medium"
                                        } else {
                                            "px-3 py-1 rounded-lg text-xs font-mono transition-colors text-slate-400 hover:text-slate-200"
                                        },
                                        "{cat}"
                                    }
                                }
                            }
                        }
                    }
                }

                // Grid
                div { class: "grid md:grid-cols-2 lg:grid-cols-3 gap-5",
                    for project in projects.into_iter().filter(|p| {
                        let cur = active_cat.read().clone();
                        cur == "All" || p.category == cur
                    }) {
                        div {
                            key: "{project.title}",
                            class: "rounded-2xl bg-[#0d121c] border border-slate-800 p-5 flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl group",
                            div {
                                div { class: "flex items-center justify-between gap-2 mb-3",
                                    span { class: "text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
                                        "{project.category}"
                                    }
                                    a {
                                        href: "{project.github}",
                                        target: "_blank",
                                        class: "text-slate-400 hover:text-white transition-colors",
                                        GithubIcon { class: "w-4 h-4" }
                                    }
                                }

                                h3 { class: "text-base font-bold text-white font-mono group-hover:text-cyan-300 transition-colors flex items-center gap-1.5",
                                    "{project.title}"
                                    ArrowUpRightIcon { class: "w-3.5 h-3.5 opacity-60 group-hover:opacity-100" }
                                }

                                p { class: "text-xs text-slate-400 mt-2 leading-relaxed",
                                    "{project.description}"
                                }
                            }

                            div { class: "mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5",
                                for t in project.tech {
                                    span {
                                        key: "{t}",
                                        class: "px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 border border-slate-800 text-slate-400",
                                        "{t}"
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
