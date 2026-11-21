#!/usr/bin/env bash
set -e

# 1. Ensure Rust and wasm32 target are available
if ! command -v rustup &> /dev/null; then
  echo "==> Installing Rust toolchain and wasm32 target..."
  curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y --default-toolchain stable --target wasm32-unknown-unknown
  source "$HOME/.cargo/env" || export PATH="$HOME/.cargo/bin:$PATH"
else
  echo "==> Adding wasm32-unknown-unknown target..."
  rustup target add wasm32-unknown-unknown
fi

export PATH="$HOME/.cargo/bin:$PATH"

# 2. Ensure Trunk binary is available
if ! command -v trunk &> /dev/null; then
  echo "==> Downloading standalone Trunk binary..."
  curl -sL https://github.com/trunk-rs/trunk/releases/download/v0.22.2/trunk-x86_64-unknown-linux-gnu.tar.gz | tar -xzf -
  export PATH="$PWD:$PATH"
fi

echo "==> Building production release bundle with Trunk..."
trunk build --release
echo "==> Build completed successfully!"
