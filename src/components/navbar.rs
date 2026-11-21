use dioxus::prelude::*;
use crate::icons::{GithubIcon, LinkedinIcon, SunIcon, MoonIcon};
use crate::toggle_dark_mode;

#[component]
pub fn Navbar() -> Element {
    let mut is_dark = use_context::<Signal<bool>>();

    rsx! {
        header { class: "sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 dark:bg-[#090a0f]/80 border-b border-zinc-200 dark:border-zinc-800/60 transition-colors duration-200",
            div { class: "max-w-4xl mx-auto px-6 h-16 flex items-center justify-between",
                // Brand
                a {
                    href: "#",
                    class: "font-mono font-semibold text-sm text-zinc-900 dark:text-zinc-100 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-2",
                    span { class: "text-cyan-600 dark:text-cyan-400 font-bold", "~/" }
                    span { "animesh" }
                }

                // Nav Links, Social, and Dark Mode Toggle
                nav { class: "flex items-center gap-5 sm:gap-6 text-xs font-mono text-zinc-600 dark:text-zinc-400",
                    a { href: "#about", class: "hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors", "about" }
                    a { href: "#projects", class: "hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors", "projects" }
                    a { href: "#skills", class: "hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors", "stack" }
                    a { href: "#contact", class: "hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors", "contact" }

                    div { class: "h-3.5 w-px bg-zinc-300 dark:bg-zinc-800 hidden sm:block" }

                    div { class: "hidden sm:flex items-center gap-3",
                        a {
                            href: "https://github.com/animeshdhakal",
                            target: "_blank",
                            class: "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors",
                            GithubIcon { class: "w-4 h-4" }
                        }
                        a {
                            href: "https://linkedin.com/in/animeshdhakal",
                            target: "_blank",
                            class: "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors",
                            LinkedinIcon { class: "w-4 h-4" }
                        }
                    }

                    // Theme Toggle Button
                    button {
                        onclick: move |_| {
                            let mut cur = *is_dark.read();
                            toggle_dark_mode(&mut cur);
                            is_dark.set(cur);
                        },
                        class: "p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors",
                        aria_label: if *is_dark.read() { "Switch to light mode" } else { "Switch to dark mode" },
                        title: if *is_dark.read() { "Switch to light mode" } else { "Switch to dark mode" },
                        if *is_dark.read() {
                            SunIcon { class: "w-4 h-4 text-amber-400" }
                        } else {
                            MoonIcon { class: "w-4 h-4 text-zinc-700" }
                        }
                    }
                }
            }
        }
    }
}
