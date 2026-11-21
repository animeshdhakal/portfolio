#![allow(dead_code)]

use dioxus::prelude::*;
use crate::icons::{TerminalIcon, TrashIcon, SparklesIcon, CornerDownLeftIcon, CloseIcon};

#[derive(Clone, PartialEq)]
pub struct HistoryEntry {
    pub cmd: String,
    pub output: String,
}

fn run_command(
    cmd_str: &str,
    mut history: Signal<Vec<HistoryEntry>>,
    mut matrix_mode: Signal<bool>,
    mut input: Signal<String>,
) {
    let trimmed = cmd_str.trim().to_lowercase();
    if trimmed.is_empty() {
        return;
    }

    match trimmed.as_str() {
        "matrix" => {
            matrix_mode.set(true);
            input.set(String::new());
            return;
        }
        "clear" => {
            history.set(vec![]);
            input.set(String::new());
            return;
        }
        "help" => {
            let out = "AVAILABLE COMMANDS:\n  neofetch   - System specs and engineering toolchain\n  bio        - Background and focus areas\n  skills     - Programming languages & microcontrollers\n  projects   - GitHub repositories\n  education  - Pulchowk IOE details\n  matrix     - Digital rain stream\n  ping       - Roundtrip socket test\n  clear      - Clear console window".to_string();
            history.write().push(HistoryEntry { cmd: cmd_str.to_string(), output: out });
        }
        "neofetch" | "specs" => {
            let out = "animesh@pulchowk-ioe\n--------------------\nOS:        Embedded Linux / POSIX\nCampus:    IOE Pulchowk Campus, Tribhuvan University\nMajor:     B.E. Electronics, Communication & Information\nLanguages: C, C++, Rust, SystemVerilog, VHDL, Java, TypeScript\nFirmware:  FreeRTOS, ESP-IDF, Netty, POSIX Sockets\nWasm:      Compiled via Dioxus 0.6 & wasm32-unknown-unknown".to_string();
            history.write().push(HistoryEntry { cmd: cmd_str.to_string(), output: out });
        }
        "bio" => {
            let out = "Animesh Dhakal is an Electronics & Communication engineer at Pulchowk Campus (IOE).\nHe creates CPU emulators (RISC-V/6502), compilers (dhakal-lang), hobby OS kernels (animesh-os), FPGA crypto implementations (Kyber), and distributed network infrastructure (SocketIoT).".to_string();
            history.write().push(HistoryEntry { cmd: cmd_str.to_string(), output: out });
        }
        "skills" => {
            let out = "ENGINEERING STACK:\n• Systems:  C, C++, Rust, RISC-V, POSIX, Linux Kernel\n• Hardware: SystemVerilog, VHDL, FPGA, FreeRTOS, ESP32\n• Network:  Netty, Custom Wire Framing, WebSockets, TCP/UDP\n• Web:      Dioxus, Rust WebAssembly, React, TypeScript, Tailwind".to_string();
            history.write().push(HistoryEntry { cmd: cmd_str.to_string(), output: out });
        }
        "projects" => {
            let out = "GITHUB REPOSITORIES:\n• riscv-emulator (Rust)  — 32-bit RV32I processor emulator\n• animesh-os (C)        — Hobby x86 operating system kernel\n• post-quantum-crypto   — Kyber lattice algorithm on FPGA\n• SocketIoT (Java)      — High-throughput IoT messaging broker\n• dhakal-lang (Rust)    — Custom language AST runtime".to_string();
            history.write().push(HistoryEntry { cmd: cmd_str.to_string(), output: out });
        }
        "education" => {
            let out = "ACADEMICS:\n• Pulchowk Campus (IOE), TU (2024–Present): B.E. Electronics & Communication\n• Valmiki Shiksha Sadan (2022–2024): High School (+2 Science)\n• Gyan Jyoti English School (2022): Secondary Education (SEE)".to_string();
            history.write().push(HistoryEntry { cmd: cmd_str.to_string(), output: out });
        }
        "ping" => {
            let out = "PING github.com/animeshdhakal: 56 data bytes\n64 bytes from animesh.dev: icmp_seq=0 ttl=64 time=0.038 ms\n--- ping statistics: 0% packet loss ---".to_string();
            history.write().push(HistoryEntry { cmd: cmd_str.to_string(), output: out });
        }
        _ => {
            let out = format!("command not found: {trimmed}. Type 'help' for available commands.");
            history.write().push(HistoryEntry { cmd: cmd_str.to_string(), output: out });
        }
    }

    input.set(String::new());
}

#[component]
pub fn TerminalPlayground() -> Element {
    let mut input = use_signal(|| String::new());
    let mut matrix_mode = use_signal(|| false);
    let mut history = use_signal(|| vec![
        HistoryEntry {
            cmd: "welcome".to_string(),
            output: "Animesh Dhakal // Systems Interactive Shell v2.5 (Rust + WebAssembly)\nType 'help' to view available commands, or click any preset below.".to_string(),
        }
    ]);

    let presets = vec!["neofetch", "matrix", "skills", "projects", "education", "ping"];

    rsx! {
        section {
            id: "terminal",
            class: "py-20 relative z-10 border-t border-slate-800/80",
            div { class: "max-w-6xl mx-auto px-4 sm:px-6",
                // Header
                div { class: "mb-10",
                    div { class: "font-mono text-xs text-cyan-400 mb-1 uppercase tracking-widest",
                        "05 // Interactive Console"
                    }
                    h2 { class: "text-3xl sm:text-4xl font-bold text-white tracking-tight",
                        "Terminal Playground"
                    }
                }

                // Window Box
                div { class: "rounded-2xl bg-[#090d14] border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs",
                    // Header Bar
                    div { class: "px-4 py-3 bg-[#0e131d] border-b border-slate-800 flex items-center justify-between",
                        div { class: "flex items-center gap-2",
                            div { class: "w-3 h-3 rounded-full bg-red-500/70" }
                            div { class: "w-3 h-3 rounded-full bg-amber-500/70" }
                            div { class: "w-3 h-3 rounded-full bg-emerald-500/70" }
                            span { class: "text-slate-400 text-[11px] ml-2 flex items-center gap-1.5",
                                TerminalIcon { class: "w-3.5 h-3.5 text-cyan-400" }
                                "guest@animesh: ~ (wasm)"
                            }
                        }

                        button {
                            onclick: move |_| {
                                history.set(vec![]);
                                matrix_mode.set(false);
                            },
                            class: "flex items-center gap-1 text-[11px] text-slate-500 hover:text-slate-300 transition-colors",
                            TrashIcon { class: "w-3 h-3" }
                            span { "clear" }
                        }
                    }

                    // Content Screen
                    if *matrix_mode.read() {
                        div { class: "p-8 h-[360px] bg-black text-emerald-400 font-mono text-xs flex flex-col justify-between items-center text-center overflow-hidden relative",
                            div { class: "space-y-2 relative z-10",
                                p { class: "text-emerald-300 font-bold tracking-widest text-sm", "MATRIX STREAM ACTIVE" }
                                p { class: "text-emerald-500/80 text-[11px]", "01010100 01010010 01001110 01011001" }
                                p { class: "text-emerald-400/60 text-xs", "01100001 01101110 01101001 01101101 01100101 01110011 01101000" }
                            }
                            button {
                                onclick: move |_| matrix_mode.set(false),
                                class: "px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5 transition-colors z-10",
                                CloseIcon { class: "w-3.5 h-3.5" }
                                span { "Exit Stream" }
                            }
                        }
                    } else {
                        // Terminal Scrollable View (container scrolls internally, no page jump!)
                        div { class: "p-5 space-y-3.5 max-h-[360px] overflow-y-auto bg-black/30",
                            for (idx, item) in history.read().iter().enumerate() {
                                div { key: "{idx}", class: "space-y-1",
                                    if item.cmd != "welcome" {
                                        div { class: "flex items-center gap-2 text-cyan-400 font-semibold",
                                            span { class: "text-slate-500", "$" }
                                            span { "{item.cmd}" }
                                        }
                                    }
                                    div { class: "pl-4 text-slate-300 whitespace-pre-wrap leading-relaxed",
                                        "{item.output}"
                                    }
                                }
                            }
                        }

                        // Terminal Input Prompt
                        div { class: "p-3 bg-[#0e131d] border-t border-slate-800 flex items-center gap-2",
                            span { class: "text-cyan-400 font-bold pl-2", "$" }
                            input {
                                r#type: "text",
                                value: "{input}",
                                oninput: move |e| input.set(e.value()),
                                onkeydown: move |e| {
                                    if e.key() == Key::Enter {
                                        run_command(&input.read().clone(), history, matrix_mode, input);
                                    }
                                },
                                placeholder: "Type 'help', 'matrix', 'neofetch', or click a preset...",
                                class: "flex-1 bg-transparent text-slate-100 placeholder-slate-600 focus:outline-none font-mono text-xs",
                            }
                            button {
                                onclick: move |_| run_command(&input.read().clone(), history, matrix_mode, input),
                                class: "p-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 transition-colors",
                                CornerDownLeftIcon { class: "w-3.5 h-3.5" }
                            }
                        }
                    }
                }

                // Presets Bar
                div { class: "mt-3 flex flex-wrap items-center gap-2",
                    span { class: "text-[11px] font-mono text-slate-500 flex items-center gap-1 mr-1",
                        SparklesIcon { class: "w-3 h-3 text-cyan-400" }
                        "Presets:"
                    }
                    for cmd in presets {
                        button {
                            key: "{cmd}",
                            onclick: move |_| run_command(cmd, history, matrix_mode, input),
                            class: "px-2.5 py-1 rounded-lg border font-mono text-xs bg-slate-900 border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-all",
                            "{cmd}"
                        }
                    }
                }
            }
        }
    }
}
