use dioxus::prelude::*;
use crate::icons::{ArrowDownIcon, CheckIcon, CopyIcon, GithubIcon, LinkedinIcon};

#[component]
pub fn Hero() -> Element {
    let mut copied = use_signal(|| false);
    let email = "theanimeshdhakal@gmail.com";

    let copy_handler = move |_| {
        if let Some(window) = web_sys::window() {
            let nav = window.navigator();
            let clip = nav.clipboard();
            let _ = clip.write_text(email);
            copied.set(true);
        }
    };

    rsx! {
        section {
            id: "hero",
            class: "relative min-h-[85vh] pt-32 pb-16 flex flex-col justify-center overflow-hidden",
            div { class: "max-w-6xl mx-auto px-4 sm:px-6 w-full",
                div { class: "grid lg:grid-cols-12 gap-8 items-center",
                    // Left Column
                    div { class: "lg:col-span-7 space-y-5",
                        div { class: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300",
                            span { class: "w-2 h-2 rounded-full bg-emerald-400" }
                            span { "Pulchowk Campus (IOE)" }
                            span { class: "text-slate-600", "•" }
                            span { class: "text-cyan-400", "Electronics & Information" }
                        }

                        div { class: "space-y-2",
                            h1 { class: "text-4xl sm:text-6xl font-bold tracking-tight text-white",
                                "Animesh Dhakal"
                            }
                            p { class: "text-base sm:text-lg font-mono text-cyan-400",
                                "Systems & Embedded Software Engineer"
                            }
                        }

                        p { class: "text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl",
                            "Building low-level network brokers, embedded firmware, and performant systems across hardware and software."
                        }

                        // CTA Buttons
                        div { class: "flex flex-wrap items-center gap-3 pt-2",
                            a {
                                href: "#projects",
                                class: "px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold font-mono text-xs transition-colors flex items-center gap-2",
                                span { "View Projects" }
                                ArrowDownIcon { class: "w-3.5 h-3.5" }
                            }

                            button {
                                onclick: copy_handler,
                                class: "px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-200 font-mono text-xs transition-colors flex items-center gap-2",
                                title: "Copy email",
                                if *copied.read() {
                                    CheckIcon { class: "w-3.5 h-3.5 text-emerald-400" }
                                    span { class: "text-emerald-400", "Copied!" }
                                } else {
                                    CopyIcon { class: "w-3.5 h-3.5 text-slate-400" }
                                    span { "{email}" }
                                }
                            }

                            div { class: "flex items-center gap-2",
                                a {
                                    href: "https://github.com/animeshdhakal",
                                    target: "_blank",
                                    class: "p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white transition-colors",
                                    GithubIcon { class: "w-4 h-4" }
                                }
                                a {
                                    href: "https://linkedin.com/in/animeshdhakal",
                                    target: "_blank",
                                    class: "p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white transition-colors",
                                    LinkedinIcon { class: "w-4 h-4" }
                                }
                            }
                        }
                    }

                    // Right Column: Telemetry Box
                    div { class: "lg:col-span-5",
                        div { class: "rounded-2xl bg-[#0d121c] border border-slate-800 p-5 font-mono text-xs space-y-3 shadow-2xl",
                            div { class: "flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400 text-[11px]",
                                span { "stack.sys // active (wasm)" }
                                span { class: "text-emerald-400 font-semibold flex items-center gap-1.5",
                                    span { class: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse" }
                                    "ONLINE"
                                }
                            }

                            div { class: "space-y-2 text-slate-300",
                                div { class: "flex justify-between py-1 border-b border-slate-800/60",
                                    span { class: "text-slate-500", "Focus" }
                                    span { class: "text-cyan-300", "Systems & Embedded" }
                                }
                                div { class: "flex justify-between py-1 border-b border-slate-800/60",
                                    span { class: "text-slate-500", "Core" }
                                    span { "Rust, C/C++, FreeRTOS, Netty" }
                                }
                                div { class: "flex justify-between py-1 border-b border-slate-800/60",
                                    span { class: "text-slate-500", "Hardware" }
                                    span { "ESP32, ESP8266, Embedded Linux" }
                                }
                                div { class: "flex justify-between py-1",
                                    span { class: "text-slate-500", "Framework" }
                                    span { class: "text-amber-400", "Dioxus 0.6 + Rust Wasm" }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
