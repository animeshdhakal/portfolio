use dioxus::prelude::*;
use crate::icons::ArrowUpRightIcon;

struct Project {
    title: &'static str,
    desc: &'static str,
    lang: &'static str,
    tags: &'static str,
    url: &'static str,
}

#[component]
pub fn Projects() -> Element {
    let top_projects = vec![
        Project {
            title: "riscv-emulator",
            desc: "Modular 32-bit RISC-V (RV32I) processor emulator with custom instruction decoding and memory bus simulation.",
            lang: "Rust",
            tags: "Emulation • Computer Architecture",
            url: "https://github.com/animeshdhakal/riscv-emulator",
        },
        Project {
            title: "animesh-os",
            desc: "Hobby x86 operating system kernel with multi-stage bootloader, memory paging, and hardware interrupt handlers.",
            lang: "C / Assembly",
            tags: "Operating Systems • Kernel Dev",
            url: "https://github.com/animeshdhakal/animesh-os",
        },
        Project {
            title: "post-quantum-cryptography-fpga",
            desc: "Hardware synthesis of the NIST Post-Quantum Crystals-Kyber lattice-based cryptographic algorithm on FPGA.",
            lang: "SystemVerilog",
            tags: "FPGA • Cryptography • RTL",
            url: "https://github.com/animeshdhakal/post-quantum-cryptography-fpga",
        },
        Project {
            title: "SocketIoT",
            desc: "High-throughput IoT messaging broker engineered with Netty, custom binary wire framing, and automated SSL handshakes.",
            lang: "Java / Netty",
            tags: "Distributed Networking • Broker",
            url: "https://github.com/animeshdhakal/SocketIoT",
        },
        Project {
            title: "dhakal-lang",
            desc: "Custom interpreted programming language featuring handwritten lexer, recursive-descent AST parser, and tree-walk runtime.",
            lang: "Rust",
            tags: "Compiler Design • Interpreters",
            url: "https://github.com/animeshdhakal/dhakal-lang",
        },
    ];

    rsx! {
        section { id: "projects", class: "py-14 border-t border-zinc-800/60",
            div { class: "max-w-4xl mx-auto px-6 space-y-6",
                div { class: "flex items-center justify-between",
                    h2 { class: "text-lg font-mono font-semibold text-zinc-100 flex items-center gap-2",
                        span { class: "text-cyan-400", "02." }
                        "Selected Projects"
                    }
                    a {
                        href: "https://github.com/animeshdhakal?tab=repositories",
                        target: "_blank",
                        class: "text-xs font-mono text-zinc-400 hover:text-cyan-400 transition-colors flex items-center gap-1",
                        span { "all repos" }
                        ArrowUpRightIcon { class: "w-3 h-3" }
                    }
                }

                div { class: "divide-y divide-zinc-800/60",
                    for p in top_projects {
                        a {
                            key: "{p.title}",
                            href: "{p.url}",
                            target: "_blank",
                            class: "group block py-5 transition-all hover:pl-2",
                            div { class: "flex flex-col sm:flex-row sm:items-baseline justify-between gap-1",
                                h3 { class: "text-base font-semibold font-mono text-zinc-100 group-hover:text-cyan-300 transition-colors flex items-center gap-1.5",
                                    "{p.title}"
                                    ArrowUpRightIcon { class: "w-3.5 h-3.5 text-zinc-600 group-hover:text-cyan-400 transition-colors" }
                                }
                                div { class: "flex items-center gap-2 text-xs font-mono",
                                    span { class: "text-cyan-400 font-medium", "{p.lang}" }
                                    span { class: "text-zinc-600 hidden sm:inline", "•" }
                                    span { class: "text-zinc-500 text-[11px] hidden sm:inline", "{p.tags}" }
                                }
                            }
                            p { class: "text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed max-w-2xl font-sans",
                                "{p.desc}"
                            }
                        }
                    }
                }
            }
        }
    }
}
