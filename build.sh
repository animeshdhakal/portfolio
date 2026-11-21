#!/usr/bin/env bash
set -e

echo "==> Setting up Trunk binary..."
if ! command -v trunk &> /dev/null; then
  curl -sL https://github.com/trunk-rs/trunk/releases/download/v0.22.2/trunk-x86_64-unknown-linux-gnu.tar.gz | tar -xzf -
  export PATH="$PWD:$PATH"
fi

echo "==> Adding wasm32-unknown-unknown target..."
rustup target add wasm32-unknown-unknown

echo "==> Building with Trunk..."
trunk build --release
echo "==> Build completed successfully!"
