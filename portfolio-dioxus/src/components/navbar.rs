use dioxus::prelude::*;
use crate::icons::{TerminalIcon, MenuIcon, CloseIcon, ArrowUpRightIcon};

#[component]
pub fn Navbar(on_open_terminal: Option<EventHandler<()>>) -> Element {
    let mut is_open = use_signal(|| false);
    let mut active_section = use_signal(|| "hero".to_string());

    let primary_links = vec![
        ("About", "#about", "about"),
        ("Stack", "#skills", "skills"),
        ("Projects", "#projects", "projects"),
        ("Contact", "#contact", "contact"),
    ];

    let mobile_links = vec![
        ("Overview", "#hero", "hero"),
        ("About", "#about", "about"),
        ("Stack", "#skills", "skills"),
        ("Projects", "#projects", "projects"),
        ("CPU Simulator", "#simulator", "simulator"),
        ("Terminal", "#terminal", "terminal"),
        ("Contact", "#contact", "contact"),
    ];

    rsx! {
        header { class: "fixed top-0 left-0 right-0 z-40 px-4 py-3.5 transition-all duration-300",
            div { class: "max-w-5xl mx-auto",
                nav { class: "flex items-center justify-between px-4 sm:px-5 py-2 rounded-2xl border transition-all duration-300 bg-[#0c1018]/90 backdrop-blur-md border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)]",
                    // Logo
                    a {
                        href: "#hero",
                        onclick: move |_| {
                            active_section.set("hero".to_string());
                            is_open.set(false);
                        },
                        class: "flex items-center gap-2 text-white hover:text-cyan-400 transition-colors group",
                        div { class: "w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400/50 group-hover:bg-cyan-500/20 transition-all",
                            TerminalIcon { class: "w-3.5 h-3.5" }
                        }
                        span { class: "font-mono text-xs font-semibold tracking-tight text-slate-100 group-hover:text-cyan-300 transition-colors",
                            "animesh.dhakal"
                        }
                    }

                    // Desktop Nav
                    div { class: "hidden md:flex items-center gap-1",
                        for (name, href, id) in primary_links {
                            {
                                let is_active = *active_section.read() == id;
                                rsx! {
                                    a {
                                        key: "{name}",
                                        href: "{href}",
                                        onclick: move |_| active_section.set(id.to_string()),
                                        class: if is_active {
                                            "px-3 py-1 rounded-lg text-xs font-medium font-mono tracking-wide text-cyan-300 bg-cyan-500/10 border border-cyan-500/20"
                                        } else {
                                            "px-3 py-1 rounded-lg text-xs font-medium font-mono tracking-wide text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
                                        },
                                        "{name}"
                                    }
                                }
                            }
                        }
                    }

                    // Right Side: Terminal jump & Mobile Menu
                    div { class: "flex items-center gap-2",
                        a {
                            href: "#terminal",
                            class: "flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-[11px] font-mono text-cyan-300 transition-all",
                            span { "CLI Shell" }
                            TerminalIcon { class: "w-3 h-3 text-cyan-400" }
                        }

                        div { class: "md:hidden",
                            button {
                                onclick: move |_| {
                                    let current = *is_open.read();
                                    is_open.set(!current);
                                },
                                class: "p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors",
                                if *is_open.read() {
                                    CloseIcon { class: "w-4 h-4" }
                                } else {
                                    MenuIcon { class: "w-4 h-4" }
                                }
                            }
                        }
                    }
                }

                // Mobile Dropdown
                if *is_open.read() {
                    div { class: "md:hidden mt-2 p-3 rounded-2xl bg-[#0c1018]/95 border border-white/10 backdrop-blur-xl shadow-2xl space-y-1",
                        for (name, href, id) in mobile_links {
                            {
                                let is_active = *active_section.read() == id;
                                rsx! {
                                    a {
                                        key: "{name}",
                                        href: "{href}",
                                        onclick: move |_| {
                                            active_section.set(id.to_string());
                                            is_open.set(false);
                                        },
                                        class: if is_active {
                                            "px-3.5 py-2 rounded-xl text-xs font-mono flex items-center justify-between text-cyan-400 bg-cyan-500/10 font-semibold"
                                        } else {
                                            "px-3.5 py-2 rounded-xl text-xs font-mono flex items-center justify-between text-slate-300 hover:bg-white/5"
                                        },
                                        span { "{name}" }
                                        if is_active {
                                            span { class: "w-1.5 h-1.5 rounded-full bg-cyan-400" }
                                        }
                                    }
                                }
                            }
                        }
                        div { class: "mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400 px-1",
                            a {
                                href: "https://github.com/animeshdhakal",
                                target: "_blank",
                                class: "text-cyan-400 hover:underline flex items-center gap-1",
                                span { "GitHub" }
                                ArrowUpRightIcon { class: "w-3 h-3" }
                            }
                            a {
                                href: "https://linkedin.com/in/animeshdhakal",
                                target: "_blank",
                                class: "text-slate-300 hover:underline flex items-center gap-1",
                                span { "LinkedIn" }
                                ArrowUpRightIcon { class: "w-3 h-3" }
                            }
                        }
                    }
                }
            }
        }
    }
}
