use dioxus::prelude::*;
use crate::icons::{GithubIcon, LinkedinIcon};

#[component]
pub fn Navbar() -> Element {
    rsx! {
        header { class: "sticky top-0 z-40 w-full backdrop-blur-md bg-[#090a0f]/80 border-b border-zinc-800/60",
            div { class: "max-w-4xl mx-auto px-6 h-16 flex items-center justify-between",
                // Brand
                a {
                    href: "#",
                    class: "font-mono font-semibold text-sm text-zinc-100 hover:text-cyan-400 transition-colors flex items-center gap-2",
                    span { class: "text-cyan-400 font-bold", "~/" }
                    span { "animesh" }
                }

                // Nav Links & Social
                nav { class: "flex items-center gap-6 text-xs font-mono text-zinc-400",
                    a { href: "#about", class: "hover:text-zinc-100 transition-colors", "about" }
                    a { href: "#projects", class: "hover:text-zinc-100 transition-colors", "projects" }
                    a { href: "#skills", class: "hover:text-zinc-100 transition-colors", "stack" }
                    a { href: "#contact", class: "hover:text-zinc-100 transition-colors", "contact" }

                    div { class: "h-3.5 w-px bg-zinc-800 hidden sm:block" }

                    div { class: "hidden sm:flex items-center gap-3",
                        a {
                            href: "https://github.com/animeshdhakal",
                            target: "_blank",
                            class: "text-zinc-400 hover:text-zinc-100 transition-colors",
                            GithubIcon { class: "w-4 h-4" }
                        }
                        a {
                            href: "https://linkedin.com/in/animeshdhakal",
                            target: "_blank",
                            class: "text-zinc-400 hover:text-zinc-100 transition-colors",
                            LinkedinIcon { class: "w-4 h-4" }
                        }
                    }
                }
            }
        }
    }
}
