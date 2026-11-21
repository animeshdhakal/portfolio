use dioxus::prelude::*;

mod icons;
mod components;

use components::navbar::Navbar;
use components::hero::Hero;
use components::about::About;
use components::projects::Projects;
use components::skills::Skills;
use components::contact::Contact;

fn main() {
    dioxus::launch(App);
}

#[component]
fn App() -> Element {
    rsx! {
        div { class: "min-h-screen bg-[#090a0f] text-zinc-100 font-sans selection:bg-cyan-500/20 selection:text-cyan-200 antialiased",
            Navbar {}
            main {
                Hero {}
                About {}
                Projects {}
                Skills {}
                Contact {}
            }
        }
    }
}
