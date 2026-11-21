use dioxus::prelude::*;
use crate::icons::{MailIcon, MapPinIcon, GithubIcon, LinkedinIcon, CheckIcon, CopyIcon, ArrowUpIcon};

#[component]
pub fn Contact() -> Element {
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

    let scroll_to_top = move |_| {
        if let Some(window) = web_sys::window() {
            window.scroll_to_with_x_and_y(0.0, 0.0);
        }
    };

    rsx! {
        section {
            id: "contact",
            class: "py-20 relative z-10 border-t border-slate-800/80",
            div { class: "max-w-6xl mx-auto px-4 sm:px-6",
                div { class: "mb-10 text-center max-w-xl mx-auto",
                    div { class: "font-mono text-xs text-cyan-400 mb-1 uppercase tracking-widest",
                        "06 // Contact"
                    }
                    h2 { class: "text-3xl sm:text-4xl font-bold text-white tracking-tight",
                        "Get in Touch"
                    }
                }

                // Grid
                div { class: "grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto mb-14",
                    // Email Card
                    div { class: "p-5 rounded-2xl bg-[#0d121c] border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors shadow-lg",
                        div {
                            div { class: "w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3",
                                MailIcon { class: "w-4 h-4" }
                            }
                            h3 { class: "text-xs font-mono uppercase tracking-wider text-slate-400", "Email" }
                            p { class: "text-xs text-slate-200 font-mono mt-1 break-all", "{email}" }
                        }

                        div { class: "pt-4 mt-3 border-t border-slate-800/80 flex items-center gap-2",
                            a {
                                href: "mailto:{email}",
                                class: "flex-1 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs font-semibold text-center transition-colors",
                                "Send Email"
                            }
                            button {
                                onclick: copy_handler,
                                class: "p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-300 transition-colors",
                                if *copied.read() {
                                    CheckIcon { class: "w-3.5 h-3.5 text-emerald-400" }
                                } else {
                                    CopyIcon { class: "w-3.5 h-3.5" }
                                }
                            }
                        }
                    }

                    // Location Card
                    div { class: "p-5 rounded-2xl bg-[#0d121c] border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors shadow-lg",
                        div {
                            div { class: "w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3",
                                MapPinIcon { class: "w-4 h-4" }
                            }
                            h3 { class: "text-xs font-mono uppercase tracking-wider text-slate-400", "Location" }
                            p { class: "text-xs text-slate-200 mt-1", "Kathmandu & Lalitpur, Nepal" }
                            p { class: "text-[11px] text-slate-500 font-mono mt-0.5", "Pulchowk Campus (IOE)" }
                        }

                        div { class: "pt-4 mt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-center gap-1.5",
                            span { class: "w-1.5 h-1.5 rounded-full bg-emerald-400" }
                            span { "UTC+5:45" }
                        }
                    }

                    // Links Card
                    div { class: "p-5 rounded-2xl bg-[#0d121c] border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors shadow-lg",
                        div {
                            div { class: "w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3",
                                GithubIcon { class: "w-4 h-4" }
                            }
                            h3 { class: "text-xs font-mono uppercase tracking-wider text-slate-400", "Profiles" }
                            p { class: "text-xs text-slate-200 mt-1", "GitHub & LinkedIn" }
                        }

                        div { class: "pt-4 mt-3 border-t border-slate-800/80 flex items-center gap-2",
                            a {
                                href: "https://github.com/animeshdhakal",
                                target: "_blank",
                                class: "flex-1 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-200 font-mono text-xs text-center transition-colors flex items-center justify-center gap-1",
                                GithubIcon { class: "w-3 h-3" }
                                span { "GitHub" }
                            }
                            a {
                                href: "https://linkedin.com/in/animeshdhakal",
                                target: "_blank",
                                class: "flex-1 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-200 font-mono text-xs text-center transition-colors flex items-center justify-center gap-1",
                                LinkedinIcon { class: "w-3 h-3" }
                                span { "LinkedIn" }
                            }
                        }
                    }
                }

                // Minimal Footer
                div { class: "pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500",
                    div {
                        "© 2026 Animesh Dhakal // Built with Rust, Dioxus & WebAssembly"
                    }

                    button {
                        onclick: scroll_to_top,
                        class: "hover:text-cyan-400 transition-colors flex items-center gap-1",
                        span { "Top" }
                        ArrowUpIcon { class: "w-3 h-3" }
                    }
                }
            }
        }
    }
}
