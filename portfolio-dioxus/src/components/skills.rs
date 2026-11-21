use dioxus::prelude::*;

#[component]
pub fn Skills() -> Element {
    let categories = vec![
        ("Languages", "Rust, C, C++, SystemVerilog, VHDL, Java, TypeScript, Python"),
        ("Systems & Firmware", "POSIX, Linux Internals, FreeRTOS, ESP32 / ESP8266, RISC-V, x86"),
        ("Networking & Wire", "Netty, Custom Binary Protocols, WebSockets, TCP/UDP, TLS / SSL"),
        ("Tools & Hardware", "Git, Linux CLI, GDB, Valgrind, Wireshark, CMake, Cargo, FPGA"),
    ];

    rsx! {
        section { id: "skills", class: "py-14 border-t border-zinc-800/60",
            div { class: "max-w-4xl mx-auto px-6 space-y-6",
                h2 { class: "text-lg font-mono font-semibold text-zinc-100 flex items-center gap-2",
                    span { class: "text-cyan-400", "03." }
                    "Technical Stack"
                }

                div { class: "grid sm:grid-cols-2 gap-6 pt-2 font-mono text-xs",
                    for (cat, items) in categories {
                        div { key: "{cat}", class: "space-y-1.5 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60",
                            h3 { class: "text-zinc-200 font-semibold tracking-wide text-xs text-cyan-300", "{cat}" }
                            p { class: "text-zinc-400 leading-relaxed text-[12px]", "{items}" }
                        }
                    }
                }
            }
        }
    }
}
