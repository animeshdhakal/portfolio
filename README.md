# Animesh Dhakal // Portfolio

Personal systems engineering portfolio website built with **Rust**, **Dioxus**, and **WebAssembly**.

## Tech Stack
- **Framework:** [Dioxus 0.6](https://dioxuslabs.com/) (Web feature)
- **Compilation Target:** `wasm32-unknown-unknown`
- **Build & Bundle:** [Trunk](https://trunk-rs.github.io/trunk/)
- **Styling:** Tailwind CSS + JetBrains Mono / Inter typography

## Development

Make sure the WebAssembly target is installed:
```bash
rustup target add wasm32-unknown-unknown
```

Install Trunk:
```bash
brew install trunk
```

Run local development server:
```bash
trunk serve
```
Open [http://127.0.0.1:8080](http://127.0.0.1:8080) in your browser.

## Production Build

```bash
trunk build --release
```
The optimized static distribution will be generated in `dist/`.
