use dioxus::prelude::*;

#[component]
pub fn About() -> Element {
    let education = vec![
        ("B.E. Electronics, Communication & Information", "Pulchowk Campus (IOE), TU", "2024 — Present"),
        ("High School (+2 Science)", "Valmiki Shiksha Sadan", "2022 — 2024"),
        ("Secondary Education Exam (SEE)", "Gyan Jyoti English School", "2022"),
    ];

    rsx! {
        section { id: "about", class: "py-14 border-t border-zinc-200 dark:border-zinc-800/60 transition-colors",
            div { class: "max-w-4xl mx-auto px-6 space-y-6",
                h2 { class: "text-lg font-mono font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-2 transition-colors",
                    span { class: "text-cyan-600 dark:text-cyan-400 font-bold", "01." }
                    "About & Education"
                }

                div { class: "space-y-4 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl transition-colors",
                    p {
                        "I am focused on the intersection of hardware and systems software. My work ranges from building bare-metal firmware (FreeRTOS, ESP32) and writing emulators (RISC-V, MOS 6502) to high-throughput asynchronous networking servers using Netty and Rust."
                    }
                }

                div { class: "mt-6 pt-4 space-y-3",
                    h3 { class: "text-xs font-mono uppercase tracking-wider text-zinc-500", "Education Timeline" }
                    div { class: "divide-y divide-zinc-200 dark:divide-zinc-800/60 font-mono text-xs transition-colors",
                        for (degree, school, period) in education {
                            div { key: "{degree}", class: "py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1",
                                div {
                                    span { class: "text-zinc-800 dark:text-zinc-200 font-medium transition-colors", "{degree}" }
                                    span { class: "text-zinc-500 block sm:inline sm:before:content-['•'] sm:before:mx-2", "{school}" }
                                }
                                span { class: "text-zinc-500 text-[11px] shrink-0", "{period}" }
                            }
                        }
                    }
                }
            }
        }
    }
}
