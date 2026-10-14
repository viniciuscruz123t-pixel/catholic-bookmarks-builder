#!/bin/bash
# Setup script: instala o Agent Reach e as ferramentas de que a skill depende.
set -e

# CLI do Agent Reach (versão fixa)
pip install -q "git+https://github.com/Panniantong/Agent-Reach.git@v1.5.0"

# yt-dlp: legendas e informações do YouTube
pip install -q yt-dlp
mkdir -p ~/.config/yt-dlp
grep -qxF -- '--js-runtimes node' ~/.config/yt-dlp/config 2>/dev/null \
  || echo '--js-runtimes node' >> ~/.config/yt-dlp/config

# mcporter + Exa: busca na web (requer mcp.exa.ai liberado na rede)
npm install -g mcporter@0.9.0
mcporter config add exa https://mcp.exa.ai/mcp --scope home || true
