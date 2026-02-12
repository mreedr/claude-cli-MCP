# Introduction

Welcome to the **@repo/sdk** documentation.

This SDK is built with TypeScript and published from this monorepo. The docs site runs on VitePress and hot-reloads when you change the library source in `packages/sdk`.

## What's inside

- **@repo/sdk** – The main TypeScript SDK package
- Shared **@repo/tsconfig** and **@repo/eslint-config** for consistent tooling

- **[Running as MCP Server](/mcp-server)** – Expose the SDK as an MCP server so agents (Cursor, Claude Desktop, etc.) can call it as tools.

- **Installation** – Clone from [GitHub](https://github.com/mreedr/claude-cli-MCP), run `pnpm run build`, then configure Cursor. See [Running as MCP Server](/mcp-server#installation-from-source) for full steps.

Navigate to [Getting Started](/getting-started) to see the SDK in action, or [Running as MCP Server](/mcp-server) to use it from an MCP host.