import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, SkipForward, RotateCcw, Cpu, ArrowUpRight, CheckCircle, Sparkles } from "lucide-react";
import { playClickSound } from "../utils/audio";

interface Instruction {
  raw: string;
  op: string;
  rd: string;
  rs1?: string;
  rs2?: string;
  imm?: number;
  comment?: string;
}

interface ProgramPreset {
  name: string;
  description: string;
  code: Instruction[];
}

const RiscvSimulator: React.FC = () => {
  const presets: ProgramPreset[] = [
    {
      name: "Fibonacci Sequence",
      description: "Generates iterative Fibonacci terms in registers x1, x2, and x3.",
      code: [
        { raw: "ADDI x1, x0, 0", op: "ADDI", rd: "x1", rs1: "x0", imm: 0, comment: "F(0) = 0" },
        { raw: "ADDI x2, x0, 1", op: "ADDI", rd: "x2", rs1: "x0", imm: 1, comment: "F(1) = 1" },
        { raw: "ADD  x3, x1, x2", op: "ADD", rd: "x3", rs1: "x1", rs2: "x2", comment: "F(2) = 0 + 1 = 1" },
        { raw: "ADDI x1, x2, 0", op: "ADDI", rd: "x1", rs1: "x2", imm: 0, comment: "Shift x1 <= x2" },
        { raw: "ADDI x2, x3, 0", op: "ADDI", rd: "x2", rs1: "x3", imm: 0, comment: "Shift x2 <= x3" },
        { raw: "ADD  x3, x1, x2", op: "ADD", rd: "x3", rs1: "x1", rs2: "x2", comment: "F(3) = 1 + 1 = 2" },
        { raw: "ADDI x1, x2, 0", op: "ADDI", rd: "x1", rs1: "x2", imm: 0, comment: "Shift x1 <= x2" },
        { raw: "ADDI x2, x3, 0", op: "ADDI", rd: "x2", rs1: "x3", imm: 0, comment: "Shift x2 <= x3" },
        { raw: "ADD  x3, x1, x2", op: "ADD", rd: "x3", rs1: "x1", rs2: "x2", comment: "F(4) = 1 + 2 = 3" },
      ],
    },
    {
      name: "Bitwise Logic & Masking",
      description: "Applies bitwise operations, shifts and masks.",
      code: [
        { raw: "ADDI x1, x0, 15", op: "ADDI", rd: "x1", rs1: "x0", imm: 15, comment: "x1 = 0x0F (15)" },
        { raw: "ADDI x2, x0, 240", op: "ADDI", rd: "x2", rs1: "x0", imm: 240, comment: "x2 = 0xF0 (240)" },
        { raw: "XOR  x3, x1, x2", op: "XOR", rd: "x3", rs1: "x1", rs2: "x2", comment: "x3 = x1 ^ x2 (0xFF)" },
        { raw: "ANDI x4, x3, 7", op: "ANDI", rd: "x4", rs1: "x3", imm: 7, comment: "x4 = x3 & 0x07 (7)" },
        { raw: "SLLI x5, x4, 2", op: "SLLI", rd: "x5", rs1: "x4", imm: 2, comment: "x5 = 7 << 2 (28)" },
      ],
    },
    {
      name: "Arithmetic Accumulator",
      description: "Demonstrates immediate arithmetic with additive offsets.",
      code: [
        { raw: "ADDI x1, x0, 12", op: "ADDI", rd: "x1", rs1: "x0", imm: 12, comment: "Initialize base value = 12" },
        { raw: "ADDI x2, x0, 38", op: "ADDI", rd: "x2", rs1: "x0", imm: 38, comment: "Initialize addend = 38" },
        { raw: "ADD  x3, x1, x2", op: "ADD", rd: "x3", rs1: "x1", rs2: "x2", comment: "Sum = 12 + 38 = 50" },
        { raw: "SUBI x4, x3, 8", op: "SUBI", rd: "x4", rs1: "x3", imm: 8, comment: "Subtract = 50 - 8 = 42" },
        { raw: "SLLI x5, x4, 1", op: "SLLI", rd: "x5", rs1: "x4", imm: 1, comment: "Multiply by 2 = 84" },
      ],
    },
  ];

  const [selectedPresetIdx, setSelectedPresetIdx] = useState(0);
  const [pc, setPc] = useState(0);
  const [registers, setRegisters] = useState<{ [reg: string]: number }>({
    x0: 0,
    x1: 0,
    x2: 0,
    x3: 0,
    x4: 0,
    x5: 0,
  });
  const [lastChangedReg, setLastChangedReg] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [clockCycles, setClockCycles] = useState(0);

  const currentProgram = presets[selectedPresetIdx].code;

  const resetCpu = (presetIdx?: number) => {
    playClickSound("action");
    setIsRunning(false);
    setPc(0);
    setClockCycles(0);
    setLastChangedReg(null);
    setRegisters({
      x0: 0,
      x1: 0,
      x2: 0,
      x3: 0,
      x4: 0,
      x5: 0,
    });
    if (presetIdx !== undefined) {
      setSelectedPresetIdx(presetIdx);
    }
  };

  const stepInstruction = () => {
    if (pc >= currentProgram.length) {
      setIsRunning(false);
      return;
    }

    playClickSound("tick");
    const inst = currentProgram[pc];
    let val = 0;

    const getVal = (regName?: string) => {
      if (!regName) return 0;
      if (regName === "x0") return 0;
      return registers[regName] || 0;
    };

    switch (inst.op) {
      case "ADDI":
        val = getVal(inst.rs1) + (inst.imm ?? 0);
        break;
      case "SUBI":
        val = getVal(inst.rs1) - (inst.imm ?? 0);
        break;
      case "ADD":
        val = getVal(inst.rs1) + getVal(inst.rs2);
        break;
      case "XOR":
        val = getVal(inst.rs1) ^ getVal(inst.rs2);
        break;
      case "ANDI":
        val = getVal(inst.rs1) & (inst.imm ?? 0);
        break;
      case "SLLI":
        val = getVal(inst.rs1) << (inst.imm ?? 0);
        break;
      default:
        break;
    }

    // x0 is hardwired to 0 in RISC-V architecture
    if (inst.rd && inst.rd !== "x0") {
      setRegisters((prev) => ({
        ...prev,
        [inst.rd]: val,
        x0: 0,
      }));
      setLastChangedReg(inst.rd);
    } else {
      setLastChangedReg(null);
    }

    setPc((prev) => prev + 1);
    setClockCycles((prev) => prev + 1);
  };

  useEffect(() => {
    let interval: any = null;
    if (isRunning) {
      if (pc >= currentProgram.length) {
        setIsRunning(false);
      } else {
        interval = setInterval(() => {
          stepInstruction();
        }, 650);
      }
    }
    return () => clearInterval(interval);
  }, [isRunning, pc, currentProgram, registers]);

  const toHex = (num: number) => {
    return "0x" + (num >>> 0).toString(16).toUpperCase().padStart(4, "0");
  };

  return (
    <section id="simulator" className="py-20 relative z-10 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="font-mono text-xs text-cyan-400 mb-1 uppercase tracking-widest flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" />
              <span>Interactive Architecture // Mini RV32I Emulator</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              RISC-V Execution Engine
            </h2>
          </div>

          <a
            href="https://github.com/animeshdhakal/riscv-emulator"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono text-cyan-300 hover:text-white bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-xl transition-all w-fit"
          >
            <span>View riscv-emulator on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Preset Selector */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="text-xs font-mono text-slate-500 mr-1 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-cyan-400" /> Presets:
          </span>
          {presets.map((preset, idx) => (
            <button
              key={preset.name}
              onClick={() => resetCpu(idx)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                selectedPresetIdx === idx
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold"
                  : "bg-[#0d121c] text-slate-400 border border-slate-800 hover:text-slate-200"
              }`}
            >
              {preset.name}
            </button>
          ))}
        </div>

        {/* Simulator Main Grid */}
        <div className="grid lg:grid-cols-12 gap-5">
          {/* Left: Code Assembly Stream */}
          <div className="lg:col-span-7 rounded-2xl bg-[#090d14] border border-slate-800 overflow-hidden font-mono text-xs shadow-2xl flex flex-col justify-between">
            {/* Titlebar */}
            <div className="px-4 py-3 bg-[#0e131d] border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="text-slate-300 font-semibold">
                  {presets[selectedPresetIdx].name}.s
                </span>
              </div>
              <div className="flex items-center gap-3 text-[11px] text-slate-500">
                <span>PC: <strong className="text-cyan-400">{pc * 4}</strong> (0x{(pc * 4).toString(16).padStart(2, "0")})</span>
                <span>Cycles: <strong className="text-slate-300">{clockCycles}</strong></span>
              </div>
            </div>

            {/* Instruction List */}
            <div className="p-4 space-y-1.5 overflow-y-auto max-h-[320px] bg-black/40">
              {currentProgram.map((inst, idx) => {
                const isCurrent = idx === pc;
                const isDone = idx < pc;

                return (
                  <div
                    key={idx}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg transition-all ${
                      isCurrent
                        ? "bg-cyan-500/20 border border-cyan-500/40 text-cyan-200 font-semibold shadow-[0_0_15px_rgba(56,189,248,0.15)]"
                        : isDone
                        ? "text-slate-500 bg-white/[0.01]"
                        : "text-slate-300 hover:bg-white/[0.03]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] text-slate-600 w-5">
                        {idx * 4 < 10 ? `0${idx * 4}` : idx * 4}
                      </span>
                      <span className="font-mono text-xs">{inst.raw}</span>
                    </div>

                    {inst.comment && (
                      <span className="text-[11px] text-slate-500 font-mono hidden sm:inline">
                        ; {inst.comment}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Control Bar */}
            <div className="px-4 py-3 bg-[#0e131d] border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={stepInstruction}
                  disabled={pc >= currentProgram.length || isRunning}
                  className="px-3.5 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 disabled:hover:bg-cyan-500 text-slate-950 font-semibold text-xs transition-colors flex items-center gap-1.5"
                >
                  <SkipForward className="w-3.5 h-3.5" />
                  <span>Step</span>
                </button>

                <button
                  onClick={() => {
                    playClickSound("action");
                    setIsRunning(!isRunning);
                  }}
                  disabled={pc >= currentProgram.length}
                  className="px-3.5 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] disabled:opacity-40 border border-white/10 text-slate-200 text-xs transition-colors flex items-center gap-1.5"
                >
                  {isRunning ? (
                    <>
                      <Pause className="w-3.5 h-3.5 text-amber-400" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Auto Run</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => resetCpu()}
                  className="p-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-400 hover:text-slate-200 transition-colors"
                  title="Reset CPU State"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="text-[11px] text-slate-500 font-mono">
                {pc >= currentProgram.length ? (
                  <span className="text-emerald-400 font-semibold">
                    ✓ Program Complete
                  </span>
                ) : (
                  <span>Ready for clock edge</span>
                )}
              </div>
            </div>
          </div>

          {/* Right: Register File & ALU Telemetry */}
          <div className="lg:col-span-5 rounded-2xl bg-[#0d121c] border border-slate-800 p-5 font-mono text-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                <span className="font-semibold text-white">General Purpose Registers</span>
                <span className="text-[10px] text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                  RV32I 32-bit
                </span>
              </div>

              {/* Register Table */}
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(registers).map(([reg, val]) => {
                  const isModified = lastChangedReg === reg;

                  return (
                    <div
                      key={reg}
                      className={`p-2.5 rounded-xl border transition-all ${
                        isModified
                          ? "bg-cyan-500/15 border-cyan-500/40 text-cyan-200 shadow-[0_0_12px_rgba(56,189,248,0.2)]"
                          : "bg-[#111724]/70 border-slate-800/80 text-slate-300"
                      }`}
                    >
                      <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
                        <span className="font-bold text-slate-300">{reg}</span>
                        <span>{toHex(val)}</span>
                      </div>
                      <div className="text-base font-bold text-slate-100">
                        {val}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiscvSimulator;
