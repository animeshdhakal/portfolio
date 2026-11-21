use dioxus::prelude::*;

mod icons;
mod components;

use components::navbar::Navbar;
use components::hero::Hero;
use components::about::About;
use components::projects::Projects;
use components::skills::Skills;
use components::contact::Contact;

pub fn is_dark_mode() -> bool {
    if let Some(window) = web_sys::window() {
        if let Ok(Some(storage)) = window.local_storage() {
            if let Ok(Some(val)) = storage.get_item("theme") {
                return val != "light";
            }
        }
    }
    true
}

pub fn toggle_dark_mode(is_dark: &mut bool) {
    *is_dark = !*is_dark;
    if let Some(window) = web_sys::window() {
        if let Ok(Some(storage)) = window.local_storage() {
            let _ = storage.set_item("theme", if *is_dark { "dark" } else { "light" });
        }
        if let Some(doc) = window.document() {
            if let Some(root) = doc.document_element() {
                let class_list = root.class_list();
                if *is_dark {
                    let _ = class_list.add_1("dark");
                } else {
                    let _ = class_list.remove_1("dark");
                }
            }
        }
    }
}

fn main() {
    dioxus::launch(App);
}

#[component]
fn App() -> Element {
    let is_dark = use_signal(is_dark_mode);
    use_context_provider(|| is_dark);

    rsx! {
        div { class: "min-h-screen bg-zinc-50 text-zinc-900 dark:bg-[#090a0f] dark:text-zinc-100 font-sans selection:bg-cyan-500/20 selection:text-cyan-800 dark:selection:text-cyan-200 antialiased transition-colors duration-200",
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
