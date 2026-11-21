use dioxus::prelude::*;

mod icons;
mod components;

use components::navbar::Navbar;
use components::hero::Hero;
use components::about::About;
use components::skills::Skills;
use components::projects::Projects;
use components::riscv_simulator::RiscvSimulator;
use components::terminal::TerminalPlayground;
use components::contact::Contact;

fn main() {
    dioxus::launch(App);
}

#[component]
fn App() -> Element {
    rsx! {
        div { class: "relative min-h-screen bg-[#090b10] text-[#e2e8f0] font-sans selection:bg-cyan-500/20 selection:text-cyan-200",
            // Background ambient pattern
            div { class: "fixed inset-0 pointer-events-none z-0 opacity-20 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px]" }

            // Main Content
            div { class: "relative z-10",
                Navbar { on_open_terminal: move |_| {} }
                main {
                    Hero {}
                    About {}
                    Skills {}
                    Projects {}
                    RiscvSimulator {}
                    TerminalPlayground {}
                    Contact {}
                }
            }
        }
    }
}
