use dioxus::prelude::*;

#[component]
pub fn TerminalIcon(#[props(default = "w-4 h-4".to_string())] class: String) -> Element {
    rsx! {
        svg { class: "{class}", fill: "none", stroke: "currentColor", stroke_width: "2", stroke_linecap: "round", stroke_linejoin: "round", view_box: "0 0 24 24",
            polyline { points: "4 17 10 11 4 5" }
            line { x1: "12", y1: "19", x2: "20", y2: "19" }
        }
    }
}

#[component]
pub fn CpuIcon(#[props(default = "w-4 h-4".to_string())] class: String) -> Element {
    rsx! {
        svg { class: "{class}", fill: "none", stroke: "currentColor", stroke_width: "2", stroke_linecap: "round", stroke_linejoin: "round", view_box: "0 0 24 24",
            rect { x: "4", y: "4", width: "16", height: "16", rx: "2" }
            rect { x: "9", y: "9", width: "6", height: "6" }
            path { d: "M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" }
        }
    }
}

#[component]
pub fn LayersIcon(#[props(default = "w-4 h-4".to_string())] class: String) -> Element {
    rsx! {
        svg { class: "{class}", fill: "none", stroke: "currentColor", stroke_width: "2", stroke_linecap: "round", stroke_linejoin: "round", view_box: "0 0 24 24",
            polygon { points: "12 2 2 7 12 12 22 7 12 2" }
            polyline { points: "2 17 12 22 22 17" }
            polyline { points: "2 12 12 17 22 12" }
        }
    }
}

#[component]
pub fn ServerIcon(#[props(default = "w-4 h-4".to_string())] class: String) -> Element {
    rsx! {
        svg { class: "{class}", fill: "none", stroke: "currentColor", stroke_width: "2", stroke_linecap: "round", stroke_linejoin: "round", view_box: "0 0 24 24",
            rect { width: "20", height: "8", x: "2", y: "2", rx: "2", ry: "2" }
            rect { width: "20", height: "8", x: "2", y: "14", rx: "2", ry: "2" }
            line { x1: "6", x2: "6.01", y1: "6", y2: "6" }
            line { x1: "6", x2: "6.01", y1: "18", y2: "18" }
        }
    }
}

#[component]
pub fn GlobeIcon(#[props(default = "w-4 h-4".to_string())] class: String) -> Element {
    rsx! {
        svg { class: "{class}", fill: "none", stroke: "currentColor", stroke_width: "2", stroke_linecap: "round", stroke_linejoin: "round", view_box: "0 0 24 24",
            circle { cx: "12", cy: "12", r: "10" }
            line { x1: "2", y1: "12", x2: "22", y2: "12" }
            path { d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" }
        }
    }
}

#[component]
pub fn WrenchIcon(#[props(default = "w-4 h-4".to_string())] class: String) -> Element {
    rsx! {
        svg { class: "{class}", fill: "none", stroke: "currentColor", stroke_width: "2", stroke_linecap: "round", stroke_linejoin: "round", view_box: "0 0 24 24",
            path { d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" }
        }
    }
}

#[component]
pub fn BinaryIcon(#[props(default = "w-4 h-4".to_string())] class: String) -> Element {
    rsx! {
        svg { class: "{class}", fill: "none", stroke: "currentColor", stroke_width: "2", stroke_linecap: "round", stroke_linejoin: "round", view_box: "0 0 24 24",
            rect { x: "14", y: "4", width: "4", height: "6", rx: "2" }
            rect { x: "6", y: "14", width: "4", height: "6", rx: "2" }
            path { d: "M6 10h4M14 14h4" }
        }
    }
}

#[component]
pub fn GithubIcon(#[props(default = "w-4 h-4".to_string())] class: String) -> Element {
    rsx! {
        svg { class: "{class}", fill: "currentColor", view_box: "0 0 24 24",
            path { d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" }
        }
    }
}

#[component]
pub fn LinkedinIcon(#[props(default = "w-4 h-4".to_string())] class: String) -> Element {
    rsx! {
        svg { class: "{class}", fill: "currentColor", view_box: "0 0 24 24",
            path { d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" }
        }
    }
}

#[component]
pub fn GraduationCapIcon(#[props(default = "w-4 h-4".to_string())] class: String) -> Element {
    rsx! {
        svg { class: "{class}", fill: "none", stroke: "currentColor", stroke_width: "2", stroke_linecap: "round", stroke_linejoin: "round", view_box: "0 0 24 24",
            path { d: "M22 10v6M2 10l10-5 10 5-10 5z" }
            path { d: "M6 12v5c3 3 9 3 12 0v-5" }
        }
    }
}

#[component]
pub fn MapPinIcon(#[props(default = "w-4 h-4".to_string())] class: String) -> Element {
    rsx! {
        svg { class: "{class}", fill: "none", stroke: "currentColor", stroke_width: "2", stroke_linecap: "round", stroke_linejoin: "round", view_box: "0 0 24 24",
            path { d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" }
            circle { cx: "12", cy: "10", r: "3" }
        }
    }
}

#[component]
pub fn MailIcon(#[props(default = "w-4 h-4".to_string())] class: String) -> Element {
    rsx! {
        svg { class: "{class}", fill: "none", stroke: "currentColor", stroke_width: "2", stroke_linecap: "round", stroke_linejoin: "round", view_box: "0 0 24 24",
            rect { width: "20", height: "16", x: "2", y: "4", rx: "2" }
            path { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }
        }
    }
}

#[component]
pub fn ArrowUpRightIcon(#[props(default = "w-4 h-4".to_string())] class: String) -> Element {
    rsx! {
        svg { class: "{class}", fill: "none", stroke: "currentColor", stroke_width: "2", stroke_linecap: "round", stroke_linejoin: "round", view_box: "0 0 24 24",
            line { x1: "7", y1: "17", x2: "17", y2: "7" }
            polyline { points: "7 7 17 7 17 17" }
        }
    }
}

#[component]
pub fn ArrowDownIcon(#[props(default = "w-4 h-4".to_string())] class: String) -> Element {
    rsx! {
        svg { class: "{class}", fill: "none", stroke: "currentColor", stroke_width: "2", stroke_linecap: "round", stroke_linejoin: "round", view_box: "0 0 24 24",
            line { x1: "12", y1: "5", x2: "12", y2: "19" }
            polyline { points: "19 12 12 19 5 12" }
        }
    }
}

#[component]
pub fn ArrowUpIcon(#[props(default = "w-4 h-4".to_string())] class: String) -> Element {
    rsx! {
        svg { class: "{class}", fill: "none", stroke: "currentColor", stroke_width: "2", stroke_linecap: "round", stroke_linejoin: "round", view_box: "0 0 24 24",
            line { x1: "12", y1: "19", x2: "12", y2: "5" }
            polyline { points: "5 12 12 5 19 12" }
        }
    }
}

#[component]
pub fn CheckIcon(#[props(default = "w-4 h-4".to_string())] class: String) -> Element {
    rsx! {
        svg { class: "{class}", fill: "none", stroke: "currentColor", stroke_width: "2", stroke_linecap: "round", stroke_linejoin: "round", view_box: "0 0 24 24",
            polyline { points: "20 6 9 17 4 12" }
        }
    }
}

#[component]
pub fn CopyIcon(#[props(default = "w-4 h-4".to_string())] class: String) -> Element {
    rsx! {
        svg { class: "{class}", fill: "none", stroke: "currentColor", stroke_width: "2", stroke_linecap: "round", stroke_linejoin: "round", view_box: "0 0 24 24",
            rect { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }
            path { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }
        }
    }
}

#[component]
pub fn PlayIcon(#[props(default = "w-4 h-4".to_string())] class: String) -> Element {
    rsx! {
        svg { class: "{class}", fill: "currentColor", view_box: "0 0 24 24",
            polygon { points: "5 3 19 12 5 21 5 3" }
        }
    }
}

#[component]
pub fn PauseIcon(#[props(default = "w-4 h-4".to_string())] class: String) -> Element {
    rsx! {
        svg { class: "{class}", fill: "currentColor", view_box: "0 0 24 24",
            rect { x: "6", y: "4", width: "4", height: "16" }
            rect { x: "14", y: "4", width: "4", height: "16" }
        }
    }
}

#[component]
pub fn SkipForwardIcon(#[props(default = "w-4 h-4".to_string())] class: String) -> Element {
    rsx! {
        svg { class: "{class}", fill: "currentColor", view_box: "0 0 24 24",
            polygon { points: "5 4 15 12 5 20 5 4" }
            line { x1: "19", y1: "5", x2: "19", y2: "19", stroke: "currentColor", stroke_width: "2" }
        }
    }
}

#[component]
pub fn RotateCcwIcon(#[props(default = "w-4 h-4".to_string())] class: String) -> Element {
    rsx! {
        svg { class: "{class}", fill: "none", stroke: "currentColor", stroke_width: "2", stroke_linecap: "round", stroke_linejoin: "round", view_box: "0 0 24 24",
            path { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }
            path { d: "M3 3v5h5" }
        }
    }
}

#[component]
pub fn TrashIcon(#[props(default = "w-4 h-4".to_string())] class: String) -> Element {
    rsx! {
        svg { class: "{class}", fill: "none", stroke: "currentColor", stroke_width: "2", stroke_linecap: "round", stroke_linejoin: "round", view_box: "0 0 24 24",
            polyline { points: "3 6 5 6 21 6" }
            path { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }
        }
    }
}

#[component]
pub fn SparklesIcon(#[props(default = "w-4 h-4".to_string())] class: String) -> Element {
    rsx! {
        svg { class: "{class}", fill: "none", stroke: "currentColor", stroke_width: "2", stroke_linecap: "round", stroke_linejoin: "round", view_box: "0 0 24 24",
            path { d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" }
        }
    }
}

#[component]
pub fn SearchIcon(#[props(default = "w-4 h-4".to_string())] class: String) -> Element {
    rsx! {
        svg { class: "{class}", fill: "none", stroke: "currentColor", stroke_width: "2", stroke_linecap: "round", stroke_linejoin: "round", view_box: "0 0 24 24",
            circle { cx: "11", cy: "11", r: "8" }
            line { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }
        }
    }
}

#[component]
pub fn MenuIcon(#[props(default = "w-4 h-4".to_string())] class: String) -> Element {
    rsx! {
        svg { class: "{class}", fill: "none", stroke: "currentColor", stroke_width: "2", stroke_linecap: "round", stroke_linejoin: "round", view_box: "0 0 24 24",
            line { x1: "4", y1: "12", x2: "20", y2: "12" }
            line { x1: "4", y1: "6", x2: "20", y2: "6" }
            line { x1: "4", y1: "18", x2: "20", y2: "18" }
        }
    }
}

#[component]
pub fn CloseIcon(#[props(default = "w-4 h-4".to_string())] class: String) -> Element {
    rsx! {
        svg { class: "{class}", fill: "none", stroke: "currentColor", stroke_width: "2", stroke_linecap: "round", stroke_linejoin: "round", view_box: "0 0 24 24",
            line { x1: "18", y1: "6", x2: "6", y2: "18" }
            line { x1: "6", y1: "6", x2: "18", y2: "18" }
        }
    }
}

#[component]
pub fn CornerDownLeftIcon(#[props(default = "w-4 h-4".to_string())] class: String) -> Element {
    rsx! {
        svg { class: "{class}", fill: "none", stroke: "currentColor", stroke_width: "2", stroke_linecap: "round", stroke_linejoin: "round", view_box: "0 0 24 24",
            polyline { points: "9 10 4 15 9 20" }
            path { d: "M20 4v7a4 4 0 0 1-4 4H4" }
        }
    }
}


#[component]
pub fn SunIcon(#[props(default = "w-4 h-4".to_string())] class: String) -> Element {
    rsx! {
        svg { class: "{class}", fill: "none", stroke: "currentColor", stroke_width: "2", stroke_linecap: "round", stroke_linejoin: "round", view_box: "0 0 24 24",
            circle { cx: "12", cy: "12", r: "5" }
            line { x1: "12", y1: "1", x2: "12", y2: "3" }
            line { x1: "12", y1: "21", x2: "12", y2: "23" }
            line { x1: "4.22", y1: "4.22", x2: "5.64", y2: "5.64" }
            line { x1: "18.36", y1: "18.36", x2: "19.78", y2: "19.78" }
            line { x1: "1", y1: "12", x2: "3", y2: "12" }
            line { x1: "21", y1: "12", x2: "23", y2: "12" }
            line { x1: "4.22", y1: "19.78", x2: "5.64", y2: "18.36" }
            line { x1: "18.36", y1: "5.64", x2: "19.78", y2: "4.22" }
        }
    }
}

#[component]
pub fn MoonIcon(#[props(default = "w-4 h-4".to_string())] class: String) -> Element {
    rsx! {
        svg { class: "{class}", fill: "none", stroke: "currentColor", stroke_width: "2", stroke_linecap: "round", stroke_linejoin: "round", view_box: "0 0 24 24",
            path { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }
        }
    }
}
