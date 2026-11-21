use dioxus::prelude::*;
use crate::icons::{GithubIcon, LinkedinIcon, MailIcon, ArrowUpRightIcon};

#[component]
pub fn Hero() -> Element {
    let email = "theanimeshdhakal@gmail.com";

    rsx! {
        section { class: "pt-20 pb-16",
            div { class: "max-w-4xl mx-auto px-6 space-y-6",
                div { class: "space-y-3",
                    h1 { class: "text-3xl sm:text-4xl font-bold tracking-tight text-white",
                        "Animesh Dhakal"
                    }
                    p { class: "text-base font-mono text-cyan-400",
                        "Systems & Embedded Software Engineer"
                    }
                }

                p { class: "text-zinc-300 text-base sm:text-lg leading-relaxed max-w-2xl font-sans",
                    "Undergraduate studying Electronics & Information Engineering at "
                    span { class: "text-zinc-100 font-medium", "Pulchowk Campus (IOE), Tribhuvan University" }
                    ". I build low-level systems, CPU emulators, embedded firmware, and network infrastructure across hardware and software."
                }

                div { class: "flex flex-wrap items-center gap-4 pt-2 text-xs font-mono",
                    a {
                        href: "mailto:{email}",
                        class: "inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-800/80 hover:bg-zinc-700/80 text-zinc-100 border border-zinc-700/60 transition-colors",
                        MailIcon { class: "w-3.5 h-3.5 text-cyan-400" }
                        span { "{email}" }
                    }

                    a {
                        href: "https://github.com/animeshdhakal",
                        target: "_blank",
                        class: "inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-zinc-400 hover:text-white transition-colors",
                        GithubIcon { class: "w-3.5 h-3.5" }
                        span { "github.com/animeshdhakal" }
                        ArrowUpRightIcon { class: "w-3 h-3 text-zinc-500" }
                    }

                    a {
                        href: "https://linkedin.com/in/animeshdhakal",
                        target: "_blank",
                        class: "inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-zinc-400 hover:text-white transition-colors",
                        LinkedinIcon { class: "w-3.5 h-3.5" }
                        span { "LinkedIn" }
                        ArrowUpRightIcon { class: "w-3 h-3 text-zinc-500" }
                    }
                }
            }
        }
    }
}
