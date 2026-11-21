#![allow(dead_code)]

use dioxus::prelude::*;
use crate::icons::{SkipForwardIcon, RotateCcwIcon, SparklesIcon};

#[derive(Clone, Debug, PartialEq)]
pub struct Instruction {
    pub raw: &'static str,
    pub op: &'static str,
    pub rd: usize,
    pub rs1: usize,
    pub rs2: usize,
    pub imm: i32,
    pub comment: &'static str,
}

#[derive(Clone, PartialEq)]
pub struct Preset {
    pub name: &'static str,
    pub description: &'static str,
    pub instructions: Vec<Instruction>,
}

pub fn get_presets() -> Vec<Preset> {
    vec![
        Preset {
            name: "Fibonacci Sequence",
            description: "Generates iterative Fibonacci terms in registers x1, x2, and x3.",
            instructions: vec![
                Instruction { raw: "ADDI x1, x0, 0", op: "ADDI", rd: 1, rs1: 0, rs2: 0, imm: 0, comment: "F(0) = 0" },
                Instruction { raw: "ADDI x2, x0, 1", op: "ADDI", rd: 2, rs1: 0, rs2: 0, imm: 1, comment: "F(1) = 1" },
                Instruction { raw: "ADD  x3, x1, x2", op: "ADD", rd: 3, rs1: 1, rs2: 2, imm: 0, comment: "F(2) = 0 + 1 = 1" },
                Instruction { raw: "ADDI x1, x2, 0", op: "ADDI", rd: 1, rs1: 2, rs2: 0, imm: 0, comment: "Shift x1 <= x2" },
                Instruction { raw: "ADDI x2, x3, 0", op: "ADDI", rd: 2, rs1: 3, rs2: 0, imm: 0, comment: "Shift x2 <= x3" },
                Instruction { raw: "ADD  x3, x1, x2", op: "ADD", rd: 3, rs1: 1, rs2: 2, imm: 0, comment: "F(3) = 1 + 1 = 2" },
                Instruction { raw: "ADDI x1, x2, 0", op: "ADDI", rd: 1, rs1: 2, rs2: 0, imm: 0, comment: "Shift x1 <= x2" },
                Instruction { raw: "ADDI x2, x3, 0", op: "ADDI", rd: 2, rs1: 3, rs2: 0, imm: 0, comment: "Shift x2 <= x3" },
                Instruction { raw: "ADD  x3, x1, x2", op: "ADD", rd: 3, rs1: 1, rs2: 2, imm: 0, comment: "F(4) = 1 + 2 = 3" },
            ],
        },
        Preset {
            name: "Bitwise Logic & Masking",
            description: "Demonstrates XOR, ANDI and SLLI bitwise operations.",
            instructions: vec![
                Instruction { raw: "ADDI x1, x0, 15", op: "ADDI", rd: 1, rs1: 0, rs2: 0, imm: 15, comment: "x1 = 0x0F (15)" },
                Instruction { raw: "ADDI x2, x0, 240", op: "ADDI", rd: 2, rs1: 0, rs2: 0, imm: 240, comment: "x2 = 0xF0 (240)" },
                Instruction { raw: "XOR  x3, x1, x2", op: "XOR", rd: 3, rs1: 1, rs2: 2, imm: 0, comment: "x3 = x1 ^ x2 (0xFF)" },
                Instruction { raw: "ANDI x4, x3, 7", op: "ANDI", rd: 4, rs1: 3, rs2: 0, imm: 7, comment: "x4 = x3 & 0x07 (7)" },
                Instruction { raw: "SLLI x5, x4, 2", op: "SLLI", rd: 5, rs1: 4, rs2: 0, imm: 2, comment: "x5 = 7 << 2 (28)" },
            ],
        },
        Preset {
            name: "Arithmetic Accumulator",
            description: "Immediate addition and shift scaling.",
            instructions: vec![
                Instruction { raw: "ADDI x1, x0, 12", op: "ADDI", rd: 1, rs1: 0, rs2: 0, imm: 12, comment: "Initialize base value = 12" },
                Instruction { raw: "ADDI x2, x0, 38", op: "ADDI", rd: 2, rs1: 0, rs2: 0, imm: 38, comment: "Initialize addend = 38" },
                Instruction { raw: "ADD  x3, x1, x2", op: "ADD", rd: 3, rs1: 1, rs2: 2, imm: 0, comment: "Sum = 12 + 38 = 50" },
                Instruction { raw: "ADDI x4, x3, -8", op: "ADDI", rd: 4, rs1: 3, rs2: 0, imm: -8, comment: "Offset = 50 - 8 = 42" },
                Instruction { raw: "SLLI x5, x4, 1", op: "SLLI", rd: 5, rs1: 4, rs2: 0, imm: 1, comment: "Multiply by 2 = 84" },
            ],
        },
    ]
}

fn step_cpu(
    selected_idx: Signal<usize>,
    mut pc: Signal<usize>,
    mut clock_cycles: Signal<usize>,
    mut registers: Signal<[i32; 8]>,
    mut last_changed: Signal<Option<usize>>,
) {
    let presets = get_presets();
    let current_pc = *pc.read();
    let cur_p = &presets[*selected_idx.read()];
    if current_pc >= cur_p.instructions.len() {
        return;
    }

    let inst = &cur_p.instructions[current_pc];
    let mut regs = *registers.read();

    match inst.op {
        "ADDI" => {
            if inst.rd != 0 {
                regs[inst.rd] = regs[inst.rs1].wrapping_add(inst.imm);
                last_changed.set(Some(inst.rd));
            }
        }
        "ADD" => {
            if inst.rd != 0 {
                regs[inst.rd] = regs[inst.rs1].wrapping_add(regs[inst.rs2]);
                last_changed.set(Some(inst.rd));
            }
        }
        "XOR" => {
            if inst.rd != 0 {
                regs[inst.rd] = regs[inst.rs1] ^ regs[inst.rs2];
                last_changed.set(Some(inst.rd));
            }
        }
        "ANDI" => {
            if inst.rd != 0 {
                regs[inst.rd] = regs[inst.rs1] & inst.imm;
                last_changed.set(Some(inst.rd));
            }
        }
        "SLLI" => {
            if inst.rd != 0 {
                regs[inst.rd] = regs[inst.rs1].wrapping_shl(inst.imm as u32);
                last_changed.set(Some(inst.rd));
            }
        }
        _ => {}
    }

    regs[0] = 0;
    registers.set(regs);
    pc.set(current_pc + 1);
    let next_cycles = *clock_cycles.read() + 1;
    clock_cycles.set(next_cycles);
}

fn reset_cpu(
    mut selected_idx: Signal<usize>,
    mut pc: Signal<usize>,
    mut clock_cycles: Signal<usize>,
    mut registers: Signal<[i32; 8]>,
    mut last_changed: Signal<Option<usize>>,
    idx: Option<usize>,
) {
    if let Some(i) = idx {
        selected_idx.set(i);
    }
    pc.set(0);
    clock_cycles.set(0);
    registers.set([0i32; 8]);
    last_changed.set(None);
}

#[component]
pub fn RiscvSimulator() -> Element {
    let presets = get_presets();
    let selected_idx = use_signal(|| 0usize);
    let pc = use_signal(|| 0usize);
    let clock_cycles = use_signal(|| 0usize);
    let registers = use_signal(|| [0i32; 8]);
    let last_changed = use_signal(|| None::<usize>);

    let cur_preset = &presets[*selected_idx.read()];
    let total_instructions = cur_preset.instructions.len();

    rsx! {
        section {
            id: "simulator",
            class: "py-20 relative z-10 border-t border-slate-800/80",
            div { class: "max-w-6xl mx-auto px-4 sm:px-6",
                // Header
                div { class: "mb-10",
                    div { class: "font-mono text-xs text-cyan-400 mb-1 uppercase tracking-widest",
                        "04 // Micro-Architecture"
                    }
                    h2 { class: "text-3xl sm:text-4xl font-bold text-white tracking-tight flex items-center gap-2",
                        "RISC-V (RV32I) Simulator"
                        span { class: "text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-normal",
                            "Native Rust Engine"
                        }
                    }
                    p { class: "text-slate-400 text-sm mt-2 max-w-2xl",
                        "Live 32-bit register file and pipeline simulation running via compiled WebAssembly."
                    }
                }

                // Presets Bar
                div { class: "flex flex-wrap items-center gap-2 mb-6",
                    span { class: "text-xs font-mono text-slate-500 flex items-center gap-1",
                        SparklesIcon { class: "w-3 h-3 text-cyan-400" }
                        "Preset:"
                    }
                    for (i, p) in presets.iter().enumerate() {
                        {
                            let is_sel = *selected_idx.read() == i;
                            rsx! {
                                button {
                                    key: "{p.name}",
                                    onclick: move |_| reset_cpu(selected_idx, pc, clock_cycles, registers, last_changed, Some(i)),
                                    class: if is_sel {
                                        "px-3 py-1.5 rounded-xl font-mono text-xs bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-semibold"
                                    } else {
                                        "px-3 py-1.5 rounded-xl font-mono text-xs bg-[#0d121c] border border-slate-800 text-slate-400 hover:text-white"
                                    },
                                    "{p.name}"
                                }
                            }
                        }
                    }
                }

                // Simulator Window
                div { class: "rounded-2xl bg-[#090d14] border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs",
                    // Controls Top Bar
                    div { class: "px-4 py-3 bg-[#0e131d] border-b border-slate-800 flex flex-wrap items-center justify-between gap-3",
                        div { class: "flex items-center gap-3",
                            div { class: "flex items-center gap-1.5",
                                div { class: "w-3 h-3 rounded-full bg-red-500/70" }
                                div { class: "w-3 h-3 rounded-full bg-amber-500/70" }
                                div { class: "w-3 h-3 rounded-full bg-emerald-500/70" }
                            }
                            span { class: "text-slate-400 text-xs", "RV32I Core: 0x00000000" }
                        }

                        div { class: "flex items-center gap-2",
                            button {
                                onclick: move |_| step_cpu(selected_idx, pc, clock_cycles, registers, last_changed),
                                disabled: *pc.read() >= total_instructions,
                                class: "px-3 py-1 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-cyan-300 flex items-center gap-1.5 transition-colors disabled:opacity-40 disabled:cursor-not-allowed",
                                SkipForwardIcon { class: "w-3 h-3" }
                                span { "Step Clock" }
                            }

                            button {
                                onclick: move |_| reset_cpu(selected_idx, pc, clock_cycles, registers, last_changed, None),
                                class: "px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 flex items-center gap-1.5 transition-colors",
                                RotateCcwIcon { class: "w-3 h-3" }
                                span { "Reset" }
                            }

                            span { class: "text-slate-500 ml-2",
                                "Cycles: "
                                span { class: "text-cyan-400 font-bold", "{clock_cycles}" }
                            }
                        }
                    }

                    // Content: Instructions & Register File Grid
                    div { class: "grid md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-slate-800",
                        // Left: Instruction Stream
                        div { class: "md:col-span-7 p-4 space-y-1.5 max-h-[360px] overflow-y-auto bg-black/20",
                            for (idx, inst) in cur_preset.instructions.iter().enumerate() {
                                {
                                    let is_active = *pc.read() == idx;
                                    rsx! {
                                        div {
                                            key: "{idx}",
                                            class: if is_active {
                                                "flex items-center justify-between p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300"
                                            } else {
                                                "flex items-center justify-between p-2 rounded-lg hover:bg-white/[0.02] text-slate-300"
                                            },
                                            div { class: "flex items-center gap-3 font-mono",
                                                span { class: "text-slate-600 text-[11px] w-6", "{idx * 4:02X}" }
                                                span { class: if is_active { "font-bold text-white" } else { "" }, "{inst.raw}" }
                                            }
                                            span { class: "text-[11px] text-slate-500 italic", "{inst.comment}" }
                                        }
                                    }
                                }
                            }
                        }

                        // Right: Registers (x0..x7)
                        div { class: "md:col-span-5 p-4 bg-[#0c1018]",
                            div { class: "text-[11px] text-slate-500 font-semibold mb-3 uppercase tracking-wider",
                                "General Purpose Registers (RV32I)"
                            }
                            div { class: "grid grid-cols-2 gap-2 font-mono text-xs",
                                for i in 0..8 {
                                    {
                                        let val = registers.read()[i];
                                        let is_last = *last_changed.read() == Some(i);
                                        rsx! {
                                            div {
                                                key: "{i}",
                                                class: if is_last {
                                                    "p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex justify-between items-center transition-colors"
                                                } else {
                                                    "p-2 rounded-lg bg-[#111724]/60 border border-slate-800/60 flex justify-between items-center"
                                                },
                                                span { class: "text-slate-400 font-bold", "x{i}" }
                                                span { class: if is_last { "text-emerald-400 font-bold" } else { "text-slate-200" },
                                                    "{val}"
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
    }
}
