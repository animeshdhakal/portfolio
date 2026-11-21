use dioxus::prelude::*;
use crate::icons::{GithubIcon, LinkedinIcon, MailIcon, CheckIcon, CopyIcon};

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

    rsx! {
        section { id: "contact", class: "py-16 border-t border-zinc-200 dark:border-zinc-800/60 transition-colors",
            div { class: "max-w-4xl mx-auto px-6 space-y-6",
                h2 { class: "text-lg font-mono font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-2 transition-colors",
                    span { class: "text-cyan-600 dark:text-cyan-400 font-bold", "04." }
                    "Get in Touch"
                }

                p { class: "text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl transition-colors",
                    "Feel free to reach out for systems engineering opportunities, collaborations on low-level firmware or compilers, or just to chat about computer architecture."
                }

                div { class: "flex flex-wrap items-center gap-3 pt-2 font-mono text-xs",
                    a {
                        href: "mailto:{email}",
                        class: "inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white dark:bg-cyan-500 dark:hover:bg-cyan-400 dark:text-zinc-950 font-semibold transition-colors shadow-sm",
                        MailIcon { class: "w-4 h-4" }
                        span { "Send Email" }
                    }

                    button {
                        onclick: copy_handler,
                        class: "inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-700 transition-colors shadow-sm dark:shadow-none",
                        if *copied.read() {
                            CheckIcon { class: "w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" }
                            span { class: "text-emerald-600 dark:text-emerald-400", "Copied to clipboard" }
                        } else {
                            CopyIcon { class: "w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" }
                            span { "{email}" }
                        }
                    }

                    a {
                        href: "https://github.com/animeshdhakal",
                        target: "_blank",
                        class: "inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-700 transition-colors shadow-sm dark:shadow-none",
                        GithubIcon { class: "w-3.5 h-3.5" }
                        span { "GitHub" }
                    }

                    a {
                        href: "https://linkedin.com/in/animeshdhakal",
                        target: "_blank",
                        class: "inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-700 transition-colors shadow-sm dark:shadow-none",
                        LinkedinIcon { class: "w-3.5 h-3.5" }
                        span { "LinkedIn" }
                    }
                }

                // Clean minimal footer
                div { class: "pt-12 mt-12 border-t border-zinc-200 dark:border-zinc-800/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-500 transition-colors",
                    p { "© 2026 Animesh Dhakal • Lalitpur / Kathmandu, Nepal" }
                    p { "Rust • Dioxus WebAssembly" }
                }
            }
        }
    }
}
