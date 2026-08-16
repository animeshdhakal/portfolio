import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles, Trash2, X, Eye } from "lucide-react";
import { playClickSound } from "../utils/audio";

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

// Matrix Digital Rain Canvas Sub-Component
const MatrixRainCanvas: React.FC<{ onExit: () => void }> = ({ onExit }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = 360);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || 600;
      height = canvas.height = 360;
    };

    window.addEventListener("resize", handleResize);

    const characters = "01010101XYZ日ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ0123456789ABCDEF";
    const fontSize = 13;
    const columns = Math.floor(width / fontSize);
    const drops = Array.from({ length: columns }, () => Math.floor(Math.random() * -30));

    const draw = () => {
      // Semi-transparent fade background for trailing streaks
      ctx.fillStyle = "rgba(9, 13, 20, 0.12)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = characters.charAt(Math.floor(Math.random() * characters.length));
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Bright leading head character
        ctx.fillStyle = "#ffffff";
        ctx.fillText(char, x, y);

        // Trailing green glow
        ctx.fillStyle = "#10b981";
        ctx.fillText(characters.charAt(Math.floor(Math.random() * characters.length)), x, y - fontSize);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onExit();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
      cancelAnimationFrame(animId);
    };
  }, [onExit]);

  return (
    <div className="relative w-full h-[360px] bg-[#090d14] overflow-hidden rounded-xl">
      <canvas ref={canvasRef} className="block w-full h-full" />
      {/* Overlay Banner */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-auto bg-black/75 backdrop-blur-md px-3.5 py-2 rounded-xl border border-emerald-500/30 text-emerald-400 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="font-semibold">MATRIX DIGITAL STREAM ACTIVE</span>
        </div>
        <button
          onClick={onExit}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-xs transition-colors"
        >
          <X className="w-3.5 h-3.5" />
          <span>Exit (Esc)</span>
        </button>
      </div>
    </div>
  );
};

const TerminalPlayground: React.FC = () => {
  const [input, setInput] = useState("");
  const [matrixMode, setMatrixMode] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: "welcome",
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-cyan-400 font-semibold">
            Animesh Dhakal // Systems Interactive Shell v2.4
          </p>
          <p className="text-slate-400 text-xs">
            Type <span className="text-cyan-300">help</span> to view available commands, or click any preset below.
          </p>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  useEffect(() => {
    const handleOpenMatrix = () => {
      setMatrixMode(true);
      playClickSound("high");
    };
    window.addEventListener("open-matrix-mode", handleOpenMatrix);
    return () => window.removeEventListener("open-matrix-mode", handleOpenMatrix);
  }, []);

  const executeCommand = (cmdStr: string) => {
    playClickSound("action");
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    let outputNode: React.ReactNode = null;

    switch (trimmed) {
      case "matrix":
        setMatrixMode(true);
        playClickSound("high");
        setInput("");
        return;

      case "help":
        outputNode = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-cyan-400 font-bold">AVAILABLE COMMANDS:</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
              <div><span className="text-cyan-300 font-mono">neofetch</span> - System specs</div>
              <div><span className="text-cyan-300 font-mono">bio</span> - Background</div>
              <div><span className="text-cyan-300 font-mono">skills</span> - Engineering stack</div>
              <div><span className="text-cyan-300 font-mono">projects</span> - GitHub repositories</div>
              <div><span className="text-cyan-300 font-mono">education</span> - Pulchowk IOE</div>
              <div><span className="text-cyan-300 font-mono">matrix</span> - Digital rain stream</div>
              <div><span className="text-cyan-300 font-mono">ping</span> - Socket roundtrip test</div>
              <div><span className="text-cyan-300 font-mono">clear</span> - Reset window</div>
            </div>
          </div>
        );
        break;

      case "neofetch":
      case "specs":
        outputNode = (
          <div className="text-xs space-y-1 text-slate-300 font-mono">
            <div className="text-cyan-400 font-bold">animesh@pulchowk-ioe</div>
            <div className="text-slate-500">----------------------</div>
            <div><span className="text-cyan-300">OS:</span> Embedded Linux / POSIX</div>
            <div><span className="text-cyan-300">Campus:</span> IOE Pulchowk Campus, Tribhuvan University</div>
            <div><span className="text-cyan-300">Major:</span> B.E. Electronics, Communication &amp; Information</div>
            <div><span className="text-cyan-300">Languages:</span> C, C++, Rust, SystemVerilog, VHDL, Java, TypeScript</div>
            <div><span className="text-cyan-300">Firmware:</span> FreeRTOS, ESP-IDF, Netty, POSIX Sockets</div>
            <div><span className="text-cyan-300">Location:</span> Kathmandu, Nepal (UTC+5:45)</div>
          </div>
        );
        break;

      case "bio":
        outputNode = (
          <p className="text-xs text-slate-300 leading-relaxed">
            Animesh Dhakal is an Electronics &amp; Communication engineer at Pulchowk Campus (IOE).
            He creates CPU emulators (RISC-V/6502), compilers (dhakal-lang), hobby OS kernels (animesh-os), FPGA crypto implementations (Kyber), and distributed network infrastructure (SocketIoT).
          </p>
        );
        break;

      case "skills":
        outputNode = (
          <div className="text-xs space-y-1 text-slate-300">
            <p className="text-cyan-400 font-semibold">ENGINEERING STACK:</p>
            <p>• <strong className="text-white">Systems:</strong> C, C++, Rust, RISC-V, POSIX, Linux Kernel</p>
            <p>• <strong className="text-white">Hardware:</strong> SystemVerilog, VHDL, FPGA, FreeRTOS, ESP32, ESP8266</p>
            <p>• <strong className="text-white">Protocols:</strong> Netty, Custom Binary Framing, WebSockets, TCP/UDP, TLS</p>
            <p>• <strong className="text-white">Full-Stack:</strong> TypeScript, React, Next.js, PostgreSQL, Tailwind</p>
          </div>
        );
        break;

      case "projects":
        outputNode = (
          <div className="text-xs space-y-1.5 text-slate-300">
            <p className="text-cyan-400 font-semibold">GITHUB REPOSITORIES:</p>
            <p>• <strong className="text-white">riscv-emulator</strong> (Rust) — 32-bit RV32I processor emulator</p>
            <p>• <strong className="text-white">animesh-os</strong> (C) — Hobby x86 operating system kernel</p>
            <p>• <strong className="text-white">post-quantum-cryptography-fpga</strong> (SystemVerilog) — Kyber algorithm</p>
            <p>• <strong className="text-white">SocketIoT</strong> (Java/Netty) — High-throughput IoT messaging broker</p>
            <p>• <strong className="text-white">dhakal-lang</strong> (Rust) — Custom interpreted language runtime</p>
            <p>• <strong className="text-white">8-bit-cpu</strong> (VHDL) — Micro-architecture and ALU design</p>
            <p>• <strong className="text-white">dns-server</strong> (Rust) — Recursive &amp; authoritative DNS daemon</p>
            <p>• <strong className="text-white">6502Emulator</strong> (C) — MOS 6502 microprocessor emulator</p>
          </div>
        );
        break;

      case "education":
        outputNode = (
          <div className="text-xs space-y-1 text-slate-300">
            <p className="text-cyan-400 font-semibold">ACADEMICS:</p>
            <p>• <strong className="text-white">Pulchowk Campus (IOE), TU (2024–Present):</strong> B.E. Electronics, Communication &amp; Information</p>
            <p>• <strong className="text-white">Valmiki Shiksha Sadan (2022–2024):</strong> High School (+2 Science)</p>
            <p>• <strong className="text-white">Gyan Jyoti English School (2022):</strong> Secondary Education (SEE)</p>
          </div>
        );
        break;

      case "contact":
        outputNode = (
          <div className="text-xs space-y-1 text-slate-300">
            <p className="text-cyan-400 font-semibold">CONTACT:</p>
            <p>Email: <a href="mailto:theanimeshdhakal@gmail.com" className="text-cyan-300 hover:underline">theanimeshdhakal@gmail.com</a></p>
            <p>GitHub: <a href="https://github.com/animeshdhakal" target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline">github.com/animeshdhakal</a></p>
            <p>LinkedIn: <a href="https://linkedin.com/in/animeshdhakal" target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline">linkedin.com/in/animeshdhakal</a></p>
          </div>
        );
        break;

      case "ping":
        outputNode = (
          <div className="text-xs space-y-1 text-slate-300">
            <p className="text-emerald-400">PING github.com/animeshdhakal: 56 data bytes</p>
            <p>64 bytes from animesh.dev: icmp_seq=0 ttl=64 time=0.038 ms</p>
            <p className="text-slate-400">--- ping statistics: 0% packet loss ---</p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        outputNode = (
          <p className="text-xs text-red-400">
            command not found: {trimmed}. Type <span className="text-cyan-300">help</span> for commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmdStr, output: outputNode }]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(input);
    }
  };

  const quickCommands = ["neofetch", "matrix", "skills", "projects", "education", "ping"];

  return (
    <section id="terminal" className="py-20 relative z-10 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <div className="font-mono text-xs text-cyan-400 mb-1 uppercase tracking-widest">
            04 // Terminal
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Interactive Console
          </h2>
        </div>

        <div className="rounded-2xl bg-[#090d14] border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs">
          <div className="px-4 py-3 bg-[#0e131d] border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/70"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/70"></div>
              <span className="text-slate-400 text-[11px] ml-2 flex items-center gap-1.5">
                <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
                guest@animesh: ~
              </span>
            </div>

            <button
              onClick={() => {
                setHistory([]);
                setMatrixMode(false);
              }}
              className="flex items-center gap-1 text-[11px] text-slate-500 hover:text-slate-300 transition-colors"
              title="Clear terminal"
            >
              <Trash2 className="w-3 h-3" />
              <span>clear</span>
            </button>
          </div>

          {/* Terminal Screen: Matrix Rain Mode or Standard Shell */}
          {matrixMode ? (
            <MatrixRainCanvas onExit={() => setMatrixMode(false)} />
          ) : (
            <>
              <div className="p-5 space-y-3.5 max-h-[360px] overflow-y-auto bg-black/30">
                {history.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    {item.command !== "welcome" && (
                      <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                        <span className="text-slate-500">$</span>
                        <span>{item.command}</span>
                      </div>
                    )}
                    <div className="pl-4">{item.output}</div>
                  </div>
                ))}
                <div ref={terminalEndRef} />
              </div>

              <div className="p-3 bg-[#0e131d] border-t border-slate-800 flex items-center gap-2">
                <span className="text-cyan-400 font-bold pl-2">$</span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type 'help', 'matrix', 'neofetch', or click a preset..."
                  className="flex-1 bg-transparent text-slate-100 placeholder-slate-600 focus:outline-none font-mono text-xs"
                />
                <button
                  onClick={() => executeCommand(input)}
                  className="p-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 transition-colors"
                  aria-label="Run command"
                >
                  <CornerDownLeft className="w-3.5 h-3.5" />
                </button>
              </div>
            </>
          )}
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1 mr-1">
            <Sparkles className="w-3 h-3 text-cyan-400" /> Presets:
          </span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className={`px-2.5 py-1 rounded-lg border font-mono text-xs transition-all ${
                cmd === "matrix"
                  ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/20"
                  : "bg-slate-900 border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40"
              }`}
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TerminalPlayground;
